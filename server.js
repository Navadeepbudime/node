const http=require('http')
const fs=require('fs')
const _=require('lodash')

const server = http.createServer((req,res)=>{
    const num=_.random(0,20)
    console.log(num)
    const greet=_.once(()=>{
        console.log('hello')
    })
    greet()
    greet()
    res.setHeader('Content-Type','text/html')
    let path="./views/"
    switch(req.url){
        case '/':
            path+='intro.html'
            res.statusCode=200
            break
        case '/about':
            path+='about.html'
            res.statusCode=200
            break
        case '/about-blah':
            res.statusCode=301
            res.setHeader('Location','/about')
            res.end()
            break
        default:
            path+='404err.html'
            res.statusCode=404
            break
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{ 
            res.write(data)
            res.end()
        }
    })
})
server.listen(9000,'localhost',()=>{
    console.log('listening for request on port 9000')
})

