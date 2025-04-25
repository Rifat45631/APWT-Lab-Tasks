const htp= require("http")
let server=htp.createServer((request,response)=>{
    console.log("request received",request.url);
    
    response.write("hello my name is shihab shovon")
    response.end()
})

server.listen(3000,()=>{
    console.log("server creation completed");
})

