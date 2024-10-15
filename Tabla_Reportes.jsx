import React from 'react'

export default function Component() {
  return (
    <div class="table-container">
   
    <table id="tabla_reportes" class="table-report">
        <thead>
            <tr>
                <th>Venta</th>
                <th>Contenido</th>
                <th>Detalles</th>
                <th>Neto</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>12345</td>
                <td>Producto X</td>
                <td>Detalles del producto</td>
                <td>$1,000</td>
                <td>$1,200</td>
            </tr>
            <tr>
                <td>12346</td>
                <td>Producto Y</td>
                <td>Detalles del producto</td>
                <td>$500</td>
                <td>$600</td>
            </tr>
            {[...Array(15)].map((_, index) => (
                <tr key={index}>
                    <td>{12347 + index}</td>
                    <td>Producto {String.fromCharCode(90 - index)}</td>
                    <td>Detalles del producto</td>
                    <td>${(index + 1) * 100}</td>
                    <td>${(index + 1) * 120}</td>
                </tr>
            ))}
        </tbody>
    </table>
    <button class="exportar">Exportar</button>
</div>

  )
}
