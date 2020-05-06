module.exports = {
    chunk(array, size) {
        if (size > array.length) {
            return [array.slice(0)]
        } else {
            return [array.slice(0, size), array.slice(size)]
        }
    },
    compact(array) {
        let newArr = []
        array.forEach(ele => {
            if (ele) {
                newArr.push(ele);
            }
        });
        return newArr;
    },
    concat(array, ...args) {
        let newArr = [];
        this.__arrayFunc(array, newArr);
        for (var i = 0; i < args.length; i++) {
            newArr.push(args[i]);
        }
        return newArr;
    },
    difference(array, ...args) {
        let newArr = [];
        this.__arrayFunc(array, newArr);
        for (let i = 0; i < args.length; i++) {
            newArr = newArr.filter(ele => !this.__has(args[i], ele));
        }
        return newArr;
    },
    differenceBy() {
        // 
    },
    differenceWith() {
        // 
    },
    drop(array, n) {
        if (n) {
            return array.slice(n);
        }
        return array;
    },
    dropRight (array,n) {
        if (n) {
            if(n >= array.length){
                return array.slice(n);
            }else{
                if(n == 1){
                    return array.slice(0,array.length - 1);
                }else{
                    return array.slice(0 , array.length - n);
                }
            }
        }else if (n == 0){
            return array.slice(0);
        }else{
            return array.slice(0 , array.length - 1)
        }
    },
    dropRightWhile(array,dataList){
      
        if(dataList){
            let newArr = [];
            if(typeof dataList == 'string'){
                // string
                array.forEach( ele => { if (dataList in ele) newArr.push(ele) } )
                return newArr;
            }else{
                if(typeof dataList == 'object'){
                    if(dataList instanceof Array){
                        // [] 内置递归函数使用
                        function _arAy (arr,data) {
                            for(var i = 0; i < arr.length; i++){
                                if(data[0] in arr[i]){
                                    if( data[1] == arr[i][data[0]] ) {
                                        let num = arr.indexOf(arr[i])
                                        arr.splice(num,num);
                                        _arAy(arr,data);
                                    }
                                }
                            }
                        }
                        _arAy(array,dataList)
                        return array;
                    }
                    if(dataList instanceof Object){
                        array.forEach( (ele,index) => {
                            let newObj = Object.keys(ele);
                            let dataObj = Object.keys(dataList);
                            if(newObj[index] == dataObj[index]){
                                if(ele[newObj[index - 1]] != undefined &&  dataList[dataObj[index - 1]] != undefined && ele[newObj[index - 1]] == dataList[dataObj[index - 1]] ){
                                    if(ele[newObj[index - 2]] != undefined &&  dataList[dataObj[index - 2]] != undefined && ele[newObj[index - 2]] == dataList[dataObj[index - 2]]){
                                        let num = array.indexOf(ele);
                                        array.splice(num,1);
                                    }
                                }
                            }
                        })
                        return array
                    }
                }else{
                     function __built(func) {
                        newArr = array.filter(ele => {
                            return !func(ele)
                        })
                        return newArr;
                    }
                    let result = __built(dataList);
                    return result;
                }
            }
        }else{
            return array
        }
    },
    fill (array,value,start,end) {
        let newArr = [];
        this.__arrayFunc(array,newArr);
        let len = newArr.length;
        if(!start){
            for(let i = 0; i < len; i++){ newArr.splice(i ,1 ,value); }
        }else if(start && !end){
            for(let i = start; i < len; i++){ newArr.splice(i, 1, value) }
        }else{
            for(let i = start; i < end; i++){ newArr.splice(i,1,value) }
        }
        return newArr;
    },
    findIndex (array,predicate,from) {
        if( !array ) return -1;
        if(!from){
            // Array|Function|Object|string
            let _this = this;
            function _noneFrom (arr,condition) {
                let len = arr.length;
                if(typeof condition == 'string'){
                    for(let i = 0; i < len;i++){
                        if (condition in arr[i]){ return array.indexOf(arr[i]); }
                    }
                }else if(typeof condition == 'object'){
                    // 获取属性名相同的对象
                    if(Object.prototype.toString.call(condition) == '[object Object]'){
                        let newArr = [];
                        _this.__arrayFunc(array,newArr);
                        let conObj = Object.keys(condition);
                        let arayArr = [];
                        function __objDi (arrs) {
                            if(arrs == []) return arayArr;
                            for(let i = 0; i < arrs.length; i++){
                                let newObj = Object.keys(arrs[i]);
                                for(let j = 0; j < newObj.length; j++){
                                    if(newObj[j] == conObj[j]){
                                        arayArr.push(arrs[j]);
                                        let num = arrs.indexOf(arrs[j])
                                        arrs.splice(0,1);
                                        return __objDi(arrs)
                                    }else{
                                        let num = arrs.indexOf(arrs[j])
                                        arrs.splice(0,1);
                                        return __objDi(arrs);
                                    }
                                }
                            } 
                        }
                         __objDi(newArr);
                        let finArr = [];
                        let flag = 0;
                        let bProps = Object.getOwnPropertyNames(condition);
                        function __attrSame (arrs,next) {
                            if(arrs == []) return null;
                            let aProps = Object.getOwnPropertyNames(arrs[next]);
                            if (aProps.length != bProps.length) {
                                return false;
                            }
                            for(let i = 0; i < aProps.length; i++){
                                let propName = aProps[i];
                                if(arrs[flag][propName] !== condition[propName]){
                                    let num = arrs.indexOf(arrs[flag]);
                                    arrs.splice(num,1);
                                    return __attrSame(arrs,next);
                                }
                            }
                            finalArr = arrs[next]
                            return finalArr;
                        }
                        __attrSame(arayArr,0);
                        return finalArr;
                    }

                    if(Object.prototype.toString.call(condition) == '[object Array]'){
                        // 数组
                        let len = array.length;
                        function _arAy (arr,data,flag) {
                            if(flag == len) return null;
                            for(var i = flag; i < len; i++){
                                if(data[0] in arr[i]){
                                    if( data[1] == arr[i][data[0]] ) {
                                            let num = arr.indexOf(arr[i])
                                            return num;
                                    }else{
                                        return _arAy(arr,data,flag + 1)
                                    }
                                }
                            }
                        }
                        let indexNew = _arAy(array,condition,0)
                        return indexNew;
                    }
                }else{
                    let len = array.length;
                    function __findIndex (func) {
                        for(let i = 0; i < len; i++){
                            let _result = func(array[i]);
                            if(_result){
                                return array.indexOf( array[i] )
                            }
                        }
                        return -1;
                    }

                    return  __findIndex(predicate)
                }
            }
            let indexNum = _noneFrom(array,predicate)
            return indexNum;
        }else{
            // 
        }

    },
    findLastIndex(){},
    head(array){
        if(!array || typeof array != 'object' || Object.prototype.toString.call(array) != '[object Array]') return new Error("请传递正确参数");
        return array[0]; 
    },
    flatten(array) {
        let newArr = [];
        for(let i = 0; i < array.length; i++){
            if(Object.prototype.toString.call( array[i] ) == '[object Array]'){
                for(let j = 0; j < array[i].length; j++){
                    newArr.push(array[i][j]);
                }
            }else{
                newArr.push(array[i]);
            }
        }
        return newArr;
    },
    flattenDeep(array){
       return array.flat( Infinity );
    },
    flattenDepth(array,value){
        if(!value || typeof value != 'number') return this.__errorMessage("value 传递正确参数");
        return array.flat( value );
    },
    fromPairs(pairs) {
        this.__judgeIsArray(pairs);
        let obj = {};
        for(let i = 0; i < pairs.length; i++){
            if( this.__judgeIsArray(pairs[i]) ){
                if(pairs[i].length != 2) return this.__errorMessage("Please pass in a binary array");
                obj[pairs[i][0]] = pairs[i][1];
            };
        }
        return obj;
    },
    indexOf(array,value,fromIndex) {
        if(!this.__judgeIsArray) return this.__errorMessage("Please pass in the array")
        return array.indexOf(value,fromIndex);
    },
    initial(array){
        return  array.pop() ? array : array;
    },
    intersection(...args){
        let newArr = this.__getSet(args);
        let _this = this; 
        function __sortList(arr,flag,aray) {
            if(flag + 1 == arr.length){
                if(arr.length == 1){
                    return arr;
                }else{
                    return __sortList(aray,0,[]);
                }
            } 
            if(Object.prototype.toString.call( arr[flag + 1] )  != '[object Set]' ){
                arr = _this.__getSet(arr)
            }
            let newSet = [...arr[flag]].filter(ele => {
                return arr[flag + 1].has(ele)
            })
            aray.push(newSet);
            return __sortList(arr,flag + 1,aray);
        }
        return this.flattenDeep( __sortList(newArr,0,[]) );
    },
    intersectionBy(){},
    intersectionWith(){
        // 深度克隆后完成
    },
    join(array,typeList){
        return array.join(typeList);
    },
    last(array){
        return array[array.length - 1];
    },
    lastIndexOf(array,search,fromindex){
        let i;
        if(fromindex){ i = array.length - fromindex;}
        else{ i = array.length - 1;}
        for(i; i > 0; i--){
                if(array[i] == search){
                    return i
                }
            }
        return -1;
    },
    nth(array,index){
        if(index > 0){
            return array[index];
        }else{
            return array[array.length + index];
        }
    },
    pull(array,...args){
        let len = args.length;
        for(let i = 0; i < len;i++){
            for(let j = 0; j < array.length; j++){
                if(array[j] == args[i]){
                    array.splice(j,1);
                }
            }
        }
        return array;
    },
    pullAll(array,transplant){
        return this.pull(array,...transplant);
    },
    pullAllBy(array,value,condition){
        function _pullAllBy (arr,val,con) {
            if(!arr) return arr;
            for(let i = 0; i < arr.length; i++){
                for(let j = 0; j < val.length; j++){
                    if(arr[i][con] == val[j][con]){
                        arr.splice(i,1);
                        return _pullAllBy(arr,val,con)
                    }
                }
            }
            return arr;
        }
        return _pullAllBy(array,value,condition)
    },
    pullAllWith(){},
    pullAt(array,...args){
       for(let i = 0; i < args.length;i++){
            array.splice(args[i] - i,1);
       }
       return array;
    },
    remove(array,func) {
        let newArr = [];
        for(let i = 0; i < array.length; i++){
            if( func(array[i]) ) {
                newArr.push(array[i]);
                array.splice(i,1);
            }
        }
        return newArr;
    },
    reverse(array) {
        return array.reverse();
    },
    slice(array,start,end){
        if(start >= end) return array;
        return array.slice(start,end);
    },
    
    __arrayFunc(origin, target) {
        if (typeof origin != 'object' || typeof target != 'object') return null;
        for (var i = 0; i < origin.length; i++) {
            target.push(origin[i]);
        }
    },
    __has(array, target) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == target) {
                return true;
            }
        }
        // 不适用forEach，因为return不能终止forEach循环
        return false;
    },
    _addIteratorObj (array) {
        let newArr = {
            ...array,
            length:2,
            [Symbol.iterator] : function () {
                let current = 0;
                let next = () => {
                    return {
                        value: this[current],
                        done:this.length == ++current
                    }
                }
                return {
                    next
                }
            }
        }
        return newArr;
    },
    __judgeIsArray(arr){
        if(Object.prototype.toString.call(arr) != '[object Array]') return new Error("Please pass array from");
        return true;
    },
    __errorMessage(value){
        new Error(value);
    },
    __getSet(array){
        let newArr = [];
        for(let i = 0; i < array.length; i++){
            newArr.push(new Set(array[i]));
        }
        return newArr;
    }
}