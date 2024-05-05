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

class Pile {
    constructor(){
        this.p = [];
    }

    empiler(e){
        (this.p).push(e);
    }

    depiler(){
        if (!(this.estVide())){
            return (this.p).pop()
        }
    }

    estVide(){
        return ((this.p).length == 0)
    }

    appartient(e){
        var pileInt; var isInP = false; var elt;
        pileInt = new Pile();
        while((!(this.estVide()))&&(!isInP)){
            elt = this.depiler(); pileInt.empiler(elt);
            if (elt==e){
                isInP = true;
            }
        }
        while(!(pileInt.estVide())){
            this.empiler(pileInt.depiler());
        }
        return isInP
    }

    len(){
        var pileInt; var cpt=0; var elt;
        pileInt = new Pile();
        while((!(this.estVide()))){
            elt = this.depiler(); pileInt.empiler(elt); cpt += 1;
        }
        while(!(pileInt.estVide())){
            this.empiler(pileInt.depiler());
        }
        return cpt
    }
}

document.addEventListener("onclick", affichageTabK);

function recupExpr() {
    return document.getElementById('exprU').value;
}

function affichageTabK(tkS) {
    tkar = "";
    //const cb = document.getElementById("correK").checked;
    const exp = recupExpr();
    //if (cb == true){
        //console.log(cb);
        if (exp != ''){
            tableKar.innerHTML = tkS;
            console.log("procédé tableau de Karnaugh affiché");
        }
    //}
    //else{
    //    tableKar.innerHTML = ""
    //}
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
    console.log(prod(expr))
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
    console.log(1,tExpr);
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

function graphe(tabKar){
    var g = {}; var aTraiter = {};
    for (let i = 0;i<tabKar.length;i++){
        for (let j = 0;j<tabKar[i].length;j++){
            if (tabKar[i][j] == 1){ 
                g[i.toString()+j.toString()] = [];
                aTraiter[i.toString()+j.toString()] = false;
                var left = j-1; var right = j+1; var up = i-1; var down = i+1;//initialisation de tous les voisins possibles pour un sommet
                if(left == -1){left = 3;} if(right == 4){right = 0;} if(up == -1){up = 3;} if(down == 4){down = 0;}//circularité de la table
                //console.log(tabKar[i][left])
                if (tabKar[i][left] == 1){g[i.toString()+j.toString()].push(i.toString()+left.toString());}//transformation en string pour mieux pouvoir le manipuler ensuite (car c'est les coordonnées i et j de la table)
                //console.log(tabKar[i][right])
                if (tabKar[i][right] == 1){g[i.toString()+j.toString()].push(i.toString()+right.toString());}
                //console.log(up)
                //console.log(tabKar[up][j])
            if (tabKar[up][j] == 1){g[i.toString()+j.toString()].push(up.toString()+j.toString());}
                if (tabKar[down][j] == 1){g[i.toString()+j.toString()].push(down.toString()+j.toString());}
            }
        }
    }
    return [g,aTraiter]
}


/**pTest = new Pile();
pTest.empiler(8);
pTest.empiler(12);
console.log(pTest);
console.log(pTest);
console.log(pTest.depiler());
pTest.empiler(5);
console.log(pTest);*/



function lBlocs(g,aTraiter){// voir explications explicites sur le rapport final (avec d'éventuels schémas)
    var listeBlocs = {}; var pileBloc; var include_i; var include_j; var nbV; var tousVus=false; var jamaisVu;
    for (som in g){ //itération sur les sommets de la liste d'adjacence
        if (!aTraiter[som]){ //on entre seulement si le sommet n'a pas déjà été traité
            pileBloc = new Pile(); //on crée la pile nécessaire pour stocker les éléments du bloc de puissance de 2
            pileBloc.empiler(som); aTraiter[som] = true; //on empile le sommet en cours de traitement, et on le passe à vrai
            if(g[som].length == 1){pileBloc.empiler(g[som][0]); aTraiter[g[som][0]] = true;}//si il a au moins un voisin on l'empile, et éventuellement on entre dans les boucles, sinon on va directement à la ligne après la première boucle for
            for (let j = 0;j<g[som].length-1;j++){//itération sur tous les voisins du sommet courant
                include_j = false; jamaisVu = true
                for (let i=j+1;i<g[som].length;i++){//itération sur les voisins du sommet courant autre que celui précédent
                    if(!(pileBloc.appartient(g[som][i]))){pileBloc.empiler(g[som][i]);include_i = false;}//en lien avec ligne 93, on l'empile avec la condition qu'il permette un agrandissement à un bloc d'une taille de puissance de 2, et qu'il n'y soit pas déjà pour éviter les doublons (cas d'un bloc de 8 par ex), le include false ref a projet pb 3
                    for (autreSom in g){ //on itère sur tout les autres sommets du graphe
                        if (autreSom != som){ //on exclut le sommet courant som
                            if (g[autreSom].includes(g[som][j])&&g[autreSom].includes(g[som][i])){ //on vérifie si autreSom est bien voisin avec deux voisins communs au sommet courant som
                                aTraiter[g[som][i]] = true;
                                if(!(pileBloc.appartient(autreSom))){//pour éviter les doublons
                                    pileBloc.empiler(autreSom); aTraiter[autreSom] = true;}
                                if(!(pileBloc.appartient(g[som][j]))){//pour éviter les doublons
                                    pileBloc.empiler(g[som][j]); aTraiter[g[som][j]] = true;}
                                include_i = true;include_j = true;//pour le garder dans le bloc puisqu'il répond à la condition
                            }
                        }
                    }
                    if (!(include_i)){pileBloc.depiler();}//si on a trouvé aucun autre voisin permettant un bloc d'une taille de puissance de 2, on l'enlève du bloc, il n'en fait pas parti
                }
                if (!(include_j)){
                    s = pileBloc.depiler();
                    if (s==g[som][j]){
                        for (b in listeBlocs){
                            if(b==s||listeBlocs[b].appartient(s)){
                                jamaisVu = false;
                            }
                        }
                        if(jamaisVu){aTraiter[s] = false;}}
                    else{
                        pileBloc.empiler(s);
                    }
                }
            }
            var existeBloc;
            if(g[som].length>0&&pileBloc.len()==1){//pb pour un certain cas cf photo 20 avril #1
                aTraiter[pileBloc.depiler()] = false;
            }
            else if(pileBloc.len()==6){
                while(pileBloc.len()!=4){
                    existeBloc = false;
                    s = pileBloc.depiler();
                    for (b in listeBlocs){
                        if(b==s||listeBlocs[b].appartient(s)){existeBloc = true;}
                    }
                    if(!(existeBloc)){aTraiter[s] = false;}
                    //projet pb 4 ou 5 jsp (on a deux fois la mm pile)
                }
            }
            if(pileBloc.len()>=7){
                nbV = {};
                for(let k=0;k<g[som].length;k++){
                    for(let l=0;l<g[g[som][k]].length;l++){
                        for(let m=l+1;m<g[g[som][k]].length;m++){
                            for (autreSom in g){
                                if (autreSom!=g[som][k]&&pileBloc.appartient(g[g[som][k]][l])&&pileBloc.appartient(g[g[som][k]][m])){
                                    if(g[autreSom].includes(g[g[som][k]][l])&&g[autreSom].includes(g[g[som][k]][m])){
                                        if (autreSom in nbV){
                                            nbV[autreSom] += 1;
                                        }
                                        else{
                                            nbV[autreSom] = 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                longPrev = pileBloc.len();
                for(v in nbV){
                    if (nbV[v]>=3&&(!(pileBloc.appartient(v)))){
                        pileBloc.empiler(v); aTraiter[v] = true;
                    }
                }
                if (longPrev==pileBloc.len()){
                    while(pileBloc.len()!=4){
                        existeBloc = false;
                        s = pileBloc.depiler();
                        for (b in listeBlocs){
                            if(b==s||listeBlocs[b].appartient(s)){existeBloc = true;}
                        }
                        if(!(existeBloc)){aTraiter[s] = false;}
                        //projet pb 4 ou 5 jsp (on a deux fois la mm pile) avec bloc de 7
                    }
                }
            }
            if(pileBloc.len()==15){
                for(s in aTraiter){
                    if (!(aTraiter[s])){
                        pileBloc.empiler(s); aTraiter[s] = true;
                    }
                }
            }
            //console.log("ici", Math.log2(pileBloc.len()))
            if(((Math.log2(pileBloc.len())*2)%2)!=0){ //on lui a laissé sa chance dans la boucle précédente, si c'est tjrs pas une puissance de deux, on le supprime
                //console.log("hello", pileBloc.len());
                while(!(pileBloc.estVide())){
                    aTraiter[pileBloc.depiler()] = false;//projet pb 2 mais avec bloc de 10
                }
            }
            if ((!(pileBloc.estVide()))&&(!(aTraiter[som]==false))){listeBlocs[som] = pileBloc;}//le bloc final est crée, on peut le rajouter au dictionnaire et ne plus jamais le retoucher (hormis blocs de 8 et +)
            //ici enfait
        }
    }
    /**pb à régler : on travaille avec des hypercubes donc le nombre de voisins max possible limite le parcours de tous les sommets permettant de construire un bloc d'une taille de puissance de 2 (y'en a qui se situent trop loin par rapport au sommet courant)
     * -blocs de 8: les clés des deux blocs sortant dans listeBlocs s'excluent mutuellement, donc faut les fusionner (piles de 7 elts au lieu de 8)
     * -blocs de 16: mm pb sauf que au lieu de manquer que 1 élément, il lui en manque 5 et de la même manière, mutuellement avec la deuxième pile*/
    /**tousVus = true;
    for (som in aTraiter){
    if (aTraiter[som]==false){tousVus = false;}
    }*/


    console.log(listeBlocs); //on retourne le dico des blocs selon une origine pour pouvoir ensuite passer à la traduction
    //console.log(aTraiter);
    return listeBlocs
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

function trad(listeBlocs){
    var expr = ''; var prod; var long; var lProds; var memeEntree;
    var valTrad = [
        ['!A.!B.!C.!D','!A.!B.!C.D','!A.!B.C.D','!A.!B.C.!D'],
        ['!A.B.!C.!D','!A.B.!C.D','!A.B.C.D','!A.B.C.!D'],
        ['A.B.!C.!D','A.B.!C.D','A.B.C.D','A.B.C.!D'],
        ['A.!B.!C.!D','A.!B.!C.D','A.!B.C.D','A.!B.C.!D']
    ];
    for (b in listeBlocs){
        prod = []; long = listeBlocs[b].len(); lProds = [];
        if (expr!=''){
            expr += ' + ';
        }
        for (let i = 0;i<long;i++){
            coor = listeBlocs[b].depiler();
            console.log(coor);
            prod.push(valTrad[coor[0]][coor[1]]);
        }
        for (let j = 0;j<prod.length;j++){
            lProds.push(sectET(prod[j]));
        }
        for (let k = 0;k<lProds[0].length;k++){
            memeEntree = true;
            for (let l = 1;l<lProds.length;l++){
                if (lProds[0][k]!=lProds[l][k]){
                    memeEntree = false;
                }
            }
            if (memeEntree){
                expr += lProds[0][k];
            }
        }
    }
    let expRed = document.getElementById("expRed")
    expRed.innerHTML = expr 
}



gTest = graphe(testKar)[0];
aTraiterTest = graphe(testKar)[1];
console.log(gTest);console.log(aTraiterTest);
lBlocsTest = lBlocs(gTest,aTraiterTest);
console.log(trad(lBlocsTest));


