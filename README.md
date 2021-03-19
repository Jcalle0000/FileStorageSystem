# FileStorageSystem
Use MongoDB's gridFsStorage to be able to upload large files of data. 
<ol>
    <li>Files are created to save the attriutes of files.</li>
    <li>Then chunks are used to seperate the data into pieces.</li>
</ol>
 
### Testing Progress
<ol>
    <li>Currently images and pdfs have been uploaded </li>
    <li>A pdf of 150 mb was uploaded successfully</li>
    <li>GridFS Buckets is what were trying to implement now</li>
</ol>

### Rendering
<ol>
    <li>Rendering </li>
     - CreateReadStream <br>
     - ReadSream.pipe
     <li>Using Adobe's embeded api  </li>
</ol>

### Resources
<ol>
    <li>Storing Larges Objects and Files in MongoDB</li>
    - https://developer.mongodb.com/how-to/storing-large-objects-and-files/ 
    <li>GridFsStorage Library</li>
    - https://www.npmjs.com/package/multer-gridfs-storage <br>
    - learn about chunks and files <br>

</ol>

### Pros
<ol>
    <li>Seperates files attributes from the data</li>
</ol>

### Cons
<ol>
    <li>Currently Researching<li>
<ol>

GridStore is Depreciated --> GridFsBucket <br>

- https://mongodb.github.io/node-mongodb-native/3.2/api/GridFSBucket.html

<br>

Bugs Mongo needs to fix:
<ol>
    <li> DeprecationWarning: Listening to events on the Db class has been deprecated and will be removed in the next major version. </li>
    - For using moogoose.connect() - line 20
</ol>