// Halloween Kino — plugin de temas (apiVersion 18).
// Los temas viven en kino-plugin.json (appThemes): son datos, no corren código.
// Este archivo solo ofrece una pantalla de presentación con un botón
// para activar / desactivar el tema principal.

const THEME_ID = "halloween-noche";

export async function screen({ activeTheme }) {
  const on = activeTheme === THEME_ID;
  return {
    type: "ElevatedButton",
    labelText: on ? "Desactivar Halloween 🎃" : "Activar Halloween 🎃",
    labelTextEn: on ? "Turn off Halloween 🎃" : "Turn on Halloween 🎃",
    onPressed: { go: { useTheme: { theme: on ? null : THEME_ID } } },
  };
}

export async function screenEvent() {
  return null;
}
