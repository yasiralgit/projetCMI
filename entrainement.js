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
var id = Math.floor(Math.random() * 7);
console.log(id)
expdeb.innerHTML = expressions[id] +" "
function affExp(){
    var expinb = document.getElementById("expin")
    //console.log(expinb.value)
    //console.log(expressions)
    //console.log(expressions.includes(expinb.value))
    if (expressions[id] == expressionsSimp[id]) {
        console.log("Bravo, vous avez réussi à simplifier l'expression !")
        rep = document.getElementById("correcExp")
        rep.innerHTML = " " + expressionsSimp[id] + "test"
        console.log(rep)
        console.log(expressionsSimp[id])
    }
    else {
        console.log("Non, c'est un echec !")
        rep = document.getElementById("correcExp")
        rep.innerHTML = " " + expressionsSimp[id] + "Echec"

    }
}

function changerExp(){
    var id = Math.floor(Math.random() * 7);
    console.log(id)
    expdeb.innerHTML = expressions[id] +" "
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

