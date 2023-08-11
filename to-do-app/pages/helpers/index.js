const prioridad = (prioridad) => {
  const prioridadFormateada = prioridad.toLowerCase();
  if (prioridadFormateada === "alta") {
    return "text-red-500";
  } else if (prioridadFormateada === "media") {
    return "text-yellow-500";
  } else {
    return "text-green-500";
  }
};

function formatearFecha(fecha) {
  const months = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  const nuevaFecha = new Date(fecha);
  const dia = nuevaFecha.getDate();
  const mes = months[nuevaFecha.getMonth()];
  const anho = nuevaFecha.getFullYear();
  const hora = nuevaFecha.getHours();
  const minuto = nuevaFecha.getMinutes();

  const fechaFormateada = `${dia}/${mes}/${anho}`;
  const horaFormateada = `${hora}:${minuto < 10 ? "0" : ""}${minuto}`;

  return `${fechaFormateada} ${horaFormateada}`;
}

export { prioridad, formatearFecha };
