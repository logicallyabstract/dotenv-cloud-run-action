const { loadDotEnv } = require('./dotenv');

test('test runs with path', () => {
  const { dotenvstring, parsed } = loadDotEnv('fixtures/.env-1', '');
  expect(dotenvstring).toBe('TEST=true,TESTA=false');
  expect(parsed.TEST).toBe('true');
  expect(parsed.TESTA).toBe('false');
});

test('test runs with custom prefix', () => {
  const { dotenvstring, parsed } = loadDotEnv('fixtures/.env-2', 'PREFIX_');
  expect(dotenvstring).toBe('PREFIX_TEST=true,PREFIX_TESTB=false');
  expect(parsed.PREFIX_TEST).toBe('true');
  expect(parsed.PREFIX_TESTB).toBe('false');
  expect(parsed.TESTA).toBeUndefined();
});
