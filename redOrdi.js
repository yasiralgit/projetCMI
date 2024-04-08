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
        return [new Logique2(new Logique2(sp[0],sp[1]).ET(),new Logique2(sp[2],sp[3]).ET()).ET()]
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
    console.log(tExpr);
    tabk = [["0000","0001","0011","0010"],
    ["0100","0101","0111","0110"],
    ["1100","1101","1111","1110"],
    ["1000","1001","1011","1010"]];
    tabKE = [["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
    for (let i = 0;i<tExpr.length;i=i+2){
        console.log("boucle i", i);
        for (let j = 0;j<tabk.length;j=j+1){
            console.log("boucle j", j);
            for (let k = 0;k<tabk[j].length;k=k+1){
                console.log("tExpr et tabK = ", tExpr[i], tabk[j][k]);
                if (tExpr[i] == tabk[j][k]){
                    tabKE[j][k] = "1";
                    console.log("normalement 1");
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
function kar2exp(tbk) {
    var marTrans = [
    ['0000','0001','0011','0010'],
    ['0100','0101','0111','0110'],
    ['1100','1101','1111','1110'],
    ['1000','1001','1011','1010']
    ];
    var marTrad = [
        ['!A.!B.!C.!D','!A.!B.!C.D','!A.!B.C.D','!A.!B.C.!D'],
        ['!A.B.!C.!D','!A.B.!C.D','!A.B.C.D','!A.B.C.!D'],
        ['A.B.!C.!D','A.B.!C.D','A.B.C.D','A.B.C.!D'],
        ['A.!B.!C.!D','A.!B.!C.D','A.!B.C.D','A.!B.C.!D']
        ];
    var marTEST = [
    [0,0,0,0],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,0,0]
    ];
    var cpt = 0 ; var pos = []; var coor = []; var bloc1 = []; var bloc2 = []; var bloc4 = []; var verifVoisins;
    for (let i = 0 ; i<tbk.length ; i++) {
        for (let j = 0 ;j < tbk[i].length ; j++) {
            if (tbk[i][j] == 1) {
                cpt ++ 
                pos.push(marTrans[i][j])
                coor.push([i,j]);
            }

        }
    }
    console.log(pos);
    console.log(coor);
    if (pos.length == 1) {
        console.log("1 seul 1");
        return pos[0]
    }
    if (pos.length == 16) {
        console.log("seize 1");
        return "1";
    }
    for (let i = 0;i<coor.length;i++){
        verifVoisins = false;
        for (let j = i+1;j<coor.length;j++){
            console.log(coor[i][0]);
            if ((coor[j][0] == coor[i][0])&&(((coor[j][1]-coor[i][1])**2)==1)||(coor[j][1] == coor[i][1])&&(((coor[j][0]-coor[i][0])**2)==1)){
                console.log("premier if");
                bloc2.push([coor[i],coor[j]]);
                verifVoisins = true;
            }
            if ((coor[j][0] == coor[i][0])&&(((coor[j][1]-coor[i][1])**2)==9)||(coor[j][1] == coor[i][1])&&(((coor[j][0]-coor[i][0])**2)==9)){
                console.log("2eme if");
                bloc2.push([coor[i],coor[j]]);
                verifVoisins = true;
            }
            if(coor[i][1]==3){
                for (elt of bloc2){
                    if (elt.includes(coor[i])){ //bloc2 = [[[i,j],[i,j]],[[i,j],[i,j]]]
                        verifVoisins = true;
                    }
                }
            }

        }
        if(i==coor.length-1){
            for (elt of bloc2){
            if (elt.includes(coor[i])){ //bloc2 = [[[i,j],[i,j]],[[i,j],[i,j]]]
                verifVoisins = true;
            }
            }
        }
        if (!verifVoisins){
            console.log("tt seul");
            bloc1.push(coor[i]);
        }
    }
    for (let i = 0;i<bloc2.length;i++){
        verifVoisins = false;
        for (let j = i+1;j<bloc2.length;j++){
            if(!((bloc2[j].includes(bloc2[i][0])) || (bloc2[j].includes(bloc2[i][1])))){
                if (bloc2[i][0][0] == bloc2[i][1][0] == bloc2[j][0][0] == bloc2[j][1][0]){
                    bloc4.push([bloc2[i],bloc2[j]]);
                    verifVoisins = true;
                }
                if (bloc2[i][0][1] == bloc2[i][1][1] == bloc2[j][0][1] == bloc2[j][1][1]){
                    bloc4.push([bloc2[i],bloc2[j]]);
                    verifVoisins = true;
                }
                if (((bloc2[i][0][0] == bloc2[j][0][0])&&(((bloc2[i][0][1]-bloc2[j][0][1])**2)==1))||((bloc2[i][0][1] == bloc2[j][0][1])&&(((bloc2[i][0][0]-bloc2[j][0][0])**2)==1))){
                    if(((bloc2[i][1][0] == bloc2[j][1][0])&&(((bloc2[i][1][1]-bloc2[j][1][1])**2)==1))||((bloc2[i][1][1] == bloc2[j][1][1])&&(((bloc2[i][1][0]-bloc2[j][1][0])**2)==1))){
                        bloc4.push([bloc2[i],bloc2[j]]);
                        verifVoisins = true;
                    }
                }
                if (((bloc2[i][0][0] == bloc2[j][0][0])&&(((bloc2[i][0][1]-bloc2[j][0][1])**2)==9))||((bloc2[i][0][1] == bloc2[j][0][1])&&(((bloc2[i][0][0]-bloc2[j][0][0])**2)==9))){
                    if(((bloc2[i][1][0] == bloc2[j][1][0])&&(((bloc2[i][1][1]-bloc2[j][1][1])**2)==9))||((bloc2[i][1][1] == bloc2[j][1][1])&&(((bloc2[i][1][0]-bloc2[j][1][0])**2)==9))){
                        bloc4.push([bloc2[i],bloc2[j]]);
                        verifVoisins = true;
                    }
                }
            }
        }
    } //bloc4 = [[[[i,j],[i,j]],[[i,j],[i,j]]],[[[i,j],[i,j]],[[i,j],[i,j]]]]
    for (let i = 0;i<bloc4.length;i++){
        verifVoisins = false;
        for (let j = i+1;j<bloc4.length;j++){
            if(!((bloc4[j][0].includes(bloc4[i][0])) || (bloc4[j][0].includes(bloc4[i][1])) || (bloc4[j][1].includes(bloc4[i][0])) || (bloc4[j][1].includes(bloc4[i][1])))){
                console.log("pas confondus");
            }
        }
    }
    console.log("bloc 4", bloc4);
    console.log("bloc 2 ", bloc2);
    console.log("bloc 1", bloc1);
   }


function test2(){
    //console.log("logique 1",tabExpr(recupExpr()));
    //console.log("logique 2",tabExpr2(recupExpr()));
    console.log(tabExpr2(recupExpr()))
    tabkar = tabK(tabExpr2(recupExpr()));
    console.log(tabkar);
    //console.log(tabKStr(tabkar));
    affichageTabK(tabKStr(tabkar));
    kar2exp(tabkar)
}