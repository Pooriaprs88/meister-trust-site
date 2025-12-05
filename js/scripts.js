/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Initialize EmailJS
    (function(){
        emailjs.init("21b124UTdCjhoV9Cc");
    })();

    // Contact Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const submitButton = document.getElementById('submitButton');
            const submitButtonText = document.getElementById('submitButtonText');
            const submitSpinner = document.getElementById('submitSpinner');
            const submitSuccessMessage = document.getElementById('submitSuccessMessage');
            const submitErrorMessage = document.getElementById('submitErrorMessage');

            // Hide previous messages
            submitSuccessMessage.classList.add('d-none');
            submitErrorMessage.classList.add('d-none');

            // Validate form
            if (!contactForm.checkValidity()) {
                contactForm.classList.add('was-validated');
                return;
            }

            // Show loading state
            submitButton.disabled = true;
            submitButtonText.textContent = 'Sending...';
            submitSpinner.classList.remove('d-none');

            // Prepare form data
            const formData = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value,
                to_email: 'MeisterTrustServices@outlook.com'
            };

            // Send email using EmailJS
            emailjs.send('service_isid7ey', 'template_b78o8fd', formData)
                .then(function() {
                    // Success
                    submitSuccessMessage.classList.remove('d-none');
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                    
                    // Reset button state
                    submitButton.disabled = false;
                    submitButtonText.textContent = 'Send Message';
                    submitSpinner.classList.add('d-none');

                    // Scroll to success message
                    submitSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, function(error) {
                    // Error
                    console.error('EmailJS error:', error);
                    submitErrorMessage.classList.remove('d-none');
                    
                    // Reset button state
                    submitButton.disabled = false;
                    submitButtonText.textContent = 'Send Message';
                    submitSpinner.classList.add('d-none');

                    // Scroll to error message
                    submitErrorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
        });
    }

});

// Toggle service details visibility - make it globally accessible
window.toggleServiceDetails = function(serviceNumber) {
    const button = document.getElementById('showMoreBtn' + serviceNumber);
    if (!button) {
        console.error('Button not found:', 'showMoreBtn' + serviceNumber);
        return;
    }
    
    // Find the service item by traversing up the DOM
    const serviceItem = button.closest('.service-item-enhanced');
    if (!serviceItem) {
        console.error('Service item not found');
        return;
    }
    
    const serviceDetails = serviceItem.querySelector('.service-details');
    
    if (serviceDetails) {
        const isExpanded = serviceDetails.classList.contains('expanded');
        
        if (isExpanded) {
            serviceDetails.classList.remove('expanded');
            button.textContent = 'Show More';
        } else {
            serviceDetails.classList.add('expanded');
            button.textContent = 'Show Less';
        }
    } else {
        console.error('Service details not found');
    }
};
