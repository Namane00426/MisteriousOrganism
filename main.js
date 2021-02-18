// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand
}

// #3
const pAequorFactory = (number, arr) => {
  return  {
   specimenNum: number,
   dna: arr,
   // #4 simurate DNA base randomly 
   mutate(){
     let newBase = [];
    for(let i = 0; i < 4; i++){
       let base = returnRandBase();
      if(!newBase.includes(base)){
        newBase.push(base);
      } else {
        i = i - 1 ;
      } 
    }
    //  console.log(newBase);
     return　newBase;
   },
  
  // #5 calculate sinclonisity 2 of different DNA of P. aequor
   compareDNA(object){
     let baseMatching = 0;
     let matchingPersentage = 0;
     for(let i = 0; i < 14; i++){
         if(this.dna[i] === object.dna[i]){
         baseMatching += 1;
        //  console.log(baseMatching);
       } else {
         baseMatching = baseMatching;
       }
     }
      matchingRate = 100 * (baseMatching /15).toFixed(2);
      console.log(`'these are ${baseMatching} matching!'`)
      // console.log(matchingPersentage);
      return `specimen #${this.specimenNum} and specimen #${object.specimenNum} have ${matchingRate}% DNA in common.`;
     },
// #6 calculate chance for survival if this DNA there in the nature
  willLikelySurvive(){
    let includesSum = 0;
    for(let j = 0; j < this.dna.length; j++){
      this.dna[j].includes('C') || this.dna[j].includes('G') ? (includesSum += 1) : (includesSun = includesSum);
      }
      console.log(includesSum);
      let includesRate = 100 * (includesSum / 15).toFixed(2);
      if (includesSum >= 9 ){
        console.log(`this DNA's chance of survival ${includesRate}%.`)
        return  true;
      } 
      else {
        // console.log(`this DNA's chance of survival ${includesRate}%.`)
        return false;    
    }
   
   }
  }
}

const test = pAequorFactory(1, mockUpStrand());
// const test2 = pAequorFactory(2, mockUpStrand());
// console.log(test.dna);
// console.log(test2.dna);

// console.log(test.compareDNA(test2));
// console.log(test.willLikelySurvive());

// 30 samples
{
let pAequorLists = [];
let i = 1;
while (pAequorLists.length < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive() == true) {
    pAequorLists.push(temp);
    i += 1 ;
  }
}
console.log(pAequorLists);
// return pAequorLists;
}


// Good solution from Forum
// willLikelySurvive() {
//       const cAndG = this.dna.filter(letter => letter === 'C' || letter === 'G');

//       if (cAndG.length/this.dna.length > 0.6) {
//         return true;
//       } else {
//         return false;
//       }
//     }
