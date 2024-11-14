let boxes =document.querySelectorAll('.box')
let reset_btn = document.querySelector('.reset-btn');
let message =document.querySelector('.msg_container p');
let messageContainer =document.querySelector('.msg_container ')

console.dir(message)
const winPatttern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let turnO =true;// playerX,playerO
boxes.forEach((item)=>{
    item.addEventListener("click",()=>{
        if(turnO){
            item.innerText='O';
            turnO=false;
        }
        else{
            item.innerText='X'
            turnO=true;
        }
        item.disabled =true
        checkWinner()
    })

    
})
let disabledBox =()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
function showWinner(winner){
    messageContainer.classList.remove('hide');
    message.innerText=`Congratulation ! Winner is ${winner}`;
    
    // disabledBox();
}

function checkWinner(){
    for(pattern of winPatttern){
        // console.log(boxes[pattern[0]].innerText);
        // console.log(boxes[pattern[1]].innerText);
        // console.log(boxes[pattern[2]].innerText);
        let pos0val=boxes[pattern[0]].innerText;
        let pos1val=boxes[pattern[1]].innerText;
        let pos2val=boxes[pattern[2]].innerText;
        if(pos0val !="" && pos1val !="" && pos1val !="" && pos0val===pos1val  && pos1val ===pos2val){
            console.log("winner");
            showWinner(pos0val)
            
        }
        
    }
}

reset_btn.addEventListener("click" ,()=>{
    boxes.forEach((item)=>{
        item.innerText=''
        message.innerText="winner";

    })
    
})