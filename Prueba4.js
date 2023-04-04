let array = [[17,9,36,21],[8,28,3,1],[15,7,5,30],[10,17,4,12]];
let newarray = [];
let contenedor = "";
let suma = 0;

for(i = 0; i < array.length; i++){
    for (j = 0; j < array[i].length;j++){
      newarray.push(array[i][j]);
    }
}

for (k = 0; k < newarray.length; k++){
    contenedor = newarray[k];
    suma = suma + contenedor;
    k = k+4;
}

console.log("La suma es: " + suma)
