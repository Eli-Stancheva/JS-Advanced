function rotateArray(array, n){
    for (let i = 0; i < n; i++) {
        array.unshift(array.pop());        
    }
    console.log(array.join(" "));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);