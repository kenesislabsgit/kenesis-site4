/**
 * Contact Form - FastAPI Backend Integration
 */

// API Configuration
const API_BASE_URL = 'https://ken-forms.onrender.com';
const CONTACT_ENDPOINT = `${API_BASE_URL}/contact`;

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const messageEl = document.getElementById('contactMessage');
    const submitBtn = document.getElementById('contactSubmit');

    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('contactName').value.trim(),
            email: document.getElementById('contactEmail').value.trim(),
            inquiry_type: document.getElementById('contactInquiryType').value
        };

        // Validate required fields
        if (!formData.name || !formData.email) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Validate name length
        if (formData.name.length < 2) {
            showMessage('Name must be at least 2 characters long.', 'error');
            return;
        }

        // Validate email format
        if (!isValidEmail(formData.email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Disable button and show loading
        submitBtn.disabled = true;
        const originalButtonText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="btn-line"></span>Sending...';

        try {
            const response = await fetch(CONTACT_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                // Success
                showMessage('🎉 Message sent successfully! We\'ll be in touch soon.', 'success');
                form.reset();
            } else {
                // Errors
                const errorMessage = data.detail || data.message || 'Something went wrong. Please try again.';
                showMessage(errorMessage, 'error');
            }
        } catch (error) {
            console.error('Contact submission error:', error);

            // Fallback for network errors
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                showMessage('Unable to connect to server. Please try again later.', 'error');
            } else {
                showMessage('Something went wrong. Please try again.', 'error');
            }
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalButtonText;
        }
    });

    /**
     * Display a message to the user
     * @param {string} text - Message text to display
     * @param {string} type - Message type: 'success', 'error', or 'info'
     */
    function showMessage(text, type) {
        messageEl.textContent = text;

        // Reset classes
        messageEl.className = 'contact-message';

        // Add specific style based on type
        if (type === 'success') {
            messageEl.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
            messageEl.style.color = '#4caf50';
            messageEl.style.border = '1px solid #4caf50';
        } else if (type === 'error') {
            messageEl.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
            messageEl.style.color = '#f44336';
            messageEl.style.border = '1px solid #f44336';
        } else {
            messageEl.style.backgroundColor = 'rgba(33, 150, 243, 0.1)';
            messageEl.style.color = '#2196f3';
            messageEl.style.border = '1px solid #2196f3';
        }

        messageEl.style.display = 'block';

        // Auto-hide success messages
        if (type === 'success') {
            setTimeout(() => {
                messageEl.style.display = 'none';
            }, 5000);
        }
    }

    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean} - True if valid email format
     */
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
