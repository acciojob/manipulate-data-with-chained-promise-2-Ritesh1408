let output = document.getElementById("output");
let arr = [1, 2, 3, 4];

const myPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    });
};

myPromise()
    .then((data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let filteredArr = data.filter((item) => item % 2 === 0);
                output.textContent = filteredArr.join(", "); 
                resolve(filteredArr);
            }, 1000);
        });
    })
    .then((filteredArr) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let multipliedArr = filteredArr.map((item) => item * 2);
                output.textContent = multipliedArr.join(", "); 
                resolve(multipliedArr);
            }, 2000);
        });
    });
