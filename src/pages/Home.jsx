import Header from '../components/Header'
import Conocimientos from '../components/Conocimientos'
import ProyectLayout from '../components/ProyectLayout'
import Study from '../components/Study'

export default function Home() {
  return (
    <>
      <div className='flex w-full flex-col items-center justify-start pb-20'>
        <Header />
        <ProyectLayout />
        <Conocimientos />
        <Study></Study>
      </div>
    </>
  )
}
