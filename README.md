# FileStorageSystem
Use MongoDB's gridFsStorage to be able to upload large files of data. Files are created to save the attriutes of files. Then chunks are used to seperate the data into pieces.

Currently images and pdfs have been uploaded <br>
A pdf of 117 mb was uploaded but then crashed the server <br>

Next Step: rendering them, to see if the 117 mb was saved

### Resources
#GridFsStorage: Uploading Files to MongoDB <br>
- https://www.npmjs.com/package/multer-gridfs-storage
- learn about chunks and files

#GridFsStream: 
- Uses monogDb v2 drivers
- Makes it easier to use streams
- 