class ImageUploader {
  async upload(file) {
    const data = new FormData();
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`;
    data.append('file', file);
    data.append(
      'upload_preset',
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );

    const res = await fetch(url, { method: 'POST', body: data });
    return await res.json();
  }
}

export default ImageUploader;
