import { useState, createContext, useEffect } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [showDescripcionModal, setShowDescripcionModal] = useState(false);
  const [showCrearModal, setShowCrearModal] = useState(false);
  const [detalleTarea, setDetalleTarea] = useState([]);
  const [encargado, setEncargado] = useState("");
  const [tarea, setTarea] = useState("");
  const [id, setId] = useState(1);
  const [prioridades, setPrioridades] = useState([
    {
      id: 1,
      value: "Alta",
    },
    {
      id: 2,
      value: "Media",
    },
    {
      id: 3,
      value: "Baja",
    },
  ]);
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [prioridadSeleccionada, setPrioridadSeleccionada] = useState("");

  const [arr, setArr] = useState([]);
  const [enProceso, setEnProceso] = useState([]);
  const [terminado, setTerminado] = useState([]);

  useEffect(() => {
    cargarTareas();
  }, []);

  const handleShowDescripcionModal = () => {
    setShowDescripcionModal(!showDescripcionModal);
  };

  const verDetalles = (id) => {
    handleShowDescripcionModal();
    const tareaSeleccionada = arr.filter((tarea) => tarea.id === id);
    setDetalleTarea(tareaSeleccionada);
  };

  const cerrarModalDescripcion = () => {
    handleShowDescripcionModal();
    setDetalleTarea([]);
  };

  const handleCrearModal = () => {
    setShowCrearModal(!showCrearModal);
    setDescripcion("");
    setFecha("");
    setTarea("");
    setEncargado("");
    setPrioridadSeleccionada("");
  };

  const handlePrioridadChange = (event) => {
    setPrioridadSeleccionada(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevaTarea = {
      id: id,
      encargado: encargado,
      tarea: tarea,
      prioridad: prioridadSeleccionada,
      fecha: fecha,
      descripcion: descripcion,
    };
    const tareaNueva = [...arr, nuevaTarea]; // Nuevo arreglo con la nueva tarea
    setArr(tareaNueva);
    localStorage.setItem("tareas", JSON.stringify(tareaNueva));
    setId(id + 1);
    handleCrearModal();
  };

  const cargarTareas = () => {
    const tareasLS = localStorage.getItem("tareas");
    if (tareasLS) {
      setArr(JSON.parse(tareasLS));
    }
  };

  return (
    <TodoContext.Provider
      value={{
        handleShowDescripcionModal,
        showDescripcionModal,
        arr,
        verDetalles,
        detalleTarea,
        cerrarModalDescripcion,
        handleCrearModal,
        showCrearModal,
        encargado,
        tarea,
        fecha,
        descripcion,
        prioridades,
        handlePrioridadChange,
        handleSubmit,
        setDescripcion,
        setFecha,
        setTarea,
        setEncargado,
        prioridadSeleccionada,
        enProceso,
        terminado,
        cargarTareas,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };

export default TodoContext;
