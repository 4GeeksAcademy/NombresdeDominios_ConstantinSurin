import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  //  
};

let final = [".com", ".net", ".us", ".io"];
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];



final.map((terminacion) => {
  pronoun.map((pro) => {
    adj.map((adjetivo) => {
      noun.map((nombrePropio) => {
        console.log(pro + " " + adjetivo + " " + nombrePropio + terminacion);
     });
    });
  });
});

