const btn1=document.getElementById("p1button");
const btn2=document.getElementById("p2button");
let score1=0;
let score2=0;
let winner;
let gameover=false;
const p1display=document.querySelector("#p1score");
const p2display=document.querySelector("#p2score");
const resetbtn=document.getElementById("reset");
const wscore=document.querySelector("#playto");
wscore.addEventListener('change',function(){
    winner=parseInt(this.value);
});
btn1.addEventListener('click',function(){
    if(!gameover){
        score1+=1;
       
        if(score1===winner){
            gameover=true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
        }
        p1display.textContent=score1;
    }
});

btn2.addEventListener('click',function(){
    if(!gameover){
        score2+=1;
        
       
        if(score2===winner){
            gameover=true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
        }
        p2display.textContent=score2;
    }
});

resetbtn.addEventListener('click',reset);

function reset(){
    gameover=false;
    score1=0;
    score2=0;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove('winner','loser');
    p2display.classList.remove('winner','loser');

}






