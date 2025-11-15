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
        row[currentLine].querySelectorAll(".cell").forEach(elem=>{
            elem.children[0].setAttribute("disabled","disabled")
        })
        CheckAnswer();
        currentLine++;
        InputLetters();
    }
})

function CheckAnswer(){
    let temp = row[currentLine].querySelectorAll(".cell");
    for (let i = 0; i < 5; i++) {
        if(Word[i] == temp[i].children[0].value){
            temp[i].style.backgroundColor = "green";
        }else if(Word.includes(temp[i].children[0].value)){
            temp[i].style.backgroundColor = "yellow";
        }else{
            temp[i].style.backgroundColor = "red";
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