
describe('nicknameGenerator', () => {
    
    function nicknameGenerator(name, suffix) {
        return name + '_' + suffix;
    }
    
    // Possible implementation (final implementation)
    function randomNicknameGenerator(name) {
        const randomSuffix = Math.random();
        return nicknameGenerator(name, randomSuffix)
    }
    
    it('should generate random nickname for given name + suffix', () => {
    
        const generate = 'hello';
        

        
        const name = 'Mike';
        
        const nickname = nicknameGenerator(name, generate);
        
        expect(nickname).toBe('Mike_hello');
        
    })
})

