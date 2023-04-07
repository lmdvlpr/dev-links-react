import React from 'react'

export function Footer() {
  return (
    <p className="text-slate-700 dark:text-slate-500 text-sm text-center mb-10">
      {new Date().getFullYear()} - Criado com ❤ por Lucas Mota
    </p>
  )
}
