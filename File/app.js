let inp = document.querySelectorAll("input");

let currentPlayer = "X";

inp.forEach((item)=>{
  item.addEventListener("input",()=>{

    // symbol set
    item.value = currentPlayer;

    // winner check
    let winner = checkWinner();
    if(winner){
      alert(winner + " wins");
      return;
    }

    // draw check
    if(checkDraw()){
      alert("Match Draw");
      return;
    }

    // turn change
    currentPlayer = currentPlayer === "X" ? "O" : "X";

  })
})

function checkWinner(){

let a = inp[0].value
let b = inp[1].value
let c = inp[2].value
let d = inp[3].value
let e = inp[4].value
let f = inp[5].value
let g = inp[6].value
let h = inp[7].value
let i = inp[8].value

if(a && a===b && b===c) return a
if(d && d===e && e===f) return d
if(g && g===h && h===i) return g

if(a && a===d && d===g) return a
if(b && b===e && e===h) return b
if(c && c===f && f===i) return c

if(a && a===e && e===i) return a
if(c && c===e && e===g) return c

return null
}

function checkDraw(){

let filled = true

inp.forEach((item)=>{
 if(item.value === ""){
   filled = false
 }
})

return filled
}
