/*
 * Ejecutar en la consola del navegador con index.html abierto.
 * Crea/actualiza config e invitados y deja RSVP/deseos vacíos.
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAqOZQ5YFOdhL6dblHI5wIx10m6n4xt2Fg",
  authDomain: "buenosdeseos-twodesign.firebaseapp.com",
  databaseURL: "https://buenosdeseos-twodesign-default-rtdb.firebaseio.com",
  projectId: "buenosdeseos-twodesign",
  storageBucket: "buenosdeseos-twodesign.firebasestorage.app",
  messagingSenderId: "577908051871",
  appId: "1:577908051871:web:27fbd4e06b3d18da14b7aa"
};

const app = initializeApp(firebaseConfig, "isabella-seed");
const db = getDatabase(app);

export async function crearEventoIsabella() {
  const eventId = window.EventContext?.eventId || window.config?.event?.defaultEventId;
  const invitados = Object.fromEntries(
    Object.entries(window.GuestConfig?.invitados || {}).map(([id, guest]) => [id, {
      id,
      nombre: String(guest.nombre || "").trim(),
      pases: Math.max(1, Number(guest.pases) || 1),
      activo: true
    }])
  );

  if (!eventId || Object.keys(invitados).length === 0) {
    throw new Error("Debe abrir la invitación y cargar GuestConfig antes de ejecutar el seed.");
  }

  const eventConfig = {
    ...window.config,
    event: { ...window.config.event },
    seededAt: new Date().toISOString()
  };

  const eventPath = `eventos/${eventId}`;
  await set(ref(db, `${eventPath}/config`), eventConfig);
  await set(ref(db, `${eventPath}/rsvp`), {});
  await set(ref(db, `${eventPath}/deseos`), {});
  await Promise.all(Object.entries(invitados).map(([id, guest]) =>
    set(ref(db, `${eventPath}/invitados/${id}`), guest)
  ));

  return { ok: true, eventId, invitados: Object.keys(invitados).length };
}

window.crearEventoIsabella = crearEventoIsabella;
