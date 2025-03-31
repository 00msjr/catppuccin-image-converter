import { CatppuccinPalette } from './color-palettes';

/**
 * Calculates the Euclidean distance between two RGB colors
 */
export const colorDistance = (
  color1: [number, number, number], 
  color2: [number, number, number]
): number => {
  return Math.sqrt(
    Math.pow(color1[0] - color2[0], 2) +
    Math.pow(color1[1] - color2[1], 2) +
    Math.pow(color1[2] - color2[2], 2)
  );
};

/**
 * Find the closest color in the palette to the given RGB color
 */
export const findClosestColor = (
  rgb: [number, number, number],
  palette: CatppuccinPalette
): string => {
  let closestColor = palette.colors[0].hex;
  let minDistance = Number.MAX_VALUE;

  for (const color of palette.colors) {
    const distance = colorDistance(rgb, color.rgb);
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = color.hex;
    }
  }

  return closestColor;
};

/**
 * Process an image and map each pixel to the closest color in the palette
 */
export const processImage = async (
  imageFile: File,
  palette: CatppuccinPalette
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (event) => {
      const img = new Image();
      
      img.onload = () => {
        // Create a canvas to process the image
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }
        
        // Set canvas dimensions to match the image
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw the original image onto the canvas
        ctx.drawImage(img, 0, 0);
        
        // Get the image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Process each pixel
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // Find the closest color in the palette
          const closestColor = findClosestColor([r, g, b], palette);
          
          // Convert hex to RGB
          const hexToRgb = (hex: string): [number, number, number] => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result 
              ? [
                  parseInt(result[1], 16),
                  parseInt(result[2], 16),
                  parseInt(result[3], 16)
                ] 
              : [0, 0, 0];
          };
          
          const [newR, newG, newB] = hexToRgb(closestColor);
          
          // Update the pixel data
          data[i] = newR;
          data[i + 1] = newG;
          data[i + 2] = newB;
          // data[i + 3] is alpha, we keep it unchanged
        }
        
        // Put the processed data back on the canvas
        ctx.putImageData(imageData, 0, 0);
        
        // Convert to data URL
        const processedImageURL = canvas.toDataURL('image/png');
        resolve(processedImageURL);
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load image'));
      };
      
      img.src = event.target?.result as string;
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsDataURL(imageFile);
  });
};
