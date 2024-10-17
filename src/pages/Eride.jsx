import React, { useEffect, useRef } from 'react'
import erideLogo from '../assets/images/proyect_logos/eride_full_logo.png'
import erideVideo from '../assets/video/eride_video.mp4'

export default function Eride() {
  const desafios = [
    {
      topic: 'Optimización de Rendimiento',
      description: [
        'Implementación de lazy loading para imágenes de productos',
        'Paginación en el backend para manejar grandes volúmenes de datos',
      ],
    },
    {
      topic: 'Seguridad',
      description: [
        'Implementación de rate limiting para prevenir ataques de fuerza bruta',
        'Sanitización de inputs para prevenir inyecciones NoSQL',
      ],
    },
    {
      topic: 'UX/UI',
      description: [
        'Diseño responsive para una experiencia consistente en todos los dispositivos',
        'Feedback visual inmediato en interacciones del usuario (e.g., agregar a favoritos)',
      ],
    },
  ]

  const implementacion = [
    {
      topic: 'Frontend (React)',
      description: [
        'Utilización de hooks de React para manejo de estado y efectos secundarios',
        'Implementación de Context API para gestión global del estado de autenticación',
        'Componentes reutilizables para elementos de UI comunes',
        'Rutas protegidas utilizando un HOC (Higher-Order Component) personalizado',
      ],
    },
    {
      topic: 'Backend (Expess)',
      description: [
        'Arquitectura MVC para una clara separación de responsabilidades',
        'Middleware de autenticación para proteger rutas sensibles',
        'Validación de datos de entrada utilizando express-validator',
      ],
    },
    {
      topic: 'Base de Datos (MongoDB con Mongoose)',
      description: [
        'Esquemas de Mongoose para modelado de datos (usuarios, productos)',
        'Índices para optimización de consultas frecuentes',
      ],
    },
    {
      topic: 'Autenticación y Seguridad',
      description: [
        'JWT para manejo de sesiones sin estado',
        'Almacenamiento seguro de tokens en cookies httpOnly',
        'Encriptación de datos sensibles utilizando CryptoJS',
      ],
    },
  ]

  const principal = [
    {
      topic: 'Catálogo de productos',
      description: [
        'Los usuarios pueden ver una lista de monopatines eléctricos disponibles, con detalles de cada producto.',
        'Barra de búsqueda con filtros por nombre',
      ],
    },
    {
      topic: 'Sistema de Autenticación',
      description: [
        'Registro y login de usuarios',
        'Autenticación mediante JWT almacenado en cookies',
        'Rutas protegidas utilizando React Context',
      ],
    },
    {
      topic: 'Perfil de Usuario',
      description: [
        'Guardado de productos favoritos',
        'Almacenamiento de información de envío',
      ],
    },
    {
      topic: 'Pagos',
      description: ['Integración con MercadoPago para procesamiento de pagos'],
    },
    {
      topic: 'Panel de Administración',
      description: [
        'Gestión de productos (CRUD)',
        'Visualización de pedidos y estadísticas',
      ],
    },
    { topic: '', description: [] },
    { topic: '', description: [] },
  ]

  const videoRef = useRef(null)

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error al reproducir el video:', error)
      })
    }
  }

  useEffect(() => {
    playVideo()
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideo()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])
  return (
    <>
      <header class='relative text-white h-screen py-4 flex items-center justify-center'>
        <div>
          <img
            className='h-48 w-96 px-3 md:w-[35em] object-contain '
            src={erideLogo}
            alt='Eride Logo'
          />
        </div>
        <video
          ref={videoRef}
          loop
          className={`brightness-50   -z-10  absolute object-cover object-top w-full pointer-events-none h-full`}
          width='1920'
          height='600'
        >
          <source type='video/mp4' src={erideVideo} />
        </video>
      </header>
      <div className='w-full items-center flex justify-center py-20'>
        <div className='max-w-[45em] flex flex-col items-center justify-center gap-10'>
          <section className='doc-section'>
            <h2 className='doc-title'>Descripción</h2>
            <p>
              Este e-commerce está diseñado para la venta de monopatines
              eléctricos. Los usuarios pueden navegar por el catálogo, realizar
              búsquedas filtradas, agregar productos a sus favoritos, guardar
              información de envío y realizar pagos mediante MercadoPago. El
              sistema asegura la autenticación y protección de datos.
            </p>
          </section>

          <div class='overflow-x-auto'>
            <table class='min-w-full bg-white border border-gray-300 shadow-sm rounded-lg overflow-hidden'>
              <thead class='bg-gray-50'>
                <tr>
                  <th
                    colspan='5'
                    class='px-6 py-3 text-center text-xl font-semibold text-gray-700 uppercase tracking-wider border-b'
                  >
                    Stack Tecnológico
                  </th>
                </tr>
                <tr>
                  <th class='px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b'>
                    Frontend
                  </th>
                  <th class='px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b'>
                    Backend
                  </th>
                  <th class='px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b'>
                    Pagos Online
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class='px-6 py-4 text-sm text-gray-700 align-top'>
                    <ul class='doc-stack text-white ronded-xl space-y-2'>
                      <li>React</li>
                      <li>Tailwind</li>
                      <li>Fetch API</li>
                      <li>useContext para manejo de estados</li>
                      <li>Validación de token en cookies</li>
                      <li>Barra de búsqueda con filtros</li>
                    </ul>
                  </td>
                  <td class='px-6 py-4 text-sm  text-gray-700 align-top'>
                    <ul class='doc-stack space-y-2 [&_li]:bg-green-800'>
                      <li>Express</li>
                      <li>MongoDB con Mongoose</li>
                      <li>JWT para autenticación</li>
                      <li>CryptoJS para encriptación de datos</li>
                      <li>Zod para la validación de datos</li>
                    </ul>
                  </td>
                  <td class='px-6 py-4 text-sm text-gray-700 align-top'>
                    <ul class='doc-stack space-y-2 [&_li]:bg-yellow-800'>
                      <li>Integración con la API de MercadoPago</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <NumeredList title={'Características Principales'}>
            {principal}
          </NumeredList>

          <section className='doc-section'>
            <video
              className={`border-2 border-black rounded-lg   object-cover border-transparent object-top w-full h-full`}
              width='1920'
              height='600'
              controls
              muted
            >
              <source
                type='video/mp4'
                src={
                  'https://github.com/user-attachments/assets/dc56e657-1848-4503-bb23-209757a0b5a1'
                }
              />
            </video>
            <p className='text-gray-500'>Filtrado de productos</p>
          </section>

          <NumeredList title={'Detalles de Implementación'}>
            {implementacion}
          </NumeredList>

          <NumeredList title={'Desafíos y Soluciones'}>{desafios}</NumeredList>
          <section className='doc-section'>
            <video
              className='shadow-xl   object-cover border-transparent object-top w-full h-full'
              width='1920'
              height='600'
              muted
              controls
            >
              <source
                type='video/mp4'
                src={
                  'https://github.com/user-attachments/assets/24a9aa0a-b2da-48e4-a3c1-724b5c0d9b35'
                }
              />
            </video>
            <p className='text-gray-500'>Pasarela de pago</p>
          </section>

          <section className='doc-section'>
            <h2 className='doc-title'>Conclusión y Aprendizajes</h2>
            <p>
              Este proyecto me permitió aplicar y profundizar mis conocimientos
              en desarrollo full-stack, enfrentándome a desafíos reales de
              e-commerce. Aprendí la importancia de la seguridad en aplicaciones
              web, la optimización de rendimiento, y la creación de una
              experiencia de usuario fluida e intuitiva.
            </p>
          </section>

          <section className='doc-section'>
            <h2 className='doc-title'>Próximos Pasos</h2>
            <ul className='list-decimal pl-12 space-y-2'>
              <li>Implementación de tests automatizados (unit y e2e)</li>
              <li>
                Integración de un sistema de recomendaciones basado en el
                historial de navegación del usuario
              </li>
              <li>
                Expansión del panel de administración con más análisis y
                reportes
              </li>
              <li>Envio de email automatizado con ofertas</li>
              <li>
                Expandir el catalogo de productos y crear un scroll infinito
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}

function NumeredList({ title, children }) {
  return (
    <section className='doc-section gap-5'>
      <h2 className='doc-title'>{title}</h2>
      {children.map(({ topic, description }) => (
        <>
          <div>
            <h2 className='doc-subtitle '>{topic}</h2>
            <ul className='doc-strong space-y-5  pl-6'>
              <li>
                <ul className='space-y-2 pl-12 list-disc'>
                  {description.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </>
      ))}
    </section>
  )
}
