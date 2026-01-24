/**
 * Waitlist Form - FastAPI Backend Integration
 * 
 * This script handles the waitlist form submission and connects
 * to the FastAPI backend API at /waitlist endpoint.
 * 
 * CONFIGURATION:
 * - Update API_BASE_URL to your deployed backend URL
 * - For local development: http://localhost:8000
 * - For production: https://your-api-domain.com
 */

// API Configuration - Update this for production
const API_BASE_URL = 'https://ken-forms.onrender.com';
const WAITLIST_ENDPOINT = `${API_BASE_URL}/waitlist`;

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('waitlistForm');
    const messageEl = document.getElementById('waitlistMessage');
    const submitBtn = document.getElementById('waitlistSubmit');

    if (!form) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('waitlistName').value.trim(),
            email: document.getElementById('waitlistEmail').value.trim(),
            company: document.getElementById('waitlistCompany').value.trim() || null,
            interest: document.getElementById('waitlistInterest').value || null
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
        submitBtn.innerHTML = '<span class="btn-line"></span>Joining...';

        try {
            const response = await fetch(WAITLIST_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                // Success - 201 Created
                showMessage('🎉 You\'re on the waitlist! We\'ll be in touch soon.', 'success');
                form.reset();
            } else if (response.status === 409) {
                // Email already exists
                showMessage('This email is already on our waitlist. We\'ll be in touch soon!', 'info');
            } else if (response.status === 422) {
                // Validation error
                const errorMessages = data.errors?.map(e => e.message).join('. ') || 'Please check your input.';
                showMessage(errorMessages, 'error');
            } else {
                // Other errors
                const errorMessage = data.detail || data.message || 'Something went wrong. Please try again.';
                showMessage(errorMessage, 'error');
            }
        } catch (error) {
            console.error('Waitlist submission error:', error);

            // Check if it's a network error (API not available)
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
        messageEl.className = `waitlist-message ${type}`;
        messageEl.style.display = 'block';

        // Auto-hide success and info messages after 5 seconds
        if (type === 'success' || type === 'info') {
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
