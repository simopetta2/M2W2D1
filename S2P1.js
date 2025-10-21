//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
// let num1 = 5;
// let num2 = 10;
// let numMagg;

// if (num1 > num2) {
//   numMagg = num1
//   console.log('numero 1 è maggiore di numero 2')
// } else if (num2 > num1) {
//   numMagg = num2
//   console.log('numero due è piu grande di numero 1')
// } else {
//   console.log('num1 e num2 sono uguali')
// }
// console.log(numMagg)

/* SCRIVI QUI LA TUA RISPOSTA */

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
// let num = 5
// if (num < 5) {
//   console.log('tiny')
// }else if(num < 10) {
//   console.log('Small')
// }else if (num < 15) {
//   console.log('Medium')
// }else if (num < 20) {
//   console.log('Large')
// } else if (num >= 20) {
//   console.log('Huge')
// } else {
//   console.log('non è un numero')
// }


/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
// for (let i = 0; i <= 10; i++) {
//   if (i == 3 || i == 8) continue
//   console.log(i)
// }

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

// for (let i = 0; i <= 15; i++){
//   if (i % 2 == 0) {
//     console.log(i, ' numero pari')
//   } else {
//     console.log(i, ' numero dispari')
//   }
// }
  

/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 let num = 7;
 let num2 = 15;
 let somma = num + num2;
 let sottrazione = Math.abs(num - num2);
  if ( num == 8 || num2 == 8 || somma == 8 || sottrazione == 8) {
    console.log('uno dei valori è 8 oppure la loro addizione/sottrazione è uguale a 8')

  } else {
    console.log('uno dei due non è 8 oppure la loro addizione/sottrazione è uguale a 8')
  }



/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/