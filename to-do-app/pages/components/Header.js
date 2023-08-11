import React from "react";
import ModalDescripcion from "./ModalDescripcion";
import useTodo from "../hooks/useTodo";
import ModalCrear from "./ModalCrear";

const Header = () => {
  const { showDescripcionModal, showCrearModal, handleCrearModal, isMover } = useTodo();
  return (
    <>
      <div className="mx-10">
        <div>
          <div>
            <h1 className="text-center text-4xl text-gray-600 font-bold">
              Gestor de Tareas - ToDo
            </h1>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
              onClick={handleCrearModal}
            >
              Crear
            </button>
          </div>
        </div>
      </div>
      <div>{showDescripcionModal && !isMover && <ModalDescripcion />}</div>
      <div>{showCrearModal && <ModalCrear />}</div>
    </>
  );
};

export default Header;
