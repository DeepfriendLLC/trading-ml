import { exit } from "process";

const run = async () => {
  console.log(`[${new Date().toISOString()}] LOAD!`);

  exit(1);
};

run();