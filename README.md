# FileStorageSystem
Use MongoDB's gridFsStorage to be able to upload large files of data. 
<ol>
    <li>Files are created to save the attriutes of files.</li>
    <li>Then chunks are used to seperate the data into pieces.</li>
</ol>
 
### Testing Progress
<ol>
    <li>Currently images and pdfs have been uploaded </li>
    <li>A pdf of 117 mb was uploaded but then crashed the server</li>
    - However the data was still saved into the database
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

