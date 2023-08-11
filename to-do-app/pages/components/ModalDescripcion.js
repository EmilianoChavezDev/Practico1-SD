import { formatearFecha, prioridad } from "../helpers";
import useTodo from "../hooks/useTodo";
import React from "react";

const ModalDescripcion = () => {
  const { detalleTarea, cerrarModalDescripcion } = useTodo();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 p-4 md:p-8 lg:p-10 bg-white rounded-lg shadow-xl relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={cerrarModalDescripcion}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {detalleTarea?.map((tarea, index) => (
          <div key={index}>
            <div className="mb-4">
              <h2 className="font-normal text-rgb-82-97-122 text-2xl mb-5">
                {tarea.tarea}
              </h2>
            </div>
            <div className="border-t border-l border-r border-blue-500 p-4">
              <h3 className="text-gray-600 font-semibold text-xl">
                Responsable: {tarea.encargado}
              </h3>
            </div>
            <div className="border border-blue-500 p-4 rounded-b-lg mb-4">
              <div className="flex flex-col">
                <p className="text-gray-600 ">Descripción:</p>
                <p>{tarea.descripcion}</p>
              </div>
              <div className="mb-2 mt-6 flex justify-between">
                <div className="flex">
                  <p className="text-gray-600 mr-1">Prioridad:</p>{" "}
                  <span className={`${prioridad(tarea.prioridad)}`}>
                    {tarea.prioridad}
                  </span>
                </div>
                <div>
                  <p className="text-gray-600">
                    Plazo hasta el {formatearFecha(tarea.fecha)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalDescripcion;
