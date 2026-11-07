/**
 * demo-datos.js — Datos de ejemplo para probar la demo al instante.
 * Se cargan una sola vez, la primera vez que se abre la app (sin usuarios).
 * Usuario: demo · Contraseña: demo. Todo es ficticio.
 */
const DemoDatos = (() => {
  const USUARIO = 'demo';
  const PASSWORD = 'demo';

  // [nombre, categoría, precio en quetzales, emoji, color de fondo]
  const PRODUCTOS = [
    ['Aceite 20W-50 mineral 1 L', 'Lubricantes', 58, '🛢️', '#f4b942'],
    ['Aceite sintético 10W-40 1 L', 'Lubricantes', 95, '🛢️', '#e07a1f'],
    ['Filtro de aceite universal', 'Filtros', 35, '🔩', '#7f8c9a'],
    ['Pastillas de freno delanteras', 'Frenos', 75, '🛑', '#d6361f'],
    ['Balatas de freno trasero', 'Frenos', 60, '🛑', '#b02a18'],
    ['Cadena de transmisión 428H', 'Transmisión', 145, '⛓️', '#4a5568'],
    ['Kit de arrastre (cadena, piñón y corona)', 'Transmisión', 285, '⚙️', '#2d3748'],
    ['Bujía NGK CR7HSA', 'Encendido', 28, '⚡', '#2b6cb0'],
    ['Batería 12V 5Ah', 'Eléctrico', 245, '🔋', '#2f855a'],
    ['Llanta trasera 90/90-18', 'Llantas', 320, '🛞', '#1d1d21'],
  ];

  const CLIENTES = [
    { nombre: 'Taller Moto Servicio (demo)', telefono: '5555-0101', direccion: '4a avenida 10-20, zona 3 (demo)' },
    { nombre: 'Carlos Méndez (demo)', telefono: '5555-0202', direccion: 'Colonia El Milagro, zona 6 (demo)' },
  ];

  function imagenProducto(emoji, color) {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
      `<rect width="200" height="200" fill="${color}"/>` +
      `<text x="100" y="128" font-size="92" text-anchor="middle">${emoji}</text></svg>`;
    return new Blob([svg], { type: 'image/svg+xml' });
  }

  async function sembrar() {
    if (await Auth.existeAlgunUsuario()) return false;

    const admin = await Auth.crearUsuario({
      nombre: 'Administrador Demo', usuario: USUARIO, password: PASSWORD, rol: 'administrador',
    });

    await DB.actualizar(DB.STORES.AJUSTES, {
      id: 1,
      telefonoNegocio: '5555-0123',
      direccionNegocio: 'Calzada Roosevelt 12-34, zona 7, Guatemala (demo)',
    });

    const ahora = Date.now();
    for (const [nombre, categoria, precio, emoji, color] of PRODUCTOS) {
      await DB.agregar(DB.STORES.PRODUCTOS, {
        nombre, precio, categoria, activo: true, creadoEn: ahora,
        imagenBlob: imagenProducto(emoji, color),
      });
    }
    for (const c of CLIENTES) {
      await DB.agregar(DB.STORES.CLIENTES, { ...c, telefonoAlterno: '', notas: '', creadoEn: ahora });
    }

    // Caja ya abierta para poder vender de inmediato.
    await DB.agregar(DB.STORES.CAJAS, {
      usuarioId: admin.id, fechaApertura: ahora, montoInicial: 300,
      fechaCierre: null, montoContado: null, diferencia: null, cerrada: false,
    });
    return true;
  }

  return { USUARIO, PASSWORD, sembrar };
})();
