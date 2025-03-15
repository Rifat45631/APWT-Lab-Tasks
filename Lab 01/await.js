const ab = async() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello  world!");
        }, 2000);
    });
};

const Data = async () => {
    console.log("Hi");
    const output = await ab();
    console.log(output); 
}
Data()