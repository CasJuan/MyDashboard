import { Check, CheckSquare, ListTodo, Square } from 'lucide-react'
import { useState } from 'react'


export const Tareas = () => {

    const [tarea, setTarea] = useState("")
    const [listado, setListado] = useState([])

    const handleAddTarea = () => {
        setListado([...listado, { nombre: tarea, completada: false }])
        setTarea("")
    }

    const tareaAgregar = (e) => {
        setTarea(e.target.value)
    }

    const handleCheck = (nombre) => {
        setListado(listado.map(tarea => {
            if (tarea.nombre === nombre) {
                return { ...tarea, completada: !tarea.completada }
            }
            return tarea
        }))
    }

    return (
        <>
            <section className='flex flex-col justify-between p-5 bg-white w-150 h-110 rounded-2xl shadow-2xs overflow-hidden'>

                <div className='flex flex-row items-center gap-2 self-start'>
                    <ListTodo size={14} />
                    <h2 className='text-sm'>Tareas</h2>
                </div>

                <div className='flex flex-row gap-2 items-center justify-start w-full'>
                    <input type="text" onChange={tareaAgregar} value={tarea} placeholder='Añadir una nueva tarea...' className='rounded-xl border border-gray-200 px-4 py-2 outline-none focus:border-blue-400 h-10 w-1/2' />
                    <button onClick={handleAddTarea} className='bg-blue-400 rounded-xl h-10 w-30 text-white hover:bg-blue-600 cursor-pointer'>Añadir</button>
                </div>

                <div className='flex flex-col w-full gap-5 items-start justify-start'>
                    <ul>
                        {listado.map((tarea) =>
                        (
                            <div key={tarea.nombre} className='flex flex-row gap-3 items-center justify-start'>
                                <div onClick={() => handleCheck(tarea.nombre)}>
                                    {tarea.completada ? <CheckSquare className='text-blue-400' /> : <Square />}
                                </div>
                                <li className={` text-base ${tarea.completada ? "line-through" : ""}`} >{tarea.nombre}</li>
                            </div>
                        )
                        )}
                    </ul>
                </div>

            </section>
        </>
    )
}
