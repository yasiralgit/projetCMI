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
    const cb = document.getElementById("correK").checked;
    const exp = recupExpr();
    if (cb == true){
        if (exp == ''){
            console.log('tabK vide');
        }
        else{
            console.log('tabk')
        }
    }
}