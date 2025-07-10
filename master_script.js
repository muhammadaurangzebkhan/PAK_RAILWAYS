document.addEventListener('DOMContentLoaded', () => {
    const formsContainer = document.querySelector('.forms-container');
    const confirmationMessage = document.getElementById('confirmation-message');
    const LOCAL_STORAGE_KEY = 'trainAppSchedules';

    // Helper function to show confirmation
    const showConfirmation = (message) => {
        confirmationMessage.textContent = message;
        confirmationMessage.style.display = 'block';
        setTimeout(() => {
            confirmationMessage.style.display = 'none';
        }, 3000); // Hide after 3 seconds
    };

    // Attach event listeners to all forms within the container
    if (formsContainer) {
        const forms = formsContainer.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', function(event) {
                event.preventDefault();

                // Derive the data key from the form's ID
                // e.g., form-lhr-kc-dep -> lhr_kc_departure
                const formId = this.id; // e.g., "form-lhr-kc-dep"
                const keyParts = formId.replace('form-', '').split('-'); // ["lhr", "kc", "dep"]
                const routeKey = `${keyParts[0]}_${keyParts[1]}_${keyParts[2] === 'dep' ? 'departure' : 'arrival'}`;

                // Get form elements by prefix (derived from form ID)
                const prefix = formId.replace('form-', ''); // e.g., "lhr-kc-dep"

                const trainNo = document.getElementById(`${prefix}-trainNo`).value;
                const trainName = document.getElementById(`${prefix}-trainName`).value;
                const scheduledTimeValue = document.getElementById(`${prefix}-scheduledTime`).value;
                const expectedTimeValue = document.getElementById(`${prefix}-expectedTime`).value;
                let statusValue = document.getElementById(`${prefix}-status`).value;
                const platformNo = document.getElementById(`${prefix}-platformNo`).value;

                // Automatic status calculation logic
                const isDeparture = routeKey.endsWith('_departure');
                const finalStatuses = isDeparture ? ['Departed', 'Cancelled'] : ['Arrived', 'Cancelled'];

                if (!finalStatuses.includes(statusValue) || (statusValue === "Cancelled" && expectedTimeValue)) {
                    if (expectedTimeValue && scheduledTimeValue) {
                        if (expectedTimeValue > scheduledTimeValue) {
                            statusValue = "Delayed";
                        } else if (expectedTimeValue === scheduledTimeValue) {
                            statusValue = "On Time";
                        } else { // expectedTimeValue < scheduledTimeValue
                            statusValue = "On Time";
                        }
                    } else if (!expectedTimeValue && scheduledTimeValue) {
                        statusValue = "Cancelled";
                    }
                }

                const newEntry = {
                    trainNo,
                    trainName,
                    scheduledTime: scheduledTimeValue,
                    expectedTime: expectedTimeValue,
                    status: statusValue,
                    platformNo
                };

                // Retrieve current schedules or initialize
                let allSchedules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

                // Ensure the array for the specific routeKey exists
                if (!allSchedules[routeKey]) {
                    allSchedules[routeKey] = [];
                }

                allSchedules[routeKey].push(newEntry);
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allSchedules));

                showConfirmation(`Entry for ${routeKey.replace('_', ' ').replace('_', ' -> ')} added successfully!`);
                this.reset(); // Reset the form that was submitted
            });
        });
    }
});
