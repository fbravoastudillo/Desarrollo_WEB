import React from 'react'

export default function Nav() {
  return (
    <nav class="navbar">
        <div class="logo"><img src="./casino.jpg" alt="" /></div>
        <div className="h2">Casino</div>
        <div>
            <a href="#">Inicio</a>
            <a href="#">Usuarios</a>
            <a href="#">Tickets</a>
            <a href="/reportes/src/Reportes.js">Reportes</a> 
        </div>
    </nav>
  )
}
