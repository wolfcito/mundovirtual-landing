import { Particles } from '~/app/components'
import mundoVirtualIcon from '~/public/favicon.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tr from-black via-zinc-600/20 to-black">
      <div className="animate-fade-in my-8 flex flex-col text-center">
        <Image
          src={mundoVirtualIcon}
          alt="icon of Mundo Virtual"
          width={128}
          height={128}
        />
      </div>
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0 md:block" />
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <div className="flex">
        <h1 className="text-edge-outline animate-title z-10 cursor-default whitespace-nowrap bg-white bg-clip-text pb-4 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl">
          Mundo
        </h1>
        <h1 className="text-edge-outline animate-title z-10 cursor-default whitespace-nowrap bg-purple-600 bg-clip-text pb-4 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl">
          Virtual
        </h1>
      </div>

      <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-purple-600/0 via-purple-600/50 to-purple-600/0 md:block" />
      <div className="animate-fade-in my-8 flex flex-col text-center">
        <h2 className="text-sm text-zinc-500">
          Transformando ideas en realidad, construyendo juntos una línea de
          código a la vez.
        </h2>
      </div>
      <div className="animate-fade-in my-8 flex flex-col text-center">
        <Link
          className="mx-4 flex flex-wrap justify-center rounded-xl border border-purple-600 p-4 text-lg text-white outline-2 outline-purple-500/50"
          href="https://m.me/mundovirtual.solutions"
          target="_blank"
        >
          Comencemos a construir un proyecto increíble!
        </Link>
      </div>
    </div>
  )
}
