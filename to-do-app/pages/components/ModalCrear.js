import React, { useState } from "react";
import useTodo from "../hooks/useTodo";

const ModalCrear = () => {
  const {
    handleCrearModal,
    encargado,
    tarea,
    fecha,
    descripcion,
    prioridades,
    handlePrioridadChange,
    handleSubmit,
    setEncargado,
    setDescripcion,
    setFecha,
    setTarea,
    prioridadSeleccionada,
  } = useTodo();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 p-4 md:p-8 lg:p-10 bg-white rounded-lg shadow-xl relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={handleCrearModal}
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
        <div>
          <div>
            <h2 className="mb-5 font-bold uppercase text-rgb-94-108-132 mx-2 text-center">
              Crear Nueva Tarea
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <label
              htmlFor="encargado"
              className="block font-bold text-gray-600"
            >
              Encargado:
            </label>
            <input
              type="text"
              id="encargado"
              className="border border-black rounded p-1 mb-4"
              value={encargado}
              onChange={(e) => setEncargado(e.target.value)}
              placeholder="Quien estará a cargo de la tarea"
            />

            <label htmlFor="tarea" className="block font-bold text-gray-600">
              Tarea:
            </label>
            <input
              type="text"
              id="tarea"
              className="border border-black rounded p-1 mb-4"
              value={tarea}
              placeholder="Que tarea se va realizar"
              onChange={(e) => setTarea(e.target.value)}
            />

            <label
              htmlFor="prioridad"
              className="block font-bold text-gray-600"
            >
              Prioridad:
            </label>
            <select
              id="prioridad"
              className="border border-black rounded p-1 mb-4"
              value={prioridadSeleccionada}
              onChange={handlePrioridadChange}
            >
              <option value="">Seleccione una prioridad</option>
              {prioridades?.map((prioridad) => (
                <option key={prioridad.id} value={prioridad.value}>
                  {prioridad.value}
                </option>
              ))}
            </select>

            <label htmlFor="fecha" className="block font-bold text-gray-600">
              Fecha:
            </label>
            <input
              type="datetime-local"
              id="fecha"
              className="border border-black rounded p-1 mb-4"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />

            <label
              htmlFor="descripcion"
              className="block font-bold text-gray-600"
            >
              Descripción:
            </label>
            <textarea
              id="descripcion"
              className="border border-black rounded p-1 mb-4"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripción sobre la tarea a ser realizada"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}
            >
              Guardar Tarea
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalCrear;
