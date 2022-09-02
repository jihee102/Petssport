import { v2 } from 'cloudinary';

const cloudinaryConfig = {
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
};

export const cloudinary = v2.config(cloudinaryConfig);
