/*Some Limitations as i am a begginer
1...How to use pi,sqaure root, square, inverse and factorial
===>first you need  to enter a number and then choose the operator you want to work with
===> You cannot use  operators (+,-,x,/,%)while using these features

2...You cannot use  two operators at a time
===> 2+4-3,2x4/4 ....not allowed
===> 2+4 then press "=" button then click "ans" button and you can perform further calculationc
2+4 = 6 then "ans" button => 6+next number => then press "=" =>output=result .... if you want further, repeat this
 */
const input = document.querySelector("#input")
const btns = document.querySelectorAll("button");
const output = document.querySelector("#output")

let strNumbers;
let number1;
let number2;

btns.forEach((btn) => {
    if(btn.className=="square"){
        btn.addEventListener("click",()=>{
            if(input.innerText.includes("-") ||  input.innerText.includes("+") ||input.innerText.includes("×") ||input.innerText.includes("÷") ||  input.innerText.includes("%") ){
                output.innerText="Bad Expression"
            }else{
                output.innerText=input.innerText**2
                localStorage.setItem("lastAnswer",output.innerText)
            }
        })
    }

    if (btn.innerText == "ans") {
        btn.addEventListener("click", () => {
            input.innerText=localStorage.getItem("lastAnswer")
            // output.innerText=localStorage.getItem("lastAnswer")
    
        })
    }

     if (btn.innerText == "pi") {
        btn.addEventListener("click", pi)
    }

    if (btn.innerText == "C") {
        btn.addEventListener("click", clear)
    }


    if (btn.className == "delete") {
        btn.addEventListener("click", () => {
            deleteInput = input.innerText
            input.innerText = deleteInput.substring(0, deleteInput.length - 1)
        })
    }

    if (btn.className == "numbers") {
        btn.addEventListener("click", () => {
            input.innerText += btn.innerText
        })
    }


    if (btn.className == "operator") {
        btn.addEventListener("click", () => {

            if (btn.innerText == "/") {
                input.innerText += "÷"
            }
            else {
                input.innerText += btn.innerText
            }
        })
    }




    if (btn.innerText == ".") {
        btn.addEventListener("click", () => {
            if(input.innerText == "" ){
                input.innerText=0.
            }
            input.innerText += btn.innerText
        })
    }

    if(btn.className=="sqrt"){
        btn.addEventListener("click",()=>{
            if(input.innerText.includes("-") ||  input.innerText.includes("+") ||input.innerText.includes("×") ||input.innerText.includes("÷") ||  input.innerText.includes("%") ){
                output.innerText="Bad Expression"
            }else{
                output.innerText=Math.sqrt(input.innerText)
                localStorage.setItem("lastAnswer",output.innerText)
            }
        })
    }
    if(btn.className=="factorial"){
        btn.addEventListener("click",()=>{
           if(input.innerText.includes("-") ||  input.innerText.includes("+") ||input.innerText.includes("×") ||input.innerText.includes("÷") ||  input.innerText.includes("%") ){
                output.innerText="Bad Expression"
            }else{
                let fact=1;
                for (let i=1;i<=input.innerText;i++){
                    fact*=i  
                }
                output.innerText=fact;
                localStorage.setItem("lastAnswer",output.innerText)
            }
        })
    }
    if(btn.className=="inverse"){
        btn.addEventListener("click",()=>{
            if(input.innerText.includes("-") ||  input.innerText.includes("+") ||input.innerText.includes("×") ||input.innerText.includes("÷") ||  input.innerText.includes("%") ){
                output.innerText="Bad Expression"
            }else{
                output.innerText=1/input.innerText
                localStorage.setItem("lastAnswer",output.innerText)
            }
        })
    }
    if (btn.className == "equal-btn") {
        btn.addEventListener("click", () => {
            strNumbers = input.innerText;

            if(
                strNumbers.includes("+-") ||    strNumbers.includes("++") ||    strNumbers.includes("+÷") ||   strNumbers.includes("+×") ||    strNumbers.includes("-+") ||    strNumbers.includes("--") ||strNumbers.includes("-×") ||    strNumbers.includes("-÷") ||    strNumbers.includes("×+") ||strNumbers.includes("××") ||    strNumbers.includes("×÷") ||    strNumbers.includes("×-") || strNumbers.includes("÷×") ||    strNumbers.includes("÷+") ||    strNumbers.includes("÷-") || strNumbers.includes("÷÷")

            ){
                output.innerText = "Math Error"
            } else {

                if (strNumbers.includes("-")) {

                    let numberArray = strNumbers.split("-");
                    const [number1,number2] = numberArray
                    solution = Number(number1) - Number(number2)
                    localStorage.setItem("lastAnswer",solution)
                    output.innerText = solution
                }

                if (strNumbers.includes("+")) {
                    let numberArray = strNumbers.split("+");
                    const [number1,number2] = numberArray
                    solution = Number(number1) + Number(number2)
                    localStorage.setItem("lastAnswer",solution)
                    output.innerText = solution
                }
                if (strNumbers.includes("×")) {
                    let numberArray = strNumbers.split("×");
                    const [number1,number2] = numberArray
                    solution = Number(number1) * Number(number2)
                    localStorage.setItem("lastAnswer",solution)
                    output.innerText = solution

                }
                if (strNumbers.includes("÷")) {
                    let numberArray = strNumbers.split("÷");
                    const [number1,number2] = numberArray
                    if (Number(number2) == 0) {
                        output.innerText = "Math Error"
                    } else {
                        solution = Number(number1) / Number(number2)
                        localStorage.setItem("lastAnswer",solution)
                        output.innerText = solution
                    }

                }
                if(strNumbers.includes("%")){
                    let numberArray = strNumbers.split("%");
                    const [number1,number2] = numberArray
                    solution = Number(number1) % Number(number2)
                    localStorage.setItem("lastAnswer",solution)
                    output.innerText = solution
                }
            }

        })
    }

})


function clear() {
    input.innerText = ""
    output.innerText = "0"
}


function pi() {
    let answer;
    if (input.innerText == "") {
        answer = 3.14;
        output.innerText = answer
        localStorage.setItem("lastAnswer",answer)

    }
    else if(input.innerText.includes("-") ||  input.innerText.includes("+") ||input.innerText.includes("×") ||input.innerText.includes("÷") ||  input.innerText.includes("%") ){
                output.innerText="Bad Expression"
    }else {
        input.innerText *= 3.14
        answer = input.innerText
        output.innerText = answer
        localStorage.setItem("lastAnswer",answer)
        input.innerText = ""
    }
}
