//Este archivo pertenece a Diego Chiavenna, curso de javascript de Comisión 49770.
//creare un algoritmo para una clase de matematicas, se tomara presente y ausente. Al final dira el dato de cuantos presentes y ausentes hubo.

// Lista de nombres de estudiantes
const estudiantes = [
    'Agustin',
    'Belen',
    'Camila',
    'Denis',
    'Eduardo',
    'Facundo',
    'Gabriela',
    'Heber',
    'Iris',
    'Juan',
    'Kally',
    'Maria'
  ];
  
  // Función para tomar la asistencia
  function tomarAsistencia() {
    let presentes = 0;
    let ausentes = 0;
  
    for (let i = 0; i < estudiantes.length; i++) {
      const nombre = estudiantes[i];
      const asistencia = prompt(`¿${nombre} está presente? (Sí/No)`);
  
      if (asistencia.toLowerCase() === 'si') {
        presentes++;
      } else if (asistencia.toLowerCase() === 'no') {
        ausentes++;
      } else {
        alert('Respuesta no válida. Por favor, ingresa "Sí" o "No".');
        i--; // Para repetir la pregunta para el mismo estudiante.
      }
    }
  
// Mostrar el total de presentes y ausentes
    alert(`Total de presentes: ${presentes}\nTotal de ausentes: ${ausentes}`);
  }
  
  // Llamar a la función para tomar la asistencia
  tomarAsistencia(); 
  