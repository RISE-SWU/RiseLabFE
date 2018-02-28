/*
* 用于缓存的字符串 <-> 对象的转化方法
* [obj1,obj2,obj3] <-> str1,str2,str3
* */

export const convert = {
    toString: function (arr) {
    const arrStr = arr.map(item => {
            return JSON.stringify(item);
        })
        return arrStr.join('^_^');
    },
    toObj: function (str) {
        return str.split('^_^').map(item => {
            return JSON.parse(item)
        })
    }
}

/*
* 修改网页标题的方法
* */

export function setTitle(str) {
    //修改传入字符串的首字母为大写
    const modify = str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    document.title = modify;
}