


function RegularNumberOddEven(i){

        if (i % 2 == 0) {
            
             console.log(i + ' es par');

        } else {

             console.log(i + ' es impar');
        }

       


}
const newRegularNumberOddEven= function(i){


    if (i % 2 == 0) {
        
         console.log(i + ' es par');

    } else {

         console.log(i + ' es impar');
    }

   
}


const ArrowFunction = (i) => {
    if (i % 2 == 0) {
        
        console.log(i + ' es par');

   } else {

        console.log(i + ' es impar');
   }
}



console.log(RegularNumberOddEven(3));
console.log(newRegularNumberOddEven(2));
console.log(ArrowFunction(1));







