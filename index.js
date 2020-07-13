const core = require('@actions/core');
const { loadDotEnv } = require('./dotenv');

async function run() {
  try {
    const file = core.getInput('path') || '.env';
    const prefix = core.getInput('prefix') || '';

    core.info(
      `Retrieving env string from ${file} ${
        prefix ? `with prefix ${prefix}` : `without prefix`
      }...`,
    );

    const { dotenvstring, parsed } = loadDotEnv(file, prefix);

    core.debug(`Pairs found: ${dotenvstring}`);
    core.debug(`Parsed: ${JSON.stringify(parsed)}`);

    core.setOutput('dotenvstring', dotenvstring);

    for (const key in parsed) {
      core.setOutput(key, parsed[key]);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
