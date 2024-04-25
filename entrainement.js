
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
    "     <table class = 'table'><caption><h3> S = B + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table class = 'table'><caption><h3> S = A + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table class = 'table'><caption><h3> S = C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table class = 'table'><caption><h3> S = A.B.C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table class = 'table'><caption><h3> S = B.C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table class = 'table'><caption><h3> S = !A.B.C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table class = 'table'><caption><h3> S = A.!B.C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>",
    "     <table class = 'table'><caption><h3> S = A.B.!C + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>"

]
bd2 = {
    "expression":{"facile":["!A.!B.!C.!D","A.B.C.D","!A.B.C.D","A.!B.C.D","A.B.!C.D","A.B.C.!D","!A.!B.C.D","!A.B.!C.D","!A.B.C!D","A.!B.!C.D","A.!B.C!D","A.B.!C.!D","!A.!B.!C.D","!A.!B.C.!D","!A.B.!C.!D","A.!B.!C.!D"],"moyen":["A.B.C.!D+A.B.C.D","!A.!B.!C.!D+A.!B.!C.!D","!A.B.!C.D+A.B.C.D","!A.B.!C.!D+A.B.!C.!D","!A.B.!C.D+!A.B.C.D","!A.B.C.!D+A.B.C.!D","A.B.!C.D+!A.B.C.D"],"difficile":["A.B.!C.!D+!A.B.!C.!D+!A.B.!C.D+A.B.!C.D","!A.B.!C.!D+A.B.!C.!D+!A.!B.C.D+!A.B.C.D","!A.!B.!C.D+!A.!B.C.D+A.!B.C.!D+A.!B.C.D","!A.!B.!C.!D+!A.!B.!C.D+!A.B.C.D+!A.B.C.!D+A.B.!C.!D+A.B.!C.D+A.!B.C.D+A.!B.C.!D","!A.!B.!C.!D+!A.B.!C.!D+A.B.!C.D+A.!B.!C.D+!A.!B.C.D+!A.B.C.D+A.B.C.!D+A.!B.C.!D"]}
    ,"expressionsimple":{"facile":["!A.!B.!C.!D","A.B.C.D","!A.B.C.D","A.!B.C.D","A.B.!C.D","A.B.C.!D","!A.!B.C.D","!A.B.!C.D","!A.B.C!D","A.!B.!C.D","A.!B.C!D","A.B.!C.!D","!A.!B.!C.D","!A.!B.C.!D","!A.B.!C.!D","A.!B.!C.!D"],"moyen":["A.B.C","!B.!C.!D","!A.B.!C.D+A.B.C.D","B.!C.!D","!A.B.D","B.C.!D","A.B.!C.D+!A.B.C.D"],"difficile":["B.C","B+C.D","!B.D","!A.!B.!C+!A.B.C+A.B.!C+A.!B.C","!A.!C.!D+A.!C.D+!A.C.D+A.C.!D"]}
    ,"theorem":{"facile":["<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>","<ul><li>aucun théoreme</li></ul>"],"moyen":["<ul><li>complémentarité,distributivité,élément neutre</li></ul>","<ul><li>factorisation,idempotence</li></ul>","<ul><li>factorisation,absorption</li></ul>","<ul><li>factorisation,absorption</li></ul>","<ul><li>factorisation,idempotence</li></ul>","<ul><li>factorisation,absorption</li></ul>","<ul><li>distributivité,absorption</li></ul>"],"difficile":["<ul><li>factorisation,idempotence,absorption</li></ul>","<ul><li>factorisation,idempotence,absorption</li></ul>","<ul><li>factorisation,idempotence,absorption</li></ul>","<ul><li>factorisation,idempotence,absorption</li></ul>","<ul><li>factorisation,idempotence,absorption</li></ul>"]}
    ,"tablekarnaugh":{"facile":["<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>1</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>1</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>1</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>1</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>1</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>1</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>1</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>1</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>1</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>1</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>"],"moyen":["<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>1</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>1</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>1</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>1</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>"],"difficile":["<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>1</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>1</td><td>1</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>1</td><td>1</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>1</td><td>1</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>1</td><td>1</td>    </tr><tr><th>11</th><td>1</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>1</td><td>1</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>1</td><td>0</td><td>1</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>1</td><td>0</td><td>1</td>    </tr><tr><th>10</th><td>0</td><td>1</td><td>0</td><td>1</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>1</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>1</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>"]}
}
bd = {
    "expression":["!A.!B.!C.!D","A.B.C.D","!A.B.C.D","A.!B.C.D","A.B.!C.D","A.B.C.!D","!A.!B.C.D","!A.B.!C.D","!A.B.C!D","A.!B.!C.D","A.!B.C!D","A.B.!C.!D","!A.!B.!C.D","!A.!B.C.!D","!A.B.!C.!D","A.!B.!C.!D","A.B.C.!D+A.B.C.D","A.B.!C.!D+!A.B.!C.!D+!A.B.!C.D+A.B.!C.D","!A.B.!C.!D+A.B.!C.!D+!A.!B.C.D+!A.B.C.D","!A.!B.!C.D+!A.!B.C.D+A.!B.C.!D+A.!B.C.D","!A.!B.!C.!D+!A.!B.!C.D+!A.B.C.D+!A.B.C.!D+A.B.!C.!D+A.B.!C.D+A.!B.C.D+A.!B.C.!D","!A.!B.!C.!D+!A.B.!C.!D+A.B.!C.D+A.!B.!C.D+!A.!B.C.D+!A.B.C.D+A.B.C.!D+A.!B.C.!D","!A.!B.!C.!D+A.!B.!C.!D","!A.B.!C.D+A.B.C.D","!A.B.!C.!D+A.B.!C.!D","!A.B.!C.D+!A.B.C.D","!A.B.C.!D+A.B.C.!D","A.B.!C.D+!A.B.C.D"],
    "expressionsimple":["!A.!B.!C.!D","A.B.C.D","!A.B.C.D","A.!B.C.D","A.B.!C.D","A.B.C.!D","!A.!B.C.D","!A.B.!C.D","!A.B.C!D","A.!B.!C.D","A.!B.C!D","A.B.!C.!D","!A.!B.!C.D","!A.!B.C.!D","!A.B.!C.!D","A.!B.!C.!D","A.B.C","B.C","B+C.D","!B.D","!A.!B.!C+!A.B.C+A.B.!C+A.!B.C","!A.!C.!D+A.!C.D+!A.C.D+A.C.!D","!B.!C.!D","!A.B.!C.D+A.B.C.D","B.!C.!D","!A.B.D","B.C.!D","A.B.!C.D+!A.B.C.D"],
    "theorem":["<div class='list-group'> <ul> <a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</a></li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>aucun théoreme</li></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>complémentarité</a><a href='page_cour.html' class='list-group-item list-group-item-action'>distributivité</a><a href='page_cour.html' class='list-group-item list-group-item-action'>élément neutre</a></ul>","<div class='list-group'> <ul><a href='page_cour.html' class='list-group-item list-group-item-action'>factorisation</a><a href='page_cour.html' class='list-group-item list-group-item-action'>idempotence<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>absorption</li></ul>","<div class='list-group'> <ul><a/><a href='page_cour.html' class='list-group-item list-group-item-action'>factorisation<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>idempotence<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>absorption</li></ul>","<div class='list-group'> <ul><a/><a href='page_cour.html' class='list-group-item list-group-item-action'>factorisation<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>idempotence<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>absorption</li></ul>","<div class='list-group'> <ul><a/><a href='page_cour.html' class='list-group-item list-group-item-action'>factorisation<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>idempotence<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>absorption</li></ul>","<div class='list-group'> <ul><a/><a href='page_cour.html' class='list-group-item list-group-item-action'>factorisation<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>idempotence<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>absorption</li></ul>","<div class='list-group'> <ul><a/><a href='page_cour.html' class='list-group-item list-group-item-action'>factorisation<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>idempotence</li></ul>","<div class='list-group'> <ul><a/><a href='page_cour.html' class='list-group-item list-group-item-action'>factorisation<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>absorption</li></ul>","<div class='list-group'> <ul><a/><a href='page_cour.html' class='list-group-item list-group-item-action'>factorisation<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>absorption</li></ul>","<div class='list-group'> <ul><a/><a href='page_cour.html' class='list-group-item list-group-item-action'>factorisation<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>idempotence</li></ul>","<div class='list-group'> <ul><a/><a href='page_cour.html' class='list-group-item list-group-item-action'>factorisation<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>absorption</li></ul>","<div class='list-group'> <ul><a/><a href='page_cour.html' class='list-group-item list-group-item-action'>distributivité<a/><a href='page_cour.html' class='list-group-item list-group-item-action'>absorption</li></ul>"],
    "tablekarnaugh":["<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>1</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>1</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>1</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>1</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>1</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>1</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>1</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>1</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>1</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>1</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>1</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>1</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>1</td><td>1</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>1</td><td>1</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>1</td><td>1</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>1</td><td>1</td>    </tr><tr><th>11</th><td>1</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>1</td><td>1</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>1</td><td>0</td><td>1</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>1</td><td>0</td><td>1</td>    </tr><tr><th>10</th><td>0</td><td>1</td><td>0</td><td>1</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>1</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>1</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>11</th><td>1</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>1</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>0</td><td>1</td>    </tr><tr><th>11</th><td>0</td><td>0</td><td>0</td><td>1</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>","<table class = 'table'><thead><tr><th>AB/CD</th><th>00</th><th>01</th><th>11</th><th>10</th> </tr></thead><tbody><tr><th>00</th><td>0</td><td>0</td><td>0</td><td>0</td> </tr><tr><th>01</th><td>0</td><td>0</td><td>1</td><td>0</td>    </tr><tr><th>11</th><td>0</td><td>1</td><td>0</td><td>0</td>    </tr><tr><th>10</th><td>0</td><td>0</td><td>0</td><td>0</td></tr></tbody></table>"]
}
var ind = Math.floor(Math.random() * bd.expression.length);
console.log(ind)
expdeb.innerHTML = bd.expression[ind]
function affExp(){
    var expinb = document.getElementById("expin")
    console.log(expinb.value)
    console.log(bd.expressionsimple[ind])
    //console.log(expressions)
    //console.log(expressions.includes(expinb.value))
    if (expinb.value == bd.expressionsimple[ind]) {
        console.log("Bravo, vous avez réussi à simplifier l'expression !")
        rep = document.getElementById("correcExp")
        rep.innerHTML = "Bravo, vous avez réussi à simplifier l'expression !"
        console.log(rep)
        console.log(ind)
        console.log(bd.expressionsimple[ind])
    }
    else {
        console.log("Non, c'est un echec !")
        rep = document.getElementById("correcExp")
        rep.innerHTML = "Non, c'est un echec ! La bonne simplification était : " + bd.expressionsimple[ind] 
        console.log(ind)

    }
}
function affKarnaugh(id){
    //console.log(expinb.value)
    //console.log(expressions)
    //console.log(expressions.includes(expinb.value))
    console.log("Admissible à la Karnaughisation !")
    console.log("je suis dans afficher par table de Karnaugh")
    tabKar = document.getElementById("tabExp")
    console.log(bd.tablekarnaugh[ind])
    tabKar.innerHTML = bd.tablekarnaugh[ind]
  
}


function affTheo(id){
    //console.log(expinb.value)
    //console.log(expressions)
    //console.log(expressions.includes(expinb.value))
    console.log("Admissible à la Karnaughisation !")
    console.log("je suis dans afficher par table de Karnaugh")
    tabTheo = document.getElementById("tabTheo")
    console.log(bd.theorem[ind])
    tabTheo.innerHTML = bd.theorem[ind]
  
}

function changerExp(){
    ind = Math.floor(Math.random() * bd.expression.length);
    console.log(ind)
    expdeb.innerHTML = bd.expression[ind]
    tabKar = document.getElementById("tabExp")
    tabKar.innerHTML = ""
    rep = document.getElementById("correcExp")
    rep.innerHTML = ""
    tabTheo = document.getElementById("tabTheo")
    tabTheo.innerHTML = ""

}

function afficheTab(id){
    console.log(id)
    if(id.checked == true){
        console.log("je suis dans afficher")
        tabKar = document.getElementById("tabExp")
        tabKar.innerHTML = "     <table class = 'table'><caption><h3>Exemple : S = B + !A.C.D</h3></caption><thead><tr><th scope='col'>AB/CD</th><th scope='col'>00</th><th scope='col'>01</th><th scope='col'>11</th><th scope='col'>10</th>    </tr>  </thead>  <tbody>    <tr>      <th scope='row'>00</th>      <td>0</td>      <td>0</td>      <td>1</td>      <td>0</td>    </tr>    <tr>      <th scope='row'>01</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>11</th>      <td>1</td>      <td>1</td>      <td>1</td>      <td>1</td>    </tr>    <tr>      <th scope='row'>10</th>      <td>0</td>      <td>0</td>      <td>0</td>      <td>0</td>    </tr>  </tbody></table>"
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
