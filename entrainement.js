
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

const pa = new Logique('A')
console.log(pa)
const pb = new Logique('B')
console.log(pb)
const pc = new Logique('C')
console.log(pc)
const pd = new Logique('D')
console.log(pd)


const pe = new Logique(pa.NOT(),pb.NOT())
console.log(pe)
const pf = new Logique(pe.ET(),pc.NOT())
console.log(pf)

const pg = new Logique(pf.ET(),pa.VAR())
console.log(pc)
const ph = new Logique(pg.ET(),pb.VAR())
console.log(ph)
const pi = new Logique(ph.ET(),pc.VAR())
console.log(pi)
const pj = new Logique(pi.ET(),pb.VAR())
console.log(pj)
const pk = new Logique(pj.OU(),pc.VAR())
console.log(pk)
var expdeb = document.getElementById("exp")
var expressions = [
    "B + !A.C.D",
    "A + !A.C.D",
    "C + !A.C.D",
    "A.B.C + !A.C.D",
    "B.C + !A.C.D",
    "!A.B.C + !A.C.D",
    "A.!B.C + !A.C.D",
    "A.B.!C + !A.C.D"
]
var expressionsSimp = [
    "B + !A.C.D",
    "A + C.D",
    "C",
    "A.B.C + !A.C.D",
    "B.C + !A.C.D",
    "!A.B.C + !A.C.D",
    "A.!B.C + !A.C.D",
    "A.B.!C + !A.C.D"
]
var expressionsKarnaugh = [
    "     <table><caption><h3> S = B + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table><caption><h3> S = A + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table><caption><h3> S = C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table><caption><h3> S = A.B.C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table><caption><h3> S = B.C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table><caption><h3> S = !A.B.C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table><caption><h3> S = A.!B.C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table><caption><h3> S = A.B.!C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>"

]
bd = {
    "expression":["!A.!B.!C.!D","A.B.C.D","!A.B.C.D","A.!B.C.D","A.B.!C.D","A.B.C.!D","!A.!B.C.D","!A.B.!C.D","!A.B.C!D","A.!B.!C.D","A.!B.C!D","A.B.!C.!D","!A.!B.!C.D","!A.!B.C.!D","!A.B.!C.!D","A.!B.!C.!D","A.B.C.!D+A.B.C.D"],
    "expressionsimple":["!A.!B.!C.!D","A.B.C.D","!A.B.C.D","A.!B.C.D","A.B.!C.D","A.B.C.!D","!A.!B.C.D","!A.B.!C.D","!A.B.C!D","A.!B.!C.D","A.!B.C!D","A.B.!C.!D","!A.!B.!C.D","!A.!B.C.!D","!A.B.!C.!D","A.!B.!C.!D","A.B.C"],
    "theorem":["<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>complémentarité,distributivité,élément neutre</li></ul>"],
    "tablekarnaugh":["<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>1</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>1</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>1</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>1</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>1</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>1</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>1</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>1</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>1</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>1</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>"]
}
var ind = Math.floor(Math.random() * bd.expression.length);
console.log(ind)
expdeb.innerHTML = bd.expression[ind]
function affExp(){
    var expinb = document.getElementById("expin")
    //console.log(expinb.value)
    //console.log(expressions)
    //console.log(expressions.includes(expinb.value))
    if (expinb == bd.expressionsimple[ind]) {
        console.log("Bravo, vous avez réussi à simplifier l'expression !")
        rep = document.getElementById("correcExp")
        rep.innerHTML = "La bonne simplification est : " + bd.expressionsimple[ind] 
        console.log(rep)
        console.log(ind)
        console.log(bd.expressionsimple[ind])
    }
    else {
        console.log("Non, c'est un echec !")
        rep = document.getElementById("correcExp")
        rep.innerHTML = " La bonne simplification était : " + bd.expressionsimple[ind] 
        console.log(ind)

    }
}
function affKarnaugh(id){
    var expinb = document.getElementById("expin")
    //console.log(expinb.value)
    //console.log(expressions)
    //console.log(expressions.includes(expinb.value))
    if (expinb == bd.expressionsimple[ind]) {
        console.log("Admissible à la Karnaughisation !")
        if(id.checked == true){
            console.log("je suis dans afficher par table de Karnaugh")
            tabKar = document.getElementById("tabExp")
            console.log(bd.tablekarnaugh[ind])
            tabKar.innerHTML = bd.tablekarnaugh[ind]
        }else{
            console.log("je suis dans desafficher par table de Karnaugh")
            tabKar = document.getElementById("tabExp")
            tabKar.innerHTML = ""
       }
    }
    else {
        console.log("Non admissible à la Karnaughisation !")
        if(id.checked == true){
            console.log("je suis dans afficher par table de Karnaugh")
            tabKar = document.getElementById("tabExp")
            console.log(bd.tablekarnaugh[ind])
            tabKar.innerHTML = bd.tablekarnaugh[ind]
        }else{
            console.log("je suis dans desafficher par table de Karnaugh")
            tabKar = document.getElementById("tabExp")
            tabKar.innerHTML = ""
       }

    }
}

function changerExp(){
    ind = Math.floor(Math.random() * bd.expression.length);
    console.log(ind)
    expdeb.innerHTML = bd.expression[ind]
}

function afficheTab(id){
    console.log(id)
    if(id.checked == true){
        console.log("je suis dans afficher")
        tabKar = document.getElementById("tabExp")
        tabKar.innerHTML = "     <table><caption><h3>Exemple : S = B + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>"
    }else{
        console.log("je suis dans desafficher")
        tabKar = document.getElementById("tabExp")
        tabKar.innerHTML = ""
   }


}
function kar2exp() {
    var marTrans = [
    ['0000','0001','0011','0010'],
    ['0100','0101','0111','0110'],
    ['1100','1101','1111','1110'],
    ['1000','1001','1011','1010']
    ]
    var marTEST = [
    [0,0,0,0],
    [0,0,1,0],
    [0,0,1,0],
    [0,0,0,0]
    ]
    var cpt = 0 ; var pos = []  
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
