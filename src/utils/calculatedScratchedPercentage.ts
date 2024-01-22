export const calculateScratchedPercentage = (pixels: Uint8Array | Uint8ClampedArray, width: number, height: number) => {
  const remainingPixelsCount = Array.from(pixels)
    .filter((_, i) => i % 4 === 0)
    .reduce((acc: number, val: number) => {
      if (val > 0) {
        // eslint-disable-next-line no-param-reassign
        acc++;
      }
      return acc;
    }, 0);

  const totalPixelCount = width * height;
  const percentage = Math.round((remainingPixelsCount / totalPixelCount) * 100);
  console.warn(`Scratched: ${percentage}%`);
  return percentage >= 80;
};
