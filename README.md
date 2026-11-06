# 🎃 Halloween Kino — tema para Kino TV

Plugin de **temas de la app** (`apiVersion 18`) para Kino TV. Cambia colores, fondo,
bordes, reproductor y **reemplaza el logo de Kino** por uno propio hecho de
telarañas, una araña colgante, un murciélago y una calabaza.

## Qué incluye

| Tema | `id` | Estilo |
|------|------|--------|
| Halloween · Noche | `halloween-noche` | Naranja calabaza sobre negro-morado, bordes violeta |
| Halloween · Bruja | `halloween-bruja` | Verde tóxico y morado sobre negro-verdoso |

- **Logo largo (`wordmark`)**: `KIN` + telaraña como la "O" + `TV`, telaraña en la esquina,
  araña colgando sobre la "I" y un murciélago. Se ve en el menú lateral y la cabecera del
  celular y en el riel abierto del TV.
- **Marca cuadrada (`mark`)**: calabaza tallada, para el riel cerrado del TV.
- Todos los trazos usan los colores del tema (`accent`, `textPrimary`, …), así que el logo
  cambia con la paleta y con los ajustes de la persona.
- **Bordes** en diálogos, menús, cabeceras, tarjetas y paneles (`shape.*Border`).
- **Personalizable** en Ajustes ▸ Apariencia ▸ Personalizar: color de acento (muestras,
  aptas para control remoto), redondeo de tarjetas, tamaño del texto y fondo.
- Pantalla de presentación con un botón para activar o desactivar el tema (`go.useTheme`).
- Sin red, sin código en los temas y sin permisos: `"hosts": []`.

## Requisitos

- **Kino 0.9.81 o superior** (`apiVersion 18`). Los bordes (`*Border`, `colors.border`)
  necesitan Kino 0.9.82; en 0.9.81 se ignoran y el resto del tema funciona igual.

## Archivos

```
kino-plugin.json   manifiesto + los 2 temas + logo vectorial
plugin.js          pantalla de presentación (botón activar/desactivar)
icon.png           ícono 256×256 (propuesta visual)
README.md
```

## Instalar y probar

1. Sube la carpeta a un repositorio de GitHub (por ejemplo `tuusuario/kino-theme-halloween`)
   e instálalo en Kino desde su dirección, como cualquier plugin.
2. Ve a **Ajustes ▸ Apariencia**, elige *Halloween · Noche* o *Halloween · Bruja* y toca
   **Usar este tema**. Kino preguntará si quieres la experiencia completa (recomendada: bordes y sombras).
3. Valida con el kit oficial de plugins de Kino:

```bash
node sdk/validate.mjs .
node sdk/run.mjs --context '{"activeTheme":"halloween-noche"}' . screen
```

## Notas de diseño

- Todos los pares de color cumplen las protecciones de legibilidad de Kino
  (texto 4,5:1, acento 3:1). Si alguno fallara, Kino vuelve a su valor para ese lado.
- El fondo es oscuro, requisito actual de Kino para fondos sin texto propio.
- El logo usa solo trazos vectoriales (`M L Z`), cada `d` por debajo de 2.000 caracteres,
  y el manifiesto pesa unos 15 KB (el límite es 16 KB).
- **Nunca cambies los `id` de los temas** después de publicar: de ellos cuelga la elección
  de cada persona.
- Kino conserva su propio logo en la pantalla de inicio, la puerta de entrada y las
  pantallas donde pide decisiones (compras, consentimientos, código +18).

## Personalizar

- **Colores**: edita `colors` de cada tema.
- **Más temas**: se permiten hasta 8, pero el manifiesto no puede pasar de 16 KB; el logo
  pesa ~6 KB por tema, así que para añadir más conviene reducir los trazos del logo.
- **Precio**: añade `"price": { "kinos": 50, "payTo": "<tu cuenta de 64 hex>" }` a un tema
  si quieres venderlo en kinos.

## Ícono

`icon.png` es una propuesta: calabaza tallada con resplandor, telaraña en la esquina,
araña colgando, murciélagos y estrellas sobre un degradado morado. Puedes cambiarlo por
otro PNG cuadrado de hasta 128 KB.
