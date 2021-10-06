import multer from "multer";

export const textUpload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 3000000,
  },
});
