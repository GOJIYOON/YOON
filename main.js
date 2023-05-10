//한글자씩 텍스트 출력 함수(준비단계)
let target = document.querySelector("#dynamic");
let stringArr = ["한계에 도전하는","한계에 도전하는",
"한계에 도전하는", "한계에 도전하는", "한계에 도전하는"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
let selectStringArr = selectString.split("");

function randomString(){
  let stringArr = ["한계에 도전하는","한계에 도전하는",
  "한계에 도전하는", "한계에 도전하는", "한계에 도전하는"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
  target.textContent = "";  
  dynamic(randomString());
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr){

    if (randomArr.length > 0) {
       target.textContent += randomArr.shift();
       setTimeout(function(){
        dynamic(randomArr);
       }, 80);    
    } else{
        setTimeout(resetTyping, 2000);
    }
}

dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);