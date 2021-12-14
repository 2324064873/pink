var array = [1, 4, 9, 16]
const map1 = array.map(x => {
    if (x % 2 == 0) {
        return x;
    }
})
console.log(map1);