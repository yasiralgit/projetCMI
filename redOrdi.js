class Logique {
    constructor(x,y=""){
        this.x = x
        this.y = y
    }

    VAR(){
        return [this.x]
    }

    ET(){
        return (this.x).concat(this.y)
    }

    OU(){
        if((this.y)[0].constructor.name == "Array"){
            return ([this.x]).concat(["+"].concat(this.y))
        }
        else{
            return ([this.x]).concat(["+"].concat([this.y]))
        }
    }

    NOT(){
        return [["!"],[this.x]]
    }
}

// sortie devrait être [["!A","B","C","D"],"+",["!A","!B","C","!D"],"+",["A","B","C","D"]]

class Logique2 {
    constructor(x,y=""){
        this.x = x
        this.y = y
    }

    VAR(){
        return "1"
    }

    ET(){
        return this.x+this.y
    }

    OU(){
        if(typeof this.y === 'string'){
            return ([this.x]).concat(["+"].concat([this.y]))
        }
        else{
            return ([this.x]).concat(["+"].concat(this.y))
        }
    }

    NOT(){
        return "0"
    }
}

// sortie devrait être ["0111","+","0010","+","1111"]

document.addEventListener("onclick", affichageTabK);

function recupExpr() {
    return document.getElementById('exprU').value;
}

function affichageTabK(tkS) {
    tkar = "";
    const cb = document.getElementById("correK").checked;
    const exp = recupExpr();
    if (cb == true){
        console.log(cb);
        if (exp != ''){
            tableKar.innerHTML = tkS;
            console.log("procédé tableau de Karnaugh affiché");
        }
    }
    else{
        tableKar.innerHTML = ""
    }
}

function prod(expr){
    for(let i=0;i<expr.length;i=i+1){
        if (expr[i]=='+'){
            return false;
        }
    }
    return true;
}

function sectOU(expr){
    let i = 0;
    sousProdA = "";
    sousProdB = "";
    while (expr[i] != " "){
        sousProdA += expr[i];
        i += 1;
    }
    i += 3;
    for (i;i<expr.length;i=i+1){
        sousProdB += expr[i];
    }
    return [sousProdA,sousProdB]
}

function sectET(expr){
    let i = 0;
    sousProds = ["","","",""];
    for (let j=0;j<expr.length;j=j+1){
        if (expr[j]=="."){
            i += 1;
        }
        else{
            sousProds[i] += expr[j];
        }
    }
    return sousProds
}

test = "!A.B.C.D + !A.!B.C.!D + A.B.C.D + A.B.!C.D"
function tabExpr(expr){
    if (prod(expr)){
        sp = sectET(expr);
        a = sp[0];
        b = sp[1];
        c = sp[2];
        d = sp[3];
        return new Logique(new Logique(new Logique(a).VAR(),new Logique(b).VAR()).ET(),new Logique(new Logique(c).VAR(),new Logique(d).VAR()).ET()).ET()
    }
    else{
        //console.log("on a pas tous les sous-produits");
        sousProd = sectOU(expr);
        //console.log(sousProd[0]);
        //console.log(sousProd[1]);
        return new Logique(tabExpr(sousProd[0]),tabExpr(sousProd[1])).OU()
    }
}

function tabExpr2(expr){
    if (prod(expr)){
        sp = sectET(expr);
        for (let i = 0;i<sp.length;i+=1){
            if (sp[i][0] == "!"){
                sp[i] = new Logique2(sp[i]).NOT();
            }
            else{
                sp[i] = new Logique2(sp[i]).VAR();
            }
        }
        //console.log(sp);
        return new Logique2(new Logique2(sp[0],sp[1]).ET(),new Logique2(sp[2],sp[3]).ET()).ET()
    }
    else{
        //console.log("on a pas tous les sous-produits");
        sousProd = sectOU(expr);
        //console.log(sousProd[0]);
        //console.log(sousProd[1]);
        return new Logique2(tabExpr2(sousProd[0]),tabExpr2(sousProd[1])).OU()
    }
}

//console.log("logique 1",tabExpr(recupExpr()));
//console.log("logique 2",tabExpr2(recupExpr()));
// sortie devrait être [["!A","B","C","D"],"+",["!A","!B","C","!D"],"+",["A","B","C","D"]]
// sortie devrait être ["0111","+","0010","+","1111"]

function tabK(tExpr){
    //console.log(tExpr);
    tabk = [["0000","0001","0011","0010"],
    ["0100","0101","0111","0110"],
    ["1100","1101","1111","1110"],
    ["1000","1001","1011","1010"]];
    tabKE = [["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
    for (let i = 0;i<tExpr.length;i=i+2){
        //console.log("boucle i", i);
        for (let j = 0;j<tabk.length;j=j+1){
            //console.log("boucle j", j);
            for (let k = 0;k<tabk[j].length;k=k+1){
                //console.log("tExpr et tabK = ", tExpr[i], tabk[j][k]);
                if (tExpr[i] == tabk[j][k]){
                    tabKE[j][k] = "1";
                    //console.log("normalement 1");
                }
            } 
        }
    }
    return tabKE
}

function tabKStr(tKar){
    let i = 0;
    let j = 0;
    let k = 0;
    tkStrTab = ["</td><td>","</td><td>","</td><td>","</td></tr><tr><th>01</th><td>","</td><td>","</td><td>","</td><td>","</td></tr><tr><th>11</th><td>","</td><td>","</td><td>","</td><td>","</td></tr><tr><th>10</th><td>","</td><td>","</td><td>","</td><td>","</td></tr></tbody></table>"];
    tkStr = "<table><thead><tr><th>AB\CD</th><th>00</th><th>01</th><th>11</th><th>10</th></tr></thead><tbody><tr><th>00</th><td>";
    while (k<tkStrTab.length){
        tkStr += tKar[i][j];
        tkStr += tkStrTab[k];
        j = j+1;
        k = k+1;
        if (j==4){
            i = i+1;
            j = 0;
        }
    }
    return tkStr
}

//prototype de yasir
function kar2exp() {
    var marTrans = [
    ['0000','0001','0011','0010'],
    ['0100','0101','0111','0110'],
    ['1100','1101','1111','1110'],
    ['1000','1001','1011','1010']
    ];
    var marTrad = [
        ['!A.!B.!C.!D','!A.!B.!C.D','!A.!B.C.D','!A.!B.C.!D'],
        ['!A.B.!C.!D','!A.B.!C.D','!A.B.C.D','!A.B.C.!D'],
        ['A.B.!C.!D','A.B.!C.D','A.B.C.D','A.B.C.D'],
        ['A.!B.!C.!D','A.!B.!C.D','A.!B.C.D','A.!B.C.!D']
        ];
    var marTEST = [
    [0,0,0,0],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,0,0]
    ];
    var cpt = 0 ; var pos = [];
    for (let i = 0 ; i<marTEST.length ; i++) {
        for (let j = 0 ;j < marTEST[i].length ; j++) {
            if (marTEST[i][j] == 1) {
                cpt ++ 
                pos.push(marTrans[i][j])
            }

        }
    }
    console.log(pos)
    if (pos.length == 1) {
        return pos[0]
    }
    if (pos.length == 2){
        for (let k = 0 ; k < 4 ; k++){
            if (pos[0][k] != pos[1][k]) {
                //ds
            } 
        }
    }
    
   }


function test2(){
    //console.log("logique 1",tabExpr(recupExpr()));
    //console.log("logique 2",tabExpr2(recupExpr()));
    tabkar = tabK(tabExpr2(recupExpr()));
    //console.log(tabkar);
    //console.log(tabKStr(tabkar));
    affichageTabK(tabKStr(tabkar))
}