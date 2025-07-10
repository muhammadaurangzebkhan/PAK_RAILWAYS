document.addEventListener('DOMContentLoaded', () => {
    const formsContainer = document.querySelector('.forms-container');
    const confirmationMessage = document.getElementById('confirmation-message');
    const LOCAL_STORAGE_KEY = 'trainAppSchedules';

    let currentEditDetails = null; // { routeKey: string, index: number, formId: string }

    // Helper function to show confirmation
    const showConfirmation = (message, isError = false) => {
        confirmationMessage.textContent = message;
        confirmationMessage.style.backgroundColor = isError ? '#c0392b' : '#27ae60';
        confirmationMessage.style.display = 'block';
        setTimeout(() => {
            confirmationMessage.style.display = 'none';
        }, 3000);
    };

    // Function to reset a specific form, its submit button text, and hide cancel button
    const resetFormDisplay = (formElement) => {
        if (formElement) {
            formElement.reset();
            const submitButton = formElement.querySelector('button[type="submit"]');
            const cancelButton = formElement.querySelector('.cancel-edit-btn');
            if (submitButton) {
                const formIdParts = formElement.id.replace('form-', '').split('-');
                const readableRoute = `${formIdParts[0].toUpperCase()} - ${formIdParts[1].toUpperCase()} (${formIdParts[2] === 'dep' ? 'Departure' : 'Arrival'})`;
                submitButton.textContent = `Add ${readableRoute}`;
            }
            if (cancelButton) {
                cancelButton.style.display = 'none';
            }
        }
    };

    const populateFormForMasterEdit = (routeKey, index) => {
        // If another edit is in progress, reset that form first
        if (currentEditDetails && currentEditDetails.formId) {
            const currentlyEditingForm = document.getElementById(currentEditDetails.formId);
            if (currentlyEditingForm) {
                 resetFormDisplay(currentlyEditingForm);
            }
        }

        let allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
        const item = allSchedules[routeKey] && allSchedules[routeKey][index];

        if (!item) {
            showConfirmation("Error: Could not find item to edit.", true);
            return;
        }

        const formIdPrefix = routeKey.replace('_departure', '-dep').replace('_arrival', '-arr').replace('_', '-');
        const formId = `form-${formIdPrefix}`;
        const formElement = document.getElementById(formId);

        if (!formElement) {
            showConfirmation(`Error: Could not find form with ID ${formId}.`, true);
            console.error(`Form with ID ${formId} not found.`);
            return;
        }

        currentEditDetails = { routeKey, index, formId };

        document.getElementById(`${formIdPrefix}-trainNo`).value = item.trainNo;
        document.getElementById(`${formIdPrefix}-trainName`).value = item.trainName;
        document.getElementById(`${formIdPrefix}-scheduledTime`).value = item.scheduledTime;
        document.getElementById(`${formIdPrefix}-expectedTime`).value = item.expectedTime;
        document.getElementById(`${formIdPrefix}-status`).value = item.status;
        document.getElementById(`${formIdPrefix}-platformNo`).value = item.platformNo;

        formElement.querySelector('button[type="submit"]').textContent = 'Update Entry';
        const cancelButton = formElement.querySelector('.cancel-edit-btn');
        if (cancelButton) {
            cancelButton.style.display = 'inline-block';
        }
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };


    // Attach event listeners to all forms within the container for SUBMIT
    if (formsContainer) {
        const forms = formsContainer.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const submittedFormId = this.id;

                // Get form elements by prefix (derived from form ID)
                const prefix = submittedFormId.replace('form-', '');

                const trainNo = document.getElementById(`${prefix}-trainNo`).value;
                const trainName = document.getElementById(`${prefix}-trainName`).value;
                const scheduledTimeValue = document.getElementById(`${prefix}-scheduledTime`).value;
                const expectedTimeValue = document.getElementById(`${prefix}-expectedTime`).value;
                let statusValue = document.getElementById(`${prefix}-status`).value;
                const platformNo = document.getElementById(`${prefix}-platformNo`).value;

                // Derive the routeKey for saving
                const keyParts = prefix.split('-');
                const currentRouteKey = `${keyParts[0]}_${keyParts[1]}_${keyParts[2] === 'dep' ? 'departure' : 'arrival'}`;

                // Automatic status calculation logic
                const isDeparture = currentRouteKey.endsWith('_departure');
                const finalStatuses = isDeparture ? ['Departed', 'Cancelled'] : ['Arrived', 'Cancelled'];

                if (!finalStatuses.includes(statusValue) || (statusValue === "Cancelled" && expectedTimeValue)) {
                    if (expectedTimeValue && scheduledTimeValue) {
                        if (expectedTimeValue > scheduledTimeValue) {
                            statusValue = "Late";
                        } else if (expectedTimeValue < scheduledTimeValue) {
                            statusValue = "Before";
                        } else {
                            statusValue = "On Time";
                        }
                    } else if (!expectedTimeValue && scheduledTimeValue) {
                        statusValue = "Cancelled";
                    }
                }

                const entryData = {
                    trainNo, trainName, scheduledTime: scheduledTimeValue,
                    expectedTime: expectedTimeValue, status: statusValue, platformNo
                };

                let allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

                // Check if we are in edit mode for THIS specific form and route
                if (currentEditDetails && currentEditDetails.formId === submittedFormId && currentEditDetails.routeKey === currentRouteKey) {
                    // Update existing item
                    if (allSchedules[currentEditDetails.routeKey] && allSchedules[currentEditDetails.routeKey][currentEditDetails.index] !== undefined) {
                        allSchedules[currentEditDetails.routeKey][currentEditDetails.index] = entryData;
                        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allSchedules));

                        const readableRouteKey = currentEditDetails.routeKey.toUpperCase().replace(/_/G, ' ').replace(' DEP ', ' (Departure) ').replace(' ARR ', ' (Arrival) ');
                        showConfirmation(`Entry for ${readableRouteKey} updated successfully!`);

                        resetFormDisplay(this); // Use new reset function
                        currentEditDetails = null;
                    } else {
                        showConfirmation("Error: Could not find item to update in storage.", true);
                        console.error("Error updating. Item not found in storage:", currentEditDetails);
                        resetFormDisplay(this);
                        currentEditDetails = null;
                    }
                } else {
                    // Add new item (handles if currentEditDetails is null or for a different form)
                    if (currentEditDetails && currentEditDetails.formId) { // If an edit was active on another form, reset it
                         const activeEditForm = document.getElementById(currentEditDetails.formId);
                         if(activeEditForm && activeEditForm !== this) {
                            resetFormDisplay(activeEditForm);
                         }
                         currentEditDetails = null; // Clear edit mode as we are adding to a different form
                    }
                    if (!allSchedules[currentRouteKey]) {
                        allSchedules[currentRouteKey] = [];
                    }
                    allSchedules[currentRouteKey].push(entryData);
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allSchedules));

                    const readableRouteKey = currentRouteKey.toUpperCase().replace(/_/G, ' ').replace(' DEP ', ' (Departure) ').replace(' ARR ', ' (Arrival) ');
                    showConfirmation(`Entry for ${readableRouteKey} added successfully!`);
                    this.reset(); // Reset only the submitted form
                }
                displayAllDataOnMasterPage(); // Refresh tables
            });
        });
    }

    const renderMasterTable = (routeKey, containerId, entriesArray) => {
        const container = document.getElementById(containerId);
        if (!container) {
            // console.error(`Container with ID ${containerId} not found for route ${routeKey}`);
            return;
        }

        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Train No</th>
                        <th>Name</th>
                        <th>Scheduled</th>
                        <th>Expected</th>
                        <th>Status</th>
                        <th>Platform</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        if (!entriesArray || entriesArray.length === 0) {
            tableHTML += `<tr><td colspan="7" style="text-align:center;">No data available.</td></tr>`;
        } else {
            entriesArray.forEach((item, index) => {
                tableHTML += `
                    <tr>
                        <td>${item.trainNo}</td>
                        <td>${item.trainName}</td>
                        <td>${item.scheduledTime}</td>
                        <td>${item.expectedTime}</td>
                        <td>${item.status}</td>
                        <td>${item.platformNo}</td>
                        <td class="actions-cell">
                            <button type="button" class="action-btn edit-btn" data-routekey="${routeKey}" data-index="${index}">Edit</button>
                            <button type="button" class="action-btn remove-btn" data-routekey="${routeKey}" data-index="${index}">Delete</button>
                        </td>
                    </tr>
                `;
            });
        }

        tableHTML += `</tbody></table>`;
        container.innerHTML = tableHTML;
    };

    const displayAllDataOnMasterPage = () => {
        const allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
        const routeMappings = [
            { key: 'lhr_kc_departure', container: 'table-data-lhr-kc-dep' },
            { key: 'kc_lhr_arrival', container: 'table-data-kc-lhr-arr' },
            { key: 'lhr_psh_departure', container: 'table-data-lhr-psh-dep' },
            { key: 'psh_lhr_arrival', container: 'table-data-psh-lhr-arr' },
            { key: 'lhr_fsld_departure', container: 'table-data-lhr-fsld-dep' },
            { key: 'fsld_lhr_arrival', container: 'table-data-fsld-lhr-arr' },
            { key: 'lhr_nwl_departure', container: 'table-data-lhr-nwl-dep' },
            { key: 'nwl_lhr_arrival', container: 'table-data-nwl-lhr-arr' },
            { key: 'lhr_rwp_departure', container: 'table-data-lhr-rwp-dep' },
            { key: 'rwp_lhr_arrival', container: 'table-data-rwp-lhr-arr' },
            { key: 'lhr_mianwali_departure', container: 'table-data-lhr-mianwali-dep' },
            { key: 'mianwali_lhr_arrival', container: 'table-data-mianwali-lhr-arr' },
            { key: 'lhr_qta_departure', container: 'table-data-lhr-qta-dep' },
            { key: 'qta_lhr_arrival', container: 'table-data-qta-lhr-arr' }
        ];

        routeMappings.forEach(mapping => {
            renderMasterTable(mapping.key, mapping.container, allSchedules[mapping.key] || []);
        });
    };

    // Event listener for Edit and Delete buttons (using event delegation on a common parent)
    // Using document.body or a specific overall container for tables if formsContainer doesn't cover tables.
    // Assuming tables are within sections that are children of formsContainer for this to work.
    // If tables are outside, a more global parent like document.body would be needed for delegation.
    const mainContentArea = document.querySelector('.forms-container'); // Or document.body;
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
                        if(formToReset) resetFormDisplay(formToReset); // Use new reset function
                            currentEditDetails = null;
                    } else if (currentEditDetails && currentEditDetails.routeKey === routeKey && index < currentEditDetails.index) {
                        // If deleting an item before the one being edited in the same list, adjust index
                        currentEditDetails.index--;
                        }
                    } else {
                        showConfirmation(`Error: Could not find entry to delete for ${routeKey}.`, true);
                        console.error("Error deleting item: Not found in local storage.", routeKey, index);
                    }
                }
            } else if (target.classList.contains('edit-btn')) {
                const routeKey = target.dataset.routekey;
                const index = parseInt(target.dataset.index, 10);
                // If another edit is in progress on a *different* form, reset that form first
                if (currentEditDetails && currentEditDetails.formId && currentEditDetails.formId !== target.closest('form').id) {
                    const currentlyEditingForm = document.getElementById(currentEditDetails.formId);
                    if (currentlyEditingForm) resetFormDisplay(currentlyEditingForm); // Use new reset function
                    currentEditDetails = null; // Clear since we are starting a new edit
                }
                populateFormForMasterEdit(routeKey, index);
            } else if (target.classList.contains('cancel-edit-btn')) {
                const formElement = target.closest('form');
                if (formElement) {
                    resetFormDisplay(formElement); // Use new reset function
                    currentEditDetails = null; // Ensure edit mode is cleared
                    showConfirmation("Edit cancelled.");
                }
            }
        });
    }

    // Initial display of data on page load
    displayAllDataOnMasterPage();
});
