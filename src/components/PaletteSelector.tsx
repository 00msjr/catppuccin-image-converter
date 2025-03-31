
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
  // Function to get emoji based on palette key
  const getEmojiForPalette = (key: string) => {
    switch (key) {
      case 'latte':
        return '🌻';
      case 'frappe':
        return '🪴';
      case 'macchiato':
        return '🌺';
      case 'mocha':
        return '🌿';
      default:
        return '';
    }
  };

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
              {getEmojiForPalette(palette.key)}{palette.name}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
