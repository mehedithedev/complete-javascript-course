'use strict';

let randomNum=()=>{
    return Math.floor(Math.random()*20+1)   
}


let restoreGame=()=>{
    outputMessage.textContent='Start from the begining'
    document.querySelector('.score').textContent="20"
    document.querySelector('body').style.backgroundColor='black'
    secreatNum= randomNum()
    document.querySelector('.guess').value=null
    document.querySelector('.number').textContent='?'
    document.querySelector('.number').style.width='15rem'
    initialScore=20
}



let initialScore=parseInt(document.querySelector('.score').textContent)
let secreatNum= randomNum()
let outputMessage=document.querySelector('.message')
let highScore=0
// let highScore=document.querySelector('.highscore').textContent
let gameFunction= ()=>{
    let numberGuesed=parseInt(document.querySelector('.guess').value)
    initialScore= initialScore-1
    console.log(initialScore,numberGuesed)

   
  
    
    if(!numberGuesed){
        outputMessage.textContent='Insert a valid number' 
        document.querySelector('body').style.backgroundColor='orange'    
    }

    else if(numberGuesed===secreatNum) {
        initialScore= initialScore+1
        outputMessage.textContent='You got the number!'
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('.number').innerHTML=numberGuesed
        document.querySelector('.number').style.width="20rem"
        if(initialScore>highScore){
            highScore=initialScore
            document.querySelector('.highscore').textContent=highScore
        }
    }
    



    else if(numberGuesed>secreatNum){
        outputMessage.textContent='Your guess is too high'
        document.querySelector('body').style.backgroundColor='red'

    }else if(numberGuesed<secreatNum){
        outputMessage.textContent="Your guess is too low"
        document.querySelector('body').style.backgroundColor='red'

    }
     
    if (initialScore>=0){
        // initialScore= initialScore-1
        document.querySelector('.score').textContent=Math.abs(initialScore)
    }
    else{
        null
    }


  
}

//Triggure the function by clicking on the check button:
document.querySelector('.check').addEventListener('click', gameFunction)
document.querySelector('body').addEventListener('keypress', (evt)=>{
    // console.log(evt.key)
    if(evt.key==="Enter"){
        gameFunction()
    }else if(evt.key===" "){
        restoreGame()
    }

    // console.log(evt.key)
})



// document.querySelector('.guess').addEventListener('keypress', gameFunction)


document.querySelector('.again').addEventListener('click',restoreGame)




// setTimeout(() => {
//     document.querySelector('body').style.backgroundColor='teal'
//     setTimeout(()=>{
//         document.querySelector('body').style.backgroundColor='red'
//         setTimeout(() => {
//             document.querySelector('body').style.backgroundColor='violet'
//                 setTimeout(() => {
//             document.querySelector('body').style.backgroundColor='green'
//         }, 1000);
//         }, 1000);
//     },1000)
// }, 1000);

// Using callback to the functions : 
const changeBackColor=(nameOfColor, delayBetweenColors, doNext)=>{
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor=nameOfColor
        doNext()
    }, delayBetweenColors);
}

changeBackColor('red', 1000, ()=>{
    changeBackColor('pink', 1000,()=>{
        changeBackColor('violet', 1000, ()=>{
            changeBackColor('green', 1000, ()=>{
                changeBackColor('teal', 1000, ()=>{
                    changeBackColor('magenta', 1000, ()=>{
                        changeBackColor('olive', 1000, ()=>{
                            changeBackColor('grey', 1000, ()=>{
                                changeBackColor('blue', 1000, ()=>{
                                    changeBackColor('indigo', 1000, ()=>{
                                        changeBackColor('purple', 1000, ()=>{
                                                
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})