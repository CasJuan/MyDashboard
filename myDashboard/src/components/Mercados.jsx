import { useEffect, useState } from 'react'
import { ChartNoAxesCombined } from "lucide-react"

export const Mercados = () => {

  const [dolar, setDolar] = useState(0);
  const [cripto, setCripto] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://dolarapi.com/v1/dolares');
      const data = await resp.json()
      const blue = data.find((valor) => valor.casa === "oficial");
      const cripto = data.find((valor) => valor.casa === "cripto");
      setDolar(blue)
      setCripto(cripto)
    }
    fetchData()
  }, [])


  return (
    <>
      <section className='flex flex-col justify-between p-5 bg-[#2e2e2e] w-150 h-40 rounded-2xl shadow-2xs overflow-hidden'>

        <div className='flex flex-row items-center gap-2 self-start'>
          <ChartNoAxesCombined size={14} color='white' />
          <h2 className='text-sm text-white'>Mercado</h2>
        </div>

        <div className='flex flex-col w-full gap-5 justify-around items-center'>
          <div className='flex flex-row items-center justify-between h-full w-full'>
            <h4 className='text-sm text-gray-100'>Dolar Blue</h4>
            <p className='text-sm font-bold text-gray-400'>$ {dolar.venta}</p>
          </div>
          <div className='flex flex-row items-center justify-between h-full w-full'>
            <h4 className='text-sm text-gray-100'>Bitcoin</h4>
            <p className='text-sm font-bold text-gray-400'>$ {cripto.venta}</p>
          </div>
        </div>
      </section>
    </>
  )
}
