/**
 * barra-ticket.js — En celular, barra fija abajo con el total del ticket
 * para ir directo a cobrar sin tener que bajar por todo el catálogo.
 */
(function () {
  const barra = document.getElementById('barra-ticket');
  const lista = document.getElementById('carrito-lista');
  const monto = document.getElementById('carrito-total-monto');
  const ticket = document.querySelector('.venta-carrito');
  if (!barra || !lista || !monto || !ticket) return;

  let ticketVisible = false;

  function actualizar() {
    const lineas = lista.querySelectorAll('.carrito-linea').length;
    barra.querySelector('.barra-ticket__texto').textContent =
      lineas === 1 ? '1 producto' : lineas + ' productos';
    barra.querySelector('.barra-ticket__monto').textContent = monto.textContent;
    barra.classList.toggle('oculto', lineas === 0 || ticketVisible);
  }

  new MutationObserver(actualizar).observe(lista, { childList: true, subtree: true });
  new MutationObserver(actualizar).observe(monto, { childList: true, characterData: true, subtree: true });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entradas) => {
      ticketVisible = entradas[0].isIntersecting;
      actualizar();
    }, { threshold: 0.15 }).observe(ticket);
  }

  barra.addEventListener('click', () => {
    ticket.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  actualizar();
})();
