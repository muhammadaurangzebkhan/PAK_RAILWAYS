document.addEventListener('DOMContentLoaded', () => {
    const addDoctorBtn = document.getElementById('add-doctor-btn');
    const modal = document.getElementById('doctor-modal');
    const closeButton = document.querySelector('.close-button');
    const doctorForm = document.getElementById('doctor-form');
    const doctorList = document.getElementById('doctor-list');
    const doctorDetails = document.getElementById('doctor-details');
    const importExcel = document.getElementById('import-excel');
    const modalTitle = document.getElementById('modal-title');

    let doctors = JSON.parse(localStorage.getItem('doctors')) || [];

    const saveDoctors = () => {
        localStorage.setItem('doctors', JSON.stringify(doctors));
    };

    const renderDoctorList = () => {
        doctorList.innerHTML = '<option value="">Select a doctor</option>';
        doctors.forEach(doctor => {
            const option = document.createElement('option');
            option.value = doctor.id;
            option.textContent = doctor.name;
            doctorList.appendChild(option);
        });
    };

    const renderDoctorDetails = (doctor) => {
        if (doctor) {
            doctorDetails.innerHTML = `
                <p><strong>ID:</strong> ${doctor.id}</p>
                <p><strong>Name:</strong> ${doctor.name}</p>
                <p><strong>Checkup Fee:</strong> ${doctor.fee}</p>
                <p><strong>Department:</strong> ${doctor.department}</p>
                <p><strong>Experience:</strong> ${doctor.experience} years</p>
                <p><strong>Specialization:</strong> ${doctor.specialization}</p>
                <img src="${doctor.picture}" alt="${doctor.name}" width="150">
                <button onclick="editDoctor(${doctor.id})">Update</button>
                <button onclick="deleteDoctor(${doctor.id})">Delete</button>
            `;
        } else {
            doctorDetails.innerHTML = '';
        }
    };

    addDoctorBtn.addEventListener('click', () => {
        modalTitle.textContent = 'Add Doctor';
        doctorForm.reset();
        document.getElementById('doctor-id').value = '';
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    doctorForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const id = document.getElementById('doctor-id').value;
        const pictureInput = document.getElementById('doctor-picture');
        const file = pictureInput.files[0];

        let pictureData = '';

        if (file) {
            pictureData = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsDataURL(file);
            });
        } else if (id) {
            // If updating, keep the old picture if no new one is provided
            const existingDoctor = doctors.find(doc => doc.id === parseInt(id));
            if (existingDoctor) {
                pictureData = existingDoctor.picture;
            }
        }


        const doctorData = {
            id: id ? parseInt(id) : Date.now(),
            name: document.getElementById('doctor-name').value,
            fee: document.getElementById('checkup-fee').value,
            department: document.getElementById('department').value,
            experience: document.getElementById('experience').value,
            specialization: document.getElementById('specialization').value,
            picture: pictureData
        };

        if (id) {
            doctors = doctors.map(doc => doc.id === parseInt(id) ? doctorData : doc);
        } else {
            doctors.push(doctorData);
        }

        saveDoctors();
        renderDoctorList();
        modal.style.display = 'none';
        doctorList.value = doctorData.id;
        renderDoctorDetails(doctorData);
    });

    doctorList.addEventListener('change', () => {
        const selectedId = doctorList.value;
        const selectedDoctor = doctors.find(doc => doc.id === parseInt(selectedId));
        renderDoctorDetails(selectedDoctor);
    });

    window.editDoctor = (id) => {
        const doctor = doctors.find(doc => doc.id === id);
        if (doctor) {
            modalTitle.textContent = 'Update Doctor';
            document.getElementById('doctor-id').value = doctor.id;
            document.getElementById('doctor-name').value = doctor.name;
            document.getElementById('checkup-fee').value = doctor.fee;
            document.getElementById('department').value = doctor.department;
            document.getElementById('experience').value = doctor.experience;
            document.getElementById('specialization').value = doctor.specialization;
            modal.style.display = 'block';
        }
    };

    window.deleteDoctor = (id) => {
        if (confirm('Are you sure you want to delete this doctor?')) {
            doctors = doctors.filter(doc => doc.id !== id);
            saveDoctors();
            renderDoctorList();
            renderDoctorDetails(null);
        }
    };

    importExcel.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const importedDoctors = XLSX.utils.sheet_to_json(worksheet);

            importedDoctors.forEach(doc => {
                doctors.push({
                    id: Date.now() + Math.random(), // Ensure unique ID
                    name: doc.Name,
                    fee: doc['Checkup Fee'],
                    department: doc.Department,
                    experience: doc.Experience,
                    specialization: doc.Specialization,
                    picture: '' // No picture from Excel import
                });
            });

            saveDoctors();
            renderDoctorList();
            alert('Doctors imported successfully!');
        };
        reader.readAsArrayBuffer(file);
    });

    renderDoctorList();
});