# Cloudinary Setup Guide

This project is configured to use Cloudinary for media management, including image and video uploads, transformations, and optimization.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Components](#components)
- [Utilities](#utilities)
- [Examples](#examples)
- [Best Practices](#best-practices)

## 🚀 Getting Started

### 1. Create a Cloudinary Account

1. Visit [Cloudinary](https://cloudinary.com/) and sign up for a free account
2. Once logged in, go to your [Dashboard](https://cloudinary.com/console)
3. Note your **Cloud Name** (you'll need this)

### 2. Create an Upload Preset

Upload presets allow secure client-side uploads without exposing your API secret.

1. Go to **Settings** → **Upload** → **Upload presets**
2. Click **Add upload preset**
3. Set the following:
   - **Preset name**: Choose a name (e.g., `apon-bengal-unsigned`)
   - **Signing mode**: Select **Unsigned** (for client-side uploads)
   - **Folder**: (Optional) Set a default folder like `apon-bengal`
4. Click **Save**

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your Cloudinary credentials:

   ```env
   VITE_CLOUDINARY_CLOUD_NAME=your-actual-cloud-name
   VITE_CLOUDINARY_UPLOAD_PRESET=your-actual-preset-name
   VITE_CLOUDINARY_FOLDER=apon-bengal
   ```

3. **Important**: Never commit your `.env` file to version control!

### 4. Restart Development Server

After updating environment variables, restart your dev server:

```bash
npm run dev
```

## ⚙️ Configuration

### Config File

The main configuration is in `src/config/cloudinary.ts`:

```typescript
export const cloudinaryConfig = {
  cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  folder: import.meta.env.VITE_CLOUDINARY_FOLDER || "apon-bengal",
};
```

### Transformation Presets

Pre-configured image transformations are available:

```typescript
export const transformations = {
  thumbnail: { width: 150, height: 150, crop: "fill" },
  card: { width: 400, height: 300, crop: "fill" },
  hero: { width: 1200, height: 600, crop: "fill" },
  optimized: { quality: "auto", fetch_format: "auto" },
};
```

## 🧩 Components

### CloudinaryUploader

A full-featured upload component with drag-and-drop support.

```tsx
import { CloudinaryUploader } from "./components/CloudinaryUploader";

function MyComponent() {
  const handleSuccess = (url: string, publicId: string) => {
    console.log("Uploaded:", url, publicId);
  };

  return (
    <CloudinaryUploader
      onUploadSuccess={handleSuccess}
      folder="profile-images"
      tags={["profile", "user"]}
      maxSize={5} // 5MB
      showPreview={true}
    />
  );
}
```

**Props:**

- `onUploadSuccess` - Callback when upload succeeds
- `onUploadError` - Callback when upload fails
- `folder` - Cloudinary folder path
- `tags` - Array of tags for organization
- `maxSize` - Max file size in MB (default: 10)
- `allowedTypes` - Array of allowed MIME types
- `showPreview` - Show image preview (default: true)

### CloudinaryImage

Optimized image component with automatic transformations.

```tsx
import { CloudinaryImage } from "./components/CloudinaryImage";

function MyComponent() {
  return (
    <CloudinaryImage
      publicId="apon-bengal/my-image"
      alt="My Image"
      width={800}
      height={600}
      crop="fill"
      quality="auto"
      lazy={true}
    />
  );
}
```

**Props:**

- `publicId` - Cloudinary public ID (required)
- `alt` - Alt text (required)
- `width` - Image width
- `height` - Image height
- `crop` - Crop mode: fill, scale, fit, pad, thumb
- `gravity` - Focus point: auto, face, center, etc.
- `quality` - Image quality: auto, 80, best, etc.
- `format` - Image format: auto, webp, jpg, png
- `lazy` - Enable lazy loading (default: true)
- `useResponsive` - Enable responsive sizing (default: true)

## 🛠️ Utilities

### Upload Function

Direct upload function:

```typescript
import { uploadToCloudinary } from './utils/cloudinary';

const file = // ... your file
const result = await uploadToCloudinary(file, {
  folder: 'my-folder',
  tags: ['tag1', 'tag2'],
});

console.log(result.secureUrl); // Use this URL
console.log(result.publicId);  // Store this for later reference
```

### Get Optimized URL

Generate optimized image URLs:

```typescript
import { getOptimizedImageUrl } from "./utils/cloudinary";

const url = getOptimizedImageUrl("my-public-id", "thumbnail");
// Returns: https://res.cloudinary.com/.../w_150,h_150,c_fill/my-public-id
```

### Custom Transformations

Apply custom transformations:

```typescript
import { getCustomImageUrl } from "./utils/cloudinary";

const url = getCustomImageUrl("my-public-id", {
  w: 500,
  h: 300,
  c: "fill",
  g: "face",
  q: "auto",
  f: "auto",
});
```

### File Validation

Validate files before upload:

```typescript
import { validateFile } from "./utils/cloudinary";

const validation = validateFile(file, {
  maxSize: 10, // MB
  allowedTypes: ["image/jpeg", "image/png"],
});

if (!validation.valid) {
  alert(validation.error);
}
```

## 🎣 Hooks

### useCloudinaryUpload

Custom hook for upload state management:

```typescript
import { useCloudinaryUpload } from "./hooks/useCloudinaryUpload";

function MyComponent() {
  const { upload, isUploading, progress, error, uploadedUrl, publicId, reset } =
    useCloudinaryUpload({
      maxSize: 10,
      folder: "my-folder",
      onSuccess: (url, id) => console.log("Success!"),
      onError: (err) => console.error(err),
    });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    await upload(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {isUploading && <p>Uploading: {progress}%</p>}
      {error && <p>Error: {error}</p>}
      {uploadedUrl && <img src={uploadedUrl} alt="Uploaded" />}
    </div>
  );
}
```

## 📚 Examples

### Example 1: Profile Picture Upload

```tsx
import { CloudinaryUploader } from "./components/CloudinaryUploader";

function ProfileUpload({ userId }) {
  const handleSuccess = (url, publicId) => {
    // Save to database
    saveUserProfile({ userId, avatarUrl: url, avatarId: publicId });
  };

  return (
    <CloudinaryUploader
      onUploadSuccess={handleSuccess}
      folder={`users/${userId}/profile`}
      tags={["profile", "avatar"]}
      maxSize={2} // 2MB for profile pics
      allowedTypes={["image/jpeg", "image/png"]}
    />
  );
}
```

### Example 2: Gallery with Thumbnails

```tsx
import { CloudinaryImage } from "./components/CloudinaryImage";

function Gallery({ images }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img) => (
        <CloudinaryImage
          key={img.publicId}
          publicId={img.publicId}
          alt={img.title}
          width={400}
          height={300}
          crop="fill"
          gravity="auto"
          quality="auto"
          lazy={true}
        />
      ))}
    </div>
  );
}
```

### Example 3: Responsive Hero Image

```tsx
import { CloudinaryImage } from "./components/CloudinaryImage";

function Hero() {
  return (
    <div className="relative w-full h-[600px]">
      <CloudinaryImage
        publicId="apon-bengal/hero-image"
        alt="Hero"
        width={1920}
        height={600}
        crop="fill"
        gravity="auto"
        quality="auto"
        format="auto"
        className="w-full h-full object-cover"
        useResponsive={true}
        usePlaceholder={true}
      />
    </div>
  );
}
```

## ✅ Best Practices

### 1. Use Public IDs Wisely

Store public IDs in your database, not full URLs. This gives you flexibility:

```typescript
// Store this
const imageData = { publicId: "products/shirt-123" };

// Generate URLs dynamically
const thumbnailUrl = getOptimizedImageUrl(imageData.publicId, "thumbnail");
const fullUrl = getOptimizedImageUrl(imageData.publicId, "hero");
```

### 2. Always Use Transformations

Always apply transformations for optimal performance:

```typescript
// ❌ Bad - Serving original large file
<img src={`https://res.cloudinary.com/demo/image/upload/${publicId}`} />

// ✅ Good - Optimized and responsive
<CloudinaryImage publicId={publicId} width={800} quality="auto" format="auto" />
```

### 3. Organize with Folders and Tags

Keep your media library organized:

```typescript
// Organize by feature and type
folder: "users/123/profile";
folder: "products/electronics/laptops";
folder: "blog/2024/october";

// Tag for easy searching
tags: ["profile", "verified", "public"];
tags: ["product", "featured", "sale"];
```

### 4. Validate Before Upload

Always validate files client-side:

```typescript
const validation = validateFile(file, {
  maxSize: 5,
  allowedTypes: ["image/jpeg", "image/png", "image/webp"],
});

if (!validation.valid) {
  showError(validation.error);
  return;
}
```

### 5. Handle Errors Gracefully

Provide good user feedback:

```typescript
const { upload, error, isUploading } = useCloudinaryUpload({
  onError: (err) => {
    if (err.includes("size")) {
      toast.error("File is too large");
    } else if (err.includes("type")) {
      toast.error("Invalid file type");
    } else {
      toast.error("Upload failed. Please try again.");
    }
  },
});
```

### 6. Use Lazy Loading

Enable lazy loading for better performance:

```tsx
<CloudinaryImage
  publicId={publicId}
  lazy={true}
  usePlaceholder={true} // Shows blur while loading
/>
```

### 7. Set Upload Limits

Configure reasonable limits in your upload preset:

- Max file size: 10MB for images, 100MB for videos
- Max dimensions: 4096x4096 for images
- Allowed formats: jpg, png, webp, gif

## 🔒 Security

### Important Security Notes

1. **Never expose API Secret**: Only use unsigned upload presets on the client
2. **Backend Validation**: Validate uploads on your backend as well
3. **Access Control**: Use Cloudinary's access control features for sensitive content
4. **Delete Operations**: Implement delete operations on backend only

### Example Backend Delete Route

```typescript
// backend/routes/media.ts (example with Express)
app.delete("/api/media/:publicId", async (req, res) => {
  const cloudinary = require("cloudinary").v2;

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Only on backend!
  });

  try {
    await cloudinary.uploader.destroy(req.params.publicId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Delete failed" });
  }
});
```

## 🐛 Troubleshooting

### "Upload preset not found"

- Check that your upload preset name is correct
- Ensure the preset is set to "unsigned" mode
- Verify the preset exists in your Cloudinary account

### "Invalid cloud name"

- Double-check your cloud name in the `.env` file
- Make sure there are no spaces or special characters
- Restart your dev server after changing `.env`

### Images not loading

- Verify the public ID is correct
- Check that the image exists in your Cloudinary media library
- Ensure your cloud name is configured correctly

### Upload fails silently

- Check browser console for errors
- Verify file size is under the limit
- Check that file type is allowed
- Ensure upload preset allows uploads from your domain

## 📖 Resources

- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [React SDK Guide](https://cloudinary.com/documentation/react_integration)
- [Upload Presets](https://cloudinary.com/documentation/upload_presets)
- [Transformation Reference](https://cloudinary.com/documentation/image_transformations)
- [React Image Optimization](https://cloudinary.com/documentation/react_image_transformations)

## 🆘 Support

If you encounter issues:

1. Check this documentation
2. Review the [Cloudinary docs](https://cloudinary.com/documentation)
3. Check browser console for errors
4. Verify environment variables are set correctly

---

**Ready to use!** Once configured, you can start uploading and optimizing media with Cloudinary. 🎉
