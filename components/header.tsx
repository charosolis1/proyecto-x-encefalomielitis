import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-teal-700 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="#" className="text-xl font-bold">
              Proyecto X
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="hover:underline">
              Inicio
            </Link>
            <Link href="#" className="hover:underline">
              Información
            </Link>
            <Link href="#" className="hover:underline">
              Recursos
            </Link>
            <Link href="#" className="hover:underline">
              Contacto
            </Link>
          </nav>
        </div>
        <div className="mt-8 mb-12 flex flex-col md:flex-row items-center justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 relative">
            <Image
              src="/images/fundacion-eva-peron.png"
              alt="Fundación Eva Perón"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mx-4 my-6 md:my-0 text-center">Proyecto X</h1>
          <div className="w-32 h-32 md:w-40 md:h-40 relative">
            <Image
              src="/images/fundacion-eva-peron.png"
              alt="Fundación Eva Perón"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

