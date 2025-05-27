import React from 'react'

export default function LinkSocial({name, reference}:{name:string , reference:string}) {
  return (
    <a
            href={reference}
            className="hover:bg-lime-300 bg-neutral-600 py-3 text-center rounded-lg w-full group transition-colors duration-300 ease-in-out active:bg-lime-400"
          >
            <span className="group-hover:text-black transition-colors duration-300 ease-in-out capitalize font-bold text-white">
              {name}
            </span>
          </a>
  )
}
