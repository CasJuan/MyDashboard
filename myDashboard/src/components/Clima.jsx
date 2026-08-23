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
                return <CloudLightning />;
            case (id >= 300 && id < 400):
                return <CloudRainWind />;
            case (id >= 500 && id < 600):
                return <Wind />;
            case (id >= 600 && id < 700):
                return <Snowflake />;
            case (id >= 700 && id < 800):
                return <Snowflake />;
            case (id === 800):
                return <SunMedium />;
            case (id >= 801 && id < 810):
                return <Cloudy size={40} />;
            default:
                return <SunSnow />;
        }
    }

    return (
        <>
            <section className='flex flex-col items-center justify-center gap-5 bg-amber-300 w-150 h-62.5 rounded-2xl shadow-2xs'>
                <div className='flex flex-row items-center gap-2 self-start ml-7'>
                    <Cloudy size={15} />
                    <h2>Clima</h2>
                </div>
                <div className='flex flex-row w-90 gap-5 justify-around items-center'>

                    <span className='w-15 h-15 items-center shadow-2xl rounded-2xl  '>
                        {climaIcon(clima.iconId)}
                    </span>

                    <div className='w-100 h-40 flex flex-col items-start justify-center gap-1'>
                        <p className='font-bold text-2xl'>
                            {clima.temp ? (clima.temp - 273.15).toFixed(1) : "..."} °C
                        </p>
                        <p className='text-base'>
                            {clima.ubicacion} , {clima.descripcion}
                        </p>
                    </div>

                    <div>
                        <p className='text-base'>HUMEDAD</p>
                        <p className='text-sm italic font-bold'>{clima.humedad}%</p>
                    </div>
                </div>
            </section>
        </>
    )
}
