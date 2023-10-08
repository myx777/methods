export default class Character {
    constructor (level, attack, defence, health) {
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        this.health = health;
    }

    levelUp() {
        if(this.health === 0) {
            throw new Error('Нельзя повысить левел умершего.');
        }

        this.level++;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
    }

    damage(points){
        this.health = Math.max(0, this.health - points * (1 - this.defence / 100));
        this.health = parseFloat(this.health.toFixed(2)); // Округляем до двух знаков после запятой
    }
    

}