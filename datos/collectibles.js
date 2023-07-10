const fs = require('fs');

function importar(marca) {
  // Leer el archivo JSON correspondiente a la marca recibida
  const datos = fs.readFileSync(`./datos/figuras${marca}.json`, 'utf8');
  
  // Parsear los datos JSON a un array de objetos literales
  const figuras = JSON.parse(datos);
  
  // Devolver el array de figuras
  return figuras;
}

module.exports = { importar };
