let  cloudinary=require('cloudinary').v2;
let  {CloudinaryStorage}=require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.cloudinary_Cloud_Name,
    api_key:process.env.cloudinary_Api_Key,
    api_secret:process.env.cloudinary_Secret
});
const storageForListingImage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'Airbnb_Clone_Listings_Images',
        allowedFormats:['png','jpg','jpeg'],
    }
});
const storageForProilePic=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'Airbnb_Clone_Profile_Images',
        allowedFormats:['png','jpg','jpeg'],
    }
});

module.exports={
    cloudinary,
    storageForListingImage,
    storageForProilePic
};