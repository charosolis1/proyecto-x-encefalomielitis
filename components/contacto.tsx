import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Facebook, Instagram } from "lucide-react"

export function Contacto() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Formulario de contacto</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-sm font-medium">
                Nombre
              </label>
              <Input id="nombre" placeholder="Tu nombre" />
            </div>
            <div className="space-y-2">
              <label htmlFor="apellido" className="text-sm font-medium">
                Apellido
              </label>
              <Input id="apellido" placeholder="Tu apellido" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="mensaje" className="text-sm font-medium">
              Mensaje
            </label>
            <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={5} />
          </div>
          <Button type="submit" className="w-full">
            Enviar mensaje
          </Button>
        </form>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Redes sociales</h3>
        <div className="flex space-x-4 mb-6">
          <a href="#" className="flex items-center space-x-2 text-teal-700 hover:text-teal-900">
            <Facebook className="h-6 w-6" />
            <span>Facebook</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-teal-700 hover:text-teal-900">
            <Instagram className="h-6 w-6" />
            <span>Instagram</span>
          </a>
        </div>

        <h3 className="text-xl font-semibold mb-4 mt-8">Información de contacto</h3>
        <address className="not-italic space-y-2 text-gray-700">
          <p>Proyecto X</p>
          <p>General San Martín, Buenos Aires, Argentina</p>
          <p>Email: info@proyectox.org</p>
          <p>Teléfono: +54 11 1234-5678</p>
        </address>
      </div>
    </div>
  )
}

