/* 영역 변수 */
var min = document.getElementsByTagName('span')[0];
var sec = document.getElementsByTagName('span')[1];
var cs = document.getElementsByTagName('span')[2];
var btnBox = document.getElementById('btnBox');

/* 버튼 변수 */
var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');
var resetBtn = document.getElementById('resetBtn');

/* 시간 변수 */
var minVal = 0; secVal = 0; csVal = 0;

/* 분 카운트 함수 */
function minCount() {
    minVal++;
    if (minVal < 10) {
        minStr = '0' + String(minVal);
    } else if (minVal < 100) {
        minStr = String(minVal);
    } else { // 100분부터 초기화 후 카운트
        minVal = 0;
        minStr = '00';
    }
    min.innerHTML = minStr;
}

/* 초 카운트 함수 */
function secCount() {
    secVal++;
    if (secVal < 10) {
        secStr = '0' + String(secVal);
    } else if (secVal < 60) {
        secStr = String(secVal);
    } else { // 60초마다 분 카운트 실행
        secVal = 0;
        secStr = '00';
        minCount();
    }
    sec.innerHTML = secStr;
}

/* 센티초 카운트 함수 */
function csCount() {
    csVal++;
    if (csVal < 10) {
        csStr = '0' + String(csVal);
    } else if (csVal < 100) {
        csStr = String(csVal);
    } else { // 100센티초마다 초 카운트 실행
        csVal = 0;
        csStr = '00';
        secCount();
    }
    cs.innerHTML = csStr;
}

/* 시작 버튼 함수 */
function Start() {
    startBtn.style.display = 'none';
    btnBox.style.display = 'block';
    count = setInterval(csCount, 10);
}

/* 중지&계속 버튼 함수 */
function Stop() {
    // 중지 버튼
    if (stopBtn.value == '중지') {
        clearInterval(count);
        stopBtn.value = '계속';
    }
    // 계속 버튼
    else {
        count = setInterval(csCount, 10);
        stopBtn.value = '중지';
    }
}

/* 초기화 버튼 함수 */
function Reset() {
    stopBtn.value = '중지';
    btnBox.style.display = 'none';
    startBtn.style.display = 'block';
    // 카운트 함수 일시중지
    clearInterval(count);
    // 변수 초기화
    minVal = 0; secVal = 0; csVal = 0;
    min.innerHTML = '00';
    sec.innerHTML = '00';
    cs.innerHTML = '00';
}

/* 버튼 클릭시 함수 이벤트 발생 */
startBtn.addEventListener('click', function() {Start()});
stopBtn.addEventListener('click', function() {Stop()});
resetBtn.addEventListener('click', function() {Reset()});