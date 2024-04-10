var testKar = [
    [1,1,0,1],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]
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


function composantesBlocs(g,aTraiter){
    var compBlocs = {}; var listeBlocs = {};
    for (som in g){
        if (!aTraiter[som]){
            compBlocs[som] = [som]; aTraiter[som] = true;
            for (let i = 0;i<g[som].length;i++){ //premier élément des voisins du sommet courant
                for (let j = i+1;j<g[som].length;j++){  //autres voisins du sommet courant
                    for (let k = 0;k<g[g[som][i]].length;k++){
                        if (!(g[g[som][i]][k] == som)){
                            if (g[g[som][j]].includes(g[g[som][i]][k])){
                                if (compBlocs[som] in compBlocs){
                                    if (!(compBlocs[som].includes(g[g[som][i]][k]))){
                                        compBlocs[som].push(g[g[som][i]][k]);
                                    }
                                }
                                else{
                                    compBlocs[som] = [g[g[som][i]][k]];
                                }

                                if (g[som][i] in compBlocs){
                                    if (!(compBlocs[g[som][i]].includes(g[g[som][i]][k]))){
                                        compBlocs[g[som][i]].push(g[g[som][i]][k]);
                                    }
                                }
                                else{
                                    compBlocs[g[som][i]] = [g[g[som][i]][k]];
                                }

                                if (g[som][j] in compBlocs){
                                    if (!(compBlocs[g[som][j]].includes(g[g[som][i]][k]))){
                                        compBlocs[g[som][j]].push(g[g[som][i]][k]);
                                    }
                                }
                                else{
                                    compBlocs[g[som][j]] = [g[g[som][i]][k]];
                                }

                                if (g[g[som][i]][k] in compBlocs){
                                    if(!(compBlocs[g[g[som][i]][k]].includes(g[g[som][i]][k]))){
                                        compBlocs[g[g[som][i]][k]].push(g[g[som][i]][k]);
                                    }
                                }
                                else{
                                    compBlocs[g[g[som][i]][k]] = [g[g[som][i]][k]];
                                }
                                aTraiter[g[som][i]] = true; aTraiter[g[som][j]] = true; aTraiter[g[g[som][i]][k]] = true;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(compBlocs);
    console.log(aTraiter);
}

gTest = graphe(testKar)[0];
aTraiterTest = graphe(testKar)[1];
console.log(gTest);
composantesBlocs(gTest,aTraiterTest);