import useTodo from "../hooks/useTodo";
import React, { useState } from "react";
import { prioridad } from "../helpers/index";

const Contenedor = ({ titulo, arreglo }) => {
  const { verDetalles } = useTodo();

  return (
    <div>
      <div>
        <h3 className="font-bold uppercase text-rgb-94-108-132 mx-2">
          {titulo}
        </h3>
      </div>
      <div className="bg-gray-200 border rounded-lg p-2 shadow-md mb-2 h-screen">
        {arreglo && arreglo.length === 0 ? (
          <p className="text-center font-bold">Aún no hay tareas</p>
        ) : (
          <ul>
            {arreglo?.map((tarea) => (
              <li
                key={tarea.id}
                className="bg-white border rounded-lg p-2 shadow-md mb-2 cursor-pointer hover:bg-gray-300"
                onClick={() => verDetalles(tarea.id)}
              >
                <div className="flex flex-col">
                  <div className="font-semibold mb-5">{tarea.tarea}</div>
                  <div className="flex justify-between">
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
