import { useState, createContext, useEffect } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [showDescripcionModal, setShowDescripcionModal] = useState(false);
  const [showCrearModal, setShowCrearModal] = useState(false);
  const [isMover, setIsMover] = useState(false);
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
    //para ver el ultimo id puesto y sumarle 1
    const idLS = localStorage.getItem("id");
    if (idLS) {
      setId(JSON.parse(idLS) + 1);
    }
  }, []);

  const handleShowDescripcionModal = () => {
    setShowDescripcionModal(!showDescripcionModal);
  };

  //para ver los detalles de una tarea en especifico
  const verDetalles = (id, arreglo) => {
    handleShowDescripcionModal();
    const tareaSeleccionada = arreglo.filter((tarea) => tarea.id === id);
    setDetalleTarea(tareaSeleccionada);
  };

  const cerrarModalDescripcion = () => {
    handleShowDescripcionModal();
    setDetalleTarea([]);
  };

  //abre mi modal para crear una nueva tarea
  const handleCrearModal = () => {
    setShowCrearModal(!showCrearModal);
    setDescripcion("");
    setFecha("");
    setTarea("");
    setEncargado("");
    setPrioridadSeleccionada("");
  };

  //guarda la prioridad que se selecciono al momento de crear la tarea
  const handlePrioridadChange = (event) => {
    setPrioridadSeleccionada(event.target.value);
  };

  /*
  creo un objeto nueva tarea y lo almaceno en la lista de tareas creadas
  luego eso lo guardo en localStorage para que al momento de recargar la pagina
  no se pierda la tarea
  */
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
    const tareaNueva = [...arr, nuevaTarea];
    setArr(tareaNueva);
    localStorage.setItem("tareas", JSON.stringify(tareaNueva));
    setId(id + 1); // le sumo 1 al id para que no se repita
    localStorage.setItem("id", JSON.stringify(id));
    handleCrearModal();
  };

  /**
   cargo las diferentes tareas en ls dependiendo del estado
   */
  const cargarTareas = () => {
    const tareasLS = JSON.parse(localStorage.getItem("tareas")) || [];
    const enProcesoLS = JSON.parse(localStorage.getItem("enProceso")) || [];
    const terminadoLS = JSON.parse(localStorage.getItem("terminado")) || [];

    setArr(tareasLS);
    setEnProceso(enProcesoLS);
    setTerminado(terminadoLS);
  };

  //funcion que me va servir para mover las tareas en diferentes arreglos
  //recibo como parametro el id y el arreglo de donde viene de la tarea que voy mover a otro arreglo
  const moverDeLista = (id, arreglo) => {
    setIsMover(true);
    // Encuentra la tarea en el arreglo de origen
    const tarea = arreglo.find((tarea) => tarea.id === id);

    // Actualizo el arreglo de origen sin la tarea
    const nuevoArreglo = arreglo.filter((tarea) => tarea.id !== id);

    // Muevo la tarea al arreglo correspondiente
    if (arreglo === arr) {
      setEnProceso([...enProceso, tarea]);
    } else if (arreglo === enProceso) {
      setTerminado([...terminado, tarea]);
    } else if (arreglo === terminado) {
      setArr([...arr, tarea]);
    }

    // Actualizo el estado del arreglo de origen
    if (arreglo === arr) {
      setArr([...nuevoArreglo]);
    } else if (arreglo === enProceso) {
      setEnProceso([...nuevoArreglo]);
    } else if (arreglo === terminado) {
      setTerminado([...nuevoArreglo]);
    }

    guardarLS(); // lo guardo en localStorage
  };

  //funcion para guardar en localStorage
  const guardarLS = () => {
    localStorage.setItem("tareas", JSON.stringify(arr));
    localStorage.setItem("enProceso", JSON.stringify(enProceso));
    localStorage.setItem("terminado", JSON.stringify(terminado));
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
        moverDeLista,
        setShowDescripcionModal,
        isMover,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider };

export default TodoContext;
