import { useEffect, useRef } from 'react'
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
        'Esquemas de Mongoose para modelado de datos (usuarios, productos, pedidos)',
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
    // Agregar un event listener para 'visibilitychange'
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideo()
      }
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    // Limpiar el event listener cuando el componente se desmonte
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
          className={`border-gray-200  brightness-50   -z-10  absolute object-cover border-transparent object-top w-full duration-300  pointer-events-none h-full`}
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

          <section className='doc-section'>
            <h2 className='doc-title'>Stack Tecnológico</h2>
            <ul className='doc-strong list-disc pl-12'>
              <li>
                <strong>Frontend:</strong> React, useContext, validación de
                token en cookies, barra de búsqueda con filtros.
              </li>
              <li>
                <strong>Backend:</strong> Express, MongoDB con Mongoose, JWT
                para autenticación, CryptoJS para encriptación de datos, Zod
                para la validación de datos
              </li>
              <li>
                <strong>Pagos Online:</strong> Integración con la API de
                MercadoPago
              </li>
              <li>
                <strong>Validaciones:</strong> JWT y rutas protegidas.
              </li>
              <li>
                <strong>Base de datos</strong> MongoDB para almacenar productos,
                usuarios, favoritos e información de envío.
              </li>
            </ul>
          </section>

          <section className='doc-section'>
            <h2 className='doc-title'>Características Principales</h2>
            <ul className='doc-strong space-y-5 list-decimal pl-12'>
              <li>
                <strong>Catálogo de productos</strong>
                <ul className='pl-6 list-disc'>
                  <li>
                    Los usuarios pueden ver una lista de monopatines eléctricos
                    disponibles, con detalles de cada producto.
                  </li>
                  <li>Barra de búsqueda con filtros por nombre</li>
                </ul>
              </li>
              <li>
                <strong>Sistema de Autenticación</strong>

                <ul className='pl-6 list-disc'>
                  <li>Registro y login de usuarios</li>
                  <li>Autenticación mediante JWT almacenado en cookies</li>
                  <li>Rutas protegidas utilizando React Context</li>
                </ul>
              </li>
              <li>
                <strong>Perfil de Usuario</strong>

                <ul className='pl-6 list-disc'>
                  <li>Guardado de productos favoritos</li>
                  <li>Almacenamiento de información de envío</li>
                </ul>
              </li>
              <li>
                <strong>Perfil de Usuario</strong>

                <ul className='pl-6 list-disc'>
                  <li>Carrito de compras</li>
                  <li>
                    Integración con MercadoPago para procesamiento de pagos
                  </li>
                </ul>
              </li>
              <li>
                <strong>Panel de Administración</strong>

                <ul className='pl-6 list-disc'>
                  <li>Gestión de productos (CRUD)</li>
                  <li>Visualización de pedidos y estadísticas</li>
                </ul>
              </li>
            </ul>
          </section>

          <NumeredList title={'Detalles de Implementación'}>
            {implementacion}
          </NumeredList>

          <NumeredList title={'Desafíos y Soluciones'}>{desafios}</NumeredList>

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
            <ul className='list-disc pl-12'>
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
