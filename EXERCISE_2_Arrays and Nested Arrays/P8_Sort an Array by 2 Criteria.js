function sortArray(array) {
    array.sort(sortByTwoCriteria);
    return array.join("\n");
    
    function sortByTwoCriteria(current, next){
        if(current.length === next.length){
            return current.localeCompare(next);
        }
        return current.length - next.length;
    }
}

console.log(sortArray(['alpha',
    'beta',
    'gamma']
))