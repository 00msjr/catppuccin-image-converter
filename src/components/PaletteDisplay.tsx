import React from 'react';
import { CatppuccinPalette } from '@/utils/color-palettes';
interface PaletteDisplayProps {
  palette: CatppuccinPalette;
}
export const PaletteDisplay: React.FC<PaletteDisplayProps> = ({
  palette
}) => {
  // Filter out the utility colors (text, base, surface, etc)
  const mainColors = palette.colors.filter(color => !['Text', 'Subtext1', 'Subtext0', 'Overlay2', 'Overlay1', 'Overlay0', 'Surface2', 'Surface1', 'Surface0', 'Base', 'Mantle', 'Crust'].includes(color.name));
  return <div className="w-full overflow-x-auto py-2">
      <div className="flex space-x-3 py-3 px-3">
        {mainColors.map(color => <div key={color.name} className="flex-shrink-0 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full shadow-md cursor-pointer hover:scale-125 transition-transform border-2 border-white/10" style={{
          backgroundColor: color.hex
        }} title={`${color.name}: ${color.hex}`}>
              <div className="w-full h-full rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-white drop-shadow-md">
                  {color.name.substring(0, 1)}
                </span>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};