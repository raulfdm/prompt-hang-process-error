export function sleep(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`AWAKE AFTER ${ms}ms`);
      resolve();
    }, ms);
  });
}
