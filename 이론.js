
// ! 이론 정리
// ! 이론 정리

const array = [5, 6, 1, 2, 4, 3];

let i=1, j, tmp;

for(i; i<array.length; i++) {
    tmp = array[i];

    for(j=i; j >= 0 && tmp < array[j]; j--) {
        array[j+1] = array[j];
    }
    array[j+1] = tmp;
}

console.log(array);