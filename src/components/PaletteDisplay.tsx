
import React from 'react';
import { CatppuccinPalette } from '@/utils/color-palettes';

interface PaletteDisplayProps {
  palette: CatppuccinPalette;
}

export const PaletteDisplay: React.FC<PaletteDisplayProps> = ({ palette }) => {
  // Filter out the utility colors (text, base, surface, etc)
  const mainColors = palette.colors.filter(color => 
    !['Text', 'Subtext1', 'Subtext0', 'Overlay2', 'Overlay1', 'Overlay0', 
      'Surface2', 'Surface1', 'Surface0', 'Base', 'Mantle', 'Crust'].includes(color.name)
  );

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-2 py-2">
        {mainColors.map((color) => (
          <div key={color.name} className="flex-shrink-0">
            <div
              className="w-8 h-8 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color.hex }}
              title={`${color.name}: ${color.hex}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
