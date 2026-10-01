import { Timer } from './components/Timer'
import { Mercados } from './components/Mercados'
import { Clima } from './components/Clima'
import { Hora } from './components/Hora'
import { Tareas } from './components/Tareas'
import { Whislist } from './components/Whislits'

export const Dashboard = () => {
  return (
    <div
      className='min-h-screen w-full pt-12'
      style={{ background: 'linear-gradient(301deg, rgba(29, 0, 252, 1) 0%, rgba(255, 255, 255, 1) 100%)' }}
    >
      <div className='grid grid-cols-2 gap-8 max-w-fit mx-auto'>
        <Clima />
        <Mercados />
        <Hora />
        <Timer />
        <Tareas/>
        <Whislist/>
      </div>
    </div>
  )
}
