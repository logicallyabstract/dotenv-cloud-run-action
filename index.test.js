const { dotenvstring } = require('./dotenv');

test('test runs with path', () => {
  const str = dotenvstring('fixtures/.env-1', '');
  expect(str).toBe('TEST=true,TESTA=false');
});

test('test runs with custom prefix', () => {
  const str = dotenvstring('fixtures/.env-2', 'PREFIX_');
  expect(str).toBe('PREFIX_TEST=true,PREFIX_TESTB=false');
});
