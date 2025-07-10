document.addEventListener('DOMContentLoaded', () => {
    const departureForm = document.getElementById('add-departure-form');
    const arrivalForm = document.getElementById('add-arrival-form');
    const departuresTableBody = document.getElementById('departures-table-body');
    const arrivalsTableBody = document.getElementById('arrivals-table-body');

    const DEPARTURES_KEY = 'trainDepartures';
    const ARRIVALS_KEY = 'trainArrivals';

    let departures = JSON.parse(localStorage.getItem(DEPARTURES_KEY)) || [];
    let arrivals = JSON.parse(localStorage.getItem(ARRIVALS_KEY)) || [];

    let editMode = null; // Stores { type: 'departure'/'arrival', index: number } when editing

    // Function to save data to localStorage
    const saveData = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    // Function to render table rows
    const renderTable = (tableBody, dataArray, type) => {
        tableBody.innerHTML = ''; // Clear existing rows
        if (!dataArray) return;

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
            editButton.type = 'button'; // Prevent form submission if it were inside a form
            editButton.addEventListener('click', () => populateFormForEdit(index, type));
            actionsCell.appendChild(editButton);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn', 'action-btn');
            removeButton.type = 'button';
            removeButton.addEventListener('click', () => removeItem(index, type));
            actionsCell.appendChild(removeButton);
        });
    };

    // Function to populate form for editing an existing item
    const populateFormForEdit = (index, type) => {
        editMode = { type, index };
        const item = type === 'departure' ? departures[index] : arrivals[index];
        const form = type === 'departure' ? departureForm : arrivalForm;

        form.trainNo.value = item.trainNo;
        form.trainName.value = item.trainName;
        form.scheduledTime.value = item.scheduledTime;
        form.expectedTime.value = item.expectedTime;
        form.status.value = item.status;
        form.platformNo.value = item.platformNo;

        form.querySelector('button[type="submit"]').textContent = 'Update Entry';
        form.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll form into view for better UX
    };

    // Function to reset form fields and edit mode
    const resetFormAndEditMode = (form) => {
        form.reset();
        // Set button text back based on which form it is
        if (form.id === 'add-departure-form') {
            form.querySelector('button[type="submit"]').textContent = 'Add Departure';
        } else if (form.id === 'add-arrival-form') {
            form.querySelector('button[type="submit"]').textContent = 'Add Arrival';
        }
        editMode = null;
    };

    // Unified handler for form submissions (both add and update)
    const handleSubmit = (event, type) => {
        event.preventDefault();
        const form = event.target;
        const trainNo = form.trainNo.value;
        const trainName = form.trainName.value;
        const scheduledTimeValue = form.scheduledTime.value;
        const expectedTimeValue = form.expectedTime.value;
        let statusValue = form.status.value; // Get status from dropdown first
        const platformNo = form.platformNo.value;

        // Automatic status calculation (only if not manually set to Departed/Arrived for logic)
        // If status is already 'Departed' or 'Arrived', user might be editing it, so respect that.
        const nonTimeBasedStatuses = type === 'departure' ? ['Departed'] : ['Arrived'];
        if (!nonTimeBasedStatuses.includes(statusValue)) {
            if (expectedTimeValue && scheduledTimeValue) {
                if (expectedTimeValue > scheduledTimeValue) {
                    statusValue = "Delayed";
                } else if (expectedTimeValue === scheduledTimeValue) {
                    statusValue = "On Time";
                }
                // If expected < scheduled, it's "On Time" or early.
                // If user manually selected "Cancelled" and then filled times, this logic might override.
                // This is a design choice: auto-calculate if times are present, unless it's a final state.
            } else if (!expectedTimeValue && scheduledTimeValue) {
                statusValue = "Cancelled";
            }
        }


        const entryData = {
            trainNo,
            trainName,
            scheduledTime: scheduledTimeValue,
            expectedTime: expectedTimeValue,
            status: statusValue,
            platformNo
        };

        let currentArray = type === 'departure' ? departures : arrivals;
        let tableBody = type === 'departure' ? departuresTableBody : arrivalsTableBody;
        const storageKey = type === 'departure' ? DEPARTURES_KEY : ARRIVALS_KEY;

        if (editMode && editMode.type === type) { // Update existing item
            currentArray[editMode.index] = entryData;
        } else { // Add new item
            currentArray.push(entryData);
        }

        saveData(storageKey, currentArray);
        renderTable(tableBody, currentArray, type);
        resetFormAndEditMode(form);
    };

    // Function to remove an item
    const removeItem = (index, type) => {
        const formToReset = type === 'departure' ? departureForm : arrivalForm;

        // If removing the item currently being edited, reset the form as well
        if (editMode && editMode.type === type && editMode.index === index) {
            resetFormAndEditMode(formToReset);
        }

        let currentArray = type === 'departure' ? departures : arrivals;
        let tableBody = type === 'departure' ? departuresTableBody : arrivalsTableBody;
        const storageKey = type === 'departure' ? DEPARTURES_KEY : ARRIVALS_KEY;

        currentArray.splice(index, 1);
        saveData(storageKey, currentArray);
        renderTable(tableBody, currentArray, type);

        // Adjust editMode.index if an item before the currently edited item was removed
        if (editMode && editMode.type === type && index < editMode.index) {
            editMode.index--;
        }
    };

    // Event Listeners for form submissions
    departureForm.addEventListener('submit', (event) => handleSubmit(event, 'departure'));
    arrivalForm.addEventListener('submit', (event) => handleSubmit(event, 'arrival'));

    // Initial render of tables on page load
    renderTable(departuresTableBody, departures, 'departure');
    renderTable(arrivalsTableBody, arrivals, 'arrival');
});
