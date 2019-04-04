 /*
 //création de la fonction calculatrice qui comporte 3 paramètres variables: le nombre a, le nombre b ainsi que l'opération
 function calc (a , b , op) {
    //on y insère un switch qui définira les différents cas possibles suivant le paramètre d'opération et l'action a y faire
     switch (op) {
       //si l'opération est une addition:
       case '+' :
         return a + b ;
      // si l'opération est une soustraction:
       case '-' :
         return a - b ;
      // si l'opération est une multiplication :
       case '*' :
         return a * b ;
      // si l'opération est une soustraction :
       case '/' : {
         //on lui indique que le paramètre b doit être différent de 0 car on ne peut diviser par 0 :
         if ( b !== 0) 
           return a / b ;
         else
           return Infinity ;
         }
      //si l'opération est un modulo (afficher le reste de la division) :
         default : 
         return ( a % b ) ;
       }
    }
    */

    class Calc {

        static addition(...value){
            return value.reduce((previous, current) => {
                return previous + current;
            });
        }
     
        static substract(...value){
            return value.reduce((previous, current) => {
                return previous - current;
            });
        }
     
        static divide(...value){
            return value.reduce((previous, current) => {
                return previous / current;
            });
        }
     
        static multiply(...value){
            return value.reduce((previous, current) => {
                return previous * current;
            });
        }
     }
     
     module.exports = Calc;
