// Data for Train Number, Name, and Scheduled Time dropdowns
const lhrKcDepartureOptions = [
    { trainNo: "38 DN", trainName: "Fareed Express", scheduledTime: "06:00" }, { trainNo: "28 DN", trainName: "Shalimar Express", scheduledTime: "07:30" },
    { trainNo: "02 DN", trainName: "Khyber Mail", scheduledTime: "07:55" }, { trainNo: "10_DN", trainName: "Allma Iqbal Express", scheduledTime: "12:10" },
    { trainNo: "08 DN", trainName: "Tezgam Express", scheduledTime: "13:45" }, { trainNo: "42 DN", trainName: "Karakarm Express", scheduledTime: "15:00" },
    { trainNo: "34 DN", trainName: "Pak Business Express", scheduledTime: "16:30" }, { trainNo: "16 DN", trainName: "Karachi Express", scheduledTime: "18:00" },
    { trainNo: "14 DN", trainName: "Awam Express", scheduledTime: "18:30" }, { trainNo: "06 DN", trainName: "Green Line Express", scheduledTime: "20:50" },
    { trainNo: "44 DN", trainName: "Shah hussain Express", scheduledTime: "21:00" }
];
const kcLhrArrivalOptions = [
    { trainNo: "27 UP", trainName: "Shalimar Express", scheduledTime: "02:55" }, { trainNo: "13 UP", trainName: "Awam Express", scheduledTime: "07:25" },
    { trainNo: "41 UP", trainName: "Karakarm Express", scheduledTime: "10:20" }, { trainNo: "33 UP", trainName: "Pak Business Express", scheduledTime: "10:20" },
    { trainNo: "09 UP", trainName: "Allama Iqbal Express", scheduledTime: "12:30" }, { trainNo: "15 UP", trainName: "Karachi Express", scheduledTime: "13:00" },
    { trainNo: "07 UP", trainName: "Tezgam Express", scheduledTime: "14:00" }, { trainNo: "05_UP", trainName: "Green Line Express", scheduledTime: "15:35" },
    { trainNo: "43 UP", trainName: "Shah Hussain Express", scheduledTime: "15:35" }, { trainNo: "01 UP", trainName: "Khyber Mail", scheduledTime: "20:30" },
    { trainNo: "37 UP", trainName: "Fareed Express", scheduledTime: "22:00" }
];
const lhrRwpDepartureOptions = [
    { trainNo: "105 UP", trainName: "Rawal Express", scheduledTime: "00:30" }, { trainNo: "101UP", trainName: "Subak Rafftar Express", scheduledTime: "07:00" },
    { trainNo: "13 UP", trainName: "Awam Express", scheduledTime: "08:00" }, { trainNo: "39 UP", trainName: "Jaffar Express", scheduledTime: "10:15" },
    { trainNo: "07 UP", trainName: "TezgamExpress", scheduledTime: "14:30" }, { trainNo: "05 UP", trainName: "Green Line Express", scheduledTime: "16:10" },
    { trainNo: "103 UP", trainName: "Subak Kharam Express", scheduledTime: "16:30" }, { trainNo: "107 UP", trainName: "Islamabad Non-Stop", scheduledTime: "18:00" },
    { trainNo: "01 UP", trainName: "Khyber Mail", scheduledTime: "21:00" }
];
const rwpLhrArrivalOptions = [
    { trainNo: "106 DN", trainName: "Rawal Express", scheduledTime: "05:00" }, { trainNo: "02 DN", trainName: "Khyber Mail", scheduledTime: "07:15" },
    { trainNo: "102 DN", trainName: "Subak Rafftar", scheduledTime: "11:50" }, { trainNo: "08 DN", trainName: "Tezgam", scheduledTime: "13:15" },
    { trainNo: "40 DN", trainName: "Jaffar Express", scheduledTime: "16:10" }, { trainNo: "14 DN", trainName: "Awam Express", scheduledTime: "18:20" },
    { trainNo: "06 DN", trainName: "Green Line", scheduledTime: "20:10" }, { trainNo: "104 DN", trainName: "Subak Kharam", scheduledTime: "21:35" },
    { trainNo: "108 DN", trainName: "Islamabad Non Stop", scheduledTime: "22:30" }
];
const lhrQtaDepartureOptions = [{ trainNo: "39 UP", trainName: "Jaffar Express", scheduledTime: "09:40" }];
const qtaLhrArrivalOptions = [{ trainNo: "40 DN", trainName: "Jaffar Express", scheduledTime: "16:45" }];
const lhrMianwaliDepartureOptions = [{ trainNo: "147 UP", trainName: "Mari Indux Express", scheduledTime: "05:30" }];
const mianwaliLhrArrivalOptions = [{ trainNo: "148 DN", trainName: "Mari Indux Express", scheduledTime: "18:15" }]; // Assuming a time for Mianwali-LHR
const lhrNwlDepartureOptions = [
    { trainNo: "171_UP", trainName: "Sialkot Express", scheduledTime: "05:00" }, { trainNo: "211_UP", trainName: "Narowal Passenger", scheduledTime: "07:15" },
    { trainNo: "09_UP", trainName: "Allama Iqbal Express", scheduledTime: "13:00" }, { trainNo: "125_UP", trainName: "Lasani Express", scheduledTime: "15:45" },
    { trainNo: "209_UP", trainName: "Faiz Ahmed Faiz", scheduledTime: "19:30" }
];
const nwlLhrArrivalOptions = [
    { trainNo: "210_DN", trainName: "Faiz Ahmed Faiz", scheduledTime: "05:00" }, { trainNo: "126_DN", trainName: "Lasani Express", scheduledTime: "07:00" },
    { trainNo: "10_DN", trainName: "Allama Iqbal Express", scheduledTime: "11:35" }, { trainNo: "212 DN", trainName: "Narowal Passenger", scheduledTime: "17:00" },
    { trainNo: "172 DN", trainName: "Sialkot Express", scheduledTime: "21:50" }
];
const lhrFsldDepartureOptions = [
    { trainNo: "112 DN", trainName: "Baddar Express", scheduledTime: "09:30" }, { trainNo: "114 DN", trainName: "Ghuri Express", scheduledTime: "19:00" }
];
const fsldLhrArrivalOptions = [
    { trainNo: "111_UP", trainName: "Baddar Express", scheduledTime: "08:35" }, { trainNo: "113_UP", trainName: "Ghuri Express", scheduledTime: "18:10" }
];
const lhrPshDepartureOptions = [ /* Placeholder - Data needs to be provided */ ];
const pshLhrArrivalOptions = [ /* Placeholder - Data needs to be provided */ ];

// Map route keys (used in local storage) to their data options and element prefixes
const routeConfigs = {
    'lhr_kc_departure': { options: lhrKcDepartureOptions, prefix: 'lhr-kc-dep' },
    'kc_lhr_arrival': { options: kcLhrArrivalOptions, prefix: 'kc-lhr-arr' },
    'lhr_psh_departure': { options: lhrPshDepartureOptions, prefix: 'lhr-psh-dep' },
    'psh_lhr_arrival': { options: pshLhrArrivalOptions, prefix: 'psh-lhr-arr' },
    'lhr_fsld_departure': { options: lhrFsldDepartureOptions, prefix: 'lhr-fsld-dep' },
    'fsld_lhr_arrival': { options: fsldLhrArrivalOptions, prefix: 'fsld-lhr-arr' },
    'lhr_nwl_departure': { options: lhrNwlDepartureOptions, prefix: 'lhr-nwl-dep' },
    'nwl_lhr_arrival': { options: nwlLhrArrivalOptions, prefix: 'nwl-lhr-arr' },
    'lhr_rwp_departure': { options: lhrRwpDepartureOptions, prefix: 'lhr-rwp-dep' },
    'rwp_lhr_arrival': { options: rwpLhrArrivalOptions, prefix: 'rwp-lhr-arr' },
    'lhr_mianwali_departure': { options: lhrMianwaliDepartureOptions, prefix: 'lhr-mianwali-dep' },
    'mianwali_lhr_arrival': { options: mianwaliLhrArrivalOptions, prefix: 'mianwali-lhr-arr' },
    'lhr_qta_departure': { options: lhrQtaDepartureOptions, prefix: 'lhr-qta-dep' },
    'qta_lhr_arrival': { options: qtaLhrArrivalOptions, prefix: 'qta-lhr-arr' }
};

document.addEventListener('DOMContentLoaded', () => {
    const formsContainer = document.querySelector('.forms-container');
    const confirmationMessage = document.getElementById('confirmation-message');
    const LOCAL_STORAGE_KEY = 'trainAppSchedules';
    let currentEditDetails = null;

    const showConfirmation = (message, isError = false) => {
        confirmationMessage.textContent = message;
        confirmationMessage.style.backgroundColor = isError ? '#c0392b' : '#27ae60';
        confirmationMessage.style.display = 'block';
        setTimeout(() => { confirmationMessage.style.display = 'none'; }, 3000);
    };

    const resetFormDisplay = (formElement) => {
        if (!formElement) return;
        formElement.reset();
        const submitButton = formElement.querySelector('button[type="submit"]');
        const cancelButton = formElement.querySelector('.cancel-edit-btn');
        if (submitButton) {
            const formIdParts = formElement.id.replace('form-', '').split('-');
            if (formIdParts.length >= 3) {
                const readableRoute = `${formIdParts[0].toUpperCase()} - ${formIdParts[1].toUpperCase()} (${formIdParts[2] === 'dep' ? 'Departure' : 'Arrival'})`;
                submitButton.textContent = `Add ${readableRoute}`;
            } else {
                submitButton.textContent = 'Add Entry';
            }
        }
        if (cancelButton) cancelButton.style.display = 'none';

        // Reset display spans and hidden fields for the specific form
        const prefix = formElement.id.replace('form-', '');
        const trainNameDisplay = document.getElementById(`${prefix}-trainName-display`);
        const scheduledTimeDisplay = document.getElementById(`${prefix}-scheduledTime-display`);
        const hiddenTrainName = document.getElementById(`${prefix}-hidden-trainName`);
        const hiddenScheduledTime = document.getElementById(`${prefix}-hidden-scheduledTime`);

        if (trainNameDisplay) trainNameDisplay.textContent = '-';
        if (scheduledTimeDisplay) scheduledTimeDisplay.textContent = '-';
        if (hiddenTrainName) hiddenTrainName.value = '';
        if (hiddenScheduledTime) hiddenScheduledTime.value = '';

        const trainNoSelect = document.getElementById(`${prefix}-trainNo`);
        if (trainNoSelect && trainNoSelect.tagName === 'SELECT') trainNoSelect.value = "";

    };

    function populateTrainNoDropdown(selectElement, optionsArray) {
        if (!selectElement || !optionsArray) return;
        selectElement.innerHTML = '<option value="">-- Select Train No --</option>';
        optionsArray.forEach(train => {
            const option = document.createElement('option');
            option.value = train.trainNo;
            option.textContent = train.trainNo;
            selectElement.appendChild(option);
        });
    }

    function handleTrainNoChange(event) {
        const selectElement = event.target;
        const form = selectElement.closest('form');
        const prefix = form.id.replace('form-', '');

        const routeKeyFromFormId = `${prefix.split('-')[0]}_${prefix.split('-')[1]}_${prefix.split('-')[2] === 'dep' ? 'departure' : 'arrival'}`;
        const config = routeConfigs[routeKeyFromFormId];
        if (!config) return;

        const optionsArray = config.options;
        const trainNameDisplay = document.getElementById(`${prefix}-trainName-display`);
        const scheduledTimeDisplay = document.getElementById(`${prefix}-scheduledTime-display`);
        const hiddenTrainName = document.getElementById(`${prefix}-hidden-trainName`);
        const hiddenScheduledTime = document.getElementById(`${prefix}-hidden-scheduledTime`);

        const selectedTrainNo = selectElement.value;
        const selectedTrainData = optionsArray.find(train => train.trainNo === selectedTrainNo);

        if (selectedTrainData) {
            if(trainNameDisplay) trainNameDisplay.textContent = selectedTrainData.trainName;
            if(scheduledTimeDisplay) scheduledTimeDisplay.textContent = selectedTrainData.scheduledTime;
            if(hiddenTrainName) hiddenTrainName.value = selectedTrainData.trainName;
            if(hiddenScheduledTime) hiddenScheduledTime.value = selectedTrainData.scheduledTime;
        } else {
            if(trainNameDisplay) trainNameDisplay.textContent = '-';
            if(scheduledTimeDisplay) scheduledTimeDisplay.textContent = '-';
            if(hiddenTrainName) hiddenTrainName.value = '';
            if(hiddenScheduledTime) hiddenScheduledTime.value = '';
        }
    }

    // Initialize all dropdowns and attach change listeners
    for (const routeKey in routeConfigs) {
        const config = routeConfigs[routeKey];
        const selectElement = document.getElementById(`${config.prefix}-trainNo`);
        if (selectElement && selectElement.tagName === 'SELECT') { // Ensure it's a select
            populateTrainNoDropdown(selectElement, config.options);
            selectElement.addEventListener('change', handleTrainNoChange);
        }
    }

    const populateFormForMasterEdit = (routeKey, index) => {
        const config = routeConfigs[routeKey];
        if (!config) {
            showConfirmation("Error: Invalid route configuration for edit.", true);
            return;
        }
        const targetFormId = `form-${config.prefix}`;

        if (currentEditDetails && currentEditDetails.formId && currentEditDetails.formId !== targetFormId) {
            const currentlyEditingForm = document.getElementById(currentEditDetails.formId);
            if (currentlyEditingForm) resetFormDisplay(currentlyEditingForm);
        }

        let allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
        const item = allSchedules[routeKey] && allSchedules[routeKey][index];

        if (!item) {
            showConfirmation("Error: Could not find item to edit.", true);
            currentEditDetails = null; return;
        }

        const formElement = document.getElementById(targetFormId);
        if (!formElement) {
            showConfirmation(`Error: Could not find form with ID ${targetFormId}.`, true);
            currentEditDetails = null; return;
        }
        currentEditDetails = { routeKey, index, formId: targetFormId };

        const trainNoSelect = document.getElementById(`${config.prefix}-trainNo`);
        if (trainNoSelect && trainNoSelect.tagName === 'SELECT') {
            trainNoSelect.value = item.trainNo;
            trainNoSelect.dispatchEvent(new Event('change')); // Trigger change to update displays
        } else { // Fallback for forms not yet converted (though all should be)
            document.getElementById(`${config.prefix}-trainNo`).value = item.trainNo;
            const trainNameField = document.getElementById(`${config.prefix}-trainName`); // Assuming text input if not span
            const scheduledTimeField = document.getElementById(`${config.prefix}-scheduledTime`);
            if(trainNameField) trainNameField.value = item.trainName;
            if(scheduledTimeField) scheduledTimeField.value = item.scheduledTime;
        }

        document.getElementById(`${config.prefix}-expectedTime`).value = item.expectedTime;
        document.getElementById(`${config.prefix}-status`).value = item.status;
        document.getElementById(`${config.prefix}-platformNo`).value = item.platformNo;

        formElement.querySelector('button[type="submit"]').textContent = 'Update Entry';
        const cancelButton = formElement.querySelector('.cancel-edit-btn');
        if (cancelButton) cancelButton.style.display = 'inline-block';
        formElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    if (formsContainer) {
        formsContainer.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const submittedForm = this;
                const submittedFormId = submittedForm.id;
                const prefix = submittedFormId.replace('form-', '');
                const currentRouteKey = `${prefix.split('-')[0]}_${prefix.split('-')[1]}_${prefix.split('-')[2] === 'dep' ? 'departure' : 'arrival'}`;
                const config = routeConfigs[currentRouteKey];

                let trainNo, trainName, scheduledTimeValue;

                if (config) { // Form uses dropdown system
                    trainNo = document.getElementById(`${config.prefix}-trainNo`).value;
                    trainName = document.getElementById(`${config.prefix}-hidden-trainName`).value;
                    scheduledTimeValue = document.getElementById(`${config.prefix}-hidden-scheduledTime`).value;
                } else { // Should not happen if all forms are converted
                    trainNo = document.getElementById(`${prefix}-trainNo`).value;
                    trainName = document.getElementById(`${prefix}-trainName`).value;
                    scheduledTimeValue = document.getElementById(`${prefix}-scheduledTime`).value;
                }

                const expectedTimeValue = document.getElementById(`${prefix}-expectedTime`).value;
                let statusValue = document.getElementById(`${prefix}-status`).value;
                const platformNo = document.getElementById(`${prefix}-platformNo`).value;

                const isDeparture = currentRouteKey.endsWith('_departure');
                const finalStatuses = isDeparture ? ['Departed', 'Cancelled'] : ['Arrived', 'Cancelled'];

                if (!finalStatuses.includes(statusValue) || (statusValue === "Cancelled" && expectedTimeValue)) {
                    if (expectedTimeValue && scheduledTimeValue) {
                        if (expectedTimeValue > scheduledTimeValue) statusValue = "Late";
                        else if (expectedTimeValue < scheduledTimeValue) statusValue = "Before";
                        else statusValue = "On Time";
                    } else if (!expectedTimeValue && scheduledTimeValue) {
                        statusValue = "Cancelled";
                    }
                }

                const entryData = {
                    trainNo, trainName, scheduledTime: scheduledTimeValue,
                    expectedTime: expectedTimeValue, status: statusValue, platformNo
                };

                let allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

                if (currentEditDetails && currentEditDetails.formId === submittedFormId) {
                    if (allSchedules[currentEditDetails.routeKey] && allSchedules[currentEditDetails.routeKey][currentEditDetails.index] !== undefined) {
                        allSchedules[currentEditDetails.routeKey][currentEditDetails.index] = entryData;
                        const readableRouteKey = currentEditDetails.routeKey.toUpperCase().replace(/_/G, ' ').replace(' DEP ', ' (Departure) ').replace(' ARR ', ' (Arrival) ');
                        showConfirmation(`Entry for ${readableRouteKey} updated successfully!`);
                    } else {
                        showConfirmation("Error: Could not find item to update in storage.", true);
                    }
                    resetFormDisplay(submittedForm);
                    currentEditDetails = null;
                } else {
                    if (currentEditDetails && currentEditDetails.formId && currentEditDetails.formId !== submittedFormId) {
                         const activeEditForm = document.getElementById(currentEditDetails.formId);
                         if(activeEditForm) resetFormDisplay(activeEditForm);
                    }
                    currentEditDetails = null;

                    if (!allSchedules[currentRouteKey]) allSchedules[currentRouteKey] = [];
                    allSchedules[currentRouteKey].push(entryData);
                    const readableRouteKey = currentRouteKey.toUpperCase().replace(/_/G, ' ').replace(' DEP ', ' (Departure) ').replace(' ARR ', ' (Arrival) ');
                    showConfirmation(`Entry for ${readableRouteKey} added successfully!`);
                    resetFormDisplay(submittedForm); // Use consistent reset for all forms
                }
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allSchedules));
                displayAllDataOnMasterPage();
            });
        });
    }

    const renderMasterTable = (routeKey, containerId, entriesArray) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        let tableHTML = `
            <table>
                <thead><tr><th>Train No</th><th>Name</th><th>Scheduled</th><th>Expected</th><th>Status</th><th>Platform</th><th>Actions</th></tr></thead>
                <tbody>`;
        if (!entriesArray || entriesArray.length === 0) {
            tableHTML += `<tr><td colspan="7" style="text-align:center;">No data available.</td></tr>`;
        } else {
            entriesArray.forEach((item, index) => {
                tableHTML += `
                    <tr>
                        <td>${item.trainNo ? item.trainNo.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;") : ''}</td>
                        <td>${item.trainName ? item.trainName.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;") : ''}</td>
                        <td>${item.scheduledTime ? item.scheduledTime.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;") : ''}</td>
                        <td>${item.expectedTime ? item.expectedTime.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;") : ''}</td>
                        <td>${item.status ? item.status.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;") : ''}</td>
                        <td>${item.platformNo ? item.platformNo.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;") : ''}</td>
                        <td class="actions-cell">
                            <button type="button" class="action-btn edit-btn" data-routekey="${routeKey}" data-index="${index}">Edit</button>
                            <button type="button" class="action-btn remove-btn" data-routekey="${routeKey}" data-index="${index}">Delete</button>
                        </td>
                    </tr>`;
            });
        }
        tableHTML += `</tbody></table>`;
        container.innerHTML = tableHTML;
    };

    const displayAllDataOnMasterPage = () => {
        const allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
        for (const routeKey in routeConfigs) {
            const config = routeConfigs[routeKey];
            renderMasterTable(routeKey, `table-data-${config.prefix}`, allSchedules[routeKey] || []);
        }
    };

    const mainContentArea = document.querySelector('.forms-container');
    if (mainContentArea) {
        mainContentArea.addEventListener('click', function(event) {
            const target = event.target;
            if (target.classList.contains('remove-btn')) {
                const routeKey = target.dataset.routekey;
                const index = parseInt(target.dataset.index, 10);
                if (confirm(`Are you sure you want to delete this entry for ${routeKey.replace(/_/g, ' ')}?`)) {
                    let allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
                    if (allSchedules[routeKey] && allSchedules[routeKey][index] !== undefined) {
                        allSchedules[routeKey].splice(index, 1);
                        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allSchedules));
                        displayAllDataOnMasterPage();
                        showConfirmation(`Entry from ${routeKey.replace(/_/g, ' ')} deleted successfully.`);
                        if(currentEditDetails && currentEditDetails.routeKey === routeKey && currentEditDetails.index === index) {
                            const formToReset = document.getElementById(currentEditDetails.formId);
                            if(formToReset) resetFormDisplay(formToReset);
                            currentEditDetails = null;
                        } else if (currentEditDetails && currentEditDetails.routeKey === routeKey && index < currentEditDetails.index) {
                            currentEditDetails.index--;
                        }
                    } else {
                        showConfirmation(`Error: Could not find entry to delete for ${routeKey}.`, true);
                    }
                }
            } else if (target.classList.contains('edit-btn')) {
                const routeKey = target.dataset.routekey;
                const index = parseInt(target.dataset.index, 10);
                populateFormForMasterEdit(routeKey, index);
            } else if (target.classList.contains('cancel-edit-btn')) {
                const formElement = target.closest('form');
                 if (formElement) {
                    resetFormDisplay(formElement);
                    currentEditDetails = null;
                    showConfirmation("Edit cancelled.");
                }
            }
        });
    }

    displayAllDataOnMasterPage(); // Initial render of tables
});
