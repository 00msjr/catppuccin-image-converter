
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface ImagePreviewProps {
  originalImage: string;
  processedImage: string;
  onDownload: () => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  originalImage,
  processedImage,
  onDownload,
}) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col space-y-2">
          <div className="text-lg font-medium">Original Image</div>
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center">
            <img 
              src={originalImage} 
              alt="Original" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="text-lg font-medium">Processed Image</div>
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center">
            <img 
              src={processedImage} 
              alt="Processed" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Button onClick={onDownload} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Download Converted Image</span>
        </Button>
      </div>
    </div>
  );
};
