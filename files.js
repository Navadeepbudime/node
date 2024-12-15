//Reading of files
// const fs = require('fs')
// fs.readFile('./docs/blog.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })
// console.log("Last line")  // it takes time to import files from txt file in meanwhile it will run next statement.

// Writing of file
// const fs = require('fs')
// fs.writeFile('./docs/blog.txt', 'hello,World' ,()=>{
//     console.log("File is written")
// }) 
// fs.writeFile('./docs/blog1.txt', 'hello Navadeep' ,()=>{
//     console.log("File is written")
// }) 

//Directories
const fs = require('fs');
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Folder Created')
    })
}
else{
        fs.rmdir('./assets',(err)=>{
            if(err){
                console.log(err)
            }
            console.log("Folder deleted")
        })
    }
// Deleting Files
if(fs.existsSync('./docs')){
    fs.unlink('./docs/delete.txt',err=>{
        if(err){
            console.log(err)
        }
        console.log('deleted file')
    })
}

