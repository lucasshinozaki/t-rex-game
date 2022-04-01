var personagem = document.getElementById("personagem");
var bloco = document.getElementById("bloco");
var count =0;
function pular(){
    if(personagem.classList == "animacao"){return}
    personagem.classList.add("animacao");
    setTimeout(function(){
        personagem.classList.remove("animacao");
    },300);
}
var verificaMorte = setInterval(function() {
    let personagem2 = parseInt(window.getComputedStyle(personagem).getPropertyValue("top"));
    let bloco2 = parseInt(window.getComputedStyle(bloco).getPropertyValue("left"));
    if(bloco2<20 && bloco2>-20 && personagem2>=130){
        bloco.style.animation = "none";
        alert("Game Over. pontos: "+Math.floor(count/100));
        count=0;
        bloco.style.animation = "bloco 1s infinite linear";
    }else{
        count++;
        document.getElementById("pontos").innerHTML = Math.floor(count/100);
    }
}, 10);