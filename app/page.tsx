import { Accordion } from "../components/acordeon"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { Contacto } from "../components/contacto"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Introducción</h2>
          <p className="text-lg text-gray-700">
            La encefalomielitis es una enfermedad sobre la cual no existen actualmente estudios suficientes que
            determinen su alcance. Debido a esta falta de investigación, no hay campañas específicas de prevención,
            diagnóstico temprano ni guías claras para su abordaje en el sistema de salud.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Por ello, nuestro objetivo es desarrollar un sitio web que brinde información profesional sobre la
            enfermedad, recursos de atención, acceso a grupos de apoyo y redes de socialización entre pacientes, así
            como estrategias de cuidado para quienes la padecen y sus acompañantes, ya sean familiares o amistades.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Para ampliar nuestro alcance, implementaremos estrategias en redes sociales dirigidas a personas tanto a
            nivel nacional como internacional. Además, realizaremos un relevamiento inicial de pacientes con el
            propósito de comprender sus trayectorias de vida y su relación con las instituciones de salud, educación y
            trabajo. Este estudio nos permitirá fortalecer la autonomía de los pacientes, fomentar el autoregistro de su
            estado de salud y mejorar la circulación de la información disponible.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Objetivos</h2>
          <h3 className="text-xl font-semibold mb-2">Objetivo general:</h3>
          <p className="text-lg text-gray-700 mb-4">Brindar información clara y accesible sobre la encefalomielitis.</p>

          <h3 className="text-xl font-semibold mb-2">Objetivos específicos:</h3>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li className="mb-2">Diseñar una página web con contenido informativo y actualizado.</li>
            <li className="mb-2">
              Crear y gestionar perfiles en redes sociales (Instagram y Facebook) para ampliar el alcance.
            </li>
            <li className="mb-2">Brindar asesoramiento y orientación a pacientes.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Secciones del sitio</h2>
          <Accordion />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
          <Contacto />
        </section>
      </main>
      <Footer />
    </div>
  )
}

