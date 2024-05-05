/** Classe représentant les codes binaires des entrées à 1*/
class OpBinaire {
    /**
     * Crée une opérande
     * @param {string||Array} x 
     * @param {string||Array} y 
     */
    constructor(x,y=""){ 
        this.x = x
        this.y = y        //le y est facultatif (pour pouvoir représenter la variable individuellement)
    }

    /**
     * Renvoie le code binaire d'une opérande individuelle
     * @returns {string}
     */
    VAR(){
        return "1"        
    }

    /**
     * Renvoie le code binaire d'une opérande avec l'opérateur inverse
     * @returns {string}
     */
    NOT(){
        return "0"
    }

    /**
     * Fusionne les deux produits entrantes
     * @returns {string} "01" ou "0111"
     */
    ET(){
        return this.x+this.y
    }

    /**
     * Ajoute deux produits de 4 opérandes chacuns dans un tableau
     * @returns {string|Array} ["0111","+","0010","+","1111"]
     */
    OU(){ 
        if(typeof this.y === 'string'){ // condition pour éviter la création de tableaux imbriqués
            return ([this.x]).concat(["+"].concat([this.y])) 
        }
        else{
            return ([this.x]).concat(["+"].concat(this.y)) 
        }
    }
}

/** Classe qui permet de représenter une pile */
class Pile {
    /**
     * Crée une pile
     * @param {Array} p
     */
    constructor(){
        this.p = [];
    }

    /**
     * Ajout d'un élément en tête de pile
     * @param {string} e -  "00"
     */
    empiler(e){   
        (this.p).push(e);
    }

    /**
     * Suppression et renvoi de la tête de la pile
     * @returns {string} "00"
     */
    depiler(){       
        if (!(this.estVide())){
            return (this.p).pop()
        }
    }

    /**
     * Teste si la pile est vide
     * @returns {boolean}
     */
    estVide(){              
        return ((this.p).length == 0)
    }

    /**
     * Teste si un élément appartient à la pile
     * @param {string} e - "48"
     * @returns {boolean} false
     */
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

    /**
     * Calcule la taille de la pile
     * @returns {number}
     */
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


/** 
 * Récupère et renvoie l'expression entrée par l'utilisateur
 * @returns {string} "!A.!B.C.!D + A.B.C.D + !A.B.C.D"
*/
function recupExpr() {
    return document.getElementById('exprU').value;
}

/**
 * Récupère les propriétés de l'expression saisie telles que le nombre d'opérandes unitaire, le nombre d'opérandes total, le nombre de signes '.', le nombre de signes '+', le nombre d'espaces et si il y a une erreur diverse
 * @param {string} expr - "!A.!B.C.!D + A.B.C.D + !A.B.C.D"
 * @returns {Array} [int,int,int,int,int,boolean]
 */
function nbProprietes(expr){
    var cpt = 0; var nbOperande = 0; var nbProd = 0; var nbSom = 0; var nbEsc = 0; var e = []; const entrees = ['A','B','C','D']; var erreur = false;
    for (let i = 0;i<expr.length;i++){
        if((entrees.includes(expr[i]))){
            nbOperande += 1;
            if(!(e.includes(expr[i]))){
                cpt +=1; e.push(expr[i]);
            }
        }
        else if(expr[i]=='.'){nbProd += 1;}
        else if(expr[i]=='+'){nbSom += 1;}
        else if(expr[i]==' '){nbEsc += 1;}
        else if(expr[i]!='!'){
            erreur = true;
        }
    }
    return [cpt,nbOperande,nbProd,nbSom,nbEsc,erreur]
}

/**
 * Vérifie, en récupérant les spécificités de l'expression entrée par l'utilisateur, qu'elle respecte bien les contraintes posées et nécessaires pour un traitement fluide (éviter les boucles infinies)
 * @param {string} expr - "!A.!B.C.!D + A.B.C.D + !A.B.C.D"
 * @returns {boolean}
 */
function verifExpr(expr){
    var tests = nbProprietes(expr);
    if (tests[0]!=4||tests[5]||(!((tests[1]/4)==(tests[2]/3)))){ //on vérifie si on a bien 4 opérandes différentes, si on a pas une erreur supplémentaire, et si on a le bon nombre de produits (nombre proportionnel avec le nombre d'opérandes total)
        return false
    }
    else if ((tests[1]/4)==(tests[2]/3)){ //si, pour une raison ou une autre, on a respecté tous les critères précédents, on vérifie...
        if ((tests[3]+1!=(tests[1]/4))||(tests[4]!=tests[3]*2)){//qu'on a bien le bon nombre de produits (proportionnel au nombre d'opérandes) et que le nombre d'espace est proportionnel au nombre de sommes
            return false
        }
    }
    return true
}

/**
 * Vérifie que l'expression entrée est bien limitée au produit (aucune somme)
 * @param {string} expr - "!A.!B.C.!D + A.B.C.D + !A.B.C.D" ou "!A.!B.C.!D" 
 * @returns {boolean}
*/
function prod(expr){
    for(let i=0;i<expr.length;i=i+1){
        if (expr[i]=='+'){
            return false;
        }
    }
    return true;
}

/**
 * Sépare le premier bloc de produit du reste de l'expression et renvoie les deux branches de la somme dans un tableau
 * @param {string} expr - "!A.!B.C.!D + A.B.C.D + !A.B.C.D"
 * @returns {(string|Array)} ["!A.!B.C.!D","A.B.C.D + !A.B.C.D"]
*/
function sectOU(expr){
    let i = 0;
    sousProdA = "";
    sousProdB = "";
    while (expr[i] != " "){
        sousProdA += expr[i];
        i += 1;
    }
    i += 3; //pour exclure l'opérateur "+" situé après le premier produit extrait
    for (i;i<expr.length;i=i+1){
        sousProdB += expr[i];
    }
    return [sousProdA,sousProdB]
}


/**
 * Sépare chaque variable de l'expression entrée et les renvoie sous forme de tableau
 * @param {string} expr - "!A.!B.C.!D" 
 * @returns {(string|Array)} ["!A","!B","C","!D"]
*/
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

/**
 * Traite l'expression entrée par l'utilisateur à l'aide de la classe OpBinaire afin qu'elle devienne exploitable
 * @param {string} expr - "!A.!B.C.!D + A.B.C.D + !A.B.C.D"
 * @returns {(string|Array)} ["0010","+","1111","+","0111"]
 */
function tabExpr(expr){
    if (prod(expr)){//cas trivial: forme la plus réduite, c'est à dire, produit de 4 entrées
        sp = sectET(expr);//on sépare les opérandes
        for (let i = 0;i<sp.length;i+=1){//on crée les objets de manière individuelle:
            if (sp[i][0] == "!"){
                sp[i] = new OpBinaire(sp[i]).NOT();//si la variable a l'opérateur NOT (!) avant
            }
            else{
                sp[i] = new OpBinaire(sp[i]).VAR();
            }
        }
        return [new OpBinaire(new OpBinaire(sp[0],sp[1]).ET(),new OpBinaire(sp[2],sp[3]).ET()).ET()] //on renvoie le produit sous forme de tableau et non pas un objet puisque les fonctions de classe renvoient la valeur de l'objet crée
    }
    else{//cas récursif : on a au moins une somme
        sousProd = sectOU(expr);//on sépare le premier produit du reste de la somme 
        return new OpBinaire(tabExpr(sousProd[0]),tabExpr(sousProd[1])).OU()//on rappelle la fonction, de même elle ne renverra pas l'objet mais sa valeur
    }
}

/**
 * Crée la table de Karnaugh selon les informations exploitables de l'expression modifiée
 * @param {(string|Array)} tExpr - Sortie de la fonction tabExpr
 * @returns {((string|Array)|Array)} [["0","0","0","1"],["0","0","1","0"],["0","0","1","0"],["0","0","0","0"]]
*/
function tabK(tExpr){
    tabk = [["0000","0001","0011","0010"], //modèle d'origine d'une table de Karnaugh avec chaque case représentée par leur code binaire
    ["0100","0101","0111","0110"],
    ["1100","1101","1111","1110"],
    ["1000","1001","1011","1010"]];
    tabKE = [["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]]; //initialisation de la table de Karnaugh qui sera modifiée ultérieurement
    for (let i = 0;i<tExpr.length;i=i+2){
        for (let j = 0;j<tabk.length;j=j+1){
            for (let k = 0;k<tabk[j].length;k=k+1){
                if (tExpr[i] == tabk[j][k]){
                    tabKE[j][k] = "1"; //on affecte les 1 si le code binaire
                }
            } 
        }
    }
    return tabKE
}

/**
 * Exploite la table de Karnaugh pour pouvoir réaliser une chaîne de caractère formattée avec les balises HTML/BOOTSTRAP pour permettre de la représenter sous forme d'une table
 * @param {((string|Array)|Array)} tabKar - [["0","0","0","1"],["0","0","1","0"],["0","0","1","0"],["0","0","0","0"]]
 * @returns {string} le tableau de tableau sous forme de chaîne de caractères formattée avec les balises HTML/BOOTSTRAP permettant de représenter une table
 */
function tabKStr(tabKar){
    let i = 0; let j = 0; let k = 0;
    var tkStrTab = ["</td><td>","</td><td>","</td><td>","</td></tr><tr><th>01</th><td>","</td><td>","</td><td>","</td><td>","</td></tr><tr><th>11</th><td>","</td><td>","</td><td>","</td><td>","</td></tr><tr><th>10</th><td>","</td><td>","</td><td>","</td><td>","</td></tr></tbody></table>"]; //on stocke les balises intermédiaires constantes
    var tkStr = "<table class = 'table'><thead><tr><th>AB\CD</th><th>00</th><th>01</th><th>11</th><th>10</th></tr></thead><tbody><tr><th>00</th><td>";
    while (k<tkStrTab.length){ //on rajoute les informations qui changent d'une expression à une autre selon la table de Karnaugh actuelle
        tkStr += tabKar[i][j];
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

/**
 * Affecte la table de Karnaugh à la balise/label correspondant dans le fichier HTML pour pouvoir l'afficher à l'utilisateur
 * @param {string} tkS - la sortie de la fonction tabKStr, donc table de Karnaugh sous forme de chaîne de caractères
 */
function affichageTabK(tkS) {
    const exp = recupExpr();
    if (exp != ''){ //on vérifie que l'utilisateur a bien entré une expression
        tableKar.innerHTML = tkS; 
    }
    else{ //sinon on cache la table de Karnaugh
        tableKar.innerHTML = "";
    }
}

/**
 * Crée la liste d'adjacence des coordonnées comportant un 1 sous forme de dictionnaire, la table de Karnaugh est donc considérée comme un graphe. Un autre dictionnaire pour savoir si un sommet a été traité est aussi crée
 * @param {((string|Array)|Array)} tabKar - [["0","0","0","1"],["0","0","1","0"],["0","0","1","0"],["0","0","0","0"]]
 * @returns {Object} [{"12":["22"],"22":["12"],"03";[]},{"12":false,"22":false,"03":false}]
 */
function listeAdj(tabKar){
    var g = {}; var aTraiter = {};
    for (let i = 0;i<tabKar.length;i++){
        for (let j = 0;j<tabKar[i].length;j++){
            if (tabKar[i][j] == "1"){ 
                g[i.toString()+j.toString()] = []; aTraiter[i.toString()+j.toString()] = false;
                var left = j-1; var right = j+1; var up = i-1; var down = i+1;//initialisation de tous les voisins possibles pour un sommet
                if(left == -1){left = 3;} if(right == 4){right = 0;} if(up == -1){up = 3;} if(down == 4){down = 0;}//circularité de la table
                if (tabKar[i][left] == 1){g[i.toString()+j.toString()].push(i.toString()+left.toString());}//transformation en string des coordonnées pour les clés du dictionnaire pour mieux pouvoir le manipuler ensuite
                if (tabKar[i][right] == 1){g[i.toString()+j.toString()].push(i.toString()+right.toString());}
                if (tabKar[up][j] == 1){g[i.toString()+j.toString()].push(up.toString()+j.toString());}
                if (tabKar[down][j] == 1){g[i.toString()+j.toString()].push(down.toString()+j.toString());}
            }
        }
    }
    return [g,aTraiter]
}

/**
 * Crée les blocs d'une taille de puissance de 2 en parcourant le graphe à l'aide de la liste d'adjacence
 * Pour une meilleure compréhension : explication avec schémas dans le rapport final
 * @param {Object} g - {"12":["22"],"22":["12"],"03":[]}
 * @param {Object} aTraiter - {"12":false,"22":false,"03":false}
 * @returns {(Pile<string>|Object)} {"12":["12","22"],"03":["03"]}
 */
function lBlocs(g,aTraiter){
    var listeBlocs = {}; var pileBloc; var include_i; var include_j; var nbV; var jamaisVu;
    for (som in g){ //on parcourt chaque sommet du graphe
        if (!aTraiter[som]){ //sous réserve qu'il n'ait pas déjà été parcouru (qu'il n'appartienne déjà pas à un bloc)
            pileBloc = new Pile(); //on crée son bloc associé sous forme de Pile (raisons expliquées dans le rapport)
            pileBloc.empiler(som); aTraiter[som] = true; //on l'empile lui même et on le passe à vrai, cas de base il n'a aucun voisin et ne rentrera pas dans les boucles de parcours
//----------cas n°1:il n'a qu'un seul voisin -> automatiquement un bloc de 2 on ne rentrera pas dans la boucle----------------------------------
            if(g[som].length == 1){pileBloc.empiler(g[som][0]); aTraiter[g[som][0]] = true;}
//----------cas n°2:il a plus de 1 voisin ------------------------------------------------------------------------------------------------------
            for (let j = 0;j<g[som].length-1;j++){
                include_j = false; jamaisVu = true //infos concernant son voisin principal 
                for (let i=j+1;i<g[som].length;i++){ //on parcourt les autres voisins du sommet courant AUTRES que g[som][j]
                    if(!(pileBloc.appartient(g[som][i]))){pileBloc.empiler(g[som][i]);include_i = false;} //on l'empile de manière conditionnelle (cf. ligne 280)
                    for (autreSom in g){ //on parcourt TOUS les autres sommets dans le graphe
                        if (autreSom != som){ //on exclut le sommet courant
                            if (g[autreSom].includes(g[som][j])&&g[autreSom].includes(g[som][i])){ //on vérifie si il existe un autre sommet du graphe qui est simultanément voisin de deux voisins du sommet courant, si oui on empile les sommets qui ont besoin d'être empilés et on les passe à vrai
                                aTraiter[g[som][i]] = true; 
                                if(!(pileBloc.appartient(autreSom))){
                                    pileBloc.empiler(autreSom); aTraiter[autreSom] = true;}
                                if(!(pileBloc.appartient(g[som][j]))){
                                    pileBloc.empiler(g[som][j]); aTraiter[g[som][j]] = true;}
                                include_i = true;include_j = true;
                            }
                        }
                    }
                    if (!(include_i)){pileBloc.depiler();}//si non, on le dépile parce qu'il ne respecte pas les conditions nécessaires pour avoir un bloc avec le voisin principal courant
                }      
            }
//----------cas n°3:résolution du problème des blocs de 1 et 6----------------------------------------------------------------------------------
            var existeBloc; //pour ne pas malencontreusement en passer un à false alors qu'il appartient à un autre bloc
            if(g[som].length>0&&pileBloc.len()==1){ //si il a des voisins mais que le parcours principal a réduit sa pile de bloc qu'à un élément, on le dépile et on repasse à false pour l'analyser à nouveau
                aTraiter[pileBloc.depiler()] = false;
            }
            else if(pileBloc.len()==6){ //sinon si il a 6 éléments, c'est parce que le sommet principal est central, il faut dépiler les deux derniers, qui par linéarité sont les deux en trop, pour avoir un bloc de 4, puissance de 2
                while(pileBloc.len()!=4){
                    existeBloc = false;
                    s = pileBloc.depiler();
                    for (b in listeBlocs){
                        if(b==s||listeBlocs[b].appartient(s)){existeBloc = true;}
                    }
                    if(!(existeBloc)){aTraiter[s] = false;}
                }
            }
//----------cas n°4:vérification de la potentielle présence d'un bloc de 8----------------------------------------------------------------------
            if(pileBloc.len()>=7){
                nbV = {}; //cf ligne 338
                for(let k=0;k<g[som].length;k++){ //parcours similaire au précedent, la seule différence est que le sommet principal sont les voisins du sommet courant, pour élargir les sommets atteignables à partir du sommet principal courant (problème de l'hypercube, une dimension est rajoutée)
                    for(let l=0;l<g[g[som][k]].length;l++){ //on parcourt donc les voisins du voisin courant du sommet principal courant
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
                    if (nbV[v]>=3&&(!(pileBloc.appartient(v)))){ //rajout d'un autre sommet sous condition qu'il partage au moins 3 sommets déjà présents dans le bloc
                        pileBloc.empiler(v); aTraiter[v] = true;
                    }
                }
                if (longPrev==pileBloc.len()){ //cas où le bloc de 8 n'existe pas, on dépile jusqu'à avoir un bloc de 4
                    while(pileBloc.len()!=4){
                        existeBloc = false;
                        s = pileBloc.depiler();
                        for (b in listeBlocs){
                            if(b==s||listeBlocs[b].appartient(s)){existeBloc = true;}
                        }
                        if(!(existeBloc)){aTraiter[s] = false;}
                    }
                }
            }
//----------cas n°5:vérification de la potentielle présence d'un bloc de 16---------------------------------------------------------------------
            if(pileBloc.len()==15){
                for(s in aTraiter){
                    if (!(aTraiter[s])){
                        pileBloc.empiler(s); aTraiter[s] = true; ///on empile le seul sommet manquant
                    }
                }
            }
//----------cas n°6:soit on a un bloc non vide et puissance de 2, soit le bloc est problématique et on traitera le sommet courant ultérieurement
            if(((Math.log2(pileBloc.len())*2)%2)!=0){while(!(pileBloc.estVide())){aTraiter[pileBloc.depiler()] = false;}}
            if ((!(pileBloc.estVide()))&&(!(aTraiter[som]==false))){listeBlocs[som] = pileBloc;}
        }
    }
    return listeBlocs
}

/**
 * Détermine l'expression réduite, donc quels opérandes à garder, selon les blocs crées précédemment, et intéragit avec la page HTML pour l'afficher à l'utilisateur
 * @param {(Pile<string>|Object)} listeBlocs - {"12":["12","22"],"03":["03"]}
 */
function trad(listeBlocs){
    var expr = ''; var prod; var long; var lProds; var memeEntree;
    var valTrad = [ //modèle d'origine d'une table de Karnaugh avec chaque case représentée par leur expression (fonctionnement similaire que dans la fonction tabK)
        ['!A.!B.!C.!D','!A.!B.!C.D','!A.!B.C.D','!A.!B.C.!D'],
        ['!A.B.!C.!D','!A.B.!C.D','!A.B.C.D','!A.B.C.!D'],
        ['A.B.!C.!D','A.B.!C.D','A.B.C.D','A.B.C.!D'],
        ['A.!B.!C.!D','A.!B.!C.D','A.!B.C.D','A.!B.C.!D']
    ];
    for (b in listeBlocs){ //on parcourt chaque blocs crées
        prod = []; long = listeBlocs[b].len(); lProds = []; var exprProd = '';
        if (expr!=''){ //cas associé à l'expression, pour éviter d'avoir un + en début ou fin de le chaine de caractères
            expr += ' + ';
        }
        for (let i = 0;i<long;i++){ //on parcourt la pile, et on ajoute l'expression du tableau valTrad associée aux coordonnées dépilées dans  tableau prod
            coor = listeBlocs[b].depiler();
            prod.push(valTrad[coor[0]][coor[1]]);
        }
        for (let j = 0;j<prod.length;j++){ //on sépare les produits pour permettre une comparaison plus simple et on les ajoute dans la liste lProds
            lProds.push(sectET(prod[j]));
        }
        for (let k = 0;k<lProds[0].length;k++){ //on parcourt les opérandes du premier produit de lProds uniquement
            memeEntree = true;
            for (let l = 1;l<lProds.length;l++){ //on parcourt les autres produits (pas leur opérandes) autres que lProds[0]
                if (lProds[0][k]!=lProds[l][k]){ //on compare et si c'est faux, l'opérande sera ignorée
                    memeEntree = false;
                }
            }
            if (memeEntree){//sinon on l'ajoute à la chaine de caractère de l'expression réduite
                if(exprProd!=''){exprProd += '.';}//pour éviter qu'il y ait un signe de produit en trop au début
                exprProd += lProds[0][k];
            }
        }
        expr += exprProd;
    }
    //let expRed = document.getElementById("exprRed");
    exprRed.innerHTML = "L'expression réduite est : "+expr; //on passe l'info à la baslise correspondant à l'expression réduite dans la page HTML
}

/**
 * Fonction qui ordonne les appels de chaque fonction/procédure après avoir vérifié la validité de l'expression, selon si l'utilisateur à cliqué sur le bouton de réduction dans la page HTML
 */
function appelsHtml(){
    affErr.innerHTML = "";
    if (verifExpr(recupExpr())){//l'expression est correcte
        trad(lBlocs(listeAdj(tabK(tabExpr(recupExpr())))[0],listeAdj(tabK(tabExpr(recupExpr())))[1]));
    }
    else{//elle ne l'est pas donc message d'erreur
        affErr.innerHTML = "Problème avec l'expression saisie. Veuillez respecter les contraintes demandées."
    }
}

/**
 * Fonction qui ordonne les appels de chaque fonction/procédure après avoir vérifié la validité de l'expression, selon si l'utilisateur à cliqué sur le bouton d'affichage de la table de Karnaugh dans la page HTML
 */
function appelsKar(){
    affErr.innerHTML = "";
    if (verifExpr(recupExpr())){//l'expression est correcte
        affichageTabK(tabKStr(tabK(tabExpr(recupExpr()))));
    }
    else{//elle ne l'est pas donc message d'erreur
        affErr.innerHTML = "Problème avec l'expression saisie. Veuillez respecter les contraintes demandées."
    }
}

/***
 * QUELQUES SERIES DE TESTS

 * tests tabExpr
    console.log("OpBinaire",tabExpr(recupExpr()));
    sortie devrait être ["0111","+","0010","+","1111"]
 * tests pile
    pTest = new Pile();
    pTest.empiler(8);
    pTest.empiler(12);
    console.log(pTest);
    console.log(pTest);
    console.log(pTest.depiler());
    pTest.empiler(5);
    console.log(pTest);
 * tests listeAdj, lBlocs, trad
    testKar = [["0","0","0","1"],["0","0","1","0"],["0","0","1","0"],["0","0","0","0"]]
    gTest = listeAdj(testKar)[0];
    aTraiterTest = listeAdj(testKar)[1];
    console.log(gTest);console.log(aTraiterTest);
    lBlocsTest = lBlocs(gTest,aTraiterTest);
    console.log(trad(lBlocsTest));
*/

