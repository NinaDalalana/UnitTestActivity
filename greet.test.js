const testGreet = require('./greet');

describe('testGreet()', () => {
    it('should be called', () => {
        const name = 'Elizabeth';
        expect(testGreet(name)).toBeCalled();
    });
    it('should be shouted', () => {
        const name = 'Jose';
        expect(testGreet(name)).toBeCalled();
    });
    it('both should be called', () => {
        const names = ['Jose','Pepe'];
        expect(testGreet(names)).toBeCalled();
    });
    it('all should be called', () => {
        const names = ['Alex','Arsene','Jose','Zidane'];
        expect(testGreet(names)).toBeCalled();
    });
});