import { replace_last_slash_with_parentheses, replace_parentheses_with_slash } from "../src/proxy"

describe('Adapt request url', () => {
    
    test.each([
        ['Look at (this) and (that)', 'Look at /this and /that'],
        ['(code) in parentheses', '/code in parentheses'],
        ['No parentheses here', 'No parentheses here'],
    ])('replace parentheses', async (input, expected) => {
        const result = replace_parentheses_with_slash(input);
        expect(result).toEqual(expected);
    });

    test.each([
        ['/Service/Employees/1', '/Service/Employees(1)'],
        ['/Employees/1', '/Employees(1)'],
        ['/', '/'],
    ])('replace last slash', async (input, expected) => {
        const result = replace_last_slash_with_parentheses(input);
        expect(result).toEqual(expected);
    });
});