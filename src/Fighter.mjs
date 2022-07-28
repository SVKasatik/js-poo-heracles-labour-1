/* Fighter class definition */
const MAX_LIFE = 100;
class Fighter {
    constructor(name,strength,dexterity,life) {
      this.name = name;
      this.strength = strength;
      this.dexterity = dexterity;
      this.life = life;
}
fight () { 
    const demage = Math.floor(Math.random() * 10);
    if (this.dexterity > demage) {
      demage == this.dexterity - demage;
      this.life = this.life - demage;
       if (this.life > 0) {
        console.log(`${this.name},your reduce life points: ${this.life}`);
        return this.life;
       }
       else {
        console.log(`${this.name},you are dead`);
        return 0;
       }
    } 
    else {
      console.log(`${this.name},your life points are still the same`);
      return this.life;
    }
}
}

export default Fighter;
