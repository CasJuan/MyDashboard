import { useEffect, useState } from 'react'
import { Watch } from "lucide-react"

export const Timer = () => {

    const [time, setTime] = useState(1500)
    const [go, setGo] = useState(false)

    useEffect(() => {
        if (go === true) {
            const id = setInterval(() => {
                if (time === 0) {
                    setGo(false)
                    setTime(1500)
                    return
                }
                setTime(prev => prev - 1)
            }, 1000)
            return () => {
                clearInterval(id)
            }
        }
    }, [go, time])

    const handleStart = () => {
        setGo(true)
    }

    const handleReset = () => {
        setGo(false)
        setTime(1500)
    }

    const handlePause = () => {
        setGo(false)
    }

    const tiemePomodoro = () => {
        setTime(1500)
    }

    const tiemeHora = () => {
        setTime(3600)
    }

    const tiemeHoraMedia = () => {
        setTime(5400)
    }


    return (
        <>
            <section className='flex flex-col items-center justify-center gap-5 bg-[#2e2e2e] w-150 h-63 rounded-2xl shadow-2xs'>

                <div className='flex flex-row items-center gap-2 self-start ml-7'>
                    <Watch size={14} color='white' />
                    <h2 className='text-sm text-white'>Enfoque</h2>
                </div>

                <div className='flex flex-row gap-5'>
                    <button onClick={tiemePomodoro} className='bg-blue-500 rounded-xl h-10 w-30 text-gray-100 hover:bg-blue-600 hover:text-white cursor-pointer'>25 min</button>
                    <button onClick={tiemeHora} className='bg-blue-500 rounded-xl h-10 w-30 text-gray-100 hover:bg-blue-600 hover:text-white cursor-pointer'>1 hs</button>
                    <button onClick={tiemeHoraMedia} className='bg-blue-500 rounded-xl h-10 w-30 text-gray-100 hover:bg-blue-600 hover:text-white cursor-pointer'>1:30 hs</button>
                </div>

                <div>
                    <h1 className='text-4xl text-center text-gray-400'>{Math.floor(time / 60)} : {time % 60 < 10 ? '0' + time % 60 : time % 60}</h1>
                </div>

                <div className='flex flex-row gap-5'>
                    <button onClick={handleStart} className='bg-gray-500 rounded-xl h-10 w-30 text-gray-100 hover:bg-gray-900 hover:text-white cursor-pointer'>Iniciar</button>
                    <button onClick={handlePause} className='bg-gray-500 rounded-xl h-10 w-30 text-gray-100 hover:bg-gray-900 hover:text-white cursor-pointer'>Pausar</button>
                    <button onClick={handleReset} className='bg-gray-500 rounded-xl h-10 w-30 text-gray-100 hover:bg-gray-900 hover:text-white cursor-pointer'>Reiniciar</button>
                </div>
            </section>
        </>
    )
}
