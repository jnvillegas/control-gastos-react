import React from 'react'
import Gasto from "./Gasto"

const ListadoGastos = ({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>
      

       {
          filtro ? (
            <>
             <h2>{ gastosFiltrados.length ? 'Gastos' : 'No hay Gastos aun en esta categoria' }</h2>
                      { gastosFiltrados.map( gasto => (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            eliminarGasto={eliminarGasto}
                        />
                      ))}
            </>
                   ) : (
                    <>
                    <h2>{ gastos.length ? 'Gastos' : 'No hay Gastos aun' }</h2>
                           { gastos.map( gasto => (
                              <Gasto
                                  key={gasto.id}
                                  gasto={gasto}
                                  setGastoEditar={setGastoEditar}
                                  eliminarGasto={eliminarGasto}
                              />
                            ))}
                    </>
                   )
       }
  </div>
  )
}


/*{ gastos.map( gasto => {
        <Gasto
            key={gasto.id}
            gasto={gasto}
        />
       })}*/ 
export default ListadoGastos