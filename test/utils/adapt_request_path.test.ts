import { replace_parentheses } from "../../src/utils"

describe('Adapt request url', () => {
    
    test.each([
        ['Look at (this) and (that)', 'Look at /this and /that'],
        ['(code) in parentheses', '/code in parentheses'],
        ['No parentheses here', 'No parentheses here'],
    ])('replace parentheses', async (input, expected) => {
        const result = replace_parentheses(input);
        expect(result).toEqual(expected);
    });
});