drawRotate(x, y, pixelWidth, pixelHeight, scalingFactor) {
  const numSlices = Math.abs(pixelWidth);
  const sliceWidth = this.image.width / numSlices;
  const polarity = (pixelWidth > 0) ? 1 : -1;
  const widthScale = Math.abs(pixelWidth) / this.image.width;
  const heightScale = (1 - scalingFactor) / numSlices;

  for (let n = 0; n < numSlices; n += 1) {
    const sx = polarity > 0 ? sliceWidth * n : this.image.width - sliceWidth * (n + 1);
    const sy = 0;
    const sWidth = sliceWidth;

    const dx = x + (sliceWidth * n * widthScale * polarity);
    const dy = y + ((pixelHeight * heightScale * n) / 2);
    const dWidth = sliceWidth * widthScale;
    const dHeight = pixelHeight * (1 - (heightScale * n));

    this.context.drawImage(this.image, sx, sy, sWidth, this.image.height,
      dx, dy, dWidth, dHeight);
  }
},

const width = this.imageWidth * 0.8;
const height = this.imageHeight * 1.1;
switch (this.imageState) {
  case -1:
    this.drawRotate(
      (this.$refs.canvas.width + width) / 2,
      (this.$refs.canvas.height - height) / 2,
      -width, height, 0.6,
    );
    break;
  case 1:
    this.drawRotate(
      (this.$refs.canvas.width - width) / 2,
      (this.$refs.canvas.height - height) / 2,
      width, height, 0.6,
    );
    break;
  default:
    this.drawImage();
    break;
}
