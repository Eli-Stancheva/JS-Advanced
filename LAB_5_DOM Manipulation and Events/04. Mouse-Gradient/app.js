function attachGradientEvents() {
    const line = document.getElementById('gradient');
    line.addEventListener('mousemove', onMouseMove);
    const result = document.getElementById('result');

    function onMouseMove(event) {
        const persent = Math.floor(event.offsetX / line.clientWidth * 100);
        result.textContent = persent + '%';
    }
}