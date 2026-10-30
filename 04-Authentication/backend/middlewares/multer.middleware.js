import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (res, file, cb) => {
    console.log(file)
    cb(null, file.originalname);
  },
});


export const multerUpload = multer({storage})