var bubble = "";
var hit = Math.floor(Math.random() * 10);
var score = 0;
var time = 60;

document.querySelector("#hit").textContent = hit;

console.log(bubble);

function printNumber(params) {
    
    for (var i = 0; i < 140; i++) {
    
    bubble += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector(".bubchart").innerHTML = bubble;

    document.querySelector(".bubchart").addEventListener("click", (e) =>{

        checkNumber(e.target.textContent);
        
    });
}

function checkNumber(params) {

    if (hit === (Number)(params)){
        
        hit = Math.floor(Math.random() * 10);
        document.querySelector("#hit").textContent = hit;
        score += 10;
        document.querySelector("#score").textContent = score;
        bubble = "";
        printNumber();
    }
    console.log(params,hit , (Number)(params));
}

function HTS(params) {
    
    var timer = setInterval(() => {

        if (time <= 0) {
            
            clearInterval(timer);

            document.querySelector(".bubchart").innerHTML = `<div>End Game</div>`;
        } else {
            
            time--;
            document.querySelector("#time").textContent = time;
        }
    }, 1000);
}

printNumber();
HTS();