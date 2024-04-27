let startX;
let isMultiTouch = false;

window.addEventListener('touchstart', function(event) {
    if (event.touches.length === 1) {
        startX = event.touches[0].pageX;
    } else if (event.touches.length > 1) {
        // Có nhiều hơn một điểm chạm, đánh dấu này để ngăn chặn cử chỉ zoom
        isMultiTouch = true;
    }
}, { passive: false });

window.addEventListener('touchmove', function(event) {
    if (isMultiTouch) {
        // Ngăn chặn mọi loại di chuyển khi có nhiều hơn một điểm chạm
        event.preventDefault();
    } else if (startX !== null) {
        // Ngăn chặn cuộn ngang
        let moveX = event.touches[0].pageX - startX;
        if (Math.abs(moveX) > 10) { // 10px là ngưỡng để phát hiện di chuyển ngang
            event.preventDefault();
        }
    }
}, { passive: false });

window.addEventListener('touchend', function(event) {
    // Reset lại các biến khi kết thúc chạm
    startX = null;
    isMultiTouch = false;
}, { passive: false });
