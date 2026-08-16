(function () {
  // Edite aqui para trocar o número/link do WhatsApp.
  const WHATSAPP_NUMBER = "5581985151099"; // (81) 98515-1099

  function buildWhatsappLink(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  const defaultMessage =
    "Olá! Vim pelo site e gostaria de saber mais sobre os serviços de conteúdo.";

  // CTAs genéricos (header, header mobile, avulso, contato, botão flutuante)
  const genericLinks = [
    { el: document.getElementById("cta-header"), msg: defaultMessage },
    { el: document.getElementById("cta-mobile"), msg: defaultMessage },
    { el: document.getElementById("cta-avulso"), msg: "Olá! Tenho fotos/vídeos prontos e gostaria de um orçamento para edição avulsa." },
    { el: document.getElementById("cta-final"), msg: defaultMessage },
    { el: document.getElementById("wpp-float"), msg: defaultMessage },
  ];

  genericLinks.forEach(({ el, msg }) => {
    if (el) el.href = buildWhatsappLink(msg);
  });

  // Pacotes de captação + edição
  document.querySelectorAll(".wpp-pacote").forEach((btn) => {
    const pacote = btn.dataset.pacote;
    const detalhe = btn.dataset.detalhe;
    const message = `Olá! Tenho interesse no ${pacote} (${detalhe}). Poderia me passar mais informações?`;
    btn.href = buildWhatsappLink(message);
  });

  // Itens de edição avulsa (clicáveis)
  document.querySelectorAll(".wpp-avulso").forEach((item) => {
    const label = item.dataset.item;
    const preco = item.dataset.preco;
    const message = `Olá! Tenho material pronto e gostaria de orçamento para edição avulsa: ${label} (${preco}).`;
    item.addEventListener("click", () => {
      window.open(buildWhatsappLink(message), "_blank", "noopener");
    });
  });

  // Menu mobile
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuToggle.classList.toggle("open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
