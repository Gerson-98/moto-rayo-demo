/**
 * demo-datos.js — Datos de ejemplo para probar la demo al instante.
 * Se cargan una sola vez, la primera vez que se abre la app (sin usuarios).
 * Usuario: demo · Contraseña: demo. Precios y datos de contacto son ficticios.
 */
const DemoDatos = (() => {
  const USUARIO = 'demo';
  const PASSWORD = 'demo';
  const VERSION_CATALOGO = '3';
  const CLAVE_VERSION = 'moto-rayo-catalogo';

  // Nombres del catálogo anterior, para reemplazarlos en quien ya abrió la demo.
  const NOMBRES_ANTERIORES = [
    'Aceite 20W-50 mineral 1 L', 'Aceite sintético 10W-40 1 L', 'Filtro de aceite universal',
    'Pastillas de freno delanteras', 'Balatas de freno trasero', 'Cadena de transmisión 428H',
    'Kit de arrastre (cadena, piñón y corona)', 'Bujía NGK CR7HSA', 'Batería 12V 5Ah',
    'Llanta trasera 90/90-18',
  ];

  // [nombre, categoría, precio en quetzales, dibujo]
  const PRODUCTOS = [
    ['Aceite Motul 3000 4T 20W-50, 1 L', 'Lubricantes', 62, 'aceite'],
    ['Aceite sintético Castrol Power1 10W-40, 1 L', 'Lubricantes', 98, 'aceite'],
    ['Filtro de aceite Honda CG 125/150', 'Filtros', 32, 'filtro'],
    ['Filtro de aire CG 150', 'Filtros', 45, 'filtroAire'],
    ['Bujía NGK CR7HSA', 'Encendido', 28, 'bujia'],
    ['Foco de faro H4 35/35 W', 'Eléctrico', 25, 'foco'],
    ['Batería YTX5L-BS 12 V 5 Ah', 'Eléctrico', 245, 'bateria'],
    ['Pastillas de freno delanteras Pulsar 180', 'Frenos', 75, 'pastilla'],
    ['Zapatas (balatas) traseras CG 125', 'Frenos', 55, 'zapata'],
    ['Cadena DID 428H, 120 eslabones', 'Transmisión', 148, 'cadena'],
    ['Kit de arrastre 428H 14T/43T CG 150', 'Transmisión', 285, 'sprocket'],
    ['Cable de clutch universal', 'Controles', 38, 'cable'],
    ['Amortiguador trasero 330 mm (par)', 'Suspensión', 295, 'amortiguador'],
    ['Llanta trasera 90/90-18', 'Llantas', 320, 'llanta'],
  ];

  const CLIENTES = [
    { nombre: 'Taller Moto Servicio (demo)', telefono: '5555-0101', direccion: '4a avenida 10-20, zona 3 (demo)' },
    { nombre: 'Carlos Méndez (demo)', telefono: '5555-0202', direccion: 'Colonia El Milagro, zona 6 (demo)' },
  ];

  // Dibujos de línea (viewBox 0 0 120 120) en ámbar sobre grafito.
  const DIBUJOS = {
    aceite: '<path d="M38 44h38l8 10v40a6 6 0 0 1-6 6H38a6 6 0 0 1-6-6V50a6 6 0 0 1 6-6z"/><path d="M46 44V34h22v10M84 62l14-8v22l-14 6"/><path d="M42 70h32M42 82h32"/>',
    filtro: '<rect x="36" y="30" width="48" height="62" rx="6"/><path d="M36 46h48M36 76h48M46 92v10h28V92"/><path d="M52 30v-8h16v8"/>',
    filtroAire: '<rect x="22" y="38" width="76" height="46" rx="5"/><path d="M34 38v46M46 38v46M58 38v46M70 38v46M82 38v46"/>',
    bujia: '<path d="M50 20h20v18H50z"/><path d="M46 38h28v10H46zM52 48h16v34H52z"/><path d="M52 60h16M52 70h16M60 82v14M52 96h16"/>',
    foco: '<path d="M60 22c-18 0-30 13-30 28 0 10 6 17 12 24v10h36V74c6-7 12-14 12-24 0-15-12-28-30-28z"/><path d="M46 92h28M50 102h20M52 50l8 14 8-14"/>',
    bateria: '<rect x="20" y="42" width="80" height="50" rx="5"/><path d="M34 42V32h14v10M72 42V32h14v10M32 67h16M40 59v16M72 67h16"/>',
    pastilla: '<path d="M26 82c0-30 16-52 34-52s34 22 34 52z"/><path d="M38 82c0-20 9-34 22-34s22 14 22 34M60 30v18"/>',
    zapata: '<path d="M26 84C20 56 36 32 60 32s40 24 34 52"/><path d="M36 84C32 62 44 44 60 44s28 18 24 40"/><path d="M26 84h68M56 32V22h8v10"/>',
    cadena: '<rect x="14" y="46" width="30" height="28" rx="14"/><rect x="38" y="46" width="30" height="28" rx="14"/><rect x="62" y="46" width="30" height="28" rx="14"/><path d="M26 60h6M50 60h6M74 60h6"/>',
    sprocket: '<circle cx="60" cy="60" r="34"/><circle cx="60" cy="60" r="12"/><path d="M60 26v-8M60 102v-8M26 60h-8M102 60h-8M36 36l-6-6M90 90l-6-6M84 36l6-6M30 90l6-6"/><path d="M60 48v-6M60 78v-6M48 60h-6M78 60h-6"/>',
    cable: '<path d="M24 92c0-30 22-8 36-34s36-6 36-34"/><circle cx="24" cy="92" r="6"/><circle cx="96" cy="24" r="6"/><path d="M30 90c0-26 22-4 36-30s30-6 30-32" stroke-dasharray="3 5"/>',
    amortiguador: '<path d="M60 14v14M54 28h12v14H54z"/><path d="M48 46h24M48 52h24M48 58h24M48 64h24M48 70h24M48 76h24"/><path d="M60 80v18"/><circle cx="60" cy="104" r="6"/><circle cx="60" cy="14" r="0.1"/>',
    llanta: '<circle cx="60" cy="60" r="40"/><circle cx="60" cy="60" r="26"/><circle cx="60" cy="60" r="7"/><path d="M60 34v19M60 67v19M34 60h19M67 60h19M42 42l13 13M65 65l13 13M78 42L65 55M55 65L42 78"/>',
  };

  function imagenProducto(clave) {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">' +
      '<rect width="200" height="200" fill="#1b1e23"/>' +
      '<path d="M0 200L200 0v40L40 200z" fill="#23272e"/>' +
      '<rect x="0" y="188" width="200" height="12" fill="#f5a300"/>' +
      '<g transform="translate(40 36) scale(1.0)" fill="none" stroke="#f5a300" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">' +
      DIBUJOS[clave] + '</g></svg>';
    return new Blob([svg], { type: 'image/svg+xml' });
  }

  async function agregarCatalogo(existentes = []) {
    const ahora = Date.now();
    for (const [nombre, categoria, precio, dibujo] of PRODUCTOS) {
      if (existentes.includes(nombre)) continue;
      await DB.agregar(DB.STORES.PRODUCTOS, {
        nombre, precio, categoria, activo: true, creadoEn: ahora,
        imagenBlob: imagenProducto(dibujo),
      });
    }
  }

  function guardarVersion() {
    try { localStorage.setItem(CLAVE_VERSION, VERSION_CATALOGO); } catch (e) { /* sin almacenamiento */ }
  }

  function versionGuardada() {
    try { return localStorage.getItem(CLAVE_VERSION); } catch (e) { return null; }
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

    await agregarCatalogo();
    for (const c of CLIENTES) {
      await DB.agregar(DB.STORES.CLIENTES, { ...c, telefonoAlterno: '', notas: '', creadoEn: Date.now() });
    }

    // Caja ya abierta para poder vender de inmediato.
    await DB.agregar(DB.STORES.CAJAS, {
      usuarioId: admin.id, fechaApertura: Date.now(), montoInicial: 300,
      fechaCierre: null, montoContado: null, diferencia: null, cerrada: false,
    });
    guardarVersion();
    return true;
  }

  // Quien abrió la demo antes de este catálogo: se reemplazan solo los
  // productos de ejemplo viejos; lo que haya creado la persona se respeta.
  async function actualizarCatalogo() {
    if (versionGuardada() === VERSION_CATALOGO) return;
    const productos = await DB.obtenerTodos(DB.STORES.PRODUCTOS);
    const nuevos = PRODUCTOS.map((p) => p[0]);
    const viejos = productos.filter((p) => NOMBRES_ANTERIORES.includes(p.nombre) && !nuevos.includes(p.nombre));
    if (viejos.length > 0) {
      for (const p of viejos) await DB.eliminar(DB.STORES.PRODUCTOS, p.id);
      await agregarCatalogo(productos.map((p) => p.nombre));
    }
    guardarVersion();
  }

  // Garantiza que la cuenta demo/demo exista.
  async function asegurarCuentaDemo() {
    const existente = await DB.obtenerUnoPorIndice(DB.STORES.USUARIOS, 'usuario', USUARIO);
    if (!existente) {
      await Auth.crearUsuario({
        nombre: 'Administrador Demo', usuario: USUARIO, password: PASSWORD, rol: 'administrador',
      });
    }
  }

  return { USUARIO, PASSWORD, sembrar, actualizarCatalogo, asegurarCuentaDemo };
})();
