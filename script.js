document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementsByClassName("close")[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        // Por enquanto, apenas mostraremos o modal

        modal.style.display = "block"; // Exibe o modal

        // Limpar o formulário
        form.reset();
    });

    // Fecha o modal quando o usuário clica no (x)
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // Fecha o modal quando o usuário clica fora da área do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Rolagem suave para links de navegação
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
