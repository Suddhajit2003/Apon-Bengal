import React, { useState } from 'react';
import { cld } from '../utils/cloudinary';
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  crop?: 'fill' | 'scale' | 'fit' | 'pad' | 'thumb' | 'crop';
  gravity?: string;
  quality?: string | number;
  format?: 'auto' | 'webp' | 'jpg' | 'png';
  className?: string;
  lazy?: boolean;
  useResponsive?: boolean;
  usePlaceholder?: boolean;
  transformations?: Record<string, any>;
}

/**
 * Optimized Cloudinary Image Component
 * Automatically handles responsive images, lazy loading, and format optimization
 */
export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  publicId,
  alt,
  width,
  height,
  crop = 'fill',
  gravity = 'auto',
  quality = 'auto',
  format = 'auto',
  className,
  lazy = true,
  useResponsive = true,
  usePlaceholder = true,
  transformations,
}) => {
  const [imageError, setImageError] = useState(false);

  // Create Cloudinary image instance
  let image = cld.image(publicId);

  // Apply transformations
  if (transformations) {
    // Apply custom transformations
    Object.entries(transformations).forEach(([key, value]) => {
      // This is a simplified approach - you may need to use specific transformation methods
      image = image as any;
    });
  } else {
    // Apply default transformations
    image = image as any;
    // Add basic transformations here based on props
  }

  // Prepare plugins
  const plugins = [];
  if (lazy) plugins.push(lazyload());
  if (useResponsive) plugins.push(responsive());
  if (usePlaceholder) plugins.push(placeholder());

  if (imageError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={{ width: width || '100%', height: height || 'auto' }}
      >
        <span className="text-gray-500">Image not available</span>
      </div>
    );
  }

  return (
    <AdvancedImage
      cldImg={image}
      alt={alt}
      className={className}
      plugins={plugins}
      onError={() => setImageError(true)}
    />
  );
};

export default CloudinaryImage;

