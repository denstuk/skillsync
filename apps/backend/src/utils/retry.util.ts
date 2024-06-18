export async function retry<T>(
  fn: () => Promise<T>,
  attempts: number,
): Promise<T> {
  let result: T;
  for (let i = 0; i < attempts; i++) {
    try {
      result = await fn();
      break;
    } catch (e) {
      console.info(`Attempt ${i + 1} failed with error:`, e);
    }
  }
  if (!result) {
    throw new Error(`Failed to execute after ${attempts} attempts.`);
  }
  return result;
}
