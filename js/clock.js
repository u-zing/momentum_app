const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); //호출하는 당시의 현재 날짜랑 시간을 알려준다.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //웹사이트가 로드되자마자 함수를 실행하고
setInterval(getClock, 1000); //매초마다 실행
