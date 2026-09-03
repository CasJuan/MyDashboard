import { CheckSquare, ListTodo, Square } from 'lucide-react'
import { useState } from 'react'


export const Tareas = () => {

    const [tarea, setTarea] = useState("")
    const [listado, setListado] = useState([])

    const handleAddTarea = (e) => {
        e.preventDefault()
        if (!tarea.trim()) return

        setListado([...listado, { nombre: tarea.trim(), completada: false }])
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
            <section className='flex flex-col justify-between p-5 bg-white w-150 h-110 rounded-2xl shadow-2xs overflow-hidden gap-2'>

                <div className='flex flex-row items-center gap-2 self-start'>
                    <ListTodo size={14} />
                    <h2 className='text-sm'>Tareas</h2>
                </div>

                <div className='flex min-h-0 flex-1 flex-col gap-4'>
                    <form onSubmit={handleAddTarea} className='flex w-full gap-2'>
                        <input type="text" onChange={tareaAgregar} value={tarea} placeholder='Añadir una nueva tarea...' className='h-10 min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-2 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100' />
                        <button type='submit' className='h-10 rounded-xl bg-blue-400 px-4 text-sm font-medium text-white transition hover:bg-blue-600 cursor-pointer'>Añadir</button>
                    </form>

                    <div className='min-h-0 flex-1 overflow-y-auto rounded-xl bg-gray-50 p-3'>
                        {listado.length === 0 ? (
                            <p className='py-8 text-center text-sm text-gray-400'>Todavía no hay tareas</p>
                        ) : (
                            <ul className='flex flex-col gap-2'>
                                {listado.map((tarea) => (
                                    <li key={tarea.nombre} className='flex items-center gap-3 rounded-lg bg-white px-3 py-2 shadow-sm'>
                                        <button type='button' aria-label={`Marcar ${tarea.nombre}`} onClick={() => handleCheck(tarea.nombre)} className='shrink-0 cursor-pointer text-gray-400 transition hover:text-blue-400'>
                                            {tarea.completada ? <CheckSquare className='text-blue-400' size={18} /> : <Square size={18} />}
                                        </button>
                                        <span className={`min-w-0 wrap-break-word text-sm text-gray-700 ${tarea.completada ? "text-gray-400 line-through" : ""}`}>{tarea.nombre}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
