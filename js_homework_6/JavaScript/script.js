function filterBy(array, type) {
   return array.filter(a => typeof a !== type);
}

let arr = [1, 2, 'sd', '23', null, 3, 'ad'];

console.log(filterBy(arr, 'number'));