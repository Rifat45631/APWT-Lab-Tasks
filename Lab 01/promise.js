let myPromise = new Promise((resolve, reject) => {
    let x=1;

    if(x==0){
        resolve();
    }else{
        reject();
    }
})

myPromise.then(
    function() {console.log("Done");
    },
    function () {
        console.log("Error");       
    }
)