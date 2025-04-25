const f=require("fs")
f.writeFile('exp.txt',"my name is shihab",(a)=>{
    if(a)
    {
        console.error("error writing file",a);
        return
    }
    console.log("file writing succesfull");
    
    f.readFile('exp.txt','utf-8',(a,data)=>{
        if(a){
        console.error("abdcdkfakjfdka",a)
        }
        console.log(data);

    })
    
})