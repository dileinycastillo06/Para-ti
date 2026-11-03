# Para ti · página web romántica

## Archivos
- `index.html` · estructura de las escenas
- `styles.css` · diseño, paleta, animaciones CSS
- `script.js` · corazones, transiciones (GSAP), música, carta
- `foto.jpg` · **tu fotografía** (tú la agregas, ver abajo)

## 1. Tu fotografía
Guarda tu imagen en esta misma carpeta con el nombre **foto.jpg**.
Si tiene otro nombre o formato (por ejemplo `nosotros.png`), cámbialo en `script.js`:

```js
photo: 'foto.jpg',
```

Se muestra con sus proporciones originales, sin recortes ni filtros sobre la imagen.
Mientras no esté el archivo verás un marco punteado que dice «Aquí va tu fotografía».

## 2. La música
La canción empieza con el **primer toque o clic en cualquier parte de la pantalla** (los navegadores
no permiten sonido automático sin que la persona toque algo). Entra con un fade suave y se repite sola.

**Opción recomendada (más fiable): tu propio archivo de audio.**
Guarda la canción como `cancion.mp3` en esta carpeta. Funciona abriendo `index.html` con doble clic,
sin internet y sin depender de YouTube. Si el archivo no existe, la página usa YouTube.

**Opción YouTube:** YouTube no reproduce si abres `index.html` con doble clic (`file://`).
Hay que servirla por `http(s)`:
- En tu computadora: `python3 -m http.server 8000` y entra a `http://localhost:8000`.
- Para enviársela: súbela a Netlify Drop, GitHub Pages o Cloudflare Pages.

## 3. Personalizar la carta
Todo el texto está al inicio de `script.js`, en `CONFIG.letter`. Cada elemento de la lista es un párrafo.
Te recomiendo añadir uno o dos recuerdos concretos (un lugar, una fecha, una frase que solo ustedes entiendan):
hará la carta mucho más personal. También puedes cambiar la velocidad con `typingSpeed`.

## 4. Controles
- **Siguiente**: pasa a la foto y la carta.
- **Volver**: regresa a la pantalla inicial.
- **Mostrar todo / Releer**: muestra la carta completa al instante, o la vuelve a escribir.
- **Icono de música** (arriba a la derecha): pausa y reanuda.
- Tocar la foto o el corazón final lanza corazones.
