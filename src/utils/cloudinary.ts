import { Cloudinary } from '@cloudinary/url-gen';
import { cloudinaryConfig, transformations } from '../config/cloudinary';

/**
 * Initialize Cloudinary instance
 */
export const cld = new Cloudinary({
  cloud: {
    cloudName: cloudinaryConfig.cloudName,
  },
});

/**
 * Upload file to Cloudinary
 * @param file - File to upload
 * @param options - Upload options
 * @returns Upload response with URL and public_id
 */
export const uploadToCloudinary = async (
  file: File,
  options?: {
    folder?: string;
    tags?: string[];
    onProgress?: (progress: number) => void;
  }
): Promise<{
  url: string;
  secureUrl: string;
  publicId: string;
  width: number;
  height: number;
  format: string;
}> => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', cloudinaryConfig.uploadPreset);
  
  if (options?.folder || cloudinaryConfig.folder) {
    formData.append('folder', options?.folder || cloudinaryConfig.folder);
  }
  
  if (options?.tags) {
    formData.append('tags', options.tags.join(','));
  }

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Upload failed');
    }

    const data = await response.json();
    
    return {
      url: data.url,
      secureUrl: data.secure_url,
      publicId: data.public_id,
      width: data.width,
      height: data.height,
      format: data.format,
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
};

/**
 * Generate optimized image URL with transformations
 * @param publicId - Cloudinary public ID
 * @param preset - Transformation preset name
 * @returns Optimized image URL
 */
export const getOptimizedImageUrl = (
  publicId: string,
  preset: keyof typeof transformations = 'optimized'
): string => {
  const transformation = transformations[preset];
  const params = new URLSearchParams(
    Object.entries(transformation).map(([key, value]) => [key, String(value)])
  );
  
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${params.toString()}/${publicId}`;
};

/**
 * Generate custom image URL with transformations
 * @param publicId - Cloudinary public ID
 * @param transformations - Custom transformation parameters
 * @returns Transformed image URL
 */
export const getCustomImageUrl = (
  publicId: string,
  transformations: Record<string, string | number>
): string => {
  const params = Object.entries(transformations)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${params}/${publicId}`;
};

/**
 * Delete image from Cloudinary (requires backend implementation)
 * @param publicId - Cloudinary public ID
 */
export const deleteFromCloudinary = async (publicId: string): Promise<void> => {
  // Note: Deletion requires API secret and should be done from backend
  console.warn('Delete operation should be implemented on the backend for security');
  throw new Error('Delete operation must be implemented on the backend');
};

/**
 * Generate video URL
 * @param publicId - Cloudinary public ID
 * @param options - Video transformation options
 * @returns Video URL
 */
export const getVideoUrl = (
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    quality?: string;
    format?: string;
  }
): string => {
  const params: string[] = [];
  
  if (options?.width) params.push(`w_${options.width}`);
  if (options?.height) params.push(`h_${options.height}`);
  if (options?.quality) params.push(`q_${options.quality}`);
  if (options?.format) params.push(`f_${options.format}`);
  
  const transformation = params.length > 0 ? `${params.join(',')}/` : '';
  
  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/video/upload/${transformation}${publicId}`;
};

/**
 * Validate file before upload
 * @param file - File to validate
 * @param options - Validation options
 * @returns Validation result
 */
export const validateFile = (
  file: File,
  options?: {
    maxSize?: number; // in MB
    allowedTypes?: string[];
  }
): { valid: boolean; error?: string } => {
  const maxSize = options?.maxSize || 10; // Default 10MB
  const allowedTypes = options?.allowedTypes || ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  
  if (file.size > maxSize * 1024 * 1024) {
    return {
      valid: false,
      error: `File size must be less than ${maxSize}MB`,
    };
  }
  
  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: `File type must be one of: ${allowedTypes.join(', ')}`,
    };
  }
  
  return { valid: true };
};

