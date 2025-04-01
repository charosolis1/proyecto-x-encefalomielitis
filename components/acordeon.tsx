import {
  Accordion as AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Accordion() {
  return (
    <AccordionRoot type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-medium">1. ¿Qué es la encefalomielitis?</AccordionTrigger>
        <AccordionContent>
          <div className="p-4 text-gray-700">
            <ul className="list-disc pl-5 space-y-2">
              <li>Definición y causas de la enfermedad.</li>
              <li>Tipos de encefalomielitis y síntomas asociados.</li>
              <li>Situación a nivel mundial, en Latinoamérica y en Argentina.</li>
              <li>Datos epidemiológicos disponibles.</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg font-medium">
          2. Principales desafíos en el diagnóstico y tratamiento según cada región
        </AccordionTrigger>
        <AccordionContent>
          <div className="p-4 text-gray-700">
            <h3 className="font-semibold text-lg mb-2">Tratamiento</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Opciones terapéuticas actuales.</li>
              <li>Avances en la investigación médica.</li>
            </ul>

            <h3 className="font-semibold text-lg mb-2">Orientación para estudios de laboratorio</h3>
            <ul className="list-disc pl-5">
              <li>Exámenes y pruebas recomendadas para el diagnóstico.</li>
              <li>Cómo interpretar los resultados.</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg font-medium">3. Recursero</AccordionTrigger>
        <AccordionContent>
          <div className="p-4 text-gray-700">
            <ul className="list-disc pl-5">
              <li>Listado de centros de salud y profesionales especializados.</li>
              <li>Organizaciones y asociaciones de pacientes.</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg font-medium">4. Herramientas de inteligencia artificial</AccordionTrigger>
        <AccordionContent>
          <div className="p-4 text-gray-700">
            <ul className="list-disc pl-5">
              <li>Aplicaciones y desarrollos tecnológicos para el monitoreo de la enfermedad.</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg font-medium">5. Grupos de socialización</AccordionTrigger>
        <AccordionContent>
          <div className="p-4 text-gray-700">
            <ul className="list-disc pl-5">
              <li>Espacios de intercambio y apoyo mutuo para pacientes y acompañantes.</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg font-medium">
          6. Primer relevamiento – Acceso a la encuesta
        </AccordionTrigger>
        <AccordionContent>
          <div className="p-4 text-gray-700">
            <p>Encuesta para pacientes con el fin de recolectar información sobre su experiencia y necesidades.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}

