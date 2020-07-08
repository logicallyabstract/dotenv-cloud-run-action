const dotenv = require('dotenv');
const { existsSync } = require('fs');

module.exports.dotenvstring = function (file, prefix) {
  if (!existsSync(file)) {
    throw new Error('.env must exist or the path input must be valid');
  }

  const env = dotenv.config({ path: file });

  const pairs = [];

  for (const key in env.parsed) {
    if (key.startsWith(prefix)) {
      const value = env.parsed[key];
      pairs.push(`${key}=${value}`);
    }
  }

  return pairs.join(',');
};
