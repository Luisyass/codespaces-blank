const array = [[17,9,36],[8,7,3],[15,28,57]];
let newarray = [];
let mediana;

for(i = 0; i < array.length; i++){
    for (j = 0; j < array[i].length;j++){
      newarray.push(array[i][j]);
    }
}

newarray.sort(function(a,b){
    return a - b;
})

let division = Math.floor(newarray.length / 2);

if(newarray.length % 2 === 0){
    mediana = (newarray[division - 1] + newarray[division]/2)
}else{
    mediana = newarray[division];
}


console.log("Elementos ordenados: " + newarray)
console.log("Mediana: " + mediana)
