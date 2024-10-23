import erideLogo from './assets/images/proyect_logos/eride-logo.webp'
import quantum_logo from './assets/images/proyect_logos/quantum_logo.png'
import palete_logo from './assets/images/proyect_logos/paleteLogo.png'
import tejabot_logo from './assets/images/proyect_logos/tejabotLogo.png'
import codiplus from './assets/images/proyect_logos/codiplus.webp'

import mapukimunLogo from './assets/images/proyect_logos/mapuLogo.webp'
import react from './assets/images/stack_logos/reacticon.svg'
import nodejs from './assets/images/stack_logos/nodejsicon.svg'
import electron from './assets/images/stack_logos/electron.svg'
import css from './assets/images/stack_logos/cssicon.svg'
import js from './assets/images/stack_logos/javascripticon.svg'

import mongodb from './assets/images/stack_logos/mongo.svg'
import typescript from './assets/images/stack_logos/typescript-ico.svg'
import tailwind from './assets/images/stack_logos/tailwind.svg'
import puppeteer from './assets/images/stack_logos/puppeteer.svg'

import nextjs from './assets/images/stack_logos/nextjs.svg'

export const proyects = [
  {
    title: 'E-ride Scooter Store',
    description:
      'Ecommerce de monopatines electricos, ofrece compras online mediante la API de mercado pago. Validación de usuarios y gestion favoritos. Para el admin una UI que permite hacer un CRUD de todos los productos',

    img: 'https://github.com/user-attachments/assets/a102f5e8-c735-4dc0-a27c-0ccf5287f300',
    logo: erideLogo,
    github: 'https://github.com/pa-ku/eride_client',
    documentation: 'eride',
    href: 'https://eridestore.vercel.app/',
    stack: [
      { image: react, name: 'React' },
      { image: nodejs, name: 'Node' },
      { image: mongodb, name: 'Mongo' },
      { image: tailwind, name: 'Tailwind' },
    ],
  },
  {
    title: 'Mapu Kimun',
    description:
      'Descubri Neuquen como nunca antes! una recopilación de flora y fauna, con filtros, juegos interactivos y muchos datos curiosos.',
    img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/40728995/379329312-577aee63-4bce-46b8-908b-c450daefb383.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20241023%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241023T145404Z&X-Amz-Expires=300&X-Amz-Signature=7217f9e47d62eed478ddd40fa043b3a37a9ce39bea163c5fa5016b527961868a&X-Amz-SignedHeaders=host',
    logo: mapukimunLogo,
    href: 'https://mapukimun.vercel.app/',
    stack: [
      { image: nextjs, name: 'NextJs' },
      { image: tailwind, name: 'Css' },
    ],
  },
  {
    title: 'Quantum Ui ',
    description: [
      'Design system enfocado en el uso facil de componentes para Tailwind y React',
    ],
    img: 'https://github.com/user-attachments/assets/6eb664be-7fcd-4a06-ade5-0680bcd24336',
    logo: quantum_logo,
    github: 'https://github.com/pa-ku/quantum_design',
    href: 'https://quantumui.netlify.app',
    stack: [
      { image: react, name: 'React' },
      { image: typescript, name: 'Typescript' },
      { image: tailwind, name: 'Tailwind' },
    ],
  },
  {
    title: 'Codi.plus',
    description:
      'Es un fork del editor de codigo codi.link, se adapto a windows linux y macOS desktop utilizando electron, cuenta con nuevos themes y más funcionalidades como tailwind y snippets',
    img: 'https://github.com/user-attachments/assets/7f74d22e-6fe2-4769-8319-cbe6f60d0012',
    logo: codiplus,
    github: 'https://github.com/pa-ku/codi.plus.desktop',
    href: 'https://codeplusweb.vercel.app/',
    stack: [
      { image: js, name: 'Javascript' },
      { image: css, name: 'Css' },
      { image: electron, name: 'Electron' },
    ],
  },
  {
    title: 'Tejabot',
    description:
      'Te permita de forma automatizada junto con puppeteer relalizar reservas a canchas de padel, te permite guardar tu usario de forma local y activar un timer para realizar la reserva al momento que quieras',

    img: 'https://github.com/user-attachments/assets/a9f20cd7-80ab-4f3c-a009-f729d083d753',
    logo: tejabot_logo,
    github: 'https://github.com/pa-ku/tejabot',
    href: 'https://tejabot.vercel.app/',
    stack: [
      { image: nextjs, name: 'Next' },
      { image: puppeteer, name: 'Puppeteer' },
      { image: tailwind, name: 'Tailwind' },
    ],
  },
  {
    title: 'Tailwind Palete',
    description:
      'Palete te permite crear rapidamente y de forma dinamica una gama de colores y poder agregarla de una forma consistente a tus proyectos',

    img: 'https://github.com/user-attachments/assets/082c6aab-4fe3-423f-ac9e-a7e96f790578',
    logo: palete_logo,
    github: 'https://github.com/pa-ku/tailwind_palete',
    href: 'https://tailwind-palete.vercel.app/',
    stack: [
      { image: react, name: 'React' },
      { image: tailwind, name: 'Tailwind' },
    ],
  },
]
