//EXERCICE 4

// for (i = 0; i < 21; i++) {
//   if (i % 2 === 0) console.log(i);
// }

//EXERCICE 5

// function nombreVoyelles(mot) {
//     let voyelles = "aAeEiIoOuU";
//     let result= 0;
//     for (let i = 0; i < mot.length; i++) {
//         if (voyelles.indexOf(mot[i]) !== -1) {
//             result+=1;
//         }
//     }
//     return result;
// }

// console.log(nombreVoyelles("mot"));
// console.log(nombreVoyelles("motaeiiii"));

//EXERCICE 6

// const phrase = "Je suis une phrase.";

// console.log(phrase);

// // const cSet = new Set();
// // const duplicates = [];

// // for (let i = 0; i < phrase.length; i++) {
// //     const char = phrase[i];

// //     if (cSet.has(char)) {
// //         if (!duplicates.includes(char)) {
// //             duplicates.push(char);
// //         }
// //     } else {
// //         cSet.add(char);
// //     }
// // }

// // if (duplicates.length > 0) {
// //     console.log(
// // `The String ${phrase} has duplicate characters: ${duplicates.join(", ")}`);
// // } else {
// //     console.log(`The String ${phrase} has all unique characters`);
// // };

//EXERCICE 7

// let nombre = [20, 4, 6, 3, 2, 9, -48, -27, -6, -3, -8];
// let positifs = [];
// let negatifs = [];

// for (let i = 0; i < nombre.length; i++) {
//   if (nombre[i]>= 0) {
//     positifs.push(nombre[i]);
//   } else {
//     negatifs.push(nombre[i]);
//   }
// }

// console.log(positifs, negatifs);


//EXERCICE 8

// let nombre = [20, 4, 6, 3, 2];
// let max = nombre[0]; // initialiser avec le premier élément de la liste

// for (let i = 1; i < nombre.length; i++) {
//     if (nombre[i] > max) {
//         max = nombre[i];
//     }
// }

// console.log("Le plus grand nombre est : " + max);


//EXERCICE 9


let mot = 'mots';
