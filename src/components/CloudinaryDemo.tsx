import React, { useState } from 'react';
import { CloudinaryUploader } from './CloudinaryUploader';
import { CloudinaryImage } from './CloudinaryImage';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { InfoIcon } from 'lucide-react';
import { isCloudinaryConfigured } from '../config/cloudinary';

/**
 * Demo page showcasing Cloudinary functionality
 * This component demonstrates:
 * - Image upload with drag & drop
 * - Image display with optimizations
 * - Gallery management
 */
export const CloudinaryDemo: React.FC = () => {
  const [uploadedImages, setUploadedImages] = useState<Array<{
    url: string;
    publicId: string;
    name: string;
  }>>([]);

  const handleUploadSuccess = (url: string, publicId: string) => {
    const newImage = {
      url,
      publicId,
      name: `Image ${uploadedImages.length + 1}`,
    };
    setUploadedImages([...uploadedImages, newImage]);
  };

  const configured = isCloudinaryConfigured();

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Cloudinary Integration Demo</h1>
          <p className="text-gray-600">
            Upload, optimize, and manage your media with Cloudinary
          </p>
        </div>

        {/* Configuration Alert */}
        {!configured && (
          <Alert className="bg-yellow-50 border-yellow-200">
            <InfoIcon className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-yellow-800">
              Cloudinary is not configured yet. Please update your <code>.env</code> file with your
              Cloudinary credentials. See{' '}
              <a href="/CLOUDINARY_SETUP.md" className="font-semibold underline">
                CLOUDINARY_SETUP.md
              </a>{' '}
              for instructions.
            </AlertDescription>
          </Alert>
        )}

        {/* Main Content */}
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="gallery">Gallery ({uploadedImages.length})</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upload Images</CardTitle>
                <CardDescription>
                  Drag and drop images or click to browse. Images are automatically optimized.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CloudinaryUploader
                  onUploadSuccess={handleUploadSuccess}
                  folder="demo"
                  tags={['demo', 'test']}
                  maxSize={10}
                  showPreview={true}
                />
              </CardContent>
            </Card>

            {/* Features List */}
            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Drag & drop file upload</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>File validation (size, type)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Upload progress tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Automatic image optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Responsive image delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Lazy loading support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="space-y-4">
            {uploadedImages.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-gray-500">
                    No images uploaded yet. Upload some images to see them here!
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {uploadedImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-video bg-gray-100 relative">
                      <CloudinaryImage
                        publicId={image.publicId}
                        alt={image.name}
                        width={400}
                        height={300}
                        crop="fill"
                        quality="auto"
                        format="auto"
                        lazy={true}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{image.name}</h3>
                      <p className="text-xs text-gray-500 mt-1 truncate">{image.publicId}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Code Examples</CardTitle>
                <CardDescription>
                  Learn how to use Cloudinary in your components
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Example 1 */}
                <div>
                  <h3 className="font-semibold mb-2">1. Basic Upload</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { CloudinaryUploader } from './components/CloudinaryUploader';

function MyComponent() {
  const handleSuccess = (url, publicId) => {
    console.log('Uploaded:', url);
  };

  return (
    <CloudinaryUploader
      onUploadSuccess={handleSuccess}
      folder="my-uploads"
      maxSize={5}
    />
  );
}`}
                  </pre>
                </div>

                {/* Example 2 */}
                <div>
                  <h3 className="font-semibold mb-2">2. Display Optimized Image</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { CloudinaryImage } from './components/CloudinaryImage';

function MyComponent() {
  return (
    <CloudinaryImage
      publicId="my-image-id"
      alt="My Image"
      width={800}
      height={600}
      crop="fill"
      quality="auto"
      lazy={true}
    />
  );
}`}
                  </pre>
                </div>

                {/* Example 3 */}
                <div>
                  <h3 className="font-semibold mb-2">3. Using the Upload Hook</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`import { useCloudinaryUpload } from './hooks/useCloudinaryUpload';

function MyComponent() {
  const { upload, isUploading, uploadedUrl } = useCloudinaryUpload();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    await upload(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {isUploading && <p>Uploading...</p>}
      {uploadedUrl && <img src={uploadedUrl} />}
    </div>
  );
}`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Documentation Link */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="py-6">
                <div className="flex items-start space-x-3">
                  <InfoIcon className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Full Documentation</h3>
                    <p className="text-sm text-blue-800 mt-1">
                      For complete setup instructions, API reference, and advanced examples, see the{' '}
                      <a
                        href="/CLOUDINARY_SETUP.md"
                        className="font-semibold underline"
                      >
                        Cloudinary Setup Guide
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CloudinaryDemo;

