

// EJEMPLOS DE RECURSIVIDAD

function hojas(arbol) {
    if (esHoja(arbol))
        return arbol.val    
    return hojas(arbol.izquierdo) + hojas(arbol.derecho)
}

function esHoja(arbol) {
    return arbol.derecho == null && arbol.izquierdo == null
}

const arbol = {
    val: 0,
    izquierdo: {
        izquierdo: null,
        derecho: null,
        val: 2
    },
    derecho: {
        izquierdo: {
            izquierdo: null,
            derecho: null,
            val: 2
        },
        derecho: {
            izquierdo: null,
            derecho: null,
            val: 3
        },
        val: 3
    }
}

function arreglos(arr, idx) {
    if (arr.length === idx)
        return 0
    return(arr[idx]+arreglos(arr,idx+1)
    )
}

const arr = [1,2,3,4,5,6,7]
// console.log(arreglos(arr, 0))

const myFunc = str => {
    if (str.length > 1) {
      return myFunc(str.slice(1));
    }
  
    return str;
  };
  
//   console.log(myFunc('Hello world'));

//********************************************** */

// EJEMPLOS DE DIFERENCIA ENTRE REGULAR FUNCTION y ARROW FUNCTION

//*****************NO PUEDE PASAR ARGUMENTOS */
let user1 = {       
    show(){ 
        console.log(arguments); 
    } 
}; 
// user.show(1, 2, 3); 

let user2 = {      
    show_ar : () => { 
    console.log(...arguments); 
} 
};

//**************** Arrow function no tiene this se le pasa el contexto padre mas no el entorno en el que se encuentra */
const palabra = "Mundo"

let fun = {
    palabra: "Mundo",
    regularFunction: function () {
        return "Hola " + this.palabra
    },
    arrowFunction: () => {
        return "Hola " + palabra
    }
}

// console.log(fun.regularFunction() + " ***** " + fun.arrowFunction() );

// user.show_ar(1, 2, 3); 

const arreglo = [
    x => x * 1,
    x => x * 2,
    x => x * 3,
    x => x * 4 
  ];
  
//   console.log(arreglo.reduce((accumulator, currentValue) => accumulator + currentValue(accumulator), 1));

const arr1 = [{ firstName: 'James' }];
const arr2 = [...arr1];
arr2[0].firstName = 'Jonah';

// console.log(arr1);
// console.log(arr2);

const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
// map(el => console.log(el));

const arr3 = [...new Set([3, 1, 2, 3, 4])];
// console.log(arr3.length, arr3[2]);

// ((fn, val) => {
//     return fn(val);
//   })(console.log, 5);

const superheroMaker = a => {
    return a instanceof Function ? a() : a;
  };
  
//   console.log(superheroMaker(() => 'Batman'));
//   console.log(superheroMaker('Superman'));

const obj = {
    1: 1,
    2: 2,
    3: 3
  };

//   console.log(Object.keys(obj) == Object.values(obj));

const a = c => c;
const b = c => c;

// console.log(a == b);
// console.log(a(7) === b(7));

const timesTable = num1 => {
    return num2 => {
      return num1 * num2;
    };
  };
  
//   console.log(timesTable(4)(5));

const myArr = ['a', 'b', 'c'];
const myMap = { a: 1, b: 2, c: 3 };

const result = myArr.map(letter => myMap[letter]);
// console.log(result);

// funciones con sort
// const ar = [5, 1, 3, 7, 25];
// const ar1 = ar;
// console.log("ar1.sort() ", ar1.sort());
// (
//   [5, 25].indexOf(ar[1]) != -1 && 
//   console.log("ar.reverse() ", ar.reverse())
// ) || 
// (
//   ar[3] == 25 && console.log("AR ", ar)
// );
// console.log("AR1 ", ar1);


//JAJAJAJAJAAJAJAJJA

function hello(arg) {
    console.log(arg);
}
hello("Hola")