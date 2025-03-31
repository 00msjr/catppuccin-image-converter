
import React, { useState } from 'react';
import { ImageUploader } from './ImageUploader';
import { ImagePreview } from './ImagePreview';
import { PaletteSelector } from './PaletteSelector';
import { PaletteDisplay } from './PaletteDisplay';
import { allPalettes, CatppuccinPalette } from '@/utils/color-palettes';
import { processImage } from '@/utils/imageProcessor';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export const ColorCatcher: React.FC = () => {
  const [selectedPalette, setSelectedPalette] = useState<CatppuccinPalette>(allPalettes[0]);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [originalFileName, setOriginalFileName] = useState<string>("");
  const { toast } = useToast();

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
        description: "Your image has been successfully converted to the selected palette.",
      });
    } catch (error) {
      console.error("Error processing image:", error);
      toast({
        title: "Processing failed",
        description: "There was an error processing your image.",
        variant: "destructive",
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
        const file = new File([blob], originalFileName, { type: blob.type });
        
        // Process with new palette
        const processed = await processImage(file, palette);
        setProcessedImage(processed);
        
        toast({
          title: "Image reprocessed!",
          description: `Applied the ${palette.name} palette to your image.`,
        });
      } catch (error) {
        console.error("Error reprocessing image:", error);
        toast({
          title: "Reprocessing failed",
          description: "There was an error applying the new palette.",
          variant: "destructive",
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
      description: "Your converted image is being downloaded.",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">ColorCatcher</h1>
        <p className="text-muted-foreground">
          Convert your images to the beautiful Catppuccin color palette
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium mb-2">1. Select palette</h2>
              <PaletteSelector
                selectedPalette={selectedPalette}
                onPaletteChange={handlePaletteChange}
              />
              <div className="mt-2">
                <PaletteDisplay palette={selectedPalette} />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-2">2. Upload an image</h2>
              {!originalImage ? (
                <ImageUploader onImageUpload={handleImageUpload} />
              ) : (
                <div className="text-center">
                  <p className="mb-2">
                    {isProcessing ? 'Processing...' : 'Image uploaded successfully!'}
                  </p>
                  <Button
                    onClick={() => {
                      setOriginalImage(null);
                      setProcessedImage(null);
                    }}
                    variant="secondary"
                    className="mt-2"
                  >
                    Upload Another Image
                  </Button>
                </div>
              )}
            </div>

            {originalImage && processedImage && (
              <div>
                <h2 className="text-lg font-medium mb-4">3. Compare and download</h2>
                <ImagePreview
                  originalImage={originalImage}
                  processedImage={processedImage}
                  onDownload={handleDownload}
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <footer className="text-center text-sm text-muted-foreground pb-8">
        Powered by Catppuccin color palettes. Created with ❤️
      </footer>
    </div>
  );
};

// Add missing Button component that was used in the component
import { Button } from '@/components/ui/button';
