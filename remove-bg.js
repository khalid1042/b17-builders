const Jimp = require('jimp');

async function processImage() {
  console.log("Reading image...");
  const image = await Jimp.read('public/images/eagle_logo.png');
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  
  console.log(`Image size: ${width}x${height}`);
  const visited = new Uint8Array(width * height);
  const stack = [[0, 0], [width - 1, 0], [0, height - 1], [width - 1, height - 1]]; 
  
  // Tolerance for black
  const isBlackish = (r, g, b) => r < 40 && g < 40 && b < 40;
  
  console.log("Flood filling background...");
  while (stack.length > 0) {
    const [x, y] = stack.pop();
    if (x < 0 || x >= width || y < 0 || y >= height) continue;
    
    const vIdx = y * width + x;
    if (visited[vIdx]) continue;
    
    const idx = vIdx * 4;
    const r = image.bitmap.data[idx];
    const g = image.bitmap.data[idx + 1];
    const b = image.bitmap.data[idx + 2];
    
    if (isBlackish(r, g, b)) {
      visited[vIdx] = 1;
      image.bitmap.data[idx + 3] = 0; // make transparent
      
      stack.push([x + 1, y]);
      stack.push([x - 1, y]);
      stack.push([x, y + 1]);
      stack.push([x, y - 1]);
    }
  }
  
  console.log("Writing transparent image...");
  await image.writeAsync('public/images/eagle_logo_transparent.png');
  console.log("Done!");
}

processImage().catch(console.error);
