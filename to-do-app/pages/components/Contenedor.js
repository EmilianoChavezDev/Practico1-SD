import useTodo from "../hooks/useTodo";
import React, { useState } from "react";
import { prioridad } from "../helpers/index";
import { RiArrowRightSLine } from "react-icons/ri";
const Contenedor = ({ titulo, arreglo }) => {
  const { verDetalles, moverDeLista } = useTodo();

  return (
    <div>
      <div>
        <h3 className="font-bold uppercase text-rgb-94-108-132 mx-2">
          {titulo}
        </h3>
      </div>
      <div className="bg-gray-200 border rounded-lg p-2 shadow-md mb-2 h-screen">
        {arreglo && arreglo.length === 0 ? (
          <p className="text-center font-bold text-gray-800">
            Aún no hay tareas
          </p>
        ) : (
          <ul>
            {arreglo?.map((tarea, index) => (
              <li
                key={tarea.id}
                className="bg-white border rounded-lg p-2 shadow-md mb-2 cursor-pointer hover:bg-gray-300"
                onClick={() => verDetalles(tarea.id, arreglo)}
              >
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <div className="font-semibold mb-5">{tarea.tarea}</div>
                    <div>
                      <button
                        className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md"
                        onClick={() => {
                          {
                            moverDeLista(tarea.id, arreglo);
                          }
                        }}
                      >
                        <RiArrowRightSLine className="w-3 h-3 mr-1" /> Mover
                      </button>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-between">
                    <div className="flex">
                      <span className="text-gray-600">Prioridad: </span>
                      <p
                        className={`${prioridad(
                          tarea.prioridad
                        )} mx-1 font-bold`}
                      >
                        {tarea.prioridad}
                      </p>
                    </div>
                    <div className="flex">
                      <span className="mx-1 text-gray-600">Responsable: </span>
                      <p className="font-bold text-gray-600">
                        {tarea.encargado}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Contenedor;
