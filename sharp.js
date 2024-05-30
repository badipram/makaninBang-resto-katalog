const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

fs.readdirSync(target).forEach(async (image) => {
  const imagePath = path.join(target, image);
  const imageBaseName = image.split('.').slice(0, -1).join('.');

  const largeImage = await Jimp.read(imagePath);
  largeImage.resize(1350, 385).write(path.join(destination, `${imageBaseName}-large.jpg`));

  const smallImage = await Jimp.read(imagePath);
  smallImage.resize(850, 265).write(path.join(destination, `${imageBaseName}-small.jpg`));

  // largeImage.write(path.join(target, `${imageBaseName}-large.jpg`));
  // smallImage.write(path.join(target, `${imageBaseName}-small.jpg`));
});
