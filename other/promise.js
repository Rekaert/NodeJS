//egy aszinkron futást ölel körbe a promise
//4 állapota van
//paraméterei: resolve, reject: v. egyik v. másik fut le, mind a kettő nem lehet
/*
//megköveteli a .then() metódust
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Message");
    }, 3000);
});

myPromise.then(data => {
    console.log(data);
});
*/

//meghívhatom a rejectet v. a resolve-t is
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Message");
    }, 3000);
});

myPromise
    .then(data => {
        console.log('Writedata');
    })

    .then(data => {
        console.log('Data:' + data);
    })

    .catch(err => {
        console.log('Err:' + err);
    })


function addOneTo(number, callback) {
    let result = number + 1;
    return new Promise((resolve, reject) => {
        resolve(result);
    });
}


//5 + 1
//így nem működik
addOneTo(5, res => {
    console.log(res);
});
//csak így:
addOneTo(5).then(res => { //res = resolve()-nak megadott paraméterrel => result
    console.log(res);
});

//5 + 1 + 1 + 1 + 1 + 1

addOneTo(5)
    .then(res1 => addOneTo(res1))
    .then(res2 => addOneTo(res2))
    .then(res3 => addOneTo(res3))
    .then(res4 => addOneTo(res4))
    .then(res5 => {
        console.log(res5);
    });