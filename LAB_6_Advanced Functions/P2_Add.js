function solution(num) {
    function newFunc(n) {
        return n + num;
    }
    return newFunc;
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));

