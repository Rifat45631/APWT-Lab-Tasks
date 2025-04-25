function fetchData(callback) {
    setTimeout(() => {
        console.log("Hi");
        callback();
    },2500)
}

function output() {
    console.log("hello world!");
}

fetchData(output);