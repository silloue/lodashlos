var _ = require('lodash');


// console.log( _.chunk(['a', 'b', 'c', 'd'], 8) );

// console.log( _.compact([0, 1, false, 2, '', 3]) );

// console.log( _.concat( [1], 2, [3], [[4]]) );

// console.log( _.difference( 1, [3]) ); 

// _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);     -------------------

// _.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual); ------------------

// console.log(_.drop([1,2,3],1))

// console.log(_.dropRight([1, 2, 3]));

// var users = [
//     { 'user': 'barney',  'active': true },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': false }
// ];

// console.log ( _.dropRightWhile(users, function(o) { return !o.active; }) );  ------------bug

// var array = [1, 2, 3,7,5];
// console.log( _.fill(array, 'c' , 2) );


// var users = [
//     { 'user': 'barney',  'active': false },
//     { 'user': 'fred',    'active': false },
//     { 'user': 'pebbles', 'active': true }
// ];

// console.log( _.findIndex(users, function(o) { return o.user == 'barney'; }) );    ---- 部分未完成

// console.log( _.findLastIndex(users, function(o) { return o.user == 'pebbles'; }) ); //------待完善

// console.log( _.head([1, 2, 3]) );

// console.log( _.flatten([1, [2, [3, [4]], 5],4]) );

// console.log( _.flattenDeep([1, [2, [3, [4]], 5]]) );

// console.log( _.flattenDepth([1, [2, [3, [4]], 5]], 2))

// console.log( _.fromPairs( [['fred', 30], ['barney', 40]] ) );

// console.log( _.indexOf([1, 2, 1, 2], 2) );

// console.log( _.initial([1, 2, 3]) );

// console.log( _.intersection([2, 1], [4, 2], [1, 2]) ); 

// _.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);   -------------部分未完成


// var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
// var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
// _.intersectionWith(objects, others, _.isEqual);   -------------部分未完成
 

// console.log( _.join(['a', 'b', 'c'], '~') );

// console.log( _.last([1, 2, 3]) );

// console.log( _.lastIndexOf([1, 2, 1, 2], 2, 2) ); 

// var array = ['a', 'b', 'c', 'd'];
 
// console.log( _.nth(array, 1) );

// var array = [1, 2, 3, 1, 2, 3];
 
// _.pull(array, 2, 3);
// console.log(array);


// var array = [1, 2, 3, 1, 2, 3];
 
// _.pullAll(array, [2, 3]);
// console.log(array);

// var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
// _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
// console.log(array);

// var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
// _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
// console.log(array);

// var array = [5, 10, 15, 20];
// var evens = _.pullAt(array, 1, 3);
 
// console.log(array);

// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) {
//   return n % 2 == 0;
// });

// console.log(array);

// console.log(evens);


var array = [1, 2, 3];
 
console.log( _.reverse(array) );