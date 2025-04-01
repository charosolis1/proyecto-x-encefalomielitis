import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Proyecto X</h3>
            <p>Brindando información clara y accesible sobre la encefalomielitis.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Útiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Información
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@proyectox.org</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>General San Martín, Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-teal-600 text-center">
          <p>&copy; {new Date().getFullYear()} Proyecto X. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

