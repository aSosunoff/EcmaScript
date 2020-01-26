function FuncTest_1(a, b, callback = () => {}) {
    setTimeout(() => {
        let result = a + b;
        callback(result);
    }, 1000);
}

function FuncTest_2(resultFromFuncTest_1, b, callback = () => {}) {
    setTimeout(() => {
        let result = resultFromFuncTest_1 * b;
        callback(result);
    }, 1000);
}

// setTimeout(() => {
//     console.log('Test 1');
// }, 1000);

// Old way
// FuncTest_1(1, 2, (result_1) => {
//     FuncTest_2(result_1, 10, (result_2) => {
//         console.log(result_2);
//     });
// });

// New way
const getPromise = (callback) => {
    return new Promise((resolve, reject) => {
        if(typeof callback != "function")
            resolve();
        else
            callback(resolve, reject);
    });
};

getPromise()
    .then(() => {
        return getPromise((resolve, reject) => {
            FuncTest_1(1, 2, resolve);
        });
    })
    .then(result_1 => {
        return getPromise((resolve, reject) => {
            FuncTest_2(result_1, 10, resolve);
        })
    })
    .then(result_2 => {
        console.log(result_2);
    });

// or New way


async function run(callback) {
    let result_1 = await getPromise((resolve, reject) => {
        FuncTest_1(1, 2, resolve);
    });

    let result_2 = await getPromise((resolve, reject) => {
        FuncTest_2(result_1, 10, resolve);
    });

    callback(result_2);
}

run(result => console.log(result));