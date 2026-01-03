import { Jimp } from 'jimp';

async function processImage() {
    try {
        const inputPath = 'src/assets/maple-leaf-logo.png';
        const outputPath = 'src/assets/maple-leaf-logo-transparent.png';

        console.log(`Reading image from ${inputPath}...`);
        const image = await Jimp.read(inputPath);

        console.log(`Original dimensions: ${image.width}x${image.height}`);

        // 1. Remove white background
        const whiteThreshold = 240; // 0-255, pixels lighter than this become transparent
        const targetColor = { r: 255, g: 255, b: 255, a: 0 };

        image.scan(0, 0, image.width, image.height, function (x, y, idx) {
            const red = this.bitmap.data[idx + 0];
            const green = this.bitmap.data[idx + 1];
            const blue = this.bitmap.data[idx + 2];

            if (red > whiteThreshold && green > whiteThreshold && blue > whiteThreshold) {
                this.bitmap.data[idx + 3] = 0; // Set alpha to 0 (transparent)
            }
        });

        console.log('White background removed.');

        // 2. Crop to remove text at the bottom
        // Assuming text is in the bottom part. We'll crop to top 40% based on typical logo+text layouts.
        // However, safer to use autocrop first to remove surrounding whitespace, 
        // then inspect or user feedback.
        // For now, let's just autocrop to trim empty space.
        // IMPORTANT: The user said "use only the logo part ... and use the name ... side by side"
        // implies splitting. If the image is vertical [Icon] over [Text], we need to slice it.
        // Let's assume a square-ish crop of the top center?

        // Auto-crop to remove the outer whitespace first
        image.autocrop();
        console.log(`Dimensions after autocrop: ${image.width}x${image.height}`);

        // Heuristic: If height > width significantly, it's likely vertical stack.
        // Let's crop to the top square area if it is vertical.
        if (image.height > image.width * 1.2) {
            console.log('Image seems tall. Cropping to top square (width x width) to keep just the icon.');
            image.crop({ x: 0, y: 0, w: image.width, h: image.width });
        }

        await image.write(outputPath);
        console.log(`Saved processed image to ${outputPath}`);
        console.log(`New dimensions: ${image.width}x${image.height}`);

    } catch (err) {
        console.error('Error processing image:', err);
        process.exit(1);
    }
}

processImage();
