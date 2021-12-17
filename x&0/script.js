
///functions

function inputPC(aux) {
    if(buttons[aux].innerText == "") {
        buttons[aux].innerText = "0";
    }
}

function inputPlayer(aux, callback) {
    buttons[aux].innerText = "x";
    callback();
}

function getRandomNr(nr){
    return  Math.floor(Math.random() * nr.length);
}

function button(aux){
    return buttons[aux].innerText;
}

function checkEmpty(button, cond){
    if(cond == true && button == ""){
        return false;
    }else{
        return cond;
    }
}


function gameOver() {

//line conditions

    var condl1 = button(0) == button(1) && button(0) == button(2);
    var condl2 = button(3) == button(4) && button(3) == button(5);
    var condl3 = button(6) == button(7) && button(6) == button(8);

//column conditions

    var condc1 = button(0) == button(3) && button(0) == button(6);
    var condc2 = button(1) == button(4) && button(1) == button(7);
    var condc3 = button(2) == button(5) && button(2) == button(8);

//diagonal conditions

    var condd1 = button(0) == button(4) && button(0) == button(8);
    var condd2 = button(2) == button(4) && button(2) == button(6);


    condl1 = checkEmpty(button(0), condl1);
    condl2 = checkEmpty(button(3), condl2);
    condl3 = checkEmpty(button(6), condl3);

    condc1 = checkEmpty(button(0), condc1);
    condc2 = checkEmpty(button(1), condc2);
    condc3 = checkEmpty(button(2), condc3);

    condd1 = checkEmpty(button(0), condd1);
    condd2 = checkEmpty(button(2), condd2);

    let arrconds = [condl1, condl2, condl3, condc1, condc2, condc3, condd1, condd2];
    for(j=0; j< arrconds.length; j++){
        if(arrconds[j] == true){
            let buttonsconds = [button(0), button(3), button(6), button(0), button(1), button(2), button(0), button(2)];
            console.log(j);
            console.log(buttonsconds[j]);
            if(buttonsconds[j] == "x"){
                document.getElementById("container").style.display = "block";
                document.getElementById("winner").innerText = "Congratulations, you won![x]";
            }
            if(buttonsconds[j] == "0"){
                document.getElementById("container").style.display = "block";
                document.getElementById("winner").innerText = "Sorry, PC won![0]";
            }
            break;
        }
    }

    if (condl1 || condl2 || condl3 || condc1 || condc2 || condc3 || condd1 || condd2) {
        disableALLButtons();
    }
    return (condl1 || condl2 || condl3 || condc1 || condc2 || condc3 || condd1 || condd2);

}

function disableButtons(){
    let ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    ids.map((id) => {
        if(document.getElementById(id).innerText != ""){
            document.getElementById(id).disabled = true;
        }
    });
}

function replay(){
        let ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        ids.map((id) => {
                document.getElementById(id).disabled = false;
                document.getElementById(id).innerText = "";
                // document.getElementById("winner").innerText = "";
            document.getElementById("container").style.display = "none";
        });

}

function disableALLButtons(){
    let ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    ids.map((id) => {
            document.getElementById(id).disabled = true;
    });
}

let buttons = document.getElementsByClassName("buttons");

for(let i=0;i<buttons.length;i++) {
    buttons[i].addEventListener('click', function () {
        var x = [];
        for(let i=0;i<buttons.length;i++){
            if(buttons[i].innerText == ""){
                x.push(i);
            }
        }
        console.log(x);

        if(gameOver()){
            ;
        }else{
            if(buttons[i].innerText == ""){
                inputPlayer( i,function() {
                    x = x.filter(e => e !== i);
                    console.log(x);
                    let index = getRandomNr(x);
                    console.log(index);
                    if(gameOver()){
                        ;
                    }else {
                        inputPC(x[index]);
                    }
                    disableButtons();
                });
            }else{
                alert("You can only use the free boxes!And also you can't change your choice.");
            }
        }
    });
    }













