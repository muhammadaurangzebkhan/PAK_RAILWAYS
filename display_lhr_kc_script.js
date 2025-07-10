document.addEventListener('DOMContentLoaded', () => {
    const departuresTableBody = document.getElementById('lhr-kc-departures-body');
    const arrivalsTableBody = document.getElementById('kc-lhr-arrivals-body');
    const LOCAL_STORAGE_KEY = 'trainAppSchedules';

    const renderSchedules = () => {
        const allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

        const lhrKcDepartures = allSchedules.lhr_kc_departure || [];
        const kcLhrArrivals = allSchedules.kc_lhr_arrival || [];

        populateTable(departuresTableBody, lhrKcDepartures, 'lhr_kc_departure');
        populateTable(arrivalsTableBody, kcLhrArrivals, 'kc_lhr_arrival');
    };

    const populateTable = (tableBody, dataArray, routeKey) => {
        tableBody.innerHTML = ''; // Clear existing rows

        if (dataArray.length === 0) {
            const row = tableBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 7; // Number of columns in the table
            cell.textContent = 'No schedule data available.';
            cell.style.textAlign = 'center';
            return;
        }

        dataArray.forEach((item, index) => {
            const row = tableBody.insertRow();
            row.insertCell().textContent = item.trainNo;
            row.insertCell().textContent = item.trainName;
            row.insertCell().textContent = item.scheduledTime;
            row.insertCell().textContent = item.expectedTime;
            row.insertCell().textContent = item.status;
            row.insertCell().textContent = item.platformNo;

            const actionsCell = row.insertCell();
            actionsCell.classList.add('actions-cell'); // For styling

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit-btn', 'action-btn');
            editButton.type = 'button';
            editButton.addEventListener('click', () => editItemPrompt(index, routeKey));
            actionsCell.appendChild(editButton);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn', 'action-btn');
            removeButton.type = 'button';
            removeButton.addEventListener('click', () => removeItem(index, routeKey));
            actionsCell.appendChild(removeButton);
        });
    };

    const editItemPrompt = (indexToEdit, routeKey) => {
        const allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
        if (!allSchedules[routeKey] || !allSchedules[routeKey][indexToEdit]) {
            alert("Error: Item not found for editing.");
            return;
        }

        const item = allSchedules[routeKey][indexToEdit];

        const newTrainNo = prompt("Enter new Train No:", item.trainNo);
        if (newTrainNo === null) { alert("Edit cancelled."); return; }

        const newTrainName = prompt("Enter new Train Name:", item.trainName);
        if (newTrainName === null) { alert("Edit cancelled."); return; }

        const newScheduledTime = prompt("Enter new Scheduled Time (HH:MM):", item.scheduledTime);
        if (newScheduledTime === null) { alert("Edit cancelled."); return; }

        const newExpectedTime = prompt("Enter new Expected Time (HH:MM):", item.expectedTime);
        // Allow empty expected time, so don't check for null strictly for cancellation here unless it's the only way

        // Status options need to be presented or validated if changed via prompt
        // For simplicity, we'll allow free text for status via prompt, or keep existing if prompt is empty
        const currentStatusOptionsArray = routeKey.includes('_departure') ?
            ["On Time", "Delayed", "Cancelled", "Departed"] :
            ["On Time", "Delayed", "Cancelled", "Arrived"];
        const currentStatusOptionsString = currentStatusOptionsArray.join(", ");

        let newStatus;
        let validInput = false;
        while (!validInput) {
            newStatus = prompt(`Enter new Status (${currentStatusOptionsString}):`, item.status);
            if (newStatus === null) { alert("Edit cancelled."); return; } // User cancelled prompt
            if (newStatus.trim() === "" || currentStatusOptionsArray.map(s => s.toLowerCase()).includes(newStatus.trim().toLowerCase())) {
                validInput = true;
            } else {
                alert(`Invalid status. Please enter one of: ${currentStatusOptionsString}`);
            }
        }
        if (newStatus.trim() === "") newStatus = item.status; // Keep old if explicitly empty after validation pass (e.g. user deleted content and pressed OK)

        const newPlatformNo = prompt("Enter new Platform No:", item.platformNo);
        if (newPlatformNo === null) { alert("Edit cancelled."); return; }

        // Automatic status calculation logic (similar to master_script.js)
        let calculatedStatus = newStatus; // Start with the (potentially new) status from prompt
        const isDeparture = routeKey.endsWith('_departure');
        const finalStatuses = isDeparture ? ['Departed', 'Cancelled'] : ['Arrived', 'Cancelled'];

        if (!finalStatuses.includes(calculatedStatus) || (calculatedStatus === "Cancelled" && newExpectedTime)) {
            if (newExpectedTime && newScheduledTime) {
                if (newExpectedTime > newScheduledTime) {
                    calculatedStatus = "Delayed";
                } else if (newExpectedTime === newScheduledTime) {
                    calculatedStatus = "On Time";
                } else { // expectedTimeValue < scheduledTimeValue
                    calculatedStatus = "On Time";
                }
            } else if (!newExpectedTime && newScheduledTime) {
                calculatedStatus = "Cancelled";
            }
        }
        // If user explicitly typed a final status (Departed/Arrived/Cancelled) and times don't contradict "Cancelled", keep it.
        // The logic above prioritizes time-based calculation unless a final status was input for `newStatus`.
        // If `newStatus` from prompt was a final one, and conditions for time-based override are not met, it should persist.
        // If `newStatus` was not final, `calculatedStatus` will hold the time-based one.

        const updatedEntry = {
            trainNo: newTrainNo,
            trainName: newTrainName,
            scheduledTime: newScheduledTime,
            expectedTime: newExpectedTime || "", // Ensure empty string if prompt was empty for expectedTime
            status: calculatedStatus, // Use the auto-calculated or user-overridden status
            platformNo: newPlatformNo
        };

        allSchedules[routeKey][indexToEdit] = updatedEntry;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allSchedules));
        renderSchedules();
        alert(`${routeKey.replace(/_/g, ' ')} entry updated successfully.`);
    };

    const removeItem = (indexToRemove, routeKey) => {
        const allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

        if (allSchedules[routeKey] && allSchedules[routeKey][indexToRemove]) {
            allSchedules[routeKey].splice(indexToRemove, 1);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allSchedules));
            renderSchedules();
            alert(`${routeKey.replace(/_/g, ' ')} entry removed successfully.`);
        } else {
            alert(`Error: Could not find the entry to remove for ${routeKey}.`);
        }
    };

    renderSchedules();
    window.addEventListener('storage', (event) => {
        if (event.key === LOCAL_STORAGE_KEY) {
            renderSchedules();
        }
    });
});
