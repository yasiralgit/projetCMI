class Logique {
    constructor(x,y=""){
        this.x = x
        this.y = y
    }

    VAR(){
        return this.x
    }

    ET(){
        return this.x+"."+this.y
    }

    OU(){
        return [this.x,"+",this.y]
    }

    NOT(){
        return "!"+this.x
    }
}

document.addEventListener("onclick", affichageTabK);

function recupExpr() {
    return document.getElementById('exprU').value;
}

function affichageTabK() {
    tkar = "";
    const cb = document.getElementById("correK").checked;
    const exp = recupExpr();
    if (cb == true){
        console.log(cb);
        if (exp != ''){
            tableKar.innerHTML = "<table><thead><tr><th>AB\CD</th><th>00</th><th>01</th><th>11</th><th>10</th></tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>1</td></tr></tbody></table>"
            console.log("procédé tableau de Karnaugh affiché");
        }
    }
    else{
        tableKar.innerHTML = ""
    }
}


test = "!A.B.C.D"
function tabExpr(expr){
    if (expr.length == 1){
    }
}

tabExpr(test);

function tabK(tExpr){
    tabK = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
}