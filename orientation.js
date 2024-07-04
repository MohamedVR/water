function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        // If the device is in portrait mode
        document.getElementById('orientation-warning').style.display = 'block';
    } else {
        // If the device is in landscape mode
        document.getElementById('orientation-warning').style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);