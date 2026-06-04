export const throttle = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number,
) => {
  let isThrottled = false;
  let lastArgs: T | null = null;

  const run = (...args: T): void => {
    callback(...args);
    isThrottled = true;

    setTimeout(() => {
      if (lastArgs) {
        const argsToRun = lastArgs;
        lastArgs = null;
        run(...argsToRun);
        return;
      }

      isThrottled = false;
    }, delay);
  };

  return (...args: T): void => {
    if (isThrottled) {
      lastArgs = args;
      return;
    }

    run(...args);
  };
};
