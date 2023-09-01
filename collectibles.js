const fs = require('fs');

function importar(marca) {
  const archivo = fs.readFileSync(`./datos/figuras1.json`, 'utf8');
  const figuras = JSON.parse(archivo);
  
  const figurasMarca = figuras.filter(figura => figura.marca === marca);
  
  return figurasMarca;
}


module.exports = { importar };

