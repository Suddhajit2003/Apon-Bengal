/**
 * Cloudinary Configuration
 * 
 * Setup Instructions:
 * 1. Create a Cloudinary account at https://cloudinary.com/
 * 2. Get your cloud name from the dashboard
 * 3. Create an upload preset (Settings > Upload > Upload presets)
 * 4. Set the upload preset to "unsigned" for client-side uploads
 * 5. Update the environment variables or this config file
 */

export const cloudinaryConfig = {
  // Your Cloudinary cloud name (required)
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your-cloud-name',
  
  // Upload preset for unsigned uploads (required for client-side uploads)
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'your-upload-preset',
  
  // API Key (optional - only needed for signed uploads on backend)
  apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY || '',
  
  // Folder to organize uploads (optional)
  folder: import.meta.env.VITE_CLOUDINARY_FOLDER || 'apon-bengal',
};

// Validate configuration
export const isCloudinaryConfigured = () => {
  return (
    cloudinaryConfig.cloudName !== 'your-cloud-name' &&
    cloudinaryConfig.uploadPreset !== 'your-upload-preset'
  );
};

// Default transformation presets
export const transformations = {
  thumbnail: { width: 150, height: 150, crop: 'fill', gravity: 'auto', quality: 'auto' },
  card: { width: 400, height: 300, crop: 'fill', gravity: 'auto', quality: 'auto' },
  hero: { width: 1200, height: 600, crop: 'fill', gravity: 'auto', quality: 'auto' },
  optimized: { quality: 'auto', fetch_format: 'auto' },
};

