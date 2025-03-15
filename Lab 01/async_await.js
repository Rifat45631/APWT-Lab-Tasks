function fetchUserData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "John Doe",
                email: "johndoe@example.com"
            });        
        }, 1000);
    })
}

async function getUser() {
    console.log("Fetching Data");
    
    let user = await fetchUserData();
    console.log("User info: ", user);
    
    console.log("processing Data");
    
}

getUser();