import operate from './operate';

describe('Operate Functionality', () => {
  test('test addition', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('test subtracting', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });

  test('test multiplication', () => {
    expect(operate(5, 5, 'x')).toBe('25');
  });

  test('test division', () => {
    expect(operate(6, 2, '÷')).toBe('3');
  });

  test('test modulo', () => {
    expect(operate(9, 2, '%')).toBe('1');
  });
});
