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