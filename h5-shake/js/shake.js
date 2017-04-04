;
(function ShakeIIFE() {
    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', shake, false);
    } else {
        alert('本设备不支持摇一摇功能');
    }
}())

var lastTime = 0;
var timeStamp = 0;
var x = y = z = lastX = lastY = lastZ = shakeCount = 0;
var shakeSpeed = 800;
var oCount = document.getElementById("count");

function shake(e) {
    // 获取设备加速度信息
    var acceleration = e.accelerationIncludingGravity;
    var nowTime = new Date().getTime();

    // 如果这次摇的时间距离上次摇的时间有一定间隔，才执行
    if (nowTime - lastTime > 100) {
        var diffTime = nowTime - lastTime;
        lastTime = nowTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000
        if (speed > shakeSpeed) {
            // 在一个60秒内的次数
            if (timeStamp === 0 || nowTime - timeStamp > 1000) {
                timeStamp = nowTime;
                shakeCount = 0;
                oCount.innerHTML = "现在是第 " + shakeCount + "次"
            } else {
                shakeCount += 1;
                oCount.innerHTML = "现在是第 " + shakeCount + "次"
            }
        }
        lastX = x;
        lastY = y;
        lastZ = z;
    }
}