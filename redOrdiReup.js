class Pile {
    constructor(){
        this.p = [];
    }

    empiler(e){
        (this.p).push(e);
    }

    depiler(){
        if (!((this.p)==[])){
            return (this.p).pop()
        }
    }

    estVide(){
        return ((this.p) == [])
    }

    tab(){ //à revoir pcq je crois pas que ce soit dans les vraies règles du principe des piles mais peu importe pour l'instant
        return this.p
    }

}



var testKar = [
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]
];


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
    var listeBlocs = {}; var pileBloc; var include;
    for (som in g){ //itération sur les sommets de la liste d'adjacence
        if (!aTraiter[som]){ //on entre seulement si le sommet n'a pas déjà été traité
            pileBloc = new Pile(); //on crée la pile nécessaire pour stocker les éléments du bloc de puissance de 2
            pileBloc.empiler(som); aTraiter[som] = true; //on empile le sommet en cours de traitement, et on le passe à vrai
            if(g[som].length > 0){pileBloc.empiler(g[som][0]); aTraiter[g[som][0]] = true;}//si il a au moins un voisin on l'empile, et éventuellement on entre dans les boucles, sinon on va directement à la ligne après la première boucle for
            for (let j = 0;j<g[som].length;j++){//itération sur tous les voisins du sommet courant
                for (let i=j+1;i<g[som].length;i++){//itération sur les voisins du sommet courant autre que celui précédent
                    if(!((pileBloc.tab()).includes(g[som][i]))){pileBloc.empiler(g[som][i]);}//en lien avec ligne 93, on l'empile avec la condition qu'il permette un agrandissement à un bloc d'une taille de puissance de 2, et qu'il n'y soit pas déjà pour éviter les doublons (cas d'un bloc de 8 par ex)
                    include = false;
                    for (autreSom in g){ //on itère sur tout les autres sommets du graphe
                        if (autreSom != som){ //on exclut le sommet courant som
                            if (g[autreSom].includes(g[som][j])&&g[autreSom].includes(g[som][i])){ //on vérifie si autreSom est bien voisin avec deux voisins communs au sommet courant som
                                aTraiter[g[som][i]] = true;
                                if(!((pileBloc.tab()).includes(autreSom))){//pour éviter les doublons
                                    pileBloc.empiler(autreSom); aTraiter[autreSom] = true;}
                                if(!((pileBloc.tab()).includes(g[som][j]))){//pour éviter les doublons
                                    pileBloc.empiler(g[som][j]); aTraiter[g[som][j]] = true;}
                                include = true;//pour le garder dans le bloc puisqu'il répond à la condition
                            }
                        }
                    }
                    if (!(include)){pileBloc.depiler();}//si on a trouvé aucun autre voisin permettant un bloc d'une taille de puissance de 2, on l'enlève du bloc, il n'en fait pas parti
                }
            }
            listeBlocs[som] = pileBloc;//le bloc final est crée, on peut le rajouter au dictionnaire et ne plus jamais le retoucher (hormis blocs de 8 et +)
        }
    }
    /**pb à régler : on travaille avec des hypercubes donc le nombre de voisins max possible limite le parcours de tous les sommets permettant de construire un bloc d'une taille de puissance de 2 (y'en a qui se situent trop loin par rapport au sommet courant)
     * -blocs de 8: les clés des deux blocs sortant dans listeBlocs s'excluent mutuellement, donc faut les fusionner (piles de 7 elts au lieu de 8)
     * -blocs de 16: mm pb sauf que au lieu de manquer que 1 élément, il lui en manque 5 et de la même manière, mutuellement avec la deuxième pile
    */
    console.log(listeBlocs); //on retourne le dico des blocs selon une origine pour pouvoir ensuite passer à la traduction
}

gTest = graphe(testKar)[0];
aTraiterTest = graphe(testKar)[1];
console.log(gTest);console.log(aTraiterTest);
lBlocs(gTest,aTraiterTest);




//tentatives précédentes----------------------------------------------------------------------------------------------------------------------
/**function composantesBlocs2(g,aTraiter){
    var compBlocs2 = {};
    for (som in g){
        if (!aTraiter[som]){
            compBlocs2[som] = [som];
            for (let i = 0;i<g[som].length;i++){ //itération sur les voisins du sommet courant
                for (let j = 0;j<g[som].length;j++){ //2eme itération sur les voisins du sommet courant (pour des raisons de comparaison)
                    for (let k = 0;k<g[g[som][i]].length;k++){ //itération sur les voisins du voisin courant
                        if (g[g[som][i]][k]==som){
                            if (g[som][i] in compBlocs2){if (!(compBlocs2[som].includes(som))){compBlocs2[g[som][i]].push(som);}}else{compBlocs2[g[som][i]] = [som];}
                            aTraiter[g[som][i]] = true;
                        }
                        else{
                            //?????
                        }
                    }
                }
            }
        }

        aTraiter[som] = true;
    }
    
    console.log("compBlocs en fin de fonction :", compBlocs2);
    console.log("aTraiter en fin de fonction :", aTraiter)
}*/

/**function composantesBlocs3(g,aTraiter){
    var compBlocs = {}; var listeBlocs = {};
    for (som in g){
        if (!aTraiter[som]){
            aTraiter[som] = true;
            for (let i = 0;i<g[som].length;i++){ //premier élément des voisins du sommet courant
                for (let j = 0;j<g[som].length;j++){  //autres voisins du sommet courant
                    for (let k = 0;k<g[g[som][i]].length;k++){
                        if (!(g[g[som][i]][k] == som)){
                            if (!(i==j)){
                                if (g[g[som][j]].includes(g[g[som][i]][k])){
                                    console.log("som", som, "som dans compBlocs ?", som in compBlocs);
                                    console.log("g[som][i]", g[som][i], "g[som][i] dans compBlocs ?", g[som][i] in compBlocs);
                                    console.log("g[som][j]", g[som][j], "g[som][j] dans compBlocs ?", g[som][j] in compBlocs);
                                    console.log("g[g[som][i]][k]", g[g[som][i]][k], "g[g[som][i]][k] dans compBlocs ?", g[g[som][i]][k] in compBlocs);
                                    if (g[som][i] in compBlocs&&g[som][j] in compBlocs&&g[g[som][i]][k] in compBlocs&&(!(som in compBlocs))){
                                        console.log("hello");
                                        var cpt = 0; var save; var l = 0; var include = false;
                                        while ((!(include))&&l<compBlocs[g[som][i]].length){
                                            save = compBlocs[g[som][i]][l];
                                            if (compBlocs[g[som][j]].includes(save)){
                                                    cpt += 1;
                                            }
                                            if (compBlocs[g[g[som][i]][k]].includes(save)){
                                                cpt += 1;
                                            }
                                            if (cpt == 2){
                                                include = true;
                                            }
                                            else{
                                                cpt = 0;
                                            }
                                            l = l+1;
                                        }
                                        if (include){
                                            compBlocs[som] = [save];
                                        }
                                    }

                                    if(!(include)){
                                        if (som in compBlocs){
                                            if (!(compBlocs[som].includes(som))){
                                                compBlocs[som].push(som);
                                            }
                                        }
                                        else{
                                            compBlocs[som] = [som];
                                        }

                                        if (g[som][i] in compBlocs){
                                            if (!(compBlocs[g[som][i]].includes(som))){
                                                compBlocs[g[som][i]].push(som);
                                            }
                                        }
                                        else{
                                            compBlocs[g[som][i]] = [som];
                                        }

                                        if (g[som][j] in compBlocs){
                                            if (!(compBlocs[g[som][j]].includes(som))){
                                                compBlocs[g[som][j]].push(som);
                                            }
                                        }
                                        else{
                                            compBlocs[g[som][j]] = [som];
                                        }

                                        if (g[g[som][i]][k] in compBlocs){
                                            if(!(compBlocs[g[g[som][i]][k]].includes(som))){
                                                compBlocs[g[g[som][i]][k]].push(som);
                                            }
                                        }
                                        else{
                                            compBlocs[g[g[som][i]][k]] = [som];
                                        }
                                    }

                                    aTraiter[g[som][i]] = true; aTraiter[g[som][j]] = true; aTraiter[g[g[som][i]][k]] = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(compBlocs);
    console.log(aTraiter);
}*/

//composantesBlocs2(gTest,aTraiterTest);
//composantesBlocs(gTest,aTraiterTest);