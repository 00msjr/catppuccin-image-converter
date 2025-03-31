import React from 'react';
import { ColorCatcher } from '@/components/ColorCatcher';
const Index = () => {
  return <div className="min-h-screen bg-background py-8 px-4">
      <div className="w-full max-w-4xl mx-auto mb-8 flex flex-col items-center">
        <div className="relative mb-4">
          <img src="/lovable-uploads/18bd8338-2612-4ccb-a08b-47cc3faa9576.png" alt="Catppuccin mascot" className="w-32 h-32 cat-icon cute-shadow rounded-full" />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter text-center mb-2 text-accent">
          Catppuccin Image Converter
        </h1>
        <p className="text-lg text-center text-muted-foreground max-w-lg">
          Transform your images with the soothing <span className="text-primary">Catppuccin</span> color palette
        </p>
      </div>
      <ColorCatcher />
    </div>;
};
export default Index;