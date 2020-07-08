const core = require('@actions/core');
const { dotenvstring } = require('./dotenv');

async function run() {
  try {
    const file = core.getInput('path') || '.env';
    const prefix = core.getInput('prefix') || '';

    core.info(
      `Retrieving env string from ${file} ${
        prefix ? `with prefix ${prefix}` : `without prefix`
      }...`,
    );

    const str = dotenvstring(file, prefix);

    core.debug(`Pairs found: ${str}`);

    core.setOutput('dotenvstring', str);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
