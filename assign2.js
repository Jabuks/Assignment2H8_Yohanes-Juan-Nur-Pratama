document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Extract inputs value
        const name = document.querySelector('input[placeholder="Nama"]').value;
        const role = document.querySelector('input[placeholder="Role"]').value;
        const availability = document.querySelector('input[placeholder="Availability"]').value;
        const age = document.querySelector('input[placeholder="Usia"]').value;
        const location = document.querySelector('input[placeholder="Lokasi"]').value;
        const experience = document.querySelector('input[placeholder="Years Experience"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        // update content
        const profileName = document.querySelector('.card-body .col-md-2 h5');
        const profileRole = document.querySelector('.card-body .col-md-2 p');
        profileName.innerText = name;
        profileRole.innerText = role;

        // update right side of the content
        const profileAvailability = document.querySelectorAll('.card-body .col-md-4 .p-2')[0];
        const profileAge = document.querySelectorAll('.card-body .col-md-4 .p-2')[1];
        const profileLocation = document.querySelectorAll('.card-body .col-md-4 .p-2')[2];
        const profileExperience = document.querySelectorAll('.card-body .col-md-4 .p-2')[3];
        const profileEmail = document.querySelectorAll('.card-body .col-md-4 .p-2')[4];

        profileAvailability.innerText = availability;
        profileAge.innerText = age;
        profileLocation.innerText = location;
        profileExperience.innerText = experience + ' Tahun';
        profileEmail.innerText = email;

        formIsi.hidden = true
    });
});
