const btn = document.querySelectorAll("button");
const result = document.querySelector(".result")
const special = ["%", "*", "/", "-", "="]

let output = "";


const calculator = (btnValue) => {
    if(btnValue === "=" && output !== ''){
        output = eval(output.replace("%", "/100"))
    }
    else if(btnValue == "CE"){
        output = ""
    }
    else if(btnValue == "C"){
        output = output.toString().slice(0, -1)
    }
    else{
        if(output === "" && special.includes(btnValue)) return;
        output +=btnValue;
    }
    result.innerHTML = output
}


btn.forEach((box)=>[
    box.addEventListener("click", (e) => {
        calculator(e.target.value)
    })
]);


