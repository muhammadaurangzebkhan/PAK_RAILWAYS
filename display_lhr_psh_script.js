document.addEventListener('DOMContentLoaded', () => {
    const departuresTableBody = document.getElementById('lhr-psh-departures-body');
    const arrivalsTableBody = document.getElementById('psh-lhr-arrivals-body');
    const LOCAL_STORAGE_KEY = 'trainAppSchedules';

    const renderSchedules = () => {
        const allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

        const departuresData = allSchedules.lhr_psh_departure || [];
        const arrivalsData = allSchedules.psh_lhr_arrival || [];

        populateTable(departuresTableBody, departuresData, 'lhr_psh_departure');
        populateTable(arrivalsTableBody, arrivalsData, 'psh_lhr_arrival');
    };

    const populateTable = (tableBody, dataArray, routeKey) => {
        tableBody.innerHTML = ''; // Clear existing rows

        if (dataArray.length === 0) {
            const row = tableBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 7; // Number of columns
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
            actionsCell.classList.add('actions-cell');

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
        if (newStatus.trim() === "") newStatus = item.status; // Keep old if explicitly empty

        const newPlatformNo = prompt("Enter new Platform No:", item.platformNo);
        if (newPlatformNo === null) { alert("Edit cancelled."); return; }

        let calculatedStatus = newStatus;
        const isDeparture = routeKey.endsWith('_departure');
        const finalStatuses = isDeparture ? ['Departed', 'Cancelled'] : ['Arrived', 'Cancelled'];

        if (!finalStatuses.includes(calculatedStatus) || (calculatedStatus === "Cancelled" && newExpectedTime)) {
            if (newExpectedTime && newScheduledTime) {
                if (newExpectedTime > newScheduledTime) calculatedStatus = "Delayed";
                else if (newExpectedTime === newScheduledTime) calculatedStatus = "On Time";
                else calculatedStatus = "On Time";
            } else if (!newExpectedTime && newScheduledTime) {
                calculatedStatus = "Cancelled";
            }
        }

        const updatedEntry = {
            trainNo: newTrainNo, trainName: newTrainName, scheduledTime: newScheduledTime,
            expectedTime: newExpectedTime || "", status: calculatedStatus, platformNo: newPlatformNo
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
