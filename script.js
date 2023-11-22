let random1 = Math.floor(Math.random() * 6 + 1);
let random2 = Math.floor(Math.random() * 6 + 1);
if(random1>random2){
    document.querySelector(".container h1").textContent = "Player 1 wins";
    document.querySelector(".img1").setAttribute("src" , `images/dice${random1}.png`);
    document.querySelector(".img2").setAttribute("src" , `images/dice${random2}.png`);
}else if(random2>random1){
    document.querySelector(".container h1").textContent = "Player 2 wins";
    document.querySelector(".img1").setAttribute("src" , `images/dice${random1}.png`);
    document.querySelector(".img2").setAttribute("src" , `images/dice${random2}.png`);
}else {
    document.querySelector(".container h1").textContent = "Draw";
    document.querySelector(".img1").setAttribute("src" , `images/dice${random1}.png`);
    document.querySelector(".img2").setAttribute("src" , `images/dice${random2}.png`);
}
