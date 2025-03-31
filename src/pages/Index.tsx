
import React from 'react';
import { Homepage } from '@/components/Homepage';
const Index = () => {
  return <div className="min-h-screen bg-background py-8 px-4">
    <div className="w-full max-w-4xl mx-auto mb-8 flex flex-col items-center">
      <div className="relative mb-4">
        <img src="/catp.png" alt="Catppuccin mascot" className="w-32 h-32 cat-icon cute-shadow rounded-full" />
      </div>
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-2 gradient-text">
        Catppuccin Image Converter
      </h1>
      <p className="text-lg text-center text-muted-foreground max-w-lg">
        Transform your images with the soothing <a href="https://catppuccin.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Catppuccin</a> color palette
      </p>
    </div>
    <Homepage />
  </div>;
};
export default Index;
