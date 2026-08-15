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
            <section className='flex flex-col items-center justify-center gap-5 bg-amber-300 w-150 h-62.5 rounded-2xl shadow-2xs'>
                <div className='flex flex-row gap-2 self-start ml-7'>
                    <Watch />
                    <h2>Enfoque</h2>
                </div>
                <div className='flex flex-row gap-5'>
                    <button onClick={tiemePomodoro} className='bg-gray-500 rounded-2xl h-10 w-30 text-white hover:bg-gray-900 cursor-pointer'>25 min</button>
                    <button onClick={tiemeHora} className='bg-gray-500 rounded-2xl h-10 w-30 text-white hover:bg-gray-900 cursor-pointer'>1 hs</button>
                    <button onClick={tiemeHoraMedia} className='bg-gray-500 rounded-2xl h-10 w-30 text-white hover:bg-gray-900 cursor-pointer'>1:30 hs</button>
                </div>
                <div>
                    <h1 className='text-4xl text-center'>{Math.floor(time/60)} : { time % 60 < 10 ? '0' + time % 60 : time % 60 }</h1>
                </div>
                <div className='flex flex-row gap-5'>
                    <button onClick={handleStart} className='bg-gray-500 rounded-2xl h-10 w-30 text-white hover:bg-gray-900 cursor-pointer'>Iniciar</button>
                    <button onClick={handlePause} className='bg-gray-500 rounded-2xl h-10 w-30 text-white hover:bg-gray-900 cursor-pointer'>Pausar</button>
                    <button onClick={handleReset} className='bg-gray-500 rounded-2xl h-10 w-30 text-white hover:bg-gray-900 cursor-pointer'>Reiniciar</button>
                </div>
            </section>
        </>
    )
}
