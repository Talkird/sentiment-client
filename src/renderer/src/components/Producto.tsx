import React from 'react'

interface ProductoProps {
  titulo: string
  precio: number
}

function Producto(props: ProductoProps): JSX.Element {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="m-5 w-64 rounded-lg bg-white p-5 shadow-sm">
      <h1 className="text-xl font-bold">{props.titulo}</h1>
      <p className="text-md">{formatCurrency(props.precio)}</p>
      <button className="mt-3 rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
        Añadir al carrito
      </button>
    </div>
  )
}

export default Producto
