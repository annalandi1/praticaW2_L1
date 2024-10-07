/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// i datatype in JavaScript servono a definire il valore di una variabile e sono diversi tipi: 
let string = 'ciao' // é una sequenza di caratteri.
let number = 145 // una sequenza di caratteri alfanumerici.
let boolean = true // restituisce un valore che serve a dichiarare la veridicitá o falsitá dei valori inseriti.
// let undefined
 // se non viene assegnato nessun valore e verrá visualizzato automaticamente "undefined"
// let vuoto = null 
//nella console non verra visualizzato nessun valore, ma verra visualizzato "null".


/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Anna"
console.log(myName)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let sum = (12 + 20)
console.log(sum)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x= 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Anna "+"Landi"

console.log(myName)

const age= 21
console.log(age)

// const age= 20
// console.log(age) 
// la console restituirá un "SyntaxError" evidenziando che non si puó ridichiarare la variabile perché costante.


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = (4 - x)
console.log(sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1= "john"
let name2= "John"

let names12 = (name1 === name2)
console.log(names12)

let names12lowerCase = (name1.toLowerCase === name2.toLowerCase)
console.log(names12lowerCase)


