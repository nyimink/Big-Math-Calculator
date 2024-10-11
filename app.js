// var one = document.querySelector("#one");
// var two = document.querySelector("#two");
// var three = document.querySelector("#three");
// var four = document.querySelector("#four");
// var five = document.querySelector("#five");
// var six = document.querySelector("#six");
// var seven = document.querySelector("#seven");
// var eight = document.querySelector("#eight");
// var nine = document.querySelector("#nine");
// var zero = document.querySelector("#zero");
// var plus = document.querySelector("#plus");
// var subtract = document.querySelector("#subtract");
// var multiply = document.querySelector("#multiply");
// var divide = document.querySelector("#divide");

var screen1 = document.querySelector("#screen1");
var screen2 = document.querySelector("#screen2");

var buttons = document.querySelectorAll(".btn");
var clear = document.querySelector("#ac");
var del = document.querySelector("#del");
var equal = document.querySelector("#equal");

var ans = document.querySelector("#ans");
var lastAnswer = 0;

buttons.forEach(function(btn) 
{
    btn.addEventListener("click", function()
    {
        var value = btn.textContent;
        
        if(btn.id !== "del" && btn.id !== "equal" && btn.id !== "ans")
            screen1.textContent += value;
    })
})

clear.addEventListener("click", () => {
    screen1.textContent = "";
    screen2.textContent = "";
})

del.addEventListener("click", () => {
    screen1.innerHTML = screen1.innerHTML.slice(0, -1)
})

equal.addEventListener("click", () => {
    try {
        screen2.textContent = "";
        screen2.textContent = screen1.textContent + " =";

        let result = eval(screen1.textContent);
        screen1.textContent = result;

        lastAnswer = result;
        
    } catch (error) {
        screen1.textContent = "ERROR";
    }
})

ans.addEventListener("click", () => {
    screen1.textContent += lastAnswer;
})

var remainder = document.querySelector("#remainder");
var remainderText = document.querySelector("#remainderText");

remainder.addEventListener("mouseover", () => {
    remainderText.style.display = "block";
})