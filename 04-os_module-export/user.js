//ez nincs benne az exportban, így úgy viselkedik, mintha privát lenne, tehát kívülről nem lesz elérhető
const saySomething = 'Something';

const func = (x) => x * x;

//csak azokat az adatokat exportáljuk, amiket kívülről is el akarunk érni
//objektumra való hivatkozás a module.exports
module.exports = {
    age: 30,
    fullName: 'Gál Gergely',
    userDatas: function () {
        return `A ${this.fullName} nevű user ${this.age} éves, ${saySomething}`;
    },
    //nem magát a constanst fogom változtatni, hanem létrehozok egy propertit, aminek értékül adom a saySomethinget
    say: saySomething,
    //nem hívjuk meg a függvényt csak átadjuk a propertynek, ezért nem kell()
    me: func
};