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
const mianwaliLhrArrivalOptions = [{ trainNo: "148 DN", trainName: "Mari Indux Express", scheduledTime: "18:15" }];
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
const lhrPshDepartureOptions = [ /* Data still needed */ ];
const pshLhrArrivalOptions = [ /* Data still needed */ ];

const routeConfigs = {
    'lhr_kc_departure': { options: lhrKcDepartureOptions, prefix: 'lhr-kc-dep', formId: 'form-lhr-kc-dep' },
    'kc_lhr_arrival': { options: kcLhrArrivalOptions, prefix: 'kc-lhr-arr', formId: 'form-kc-lhr-arr' },
    'lhr_psh_departure': { options: lhrPshDepartureOptions, prefix: 'lhr-psh-dep', formId: 'form-lhr-psh-dep' },
    'psh_lhr_arrival': { options: pshLhrArrivalOptions, prefix: 'psh-lhr-arr', formId: 'form-psh-lhr-arr' },
    'lhr_fsld_departure': { options: lhrFsldDepartureOptions, prefix: 'lhr-fsld-dep', formId: 'form-lhr-fsld-dep' },
    'fsld_lhr_arrival': { options: fsldLhrArrivalOptions, prefix: 'fsld-lhr-arr', formId: 'form-fsld-lhr-arr' },
    'lhr_nwl_departure': { options: lhrNwlDepartureOptions, prefix: 'lhr-nwl-dep', formId: 'form-lhr-nwl-dep' },
    'nwl_lhr_arrival': { options: nwlLhrArrivalOptions, prefix: 'nwl-lhr-arr', formId: 'form-nwl-lhr-arr' },
    'lhr_rwp_departure': { options: lhrRwpDepartureOptions, prefix: 'lhr-rwp-dep', formId: 'form-lhr-rwp-dep' },
    'rwp_lhr_arrival': { options: rwpLhrArrivalOptions, prefix: 'rwp-lhr-arr', formId: 'form-rwp-lhr-arr' },
    'lhr_mianwali_departure': { options: lhrMianwaliDepartureOptions, prefix: 'lhr-mianwali-dep', formId: 'form-lhr-mianwali-dep' },
    'mianwali_lhr_arrival': { options: mianwaliLhrArrivalOptions, prefix: 'mianwali-lhr-arr', formId: 'form-mianwali-lhr-arr' },
    'lhr_qta_departure': { options: lhrQtaDepartureOptions, prefix: 'lhr-qta-dep', formId: 'form-lhr-qta-dep' },
    'qta_lhr_arrival': { options: qtaLhrArrivalOptions, prefix: 'qta-lhr-arr', formId: 'form-qta-lhr-arr' }
};

document.addEventListener('DOMContentLoaded', () => {
    // --- Authentication Check ---
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'index.html'; // Redirect to login page
        return; // Stop further execution of this script
    }
    // --- End Authentication Check ---

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

        const prefix = formElement.id.replace('form-', '');
        const trainNameDisplay = document.getElementById(`${prefix}-trainName-display`);
        const scheduledTimeDisplay = document.getElementById(`${prefix}-scheduledTime-display`);
        const hiddenTrainName = document.getElementById(`${prefix}-hidden-trainName`);
        const hiddenScheduledTime = document.getElementById(`${prefix}-hidden-scheduledTime`);
        const trainNoSelect = document.getElementById(`${prefix}-trainNo`);

        if (trainNoSelect && trainNoSelect.tagName === 'SELECT') {
             if(trainNameDisplay) trainNameDisplay.textContent = '-';
             if(scheduledTimeDisplay) scheduledTimeDisplay.textContent = '-';
             if(hiddenTrainName) hiddenTrainName.value = '';
             if(hiddenScheduledTime) hiddenScheduledTime.value = '';
             trainNoSelect.value = "";
        }
    };

    function populateTrainNoDropdown(selectElement, optionsArray, routeKeyForDebug) {
        // console.log(`Attempting to populate: ${selectElement ? selectElement.id : 'NULL selectElement'} for route ${routeKeyForDebug}`);
        if (!selectElement) {
            console.error(`populateTrainNoDropdown: Select element is null for route: ${routeKeyForDebug}. Check ID in HTML and routeConfigs prefix for ${routeKeyForDebug}.`);
            return;
        }
        if (!optionsArray) {
            console.warn(`populateTrainNoDropdown: Options array is undefined for route: ${routeKeyForDebug}. Dropdown will be empty or show 'No Data'.`);
            selectElement.innerHTML = '<option value="">-- No Options Defined --</option>';
            return;
        }

        selectElement.innerHTML = '<option value="">-- Select Train No --</option>';
        if (optionsArray.length === 0) {
            // console.log(`populateTrainNoDropdown: Options array is empty for ${routeKeyForDebug}. Populating with 'No Data'.`);
            // No need to add another option if it's already empty and has the default
            // selectElement.innerHTML = '<option value="">-- No Data --</option>'; // This would overwrite the default select
            return;
        }
        optionsArray.forEach(train => {
            const option = document.createElement('option');
            option.value = train.trainNo;
            option.textContent = train.trainNo;
            selectElement.appendChild(option);
        });
        // console.log(`Finished populating: ${selectElement.id}, options count: ${selectElement.options.length}`);
    }

    function handleTrainNoChange(event) {
        const selectElement = event.target;
        // console.log(`Train No changed for: ${selectElement.id}, New value: ${selectElement.value}`);
        const form = selectElement.closest('form');
        if (!form) {
            console.error("handleTrainNoChange: Could not find parent form for select:", selectElement.id);
            return;
        }
        const prefix = form.id.replace('form-', '');
        // console.log(`Derived prefix: ${prefix}`);

        const routeKeyFromFormId = Object.keys(routeConfigs).find(key => routeConfigs[key].prefix === prefix);
        if (!routeKeyFromFormId) {
            console.error(`handleTrainNoChange: Could not find routeConfig for prefix: ${prefix}`);
            return;
        }
        // console.log(`Found routeKey: ${routeKeyFromFormId}`);

        const config = routeConfigs[routeKeyFromFormId];
        const optionsArray = config.options;
        // console.log("Using optionsArray:", optionsArray);


        const trainNameDisplay = document.getElementById(`${prefix}-trainName-display`);
        const scheduledTimeDisplay = document.getElementById(`${prefix}-scheduledTime-display`);
        const hiddenTrainName = document.getElementById(`${prefix}-hidden-trainName`);
        const hiddenScheduledTime = document.getElementById(`${prefix}-hidden-scheduledTime`);

        // console.log("Display/Hidden elements:", trainNameDisplay, scheduledTimeDisplay, hiddenTrainName, hiddenScheduledTime);

        const selectedTrainNo = selectElement.value;
        const selectedTrainData = optionsArray.find(train => train.trainNo === selectedTrainNo);
        // console.log("Selected Train No:", selectedTrainNo, "Found Data:", selectedTrainData);

        if (selectedTrainData) {
            if(trainNameDisplay) trainNameDisplay.textContent = selectedTrainData.trainName;
            if(scheduledTimeDisplay) scheduledTimeDisplay.textContent = selectedTrainData.scheduledTime;
            if(hiddenTrainName) hiddenTrainName.value = selectedTrainData.trainName;
            if(hiddenScheduledTime) hiddenScheduledTime.value = selectedTrainData.scheduledTime;
            // console.log("Updated fields with:", selectedTrainData.trainName, selectedTrainData.scheduledTime);
        } else {
            if(trainNameDisplay) trainNameDisplay.textContent = '-';
            if(scheduledTimeDisplay) scheduledTimeDisplay.textContent = '-';
            if(hiddenTrainName) hiddenTrainName.value = '';
            if(hiddenScheduledTime) hiddenScheduledTime.value = '';
            // console.log("Cleared fields because no train data found for:", selectedTrainNo);
        }
    }

    // Initialize all dropdowns and attach change listeners
    // console.log("Initializing dropdowns...");
    for (const routeKey in routeConfigs) {
        const config = routeConfigs[routeKey];
        const selectElementId = `${config.prefix}-trainNo`;
        const selectElement = document.getElementById(selectElementId);
        // console.log(`Processing route: ${routeKey}, prefix: ${config.prefix}, selectElementId: ${selectElementId}, found element:`, selectElement);
        if (selectElement && selectElement.tagName === 'SELECT') {
            populateTrainNoDropdown(selectElement, config.options, routeKey); // Pass routeKey for debugging
            selectElement.addEventListener('change', handleTrainNoChange);
        } else {
            // console.warn(`Could not find SELECT element with ID: ${selectElementId} for route ${routeKey}`);
        }
    }
    // console.log("Dropdown initialization complete.");

    const populateFormForMasterEdit = (routeKey, index) => {
        const config = routeConfigs[routeKey];
        if (!config) {
            showConfirmation("Error: Invalid route configuration for edit.", true);
            return;
        }
        const targetFormId = config.formId;

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
        const prefix = config.prefix;

        const trainNoSelect = document.getElementById(`${prefix}-trainNo`);
        if (trainNoSelect && trainNoSelect.tagName === 'SELECT') {
            trainNoSelect.value = item.trainNo;
            // console.log(`Set ${trainNoSelect.id} to ${item.trainNo}, dispatching change.`);
            trainNoSelect.dispatchEvent(new Event('change'));
        }

        document.getElementById(`${prefix}-expectedTime`).value = item.expectedTime;
        document.getElementById(`${prefix}-status`).value = item.status;
        document.getElementById(`${prefix}-platformNo`).value = item.platformNo;

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
                const currentRouteKey = Object.keys(routeConfigs).find(key => routeConfigs[key].prefix === prefix);

                if (!currentRouteKey) {
                    console.error("Submit: Could not determine routeKey for form:", submittedFormId);
                    showConfirmation("Error: Form configuration not found.", true);
                    return;
                }
                const config = routeConfigs[currentRouteKey];

                let trainNo = document.getElementById(`${config.prefix}-trainNo`).value;
                let trainName = document.getElementById(`${config.prefix}-hidden-trainName`).value;
                let scheduledTimeValue = document.getElementById(`${config.prefix}-hidden-scheduledTime`).value;

                if (!trainNo) { // Check if a train number was selected from dropdown
                    const selectedTrainData = config.options.find(train => train.trainNo === trainNo);
                    if(!selectedTrainData){ // If not found, it means "-- Select --" or empty was chosen
                         showConfirmation("Please select a valid Train No.", true);
                         return;
                    }
                    // This block might be redundant if hidden fields are reliably populated
                }
                 // Additional check: if hidden fields are empty but trainNo is selected (e.g. if change event didn't fire)
                if(trainNo && (!trainName || !scheduledTimeValue)){
                    const selectedTrainData = config.options.find(train => train.trainNo === trainNo);
                    if(selectedTrainData){
                        trainName = selectedTrainData.trainName;
                        scheduledTimeValue = selectedTrainData.scheduledTime;
                    } else {
                        // This case should ideally not happen if dropdown is populated and change event works
                        showConfirmation("Error retrieving Train Name/Scheduled Time. Please re-select Train No.", true);
                        return;
                    }
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
                        const readableRouteKey = currentEditDetails.routeKey.toUpperCase().replace(/_/g, ' ').replace(' DEP ', ' (Departure) ').replace(' ARR ', ' (Arrival) ');
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
                    const readableRouteKey = currentRouteKey.toUpperCase().replace(/_/g, ' ').replace(' DEP ', ' (Departure) ').replace(' ARR ', ' (Arrival) ');
                    showConfirmation(`Entry for ${readableRouteKey} added successfully!`);
                    resetFormDisplay(submittedForm);
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

    displayAllDataOnMasterPage();

    const dateTimeElement = document.getElementById('current-datetime');
    function updateDateTimeDisplay() {
        if (dateTimeElement) {
            const now = new Date();
            const options = {
                weekday: 'short', year: 'numeric', month: 'short',
                day: 'numeric', hour: '2-digit', minute: '2-digit',
                second: '2-digit', hour12: true
            };
            dateTimeElement.textContent = now.toLocaleString('en-US', options);
        }
    }
    if (dateTimeElement) {
        updateDateTimeDisplay();
        setInterval(updateDateTimeDisplay, 1000);
    }
});
