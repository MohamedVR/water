function CheckOrientation() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

        if (orientation === "portrait-primary" || orientation === "portrait-secondary") {
            unityInstance.SendMessage('WebGLHandler', 'OnPortrait');
        } else if (orientation === "landscape-primary" || orientation === "landscape-secondary") {
            unityInstance.SendMessage('WebGLHandler', 'OnLandscape');
        }
    } else {
        // Full screen for PC
        document.addEventListener('click', function() {
            unityInstance.SetFullscreen(1);
        });
    }
}

// Call CheckOrientation on load
window.onload = function() {
    CheckOrientation();
};

// Call CheckOrientation on orientation change
window.addEventListener("orientationchange", function() {
    CheckOrientation();
});