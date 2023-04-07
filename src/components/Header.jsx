import React from 'react'
import avatar from '../assets/avatar.jpg'

export function Header() {
  return (
    <div>
      <img
        className="w-32 h-32 rounded-full border-[4px] border-violet-600 mx-auto round mt-10"
        src={avatar}
        alt="Avatar do Lucas Mota"
      />
      <h1 className="text-3xl text-sky-500 font-bold text-center dark:text-sky-400">Lucas Mota</h1>
      <p className="text-slate-700 dark:text-slate-500 text-sm text-center mb-10">
        Desenvolvedor Frontdend
      </p>
    </div>
  )
}
