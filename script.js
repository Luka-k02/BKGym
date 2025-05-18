// ===============================
//  Global slideshow (all pages)
// ===============================
const slideImages = [
    'images/gym1.jpg',
    'images/gym2.jpg',
    'images/gym3.jpg'
];
let slideIndex = 0;

function startSlideshow() {
    const hero = document.querySelector('.slideshow-container');
    if (!hero) return; // page might not have one (safety)

    function nextSlide() {
        hero.style.backgroundImage = `url('${slideImages[slideIndex]}')`;
        slideIndex = (slideIndex + 1) % slideImages.length;
    }
    nextSlide();                   // show first image immediately
    setInterval(nextSlide, 3000);  // change every 3 s
}

// ===============================
//  Membership-form validation
// ===============================
function initMembershipForm() {
    const form = document.getElementById('membershipForm');
    if (!form) return; // not on this page

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name  = form.name.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();

        if (!name || !email || !phone) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        alert('Congratulations, you are now a member of BK Gym. You will receive your member ID card when you come into the gym.');
        form.reset();
    });
}

// ===============================
//  Map (index page only)
// ===============================
function initMap() {
    const mapDiv = document.getElementById('map');
    if (!mapDiv) return; // not on this page

    const map = L.map('map').setView([40.6782, -73.9442], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([40.6782, -73.9442])
      .addTo(map)
      .bindPopup('BK Gym - 1387 Brooklyn Ave, Brooklyn, NY 11216')
      .openPopup();
}

// ===============================
//  Initialise everything
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    startSlideshow();
    initMembershipForm();
    initMap();
});