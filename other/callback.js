//callback function
function addOneTo(number, callback) {
    let result = number + 1;
    if (callback) {
        callback(result);
    }
}

//5 + 1
addOneTo(5, function (res) {
    console.log(res);
});

//5 + 1 + 1 + 1 + 1 + 1
addOneTo(5, res1 => {
    addOneTo(res1, res2 => {
        addOneTo(res2, res3 => {
            addOneTo(res3, res4 => {
                addOneTo(res4, res5 => {
                    console.log(res5);
                });
            });
        });
    });
})