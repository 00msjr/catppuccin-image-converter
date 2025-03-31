
import React from 'react';
import { allPalettes, CatppuccinPalette } from '@/utils/color-palettes';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface PaletteSelectorProps {
  selectedPalette: CatppuccinPalette;
  onPaletteChange: (palette: CatppuccinPalette) => void;
}

export const PaletteSelector: React.FC<PaletteSelectorProps> = ({
  selectedPalette,
  onPaletteChange,
}) => {
  return (
    <div className="w-full">
      <RadioGroup
        defaultValue={selectedPalette.key}
        className="grid grid-cols-2 gap-2 sm:grid-cols-4"
        onValueChange={(value) => {
          const palette = allPalettes.find(p => p.key === value);
          if (palette) {
            onPaletteChange(palette);
          }
        }}
      >
        {allPalettes.map((palette) => (
          <div key={palette.key} className="flex items-center space-x-2">
            <RadioGroupItem value={palette.key} id={palette.key} />
            <Label
              htmlFor={palette.key}
              className="cursor-pointer flex items-center gap-2"
            >
              <div className="flex">
                <div 
                  className="inline-block w-3 h-6 rounded-l-full border-r-0" 
                  style={{ backgroundColor: palette.colors.find(c => c.name === "Mauve")?.hex }}
                ></div>
                <div 
                  className="inline-block w-3 h-6" 
                  style={{ backgroundColor: palette.colors.find(c => c.name === "Pink")?.hex }}
                ></div>
                <div 
                  className="inline-block w-3 h-6 rounded-r-full border-l-0" 
                  style={{ backgroundColor: palette.colors.find(c => c.name === "Blue")?.hex }}
                ></div>
              </div>
              {palette.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
