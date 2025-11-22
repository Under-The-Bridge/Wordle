// let cell = document.querySelectorAll(".cell");
let row = document.querySelectorAll(".row");
let currentLine = 0;

let Word = "style";

function InputLetters(){
    row[currentLine].querySelectorAll(".cell").forEach(elem=>{
        let input = document.createElement("input");
        input.setAttribute("maxlength",1)
        elem.appendChild(input);
    })
}
InputLetters();
addEventListener("keydown", (enter)=>{
    if(enter.key == 'Enter'){
        if(CheckEmptyField()) return;
        row[currentLine].querySelectorAll(".cell").forEach(elem=>{
            elem.children[0].setAttribute("disabled","disabled")
        })
        CheckAnswer();
        currentLine++;
        InputLetters();
    }
})


function CheckEmptyField(){
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].attributes.disabled) continue;
        // console.log(inputs[i].value);
        if(inputs[i].value == "") return true;
    }
    return false;
}

// addEventListener("keydown",(e)=>{
//     if(e.key = "P"){
//         CheckEmptyField();
//     }
// })

function CheckAnswer(){
    let temp = row[currentLine].querySelectorAll(".cell");
    for (let i = 0; i < 5; i++) {
        if(Word[i] == temp[i].children[0].value){
            temp[i].style.backgroundColor = "#0fb12a79";
            temp[i].children[0].style.color = "#00ff006e";
        }else if(Word.includes(temp[i].children[0].value)){
            temp[i].style.backgroundColor = "#b1ae0f79";
            temp[i].children[0].style.color = "#eeff006e";
        }else{
            temp[i].style.backgroundColor = "#b10f2d79";
            temp[i].children[0].style.color = "#ff00006e";
        }
    }
    row[currentLine].querySelectorAll(".cell").forEach(elem=>{
    })
}

// cell.forEach(elem=>{
//     elem.addEventListener('click',()=>{
//         addEventListener("keydown",(k)=>{
//             elem.innerText = k.key;
//         })
//     })
// })