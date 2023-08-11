import React from "react";
import Header from "./Header";
import Contenedor from "./Contenedor";
import useTodo from "../hooks/useTodo";

const Principal = () => {
    const {arr, enProceso, terminado} = useTodo();
  return (
    <div className="mx-5 my-10 flex flex-col">
      <div>
        <Header />
      </div>
      <div className="flex content-between justify-between mx-5 mt-10 space-x-4 ">
        <div className="flex-1">
          <Contenedor titulo={"Lista de Tareas"} arreglo={arr}/>
        </div>
        <div className="flex-1">
          <Contenedor titulo={"En Curso"} arreglo={enProceso}/>
        </div>
        <div className="flex-1">
          <Contenedor titulo={"Terminado"} arreglo={terminado}/>
        </div>
      </div>
    </div>
  );
};

export default Principal;
