let array = [[17,9,36],[8,7,3],[15,28,57]];
let almacenar = 0;
let position2 = 0;
let promedio = 0;
let porcentaje = 0;
let suma1 = 0;
let cont1 = "";
let cont2 = "";

for(i = 0; i < array.length; i++){
    for (f = 0; f < array[i].length;f++){
      let position1 = array [i] [f];
      almacenar = almacenar + position1;
    } 
    position2 = position2 + array.length;
}

promedio = almacenar/position2;

for(j = 0; j < array.length; j++){
  for (k = 0; k < array[j].length;k++){
    let position1 = array [j] [k];
    almacenar = almacenar + position1;
    porcentaje = (position1/promedio)*100
    if(porcentaje<100){
      porcentaje = 100-porcentaje;
    }else {
      porcentaje = porcentaje-100;
    }
    if(porcentaje >=0 && porcentaje <=60){
      suma1 = suma1 + position1;
      cont1 = cont1 + position1 + " ";
    }else{
      cont2 = cont2 + position1 + " ";
    }
  } 
}

console.log("La Suma es: " + suma1)
console.log("Promedio: " + promedio)
console.log("No aplican para sumar: " + cont2)
console.log("Si aplican para sumar: " + cont1)
