import { Cloudy, CloudLightning, CloudRainWind, SunMedium, Snowflake, SunSnow, Wind } from 'lucide-react';
import { useEffect, useState } from 'react'

export const Clima = () => {

    const apiKey = import.meta.env.VITE_API_KEY;

    const [clima, setClima] = useState({
        temp: null,
        ubicacion: "",
        humedad: "",
        minima: null,
        maxima: null,
        descripcion: "",
        iconId: ""
    })

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?&lat=-34.6083696&lon=-58.4440583&appid=${apiKey}&lang=sp`);
            const data = await resp.json()

            setClima({
                temp: data.main.temp,
                ubicacion: data.name,
                humedad: data.main.humidity,
                minima: data.main.temp_min,
                maxima: data.main.temp_max,
                descripcion: data.weather[0].description,
                iconId: data.weather[0].id
            })
        }
        fetchData()
    }, [])

    const climaIcon = (id) => {
        switch (true) {
            case (id >= 200 && id < 300):
                return <CloudLightning color='#3B82F6' size={30} />;
            case (id >= 300 && id < 400):
                return <CloudRainWind color='#3B82F6' size={30} />;
            case (id >= 500 && id < 600):
                return <Wind color='#3B82F6' size={30} />;
            case (id >= 600 && id < 700):
                return <Snowflake color='#3B82F6' size={30} />;
            case (id >= 700 && id < 800):
                return <Snowflake color='#3B82F6' size={30} />;
            case (id === 800):
                return <SunMedium color='#3B82F6' size={30} />;
            case (id >= 801 && id < 810):
                return <Cloudy color='#3B82F6' size={30} />;
            default:
                return <SunSnow />;
        }
    }

    return (
        <>
            <section className='flex flex-col justify-between p-5 bg-[#2e2e2e] w-150 h-40 rounded-2xl shadow-2xs overflow-hidden'>
                <div className='flex flex-row items-center gap-2 self-start'>
                    <Cloudy size={14} color='white' />
                    <h2 className='text-sm text-white'>Clima</h2>
                </div>

                <div className='flex flex-row w-full gap-5 justify-around items-center flex-1'>

                    <span className='flex items-center justify-center w-12 h-12 shadow-2xs rounded-2xl bg-gray-400'>
                        {climaIcon(clima.iconId)}
                    </span>

                    <div className='flex flex-col items-start justify-center gap-1'>
                        <p className='font-bold text-2xl text-gray-100'>
                            {clima.temp ? (clima.temp - 273.15).toFixed(1) : "..."} °C
                        </p>
                        <p className='text-base text-gray-100'>
                            {clima.ubicacion} , {clima.descripcion}
                        </p>
                    </div>

                    <div>
                        <p className='text-sm text-gray-400'>HUMEDAD</p>
                        <p className='text-lg font-bold text-gray-400'>{clima.humedad}%</p>
                    </div>

                </div>
            </section>
        </>
    )
}
