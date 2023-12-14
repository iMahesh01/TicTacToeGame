let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGameBtn =document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn =true;


const WinPattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const disabledboxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>
{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes();  
}

const resetGame=()=>{
    turn=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    }
   

boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        console.log("box was cicked");
        if(turn)
        {
            box.innerHTML="0";
            turn =false;
        }
        else{
            box.innerHTML="X";
            turn =true;
        }
        box.disabled=true;
        checkWinner();
        
    });
});



const checkWinner=()=>
{
    for(pattern of WinPattern)
    {
            let pos1 =boxes[pattern[0]].innerHTML;
            let pos2 =boxes[pattern[1]].innerHTML;
            let pos3 =boxes[pattern[2]].innerHTML;

            if(pos1!="" && pos2!="" && pos3!="")
            {
                if(pos1===pos2 && pos2===pos3)
                {
                    console.log("winner",pos1);
                    showWinner(pos1);
                }

            }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",enableBoxes);

