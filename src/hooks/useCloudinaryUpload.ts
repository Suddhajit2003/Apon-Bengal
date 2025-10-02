import { useState, useCallback } from 'react';
import { uploadToCloudinary, validateFile } from '../utils/cloudinary';

interface UploadState {
  isUploading: boolean;
  progress: number;
  error: string | null;
  uploadedUrl: string | null;
  publicId: string | null;
}

interface UseCloudinaryUploadOptions {
  maxSize?: number; // in MB
  allowedTypes?: string[];
  folder?: string;
  tags?: string[];
  onSuccess?: (url: string, publicId: string) => void;
  onError?: (error: string) => void;
}

/**
 * Custom hook for Cloudinary uploads with state management
 */
export const useCloudinaryUpload = (options?: UseCloudinaryUploadOptions) => {
  const [state, setState] = useState<UploadState>({
    isUploading: false,
    progress: 0,
    error: null,
    uploadedUrl: null,
    publicId: null,
  });

  const upload = useCallback(
    async (file: File) => {
      // Validate file
      const validation = validateFile(file, {
        maxSize: options?.maxSize,
        allowedTypes: options?.allowedTypes,
      });

      if (!validation.valid) {
        setState((prev) => ({
          ...prev,
          error: validation.error || 'Invalid file',
        }));
        options?.onError?.(validation.error || 'Invalid file');
        return;
      }

      // Start upload
      setState({
        isUploading: true,
        progress: 0,
        error: null,
        uploadedUrl: null,
        publicId: null,
      });

      try {
        const result = await uploadToCloudinary(file, {
          folder: options?.folder,
          tags: options?.tags,
          onProgress: (progress) => {
            setState((prev) => ({ ...prev, progress }));
          },
        });

        setState({
          isUploading: false,
          progress: 100,
          error: null,
          uploadedUrl: result.secureUrl,
          publicId: result.publicId,
        });

        options?.onSuccess?.(result.secureUrl, result.publicId);

        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Upload failed';
        
        setState({
          isUploading: false,
          progress: 0,
          error: errorMessage,
          uploadedUrl: null,
          publicId: null,
        });

        options?.onError?.(errorMessage);
        throw error;
      }
    },
    [options]
  );

  const reset = useCallback(() => {
    setState({
      isUploading: false,
      progress: 0,
      error: null,
      uploadedUrl: null,
      publicId: null,
    });
  }, []);

  return {
    upload,
    reset,
    ...state,
  };
};

