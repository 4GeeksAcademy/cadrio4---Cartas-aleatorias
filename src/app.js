import "bootstrap";
import "./style.css";





window.onload = function() {
  //write your code here
  
  const simbolos = ["\u2663", "\u2665", "\u2660", "\u2666"];
  const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const simboloAleatorio = simbolos[Math.floor(Math.random() * simbolos.length)];
  const numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];

  document.getElementById("top-suit").innerHTML = simboloAleatorio;
  document.getElementById("number").innerHTML = numeroAleatorio;
  document.getElementById("bottom-suit").innerHTML = simboloAleatorio;

 


  if (simboloAleatorio == "\u2665" || simboloAleatorio == "\u2666") {
    this.document.getElementById("top-suit").style.color = "red"
    this.document.getElementById("bottom-suit").style.color  = "red";
  } else {
    this.document.getElementById("top-suit").style.color = "black";
    this.document.getElementById("bottom-suit").style.color  = "black";
  }
};




