import { useState, useEffect } from 'react'

export const Frases = () => {

    const [frase, setFrase] = useState("");


    useEffect(() => {
        const fetchFrase = async () => {
            const resp = await fetch('https://positive-api.online/phrases/esp')
            const data = await resp.json()
            const newFrase = data.text
            setFrase(newFrase);
        }
        fetchFrase()
    }, [])


    return (
        <>
            <section className='bg-white w-150 h-63 rounded-2xl shadow-2xs'>
                <div className='flex flex-col items-center justify-center gap-5 h-full'>
                    <p className='text-sm text-center italic'>"{frase}"</p>
                </div>
            </section>
        </>
    )
}
