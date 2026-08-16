(function () {
  const WHATSAPP_NUMBER = "5581985151099"; // (81) 98515-1099

  function buildWhatsappLink(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  const defaultMessage =
    "Olá! Vim pelo site e gostaria de saber mais sobre os serviços de captação e edição.";

  // Generic CTAs (header, avulso section, contact section, floating button)
  const genericLinks = [
    { el: document.getElementById("cta-header"), msg: defaultMessage },
    { el: document.getElementById("cta-avulso"), msg: "Olá! Tenho fotos/vídeos prontos e gostaria de um orçamento para edição avulsa." },
    { el: document.getElementById("cta-final"), msg: defaultMessage },
    { el: document.getElementById("wpp-float"), msg: defaultMessage },
  ];

  genericLinks.forEach(({ el, msg }) => {
    if (el) el.href = buildWhatsappLink(msg);
  });

  // Package cards
  document.querySelectorAll(".wpp-pacote").forEach((btn) => {
    const pacote = btn.dataset.pacote;
    const detalhe = btn.dataset.detalhe;
    const preco = btn.dataset.preco;
    const message = `Olá! Quero contratar o ${pacote} (${detalhe}) por ${preco}.`;
    btn.href = buildWhatsappLink(message);
  });

  // Avulso price table rows
  document.querySelectorAll(".wpp-avulso-item").forEach((row) => {
    const item = row.dataset.item;
    const preco = row.dataset.preco;
    const message = `Olá! Gostaria de solicitar edição avulsa: ${item} — ${preco}.`;
    row.addEventListener("click", () => {
      window.open(buildWhatsappLink(message), "_blank", "noopener");
    });
  });
})();
