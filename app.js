//testimonials
const testimonials = [
{
name: "Emma Thompson",
service: "Brazilian Wax",
rating: 5,
review: "Absolutely amazing service! The staff is professional and made me feel completely comfortable. Best waxing experience I've ever had."
},
{
name: "Sarah Mitchell",
service: "Full Body Wax",
rating: 5,
review: "The attention to detail and care provided here is unmatched. I've been a regular client for over a year and wouldn't go anywhere else."
},
{
name: "Jennifer Anderson",
service: "Facial Waxing",
rating: 5,
review: "Such a relaxing experience! The esthetician was gentle and precise. My eyebrows have never looked better!"
},
{
name: "Rachel Chen",
service: "Brazilian Wax",
rating: 5,
review: "Incredibly professional service in a clean, relaxing environment. The staff really knows what they're doing and makes you feel at ease."
},
{
name: "Maria Garcia",
service: "Full Body Wax",
rating: 4,
review: "Great attention to detail and very thorough. The spa atmosphere is so peaceful and luxurious. Will definitely be back!"
},
{
name: "Alexandra Peters",
service: "Facial Waxing",
rating: 5,
review: "Perfect shaping and such gentle technique. My sensitive skin had no irritation at all. This place is a hidden gem!"
},
{
name: "Victoria Williams",
service: "Brazilian Wax",
rating: 5,
review: "The most professional waxing service I've ever experienced. Quick, thorough, and as painless as possible. Highly recommend!"
},
{
name: "Sophie Turner",
service: "Full Body Wax",
rating: 5,
review: "Exceptional service from start to finish. The staff is knowledgeable and the results are amazing. Worth every penny!"
}
];
//testimonial swiper
let swiper;
function renderTestimonials() {
const container = document.getElementById('testimonialContainer');
testimonials.forEach(testimonial => {
const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
const testimonialHTML = `
<div class="swiper-slide px-4">
<div class="bg-white p-8 rounded-lg shadow-lg">
<div class="text-yellow-400 mb-4">${stars}</div>
<p class="text-gray-600 mb-6">"${testimonial.review}"</p>
<div>
<p class="font-semibold">${testimonial.name}</p>
<p class="text-gray-500 text-sm">${testimonial.service}</p>
</div>
</div>
</div>
`;
container.innerHTML += testimonialHTML;
});
swiper = new Swiper('.swiper-container', {
slidesPerView: 1,
spaceBetween: 32,
loop: true,
autoplay: {
delay: 3000,
disableOnInteraction: false,
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
pagination: {
el: '.swiper-pagination',
clickable: true,
},
breakpoints: {
640: {
slidesPerView: 2,
},
1024: {
slidesPerView: 3,
}
}
});
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".time-btn").forEach(button => {
      button.addEventListener("click", function () {
          document.querySelectorAll(".time-btn").forEach(btn => {
              btn.classList.remove("border-primary", "bg-primary/10");
          });
          this.classList.add("border-primary", "bg-primary/10");
          document.getElementById("selectedTime").value = this.textContent.trim();
      });
  });
});

//booking modal 
function openBookingModal() {
  document.getElementById("bookingModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeBookingModal() {
  document.getElementById("bookingModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function showSuccessModal(message) {
  document.getElementById("successMessage").textContent = message;
  document.getElementById("successModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSuccessModal() {
  document.getElementById("successModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function handleBookingSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const bookingData = {
      service: formData.get("service"),
      date: formData.get("date"),
      time: formData.get("time"),
      name: formData.get("name"),
      phone: formData.get("phone")
  };

  if (!bookingData.time) {
      alert("Please select a time.");
      return;
  }

  const emailBody = `
      New Booking Request:
      Service: ${bookingData.service}
      Date: ${bookingData.date}
      Time: ${bookingData.time}
      Name: ${bookingData.name}
      Phone: ${bookingData.phone}
  `;

  // Send via email
  window.location.href = `mailto:Melaniadorothy532@gmail.com?subject=New Booking Request&body=${encodeURIComponent(emailBody)}`;

  // Optionally send data to a server using fetch()
  /*
  fetch('/submit-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  */

  closeBookingModal();
  showSuccessModal("Your appointment has been booked successfully! We will send you a confirmation email shortly.");
}
//form submit
function handleContactSubmit(event) {
event.preventDefault();
const formData = new FormData(event.target);
const contactData = {
name: formData.get('name'),
email: formData.get('email'),
message: formData.get('message')
};
const emailBody = `
New Contact Message:
Name: ${contactData.name}
Email: ${contactData.email}
Message: ${contactData.message}
`;
window.location.href = `mailto:Melaniadorothy532@gmail.com?subject=New Contact Message&body=${encodeURIComponent(emailBody)}`;
showSuccessModal('Your message has been sent successfully! We will get back to you soon.');
event.target.reset();
}

//news letter 
function handleNewsletterSubmit(event) {
event.preventDefault();
const formData = new FormData(event.target);
const email = formData.get('email');
const emailBody = `
New Newsletter Subscription:
Email: ${email}
`;
window.location.href = `mailto:Melaniadorothy532@gmail.com?subject=New Newsletter Subscription&body=${encodeURIComponent(emailBody)}`;
showSuccessModal('Thank you for subscribing to our newsletter!');
event.target.reset();
}
//gallery modal
const imagesToPreload = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg'
];

imagesToPreload.forEach(src => {
  const img = new Image();
  img.src = src;
});

function openGalleryModal(element) {
const image = element.querySelector('img');
const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('galleryModalImage');
modalImage.src = image.src;
modal.classList.remove('hidden');
document.body.style.overflow = 'hidden';
}
function closeGalleryModal() {
const modal = document.getElementById('galleryModal');
modal.classList.add('hidden');
document.body.style.overflow = 'auto';
}
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.querySelector('.ri-menu-line, .ri-close-line');
  const isOpen = !mobileMenu.classList.contains('hidden');

  // Toggle menu visibility
  mobileMenu.classList.toggle('hidden');
  
  // Toggle icon
  if (isOpen) {
    menuIcon.classList.remove('ri-close-line');
    menuIcon.classList.add('ri-menu-line'); 
  } else {
    menuIcon.classList.remove('ri-menu-line');
    menuIcon.classList.add('ri-close-line');
  }

  // Add slide animation
  if (!isOpen) {
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
    requestAnimationFrame(() => {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      mobileMenu.style.opacity = '1';
    });
  } else {
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
    setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 200);
  }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const mobileMenu = document.getElementById('mobileMenu');
  const menuButton = document.querySelector('.md\\:hidden button');
  
  if (!mobileMenu.classList.contains('hidden') && 
      !mobileMenu.contains(e.target) && 
      !menuButton.contains(e.target)) {
    toggleMobileMenu();
  }
});

// Close menu when window is resized to desktop size
window.addEventListener('resize', () => {
  const mobileMenu = document.getElementById('mobileMenu');
  if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
    toggleMobileMenu();
  }
});
// Close mobile menu when clicking on a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
link.addEventListener('click', () => {
document.getElementById('mobileMenu').classList.add('hidden');
const menuIcon = document.querySelector('.ri-close-line');
if (menuIcon) {
menuIcon.classList.remove('ri-close-line');
menuIcon.classList.add('ri-menu-line');
}
});
});
document.addEventListener('DOMContentLoaded', function() {
renderTestimonials();
});


  // Preloader animation
  
  window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
  
    // Wait 2 seconds AFTER load
    setTimeout(function() {
      loader.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
    }, 2000); // 2000 milliseconds = 2 seconds
  });
  
  

  // Back to top functionality
  const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

// Initialize button visibility
backToTopButton.classList.add('hidden');

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
