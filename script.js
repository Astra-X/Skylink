const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwB0rRsHLfgg0dpOd393nlCgvdIdH5xfE8YyYZYCPqQsf5MCeRK-8PaJIPodU5WPobm/exec";

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Form handling
document.getElementById('inquiryForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    btnText.textContent = 'Submitting...';
    btnIcon.innerHTML = `
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    `;
    btnIcon.classList.add('animate-spin');

    const formData = {
        name: this.name.value.trim(),
        email: this.email.value.trim(),
        state: this.state.value.trim(),
        phone: this.phone.value.trim(),
        message: this.message.value.trim(),
        timestamp: new Date().toISOString()
    };

    try {
        await fetch(APPS_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });
        
        alert("Thank you! Your inquiry has been submitted successfully.");
        this.reset();
    } catch (error) {
        console.error(error);
        alert("Sorry, there was an error submitting your form. Please try again later or contact us directly.");
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        btnText.textContent = 'Submit Inquiry';
        btnIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />`;
        btnIcon.classList.remove('animate-spin');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
