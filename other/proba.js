function addOneTo(number, callback) {
    let result = number + 1;
    return new Promise((resolve, reject) => {
        resolve(result);
    });
}

addOneTo(5).then(function (res) { //res = resolve()-nak megadott paraméterrel => result
    return console.log(res);
});