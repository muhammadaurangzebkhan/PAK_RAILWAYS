document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('.registration-form form');

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const patientData = {
            name: document.getElementById('name').value,
            dob: document.getElementById('dob').value,
            gender: document.getElementById('gender').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            emergency_contact: document.getElementById('emergency_contact').value,
            blood_group: document.getElementById('blood_group').value,
        };

        let patients = JSON.parse(localStorage.getItem('patients')) || [];
        patients.push(patientData);
        localStorage.setItem('patients', JSON.stringify(patients));

        alert('Patient registered successfully!');
        registrationForm.reset();
    });
});