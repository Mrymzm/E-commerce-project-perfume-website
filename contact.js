document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
     
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            submitForm(name, email, message);
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function submitForm(name, email, message) {

        const formData = {
            name: name,
            email: email,
            message: message
        };
        
        console.log('Form submitted:', formData);
        

        alert('Thank you for your message! We will get back to you soon.');
        
      
        contactForm.reset();
        
       
    }
});