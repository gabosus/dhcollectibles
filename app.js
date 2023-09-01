const collectiblesModule = require('./collectibles');


const hotToys = collectiblesModule.importar('Hot Toys');
const bandai = collectiblesModule.importar('Bandai');
const starWars = collectiblesModule.importar('Star Wars');


const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];


const collectibles = {
  figuras: unifiedCollectibles,
  listFigures: function () {
    this.figuras.forEach(figura => {
      console.log(`Marca: ${figura.marca}, Nombre: ${figura.nombre}, Precio: $${figura.precio}, Stock: ${figura.stock}`);
    });
  },
  figuresByBrand: function (marca) {
    return this.figuras.filter(figura => figura.marca === marca);
  }
};


console.log('Todas las figuras:');
collectibles.listFigures();

console.log('\nFiguras de la marca Hot Toys:');
const hotToysFigures = collectibles.figuresByBrand('Hot Toys');
hotToysFigures.forEach(figura => {
  console.log(`Nombre: ${figura.nombre}, Precio: $${figura.precio}, Stock: ${figura.stock}`);
});

