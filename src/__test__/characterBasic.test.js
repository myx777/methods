import Character from "../js/characterBasic";

//Метод describe() из фреймворка Jest используется для создания группы тестов (блоков тестов),
// которые имеют общий контекст или функциональность. Он принимает два аргумента: строку с 
//описанием группы тестов и функцию, которая содержит сами тесты внутри этой группы. 
describe('Character', () => {
    test('should level up the character', () => {
        const character = new Character(5, 10, 20, 80);
        character.levelUp();
        expect(character.level).toBe(6);
        expect(character.attack).toBeCloseTo(12, 2); // Проверка приближенного равенства
        expect(character.defence).toBeCloseTo(24, 2); // Проверка приближенного равенства
        expect(character.health).toBe(100);
    });

    test('should not level up a dead character', () => {
        const character = new Character(5, 10, 20, 0);
        expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего.');
    });

    test('should apply damage to the character', () => {
        const character = new Character(5, 10, 20, 80);
        character.damage(30);
        expect(character.health).toBeCloseTo(56, 2); // Проверка приближенного равенства
    });

    test('should not allow health to go below 0', () => {
        const character = new Character(5, 10, 20, 80);
        character.damage(200);
        expect(character.health).toBe(0);
    });
});
