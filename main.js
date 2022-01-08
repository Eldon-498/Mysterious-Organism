// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//console.log(returnRandBase());
//console.log(mockUpStrand());
const pAequorFactory=(no, mockUpStrand)=>{
  //array=mockUpStrand();
  return {
    specimenNum: no,
    dna: mockUpStrand(),
    mutate(){
      let randBase = returnRandBase();
      const randIndex = Math.floor(Math.random() * this.dna.length);
      while (this.dna[randIndex] === randBase) {
        randBase = returnRandBase();
      }
      this.dna[randIndex] = randBase;
      return this.dna;
    }
        
      
    }
  }


console.log(pAequorFactory(5, mockUpStrand));







