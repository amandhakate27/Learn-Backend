const multer = require('multer');

// disk storage configuration
const storageForLocal = multer.diskStorage({
    destination(req, file, cb){
        cb(null, "uploads/")
    },
    filename(req, file, cb){
  // size, ratio, format yaha check kar sakte hai 
    cb(null, Date.now() + '-' + file.originalname)
    }   
})

// memory storage configuration
//  const storageForServer = multer.memoryStorage();



const upload = multer({storage : storageForLocal});
// const upload = multer({storage : storageForServer});

module.exports = upload; 