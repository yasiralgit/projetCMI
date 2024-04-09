var testKar = [
    [1,1,1,1],
    [0,1,1,0],
    [0,0,0,0],
    [0,0,0,0]
];


function graphe(tabKar){
    var g = [];
    for (let i = 0;i<tabKar.length;i++){
        for (let j = 0;j<tabKar[i].length;j++){
            g.push([])
            if (tabKar[i][j] == 1){
                var left = j-1; var right = j+1; var up = i-1; var down = i+1;
                if(left == -1){left = 3;} if(right == 4){right = 0;} if(up == -1){up = 3;} if(down == 4){down = 0;}
                //console.log(tabKar[i][left])
                if (tabKar[i][left] == 1){g[i*4+j].push(i.toString()+left.toString());}
                //console.log(tabKar[i][right])
                if (tabKar[i][right] == 1){g[i*4+j].push(i.toString()+right.toString());}
                //console.log(up)
                //console.log(tabKar[up][j])
                if (tabKar[up][j] == 1){g[i*4+j].push(up.toString()+j.toString());}
                if (tabKar[down][j] == 1){g[i*4+j].push(down.toString()+j.toString());}
            }
            else{
                g[i*4+j].push(null)
            }
        }
    }
    return g;
}

function blocs(tabKar,g){
    var compBloc = [];
    var combAssoc = [];
    for (let i = 0;i<g.length;i++){
        if (g[i]!=none){
            var j = 0; var isInBloc = true; var count=1;
            compBloc.push([])
            while(isInBloc){
                compBloc[i].push(g[i][j]);
                for (let k=0;k<g[g[i][j][0]*3+g[i][j][1]].length;k++){
                    var l = j+1;
                    for (let l = j+1;l<g[i].length;l++){
                        if (g[[i][l][0]*3+g[i][l][1]].includes(g[g[i][j][0]*3+g[i][j][1]][k])){count += 1;}
                        l = l+1;
                    }
                }
            }
        }
    }
}


graphe(testKar)