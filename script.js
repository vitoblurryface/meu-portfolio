<script>
  // Espera o DOM carregar completamente
  document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links que começam com #
    const links = document.querySelectorAll('a[href^="#"]');

    // Adiciona o evento de clique
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault(); // Impede o comportamento padrão

        const targetId = this.getAttribute("href").substring(1); // remove o "#"
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  });
</script>
