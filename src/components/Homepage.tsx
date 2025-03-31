import React, { useState } from 'react';
import { ImageUploader } from './ImageUploader';
import { ImagePreview } from './ImagePreview';
import { PaletteSelector } from './PaletteSelector';
import { PaletteDisplay } from './PaletteDisplay';
import { allPalettes, CatppuccinPalette } from '@/utils/color-palettes';
import { processImage } from '@/utils/imageProcessor';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
export const Homepage: React.FC = () => {
  const [selectedPalette, setSelectedPalette] = useState<CatppuccinPalette>(allPalettes[3]); // Default to Mocha
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [originalFileName, setOriginalFileName] = useState<string>("");
  const {
    toast
  } = useToast();
  const handleImageUpload = async (file: File) => {
    setIsProcessing(true);
    setOriginalFileName(file.name);
    try {
      // Create URL for original image preview
      const originalUrl = URL.createObjectURL(file);
      setOriginalImage(originalUrl);

      // Process the image
      const processed = await processImage(file, selectedPalette);
      setProcessedImage(processed);
      toast({
        title: "Image processed!",
        description: "Your image has been successfully converted to the selected palette."
      });
    } catch (error) {
      console.error("Error processing image:", error);
      toast({
        title: "Processing failed",
        description: "There was an error processing your image.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };
  const handlePaletteChange = async (palette: CatppuccinPalette) => {
    setSelectedPalette(palette);

    // If there's an image already, reprocess it with the new palette
    if (originalImage && originalFileName) {
      setIsProcessing(true);
      try {
        // Convert data URL back to a file object
        const response = await fetch(originalImage);
        const blob = await response.blob();
        const file = new File([blob], originalFileName, {
          type: blob.type
        });

        // Process with new palette
        const processed = await processImage(file, palette);
        setProcessedImage(processed);
        toast({
          title: "Image reprocessed!",
          description: `Applied the ${palette.name} palette to your image.`
        });
      } catch (error) {
        console.error("Error reprocessing image:", error);
        toast({
          title: "Reprocessing failed",
          description: "There was an error applying the new palette.",
          variant: "destructive"
        });
      } finally {
        setIsProcessing(false);
      }
    }
  };
  const handleDownload = () => {
    if (!processedImage) return;

    // Create an anchor element and trigger download
    const a = document.createElement("a");
    a.href = processedImage;
    a.download = `catppuccin_${selectedPalette.key}_${originalFileName || "image"}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast({
      title: "Download started",
      description: "Your converted image is being downloaded."
    });
  };
  return <div className="w-full max-w-4xl mx-auto space-y-8">
    <Card className="border-accent/30 shadow-lg overflow-hidden">
      <CardContent className="pt-6 p-6">
        <div className="space-y-8">
          <div className="bg-secondary/50 p-4 rounded-xl">
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-2">1</span>
              Select palette
            </h2>
            <PaletteSelector selectedPalette={selectedPalette} onPaletteChange={handlePaletteChange} />
            <div className="mt-2">
              <PaletteDisplay palette={selectedPalette} />
            </div>
          </div>

          <div className="bg-secondary/50 p-4 rounded-xl">
            <h2 className="text-xl font-bold mb-3 flex items-center">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-2">2</span>
              Upload an image
            </h2>
            {!originalImage ? <ImageUploader onImageUpload={handleImageUpload} /> : <div className="text-center">
              <p className="mb-2">
                {isProcessing ? 'Processing...' : 'Image uploaded successfully! ✨'}
              </p>
              <Button onClick={() => {
                setOriginalImage(null);
                setProcessedImage(null);
              }} variant="secondary" className="mt-2">
                Upload Another Image
              </Button>
            </div>}
          </div>

          {originalImage && processedImage && <div className="bg-secondary/50 p-4 rounded-xl">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center mr-2">3</span>
              Compare and download
            </h2>
            <ImagePreview originalImage={originalImage} processedImage={processedImage} onDownload={handleDownload} />
          </div>}
        </div>
      </CardContent>
    </Card>

    <footer className="text-center text-sm text-muted-foreground pb-8">
      <p className="">Powered by <span className="text-primary">Catppuccin</span> color palettes. Created with <span className="text-red-400">❤️</span></p>
      <img src="/catp.png" alt="Catppuccin mascot" className="w-8 h-8 mx-auto mt-2 opacity-50 hover:opacity-100 transition-opacity" />
    </footer>
  </div>;
};
