/**
 * Author: laulimxiao (Modified)
 */

const offsetX = $("#loveHeart").width() / 2;
const offsetY = $("#loveHeart").height() / 2 - 55;
// Set the date
const together = new Date();
together.setFullYear(2023, 6, 26); // Month is 0-based (6 = July)
together.setHours(20);
together.setMinutes(0);
together.setSeconds(0);
together.setMilliseconds(0);

$('#startDate').text('*' + formatDate(together) + ','); // Display the start date
$('#untilDate').text('*' + formatDate(new Date()) + '.'); // Display today's date

if (!document.createElement('canvas').getContext) {
    const msg = document.createElement("div");
    msg.id = "errorMsg";
    msg.innerHTML = "您的浏览器不支持 HTML5!<br/>推荐使用 Chrome 14+/IE 9+/Firefox 7+/Safari 4+ 等高版本的主流浏览器";
    document.body.appendChild(msg);
    $("#code").css("display", "none");
    $("#copyright").css("position", "absolute");
    $("#copyright").css("bottom", "10px");
    document.execCommand("stop");
} else {
    // Start the heart animation
    setTimeout(function () {
        startHeartAnimation();
    }, 110000); // Adjust timing if necessary

    // Calculate the elapsed time
    timeElapse(together);
    setInterval(function () {
        timeElapse(together);
    }, 500);

    // Adjust the code position and start typing effect
    adjustCodePosition();
    $("#code").typewriter();

    // Stop typing sound effect after 90 seconds
    setInterval(musicPaused(), 90000);

    // Image carousel animation
    photoAnimation();

    // Display the calligraphy-styled name after heart animation ends
    setTimeout(function () {
        const calligraphyName = document.getElementById('calligraphyName');
        calligraphyName.innerHTML = "Sushma"; // Set the name
        calligraphyName.style.display = "block"; // Make it visible
    }, 112000); // Display after 2 seconds post-heart animation
}

// Background music
const bgMusic = document.getElementById('bgMusic');

// Stop the audio once it ends
bgMusic.addEventListener('ended', function () {
    bgMusic.pause();
    bgMusic.currentTime = 0;
    bgMusic.removeEventListener('ended', arguments.callee);
});
