import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadImageOnCloudinary = async (filePath) => {
  try {
    if (!filePath) {
      return null;
    }

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
    console.log("API Key:", process.env.CLOUDINARY_API_KEY);

    let result = await cloudinary.uploader.upload(filePath, {
      folder: "profiles",
    });

    console.log(result);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return result.secure_url;
  } catch (error) {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    console.log("Cloudinary Error:", error);
    return null;
  }
};

export default uploadImageOnCloudinary;
