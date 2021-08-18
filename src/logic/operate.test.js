import operate from './operate';

test('-2 + 2 = 0', () => {
  const a = -2;
  const b = 2;

  const answer = operate(a, b, '+');

  expect(answer).toBe('0');
});

test('4 - 2 = 2', () => {
  const a = 4;
  const b = 2;

  const answer = operate(a, b, '-');

  expect(answer).toBe('2');
});

test('4 x 2 = 8', () => {
  const a = 4;
  const b = 2;

  const answer = operate(a, b, 'x');

  expect(answer).toBe('8');
});

test('4 ÷ 2 = 2', () => {
  const a = 4;
  const b = 2;

  const answer = operate(a, b, '÷');

  expect(answer).toBe('2');
});

test('4 % 2 = 0', () => {
  const a = 4;
  const b = 2;

  const answer = operate(a, b, '%');

  expect(answer).toBe('0');
});

test('4 ÷ 0 = error', () => {
  const a = 4;
  const b = 0;

  const answer = operate(a, b, '÷');

  expect(answer).toBe('error');
});