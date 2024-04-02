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
    $("#tableKar") = "";
    const cb = document.getElementById("correK").checked;
    const exp = recupExpr();
    if (cb == true){
        if (exp != ''){
            $("#tableKar").append("<thead><tr><th>AB\CD</th><th>00</th><th>01</th><th>11</th><th>10</th></tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody>");
            console.log("<thead><tr><th>AB\CD</th><th>00</th><th>01</th><th>11</th><th>10</th></tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody>");
        }
    }
}