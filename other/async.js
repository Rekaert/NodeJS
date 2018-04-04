function addOneTo(number) {
    let result = number + 1;
    return new Promise((resolve, reject) => {
        resolve(result);
    });
}

async function main() {
    let res1 = await addOneTo(5);
    res1 = await addOneTo(res1);
    res1 = await addOneTo(res1);
    res1 = await addOneTo(res1);

    console.log(res1);
}

main();