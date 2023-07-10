const collectiblesData = require('./collectibles.js');
const hotToys = collectiblesData.importar('Hot Toys');
const bandai = collectiblesData.importar('Bandai');
const starWars = collectiblesData.importar('Star Wars');
const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];
const collectibles = {
  figuras: unifiedCollectibles,
};
collectibles.listFigures = function() {
  this.figuras.forEach(figura => {
    console.log(`Marca: ${figura.marca}, Nombre: ${figura.nombre}, Precio: ${figura.precio}, Stock: ${figura.stock}`);
  });
};
collectibles.figuresByBrand = function(marca) {
  return this.figuras.filter(figura => figura.marca === marca);
};

console.log("Todas las figuras:");
collectibles.listFigures();

console.log("Figuras de la marca 'Hot Toys':");
const hotToysFiguras = collectibles.figuresByBrand('Hot Toys');
console.log(hotToysFiguras);
