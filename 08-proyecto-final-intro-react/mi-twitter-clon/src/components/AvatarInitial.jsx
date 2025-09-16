// AvatarInitial.jsx
import React from 'react'

/**
 * Props:
 * - name: string (texto del que se extrae la inicial)
 * - size: "sm" | "md" | "lg" | number (px) (opcional)
 * - className: string (clases tailwind adicionales)
 * - imageUrl: string (opcional: si provees url, muestra imagen y si falla usa inicial)
 * - alt: string (texto alternativo para la imagen)
 */
export default function AvatarInitial ({
  name = '',
  size = 'md',
  imageUrl = null,
  alt = '',
}) {
  // palette de colores Tailwind (variante 500/600 para buen contraste)
  const COLORS = [
    'bg-rose-500',
    'bg-amber-500',
    'bg-lime-600',
    'bg-emerald-500',
    'bg-cyan-500',
    'bg-sky-500',
    'bg-indigo-500',
    'bg-violet-500',
    'bg-pink-500',
    'bg-fuchsia-500',
    'bg-orange-500',
    'bg-yellow-500',
  ]

  // extrae inicial segura
  const initial = (name && name.trim().charAt(0)) ? name.trim().charAt(0).toUpperCase() : '?'

  // hash muy simple para seleccionar color según texto (determinístico)
  function hashString (str) {
    let h = 0
    for (let i = 0; i < str.length; i++) {
      h = (h << 5) - h + str.charCodeAt(i)
      h |= 0
    }
    return Math.abs(h)
  }
  const colorClass = COLORS[hashString(name || initial) % COLORS.length]

  // clases por tamaño (tailwind)
  const sizeMap = {
    sm: 'h-8 w-8 text-sm',
    md: 'h-12 w-12 text-lg',
    lg: 'h-16 w-16 text-2xl',
  }

  const isNumeric = typeof size === 'number'
  const numericStyle = isNumeric ? { width: size, height: size, fontSize: Math.round(size * 0.45) } : {}

  // control de fallback para imagen (si imageUrl falla, se muestra inicial)
  const [imgFailed, setImgFailed] = React.useState(false)
  const showImage = imageUrl && !imgFailed

  return (
    <div
      className='inline-flex items-center justify-center rounded-full overflow-hidden'
      style={numericStyle}
      aria-label={alt || `Avatar de ${name || 'usuario'}`}
      title={name || 'Usuario'}
    >
      {showImage
        ? (
          <img
            src={imageUrl}
            alt={alt || name}
            className='object-cover w-full h-full'
            onError={() => setImgFailed(true)}
          />
          )
        : (
          <div
            className={`flex items-center justify-center text-white font-semibold rounded-full ${isNumeric ? '' : sizeMap[size] || sizeMap.md} ${colorClass}`}
          >
            {initial}
          </div>
          )}
    </div>
  )
}
