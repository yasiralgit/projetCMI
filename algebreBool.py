class Logique :
    "Def des opérations"
    def __init__(self,x,y="") :#y facultatif
        self.__x__ = [x]
        self.__y__ =  [y]
    
    def VAR(self):
        return [self.__x__]
    
    def ET(self):
        return [self.__x__,["."],self.__y__]
    
    def OU(self):
        return [self.__x__,["+"],self.__y__]
    
    def NOT(self):
        return [["NOT"],self.__x__]
    
p = "not(A) and not(B) and not(C) or A and not(B) and C or B and C"

pA = Logique("A")
pB = Logique("B")
pC = Logique("C")

pE = Logique(pA.NOT(),pB.NOT())
pF = Logique(pE.ET(),pC.NOT())

pG = Logique(pF.ET(),pA.VAR())
pH = Logique(pG.OU(),pB.NOT())
pI = Logique(pH.ET(),pC.VAR())
pJ = Logique(pI.ET(),pB.VAR())
pK = Logique(pJ.OU(),pC.VAR())

pFinal = pK.ET()
print(pFinal)
    