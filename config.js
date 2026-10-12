const config = {
    event: {
        defaultEventId: "isabella-puente-mendez-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },

    seo: {
        titulo: "XV Isabella Puente Mendez",
        descripcion: "Celebra conmigo mis XV el 7 de noviembre de 2026.",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Isabella Puente Mendez",
        fecha: "07-11-2026",
        fechaVisible: "Sábado 7 de Noviembre de 2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Basílica de Santo Domingo",
            hora: "14:00 hrs",
            direccion: "12 Avenida 10-09, Zona 1, Ciudad de Guatemala",
            ubicacionUrl: "https://maps.app.goo.gl/JgdTi9GwvAtD4r8h7"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Club de Oficiales",
            hora: "18:00 hrs",
            direccion: "9a. Avenida y 15 Calle “A”, Zona 13, Ciudad de Guatemala",
            ubicacionUrl: "https://maps.app.goo.gl/MWZosJYVEkcNTgpZ6"
        }
    },

    textos: {
        mensajeInvitado: "Agradecemos que nos confirmes tu asistencia lo antes posible o bien que nos indiques que no podrás acompañarnos.",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#unforgettaVALE",
        instagramUrl: "#",
        facebookUrl: "#",
        marcaTexto: "Diseño",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
