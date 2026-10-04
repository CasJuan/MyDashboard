import { useState, useEffect } from 'react'

export const Frases = () => {

    const [frase, setFrase] = useState("");


    useEffect(() => {
        const fetchFrase = async () => {
            const resp = await fetch('https://positive-api.online/phrases/esp')
            const data = await resp.json()
            setFrase(data[Math.floor(Math.random() * data.length)].text); 
        }
        fetchFrase()
    }, [])


    return (
        <>
            <section className='w-full h-63 rounded-2xl shadow-2xs bg-[#2e2e2e]'>
                <div className='flex flex-col items-center justify-center gap-5 h-full'>
                    <blockquote className='text-center italic text-lg text-gray-100'>"{frase}"</blockquote>
                </div>
            </section>
        </>
    )
}
