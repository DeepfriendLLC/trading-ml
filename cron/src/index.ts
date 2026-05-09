import Bree from 'bree';
import TSWorker from '@breejs/ts-worker';

Bree.extend(TSWorker);

const isDev = process.env.NODE_ENV !== 'production';

const bree = new Bree({
  root: `${__dirname}/jobs`,
  defaultExtension: isDev ? "ts" : "js",
  jobs: [
    {
      name: 'load',
      cron: '* * * * *',
    },
  ],
});

(async () => {
  await bree.start();
  console.log('Crons started');
})();