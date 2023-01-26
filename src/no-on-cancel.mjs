import prompts from 'prompts';

import { sleep } from './utils.mjs';

(async () => {
  const { actor } = await prompts({
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
  });

  const { prefix } = await prompts({
    type: 'text',
    name: 'prefix',
    message: 'Prefix!',
  });

  console.log('Hey');
  await sleep(2000);
  console.log('You', { prefix, actor });
})();
