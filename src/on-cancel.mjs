import prompts from 'prompts';

import { sleep } from './utils.mjs';

// HERE
function exitError() {
  process.exit(1);
}

(async () => {
  const { actor } = await prompts(
    {
      type: 'autocomplete',
      name: 'actor',
      message: 'Pick your favorite actor',
      choices: [
        { title: 'Cage' },
        { title: 'Clooney', value: 'silver-fox' },
        { title: 'Gyllenhaal' },
        { title: 'Gibson' },
        { title: 'Grant' },
      ],
    },
    {
      onCancel: exitError, // HERE
    }
  );

  const { prefix } = await prompts(
    {
      type: 'text',
      name: 'prefix',
      message: 'Prefix!',
    },
    {
      onCancel: exitError, // HERE
    }
  );

  console.log('Hey');
  await sleep(2000);
  console.log('You', { prefix, actor });
})();
