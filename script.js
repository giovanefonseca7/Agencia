document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementsByClassName("close")[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        modal.style.display = "block"; 

        form.reset();
    });

    
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    
    const links = document.querySelectorAll('.navbar a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetPosition = document.querySelector(targetId).offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    }
});
