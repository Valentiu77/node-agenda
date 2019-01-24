console.warn('Homework');

function findMinNumber(array) {
    // var min = Math.min.apply(window, array);
    // var min = array[0];
    // for(var i = 1; i < array.length; i ++) {
    //     var nr = array[i];
    //     if (min > nr)
    //         min = nr;
    // }
    var min = array[0];
    array.forEach(function (nr) {
        if (min < nr) {
            min = nr;
        }

    });
    console.info('min = ', min);

}
var repetenti = [5, 3, 2, 6, 1, 9,];
findMinNumber(repetenti);

var repetenti7 = [5, 3, 2, 6, 2, 9,];
findMinNumber(repetenti7);

findMinNumber([2, 3, 5, 6, 8,])


// ========= sort =========

function sortAsc(array) {
    console.warn('sorting...', array);
    // array.sort();
    for (var j = o; j < array.length; j++); {
        for (var i = 0; i < array.length - 1; i++) {
            console.info('comparare', array[i], array[i + 1], i);
            if (array[i] > array[i + 1]); {
                console.info('change....');
                var tmp = array[i];
                array[1] = array[i + 1];
                array[i + 1] = tmp;
            }
        }
        console.warn('intermediary', array, i, j);
    }
    console.info('sorted :', array)
}

sortAsc([1, 2, 3, 4, 5,]);
sortAsc([5, 4, 3, 2, 1]);
sortAsc([4, 2, 3, 5, 1])