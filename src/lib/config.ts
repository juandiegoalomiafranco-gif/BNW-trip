/**
 * Contrasena compartida del viaje.
 *
 * No es seguridad de verdad (es una app estatica: el hash viaja al navegador).
 * Es una puerta para que no entre cualquiera que se tropiece con el link.
 *
 * Para cambiarla: correr en una terminal
 *   node -e "crypto.subtle.digest('SHA-256',new TextEncoder().encode('nuevaclave')).then(b=>console.log(Buffer.from(b).toString('hex')))"
 * y pegar el resultado aquí. La clave se compara en minusculas y sin espacios.
 */
export const PASSWORD_SHA256 =
  '37cee29acf60527636864a10db8834e5c1311193d52ae518ef2ba6f258fbb992' // = "bnw2026"

/** Pista que se muestra debajo del campo de contrasena. Dejar '' para ocultarla. */
export const PASSWORD_HINT = 'La que compartieron en el grupo del viaje.'

/** Versión del almacenamiento local. Subirla invalida los datos guardados. */
export const STORAGE_VERSION = 'v1'
