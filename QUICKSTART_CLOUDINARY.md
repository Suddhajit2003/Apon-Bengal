# 🚀 Cloudinary Quick Start Guide

Get up and running with Cloudinary in 5 minutes!

## Step 1: Create Cloudinary Account (2 minutes)

1. Go to [cloudinary.com](https://cloudinary.com/) and sign up for a **free account**
2. After signing up, you'll see your **Dashboard**
3. Note your **Cloud Name** (e.g., "dxyz123abc")

## Step 2: Create Upload Preset (1 minute)

1. In your Cloudinary dashboard, go to **Settings** (gear icon) → **Upload**
2. Scroll down to **Upload presets** section
3. Click **Add upload preset**
4. Configure:
   - **Preset name**: `apon-bengal-unsigned` (or any name you prefer)
   - **Signing mode**: Select **Unsigned** ⚠️ (Important!)
   - **Folder**: `apon-bengal` (optional, but recommended)
5. Click **Save**

## Step 3: Configure Your Project (1 minute)

1. Create a `.env` file in your project root:

   ```bash
   touch .env
   ```

2. Add your Cloudinary credentials:

   ```env
   VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name-here
   VITE_CLOUDINARY_UPLOAD_PRESET=apon-bengal-unsigned
   VITE_CLOUDINARY_FOLDER=apon-bengal
   ```

3. Replace `your-cloud-name-here` with your actual Cloud Name from step 1

## Step 4: Restart Dev Server (30 seconds)

```bash
# Stop current server (Ctrl+C if running)
# Start it again
npm run dev
```

## Step 5: Test It! (30 seconds)

### Option A: Use the Demo Page

Add this to your `src/App.tsx`:

```tsx
import CloudinaryDemo from "./components/CloudinaryDemo";

export default function App() {
  return <CloudinaryDemo />;
}
```

### Option B: Quick Test Component

```tsx
import { CloudinaryUploader } from "./components/CloudinaryUploader";

export default function App() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Test Upload</h1>
      <CloudinaryUploader onUploadSuccess={(url) => alert("Success! " + url)} />
    </div>
  );
}
```

## ✅ You're Done!

Try uploading an image. If it works, you're all set! 🎉

## 🆘 Troubleshooting

### "Upload preset not found"

- Make sure the preset name in `.env` matches exactly
- Verify the preset is set to **Unsigned** mode

### "Invalid cloud name"

- Check for typos in your cloud name
- Make sure there are no spaces

### Still not working?

- Restart your dev server
- Check browser console for errors
- See [CLOUDINARY_SETUP.md](./CLOUDINARY_SETUP.md) for detailed docs

## 📚 Next Steps

- Read [CLOUDINARY_SETUP.md](./CLOUDINARY_SETUP.md) for complete documentation
- Explore the demo page for examples
- Check out the components in `src/components/`

## 🎯 Common Use Cases

### Upload Profile Picture

```tsx
<CloudinaryUploader
  folder="users/profiles"
  maxSize={2}
  onUploadSuccess={(url, publicId) => {
    // Save to your database
    updateUserProfile({ avatar: url });
  }}
/>
```

### Display Optimized Image

```tsx
<CloudinaryImage
  publicId="your-image-id"
  alt="My Image"
  width={800}
  height={600}
  quality="auto"
/>
```

### Image Gallery

```tsx
{
  images.map((img) => (
    <CloudinaryImage
      key={img.id}
      publicId={img.publicId}
      alt={img.title}
      width={400}
      height={300}
      crop="fill"
    />
  ));
}
```

---

**Need help?** Check the [full documentation](./CLOUDINARY_SETUP.md) or visit [Cloudinary Docs](https://cloudinary.com/documentation).
