import { Timer } from './components/Timer'
import { Mercados } from './components/Mercados'
import { Clima } from './components/Clima'
import { Hora } from './components/Hora'
import { Tareas } from './components/Tareas'
import { Whislist } from './components/Whislits'
import { Frases } from './components/Frases'

export const Dashboard = () => {
  return (
    <div
      className='min-h-screen w-full pt-12'
      style={{ background: 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)' }}
    >
      <div className='grid grid-cols-2 gap-8 max-w-fit mx-auto'>
        <Clima />
        <div className='row-span-2'>
          <Tareas />
        </div>
        <Hora />
        <div className='row-span-2'>
          <Whislist />
        </div>
        <Mercados />
        <Timer />
        <div className='col-span-2'>
          <Frases />
        </div>
      </div>
    </div>
  )
}
