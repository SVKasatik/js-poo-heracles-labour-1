// First Labour : Heracles vs Nemean Lion
// use your Figher class here

import Fighter from "./src/Fighter.mjs";

/*class NewFighter extends Fighter {
  constructor(name,strength,dexterity,life) {
    super(life);
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
  }
}*/

let newFighterHeracles = new Fighter ("🧔Heracles", 20, 6, 100);
let newFighterLion = new Fighter ("🦁Nemean Lion", 11, 13, 100);
let i = 1;

while (true) {
  i++;
  console.log(`ROUND #${i}`);
  const life1 = newFighterHeracles.fight();
  const life2 = newFighterLion.fight();

  if (life1<=0) {
    console.log(`${newFighterLion.name} wins`);
    break;
  } 
  else if(life2<=0) {
    console.log(`${newFighterHeracles.name} wins`);
    break;
  }

  }
  

//export default newFighterHeracles;