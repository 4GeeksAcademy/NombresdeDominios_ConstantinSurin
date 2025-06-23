import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //  
};

 let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];



  pronoun.map((pro)=>{
    adj.map((adjetivo)=>{
     noun.map((nombrePropio)=>{
       console.log(pro+ " "+adjetivo+ " "+nombrePropio);
     }
    )
    })
  })

