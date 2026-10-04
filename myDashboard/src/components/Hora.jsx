import { useState, useEffect } from 'react'

export const Hora = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [fecha, setFecha] = useState(new Date().toLocaleDateString())

    useEffect(() => {
        const intervalId = setInterval(() => {
            const formatoHora = new Intl.DateTimeFormat('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }).format(new Date());
            setHora(formatoHora)
            const formatoDia = new Intl.DateTimeFormat(
                'es-ES', {
                weekday: 'long',
                day: 'numeric',
                month: 'short'
            }).format(new Date())
            setFecha(formatoDia.replace(' ', ' ', 1).replace(/(\s\d+)\s/, '$1, '))
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <section className='flex flex-col items-center justify-center gap-5 bg-[#2e2e2e] w-150 h-63 rounded-2xl shadow-2xs'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-6xl text-center text-gray-100'>{hora}</h1>
                    <h2 className='text-sm italic text-center text-gray-400'>{fecha}</h2>
                </div>
            </section>
        </>
    )
}
