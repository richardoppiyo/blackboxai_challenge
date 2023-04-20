//  Make sure your environment can run nodejs. Use npm install and follow prompts to set up th node project
//  Install the libraries needed
//  Require the archiver and fs modules.
//  Create a write stream, create a new instance of archiver with the zip format
//  Pipe the archive to the output file using the pipe method.
//  Add files to the archive using the file and directory methods. 


const archiver = require('archiver');
const fs = require('fs');

// write stream 
const output = fs.createWriteStream('ex.zip');

// archiver instance creted
const archive = archiver('zip', {
  zlib: { level: 9 } // set compression level to max
});

// pipe the archive to the output file
archive.pipe(output);

// add files to the archive
archive.file('file1.txt', { name: 'file1.txt' });
archive.file('file2.txt', { name: 'file2.txt' });
archive.directory('dir1', 'dir1');

archive.finalize();
