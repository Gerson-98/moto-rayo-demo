# Moto Rayo – Control de ventas (demo)

Demo de punto de venta para una tienda de repuestos de motocicleta. Funciona sin internet
(PWA) y guarda todo en el navegador del dispositivo. Todos los datos son ficticios.

## Probarla
1. Servir la carpeta con cualquier servidor estático (ej. `npx serve .`) y abrir la dirección en el navegador.
2. La primera vez se cargan solos 10 repuestos, 2 clientes de ejemplo y una caja abierta.
3. Tocar **Entrar a la demo** (usuario `demo`, contraseña `demo`).
4. Ir a **Vender**, tocar productos, elegir pago (en efectivo: "Exacto") y **Confirmar venta**.

Para volver a empezar: borrar los datos del sitio en el navegador (o abrir en una ventana privada nueva).

## Cambios respecto a la app original (frutería)
- Marca "Moto Rayo", logo y colores nuevos; catálogo de repuestos.
- Sin código de vendedor (PIN): la venta, la caja y los gastos se registran con el usuario que inició sesión.
- Datos de ejemplo y acceso rápido en `js/demo-datos.js`.
