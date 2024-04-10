var testKar = [
    [1,1,1,0],
    [0,0,0,0],
    [0,0,0,1],
    [0,0,0,1]
];


function graphe(tabKar){
    var g = {}; var aTraiter = {};
    for (let i = 0;i<tabKar.length;i++){
        for (let j = 0;j<tabKar[i].length;j++){
            if (tabKar[i][j] == 1){
                g[i.toString()+j.toString()] = [];
                aTraiter[i.toString()+j.toString()] = false;
                var left = j-1; var right = j+1; var up = i-1; var down = i+1;
                if(left == -1){left = 3;} if(right == 4){right = 0;} if(up == -1){up = 3;} if(down == 4){down = 0;}
                //console.log(tabKar[i][left])
                if (tabKar[i][left] == 1){g[i.toString()+j.toString()].push(i.toString()+left.toString());}
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


function composantesBlocs2(g,aTraiter){
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
}

/**function composantesBlocs(g,aTraiter){
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

gTest = graphe(testKar)[0];
aTraiterTest = graphe(testKar)[1];
console.log(gTest);console.log(aTraiterTest);
composantesBlocs2(gTest,aTraiterTest);
//composantesBlocs(gTest,aTraiterTest);