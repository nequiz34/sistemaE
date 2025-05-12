// Base de conocimientos (reglas iniciales)
const baseConocimientos = [
    {
        caracteristicas: { gorro: 'convexo', anillo: 'si tiene anillo', volva:'no tiene volva', firmeza:'firme', 
        posicion_anillo:'intermedio', color: 'blanco', laminas: 'libres', espacio_laminas: 'proximas', tallo: 'cilíndrico'},
        clasificacion: 'comestible',
        especie: 'Agaricus bisporus',
        nombre: 'Champiñon',
        grupo: 'Saprofito',
        descripcion: 'Forma del gorro es convexo, tiene anillo en una posición intermemedia, no tiene volva, es firme, su color es blanco, sus laminas son libres el espacio entre laminas son proximas el tallo es cilíndrico',
        imagen: 'champinon1.webp'
    },

    {
        caracteristicas: { gorro: 'convexo', anillo: 'si tiene anillo', volva:'no tiene volva', firmeza:'firme', 
        posicion_anillo:'intermedio', color: 'blanco', laminas: 'libres', espacio_laminas: 'proximas', tallo: 'cilíndrico'},
        clasificacion: 'comestible',
        especie: 'Agaricus bisporus',
        nombre: 'Champiñon',
        grupo: 'Saprofito',
        descripcion: 'Forma del gorro es convexo, tiene anillo en una posición intermemedia, no tiene volva, es firme, su color es blanco, sus laminas son libres el espacio entre laminas son proximas el tallo es cilíndrico',
        imagen: 'champinon1.webp'
    },
];
// Motor de inferencia
function inferencia(caracteristicas) {
    for (const regla of baseConocimientos) {
        const coincide = Object.keys(regla.caracteristicas).every(
            (key) => regla.caracteristicas[key] === caracteristicas[key]
        );

        if (coincide) {
            return regla;
        }
    }
    return null;
}

// Manejador del formulario de identificación
document.getElementById('hongoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const caracteristicas = {
        gorro: document.getElementById('gorro').value,
        anillo: document.getElementById('anillo').value,
        volva: document.getElementById('volva').value,
        firmeza: document.getElementById('firmeza').value,
        posicion_anillo: document.getElementById('posicion_anillo').value,
        firmeza: document.getElementById('firmeza').value,
        color: document.getElementById('color').value,
        laminas: document.getElementById('laminas').value,
        espacio_laminas: document.getElementById('espacio_laminas').value,
        tallo: document.getElementById('tallo').value,
    };

    const resultado = inferencia(caracteristicas);

    if (resultado) {
        document.getElementById('resultado').textContent = '';
        document.getElementById('especie').textContent = resultado.especie;
        document.getElementById('nombre').textContent = resultado.nombre;
        document.getElementById('grupo').textContent = resultado.grupo;
        document.getElementById('caracteristicas').textContent = resultado.descripcion;
        document.getElementById('comestibilidad').textContent = `Comestibilidad: ${resultado.clasificacion}`;
        document.getElementById('imagen').src = resultado.imagen;
        document.getElementById('especie-info').classList.remove('caracteristicas_esp');
    } else {
        document.getElementById('resultado').textContent = 'No se encontró una clasificación para este hongo.';
        document.getElementById('especie-info').classList.add('caracteristicas_esp');
    }
});

// Manejador del formulario de adquisición de conocimiento
document.getElementById('reglaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const caracteristicasInput = document.getElementById('caracteristicas').value;
    const especie = document.getElementById('especie').value;
    const nombre = document.getElementById('nombre').value;
    const grupo = document.getElementById('grupo').value;
    const descripcion = document.getElementById('descripcion').value;
    const comestibilidad = document.getElementById('comestibilidad').value;
    const imagen = document.getElementById('imagen').value;

    const caracteristicas = {};
    caracteristicasInput.split(',').forEach((pair) => {
        const [key, value] = pair.split(':');
        caracteristicas[key.trim()] = value.trim();
    });

    baseConocimientos.push({ caracteristicas, clasificacion: comestibilidad, especie, nombre, grupo, descripcion, imagen });
    alert('Nueva regla agregada con éxito.');
});