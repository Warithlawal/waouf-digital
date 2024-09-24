window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const sideMenu = document.getElementById('sidemenu');
const overlay = document.getElementById('overlay');
const body = document.body;

function openmenu() {
    sideMenu.style.right = "0";
    overlay.style.display = "block";
    body.classList.add('no-scroll');
}

function closemenu() {
    sideMenu.style.right = "-300px";
    overlay.style.display = "none";
    body.classList.remove('no-scroll');
    body.style.filter = "none";
}

overlay.addEventListener('click', closemenu);

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
};

window.addEventListener('scroll', scrollUp);



const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        // Remove the 'active' class from all accordions
        accordions.forEach((item) => {
            if (item !== accordion) {
                item.classList.remove('active');
            }
        });
        // Toggle the 'active' class on the clicked accordion
        accordion.classList.toggle('active');
    });
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        // Remove the 'active' class from all accordions
        faqs.forEach((item) => {
            if (item !== faq) {
                item.classList.remove('active');
            }
        });
        // Toggle the 'active' class on the clicked accordion
        faq.classList.toggle('active');
    });
});


/*const contactForm = document.getElementById('applicationForm'),
      contactMessage = document.getElementById('contact-message'),
      application = document.getElementById('form_container');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_km7balj', 'template_uz9rorp', '#applicationForm', 'Cshuz3q2Ul1WqyboJ')
    .then(() => {
        application.style.display = 'none';  // Hide the form
        contactMessage.style.display = 'block'; // Show the message

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.textContent = ''; // Clear the message text
        }, 5000);

        contactForm.reset();
    })
    .catch((error) => {
        contactMessage.style.display = 'block'; // Show the message
        contactMessage.innerHTML = '<img src="images/error.png" alt="Error"><span>Failed to send application. Please try again later.</span>';

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.innerHTML = ''; // Clear the message text
        }, 5000);
    });
};

contactForm.addEventListener('submit', sendEmail);*/


// script.js
let scheduleCall = {
    date: '',
    time: ''
};

renderSchedule();

function renderSchedule() {
    const { date, time } = scheduleCall;
    const scheduleCallHTML = date && time ? `<p>${date} at ${time}</p>` : '<p>No schedule set.</p>';
    document.querySelector('.js-schedule').innerHTML = scheduleCallHTML;
}

function addDate(event) {
    const inputElement = document.querySelector('.js-date-input');
    const date = inputElement.value;

    const timeInputElement = document.querySelector('.js-time-input');
    const time = timeInputElement.value;

    if (date && time) {
        const selectedDate = new Date(date);
        const day = selectedDate.getDay();
        const selectedTime = time.split(':');
        const hours = parseInt(selectedTime[0]);
        const minutes = parseInt(selectedTime[1]);

        if (day === 0 || day === 6) {
            alert('Please select a weekday (Monday to Friday).');
            event.preventDefault();
            return;
        }

        if (hours < 10 || (hours === 17 && minutes > 0) || hours > 17) {
            alert('Please select a time between 10:00 AM and 5:00 PM.');
            event.preventDefault();
            return;
        }

        scheduleCall = { date, time };

        inputElement.value = '';
        timeInputElement.value = '';

        renderSchedule();

        const modal = document.querySelector('[data-modal-target="#modal"]').dataset.modalTarget;
        openModal(document.querySelector(modal));
    } else {
        alert('Please select both date and time.');
        event.preventDefault();
    }
}

const bookButton = document.querySelector('.js-book-button');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay2 = document.getElementById('overlay-2');

bookButton.addEventListener('click', (event) => {
    event.preventDefault();
    addDate(event);
});

overlay2.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay2.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay2.classList.remove('active');
    document.body.classList.remove('no-scroll');
}
