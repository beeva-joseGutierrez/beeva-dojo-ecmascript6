'use strict';

var Utils = require(__dirname+'/Utils');
// import * as Utils from __dirname+'/Utils';

class UtilsArr extends Utils{
    constructor(size) {
        super(size);
        this.arr = [];
    }

    getRandom(size) {
        size = size || this.long;
        if(size !== this.arr.length){
            this.arr.splice(0,this.arr.length);
            for(let i=0;i<size;i++) this.arr.push(i);
        }
        return this.shuffle(this.arr);
    }

    shuffle(array) {
        let currentIndex = array.length
                            , temporaryValue
                            , randomIndex 
                            ;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    findIndex(where,what) {
        return where.findIndex(x => x == what);
    }

    find (where,what){
        let index = this.findIndex(where,what);
        return (index !== -1)?where[index]:undefined;
    }

    objectIt(arr) {
        let obj = {
            arr : arr,
            classArray : this.arr, // y si ponemos this.arr ??
            list : ()=>{
                let res = {};
                // for(var i=0, len = this.arr.length;i<len;i++) res['item_'+i]=this.arr[i];
                // return res;
                let i = 0;
                arr.forEach((v) => {
                    res['item_'+i++]=v;
                })
                return res;
            },
            getItem : (i)=>{
                let it = {
                    value : arr[i],
                    index : i
                };
                it['item_'+i]=arr[i];
                return it;
            }
        };
        return obj;
    }
}

module.exports = UtilsArr;


// var Utils = require(__dirname+'/Utils');
// var UtilsArr = function(long){
//     var $this = this;
//     var arr = [];

//     this.getRandom = (size) => {
//         size = size || $this.long;
//         if(size !== arr.length){
//             arr.splice(0,arr.length);
//             for(var i=0;i<size;i++) arr.push(i);
//         }
//         return $this.shuffle(arr);
//     };

//     this.shuffle = (array) => {
//         var currentIndex = array.length, temporaryValue, randomIndex ;
//         // While there remain elements to shuffle...
//         while (0 !== currentIndex) {

//             // Pick a remaining element...
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex -= 1;

//             // And swap it with the current element.
//             temporaryValue = array[currentIndex];
//             array[currentIndex] = array[randomIndex];
//             array[randomIndex] = temporaryValue;
//         }

//         return array;
//     };

//     this.findIndex = (where,what) => 
//         // for(var i = 0;i<where.length;i++){
//         //     if(where[i] === what) return i;
//         // }
//         // return -1;
//         where.findIndex(x => x == what);
//     ;

//     this.find = (where,what) => {
//         var index = $this.findIndex(where,what);
//         return (index !== -1)?where[index]:undefined;
//     };

//     this.objectIt = (arr) => {
//         var obj = {
//             arr : arr,
//             classArray : $this.arr, // y si ponemos this.arr ??
//             list : ()=>{
//                 var res = {};
//                 // for(var i=0, len = this.arr.length;i<len;i++) res['item_'+i]=this.arr[i];
//                 // return res;
//                 var i = 0;
//                 arr.forEach((v) => {
//                     res['item_'+i++]=v;
//                 })
//                 return res;
//             },
//             getItem : (i)=>{
//                 var it = {
//                     value : arr[i],
//                     index : i
//                 };
//                 it['item_'+i]=arr[i];
//                 return it;
//             }
//         };
//         return obj;
//     };

//     this.init = (size) => {
//         if(size) $this.long = size;
//     };

//     this.init(long);

// };

// UtilsArr.prototype = new Utils();

// module.exports = UtilsArr;