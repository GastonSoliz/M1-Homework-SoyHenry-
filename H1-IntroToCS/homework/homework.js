'use strict';

function BinarioADecimal(num) {
   let numero = num.toString();
   let arr = numero.split("").reverse();
   let sum=0;
   
   for(let i=0;i<arr.length;i++){
      let res = (Math.pow(2,i))*arr[i];
      sum += res;
   }
   return(sum);
}

function DecimalABinario(num) {
   let arr=[];

   while(num!==0){
      let res = parseInt(num%2);
      arr.push(res);

      num = Math.floor(num/2);
      
   }
   
   return(arr.reverse().join(""));
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
