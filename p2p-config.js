// p2p-config.js
// Configuración de la red P2P para ArbolApp

const P2P_CONFIG = {
    // Servidores STUN de Google (Túneles gratuitos y fiables)
    // Ayudan a conectar detrás de firewalls (Celular vs PC)
    iceServers: [
        { url: 'stun:stun.l.google.com:19302' },
        { url: 'stun:stun1.l.google.com:19302' },
        { url: 'stun:stun2.l.google.com:19302' },
        { url: 'stun:stun3.l.google.com:19302' },
        { url: 'stun:stun4.l.google.com:19302' }
    ],
    debug: 2 // Nivel de depuración alto para ver errores en consola
};
