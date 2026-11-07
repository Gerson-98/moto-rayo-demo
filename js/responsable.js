/**
 * responsable.js — Quién hace cada venta, caja, gasto o cancelación.
 * En esta demo no hay códigos de vendedor: el responsable es siempre el
 * usuario que tiene la sesión iniciada.
 *
 * Responsable.pedir(titulo) devuelve una promesa con { id, nombre }, o null
 * si no hay sesión.
 */
const Responsable = {
  pedir() {
    const sesion = Auth.obtenerSesion();
    return Promise.resolve(sesion ? { id: sesion.id, nombre: sesion.nombre } : null);
  },
};
