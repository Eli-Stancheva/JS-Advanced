function solve(area, vol, input) {
    const obj = JSON.parse(input);

    function calculate(obj) {
        let areaOfObj = Math.abs(area.call(obj));
        let volumeOfObj = Math.abs(vol.call(obj));
        return {
            area: areaOfObj,
            volume: volumeOfObj
        }
    }
    return obj.map(calculate);
}

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
));
