import React, { useRef, useState } from 'react';
import { Upload, X, CheckCircle, AlertCircle, Image as ImageIcon } from 'lucide-react';
import { useCloudinaryUpload } from '../hooks/useCloudinaryUpload';
import { getOptimizedImageUrl } from '../utils/cloudinary';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';

interface CloudinaryUploaderProps {
  onUploadSuccess?: (url: string, publicId: string) => void;
  onUploadError?: (error: string) => void;
  folder?: string;
  tags?: string[];
  maxSize?: number; // in MB
  allowedTypes?: string[];
  showPreview?: boolean;
}

/**
 * Cloudinary Upload Component with drag-and-drop support
 */
export const CloudinaryUploader: React.FC<CloudinaryUploaderProps> = ({
  onUploadSuccess,
  onUploadError,
  folder,
  tags,
  maxSize = 10,
  allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  showPreview = true,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { upload, isUploading, progress, error, uploadedUrl, publicId, reset } =
    useCloudinaryUpload({
      maxSize,
      allowedTypes,
      folder,
      tags,
      onSuccess: (url, id) => {
        setPreviewUrl(url);
        onUploadSuccess?.(url, id);
      },
      onError: (err) => {
        onUploadError?.(err);
      },
    });

  const handleFileSelect = async (file: File) => {
    if (!file) return;

    // Create local preview
    if (showPreview && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

    // Upload to Cloudinary
    await upload(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleReset = () => {
    reset();
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <Card className="p-6">
        <div
          className={`relative border-2 border-dashed rounded-lg transition-colors ${
            isDragging
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={allowedTypes.join(',')}
            onChange={handleFileInputChange}
            className="hidden"
          />

          {/* Upload Area */}
          <div className="p-8 text-center">
            {!previewUrl && !isUploading && (
              <>
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Drag and drop your image here
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  or click to browse (max {maxSize}MB)
                </p>
                <Button onClick={handleBrowseClick}>Select File</Button>
              </>
            )}

            {/* Preview */}
            {showPreview && previewUrl && !isUploading && (
              <div className="relative">
                <img
                  src={uploadedUrl || previewUrl}
                  alt="Preview"
                  className="max-w-full max-h-96 mx-auto rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={handleReset}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Uploading State */}
            {isUploading && (
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Upload className="h-8 w-8 text-blue-500 animate-bounce" />
                  <span className="text-lg font-medium">Uploading...</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600">{progress}% complete</p>
              </div>
            )}
          </div>
        </div>

        {/* Success Message */}
        {uploadedUrl && !isUploading && (
          <Alert className="mt-4 bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Upload successful! Image is ready to use.
            </AlertDescription>
          </Alert>
        )}

        {/* Error Message */}
        {error && (
          <Alert className="mt-4 bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">{error}</AlertDescription>
          </Alert>
        )}
      </Card>

      {/* Upload Info */}
      {uploadedUrl && publicId && (
        <Card className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm text-gray-700">Upload Details</h3>
            <div className="space-y-1 text-xs">
              <div className="flex items-start space-x-2">
                <span className="font-medium text-gray-600">URL:</span>
                <a
                  href={uploadedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline break-all"
                >
                  {uploadedUrl}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-medium text-gray-600">Public ID:</span>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs break-all">
                  {publicId}
                </code>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CloudinaryUploader;

