# A&A Creaciones

Catálogo web de ramos eternos, manualidades y postres. Es un solo archivo (`index.html`), sin dependencias ni proceso de compilación.

## Publicar en GitHub Pages

1. Sube `index.html` y este `README.md` a la raíz del repositorio.
2. En el repositorio, entra a **Settings → Pages**.
3. En **Source** elige **Deploy from a branch**, la rama `main` y la carpeta `/ (root)`.
4. Guarda. En un par de minutos el sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## Datos que conviene cambiar

Dentro de `index.html`, al inicio del bloque `<script>`:

- `WHATSAPP`: número con código de país, sin `+` ni espacios.
- `REDES`: enlaces de Instagram y TikTok.
- `PRECIOS`: precios en miles de guaraníes, en el mismo orden de los productos.

## Panel de edición

Es solo una vista de interfaz: los cambios no se guardan y se pierden al recargar. La contraseña se comprueba en el propio navegador, por lo que no ofrece seguridad real. Para guardar cambios hace falta un servidor.
