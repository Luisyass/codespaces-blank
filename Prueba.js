let array1 = [[17,9,36],[8,7,3],[15,28,87]];
let array2 = [[9,21,36],[16,65,4],[12,28,31]];
let nummayor = 0;
let nummayor2 = 0;
let contador = 0;

for(i = 0; i < array1.length; i++){
  for (f = 0; f< array1[i].length;f++){
    let position1 = array1 [i] [f];
    if(position1 > 25){
      nummayor = nummayor+1;
    }
  }
}

for(g = 0; g < array2.length; g++){
  for (h = 0; h< array2[g].length;h++){
    let position2 = array2 [g] [h];
    if(position2 > 25){
      nummayor2 = nummayor2+1;
    }
  }
}

for(j = 0; j < array1.length; j++){
  for (k = 0; k< array1[j].length;k++){
      let position3 = array1 [j] [k];
      for(l = 0; l < array2.length; l++){
        for (m = 0; m< array2[l].length;m++){
             let position4 = array2 [l] [m];
             if(position3 == position4){
                 contador = contador + 1;
             }
          }
      }
   }
}


console.log("El arreglo 1 contiene " + nummayor + " elementos mayores")
console.log("El arreglo 2 contiene " + nummayor2 + " elementos mayores")
//Existen 3 elementor iguales en el arreglo no solo 2 los cuales son "9,28,36"
console.log("Existen " + contador + " elementos iguales en ambos arreglos")