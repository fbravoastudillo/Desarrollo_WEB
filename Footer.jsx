import React from 'react'

export default function Foot() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
    <p>&copy; 2024 Casino. Todos los derechos reservados.</p>
    <nav>
        <a href="/terms" style={{ color: '#fff', margin: '0 10px' }}>Términos y Condiciones</a>
        <a href="/privacy" style={{ color: '#fff', margin: '0 10px' }}>Política de Privacidad</a>
        <a href="/contact" style={{ color: '#fff', margin: '0 10px' }}>Contacto</a>
    </nav>
</footer>
  )

}
