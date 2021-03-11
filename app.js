//variables
let userPoint = 0
let iuPoint = 0
const paper = document.querySelector('#p')
const rock = document.querySelector('#r')
const scissor = document.querySelector('#s')
const userPonitTag = document.querySelector('#user-score')
const iuPonitTag = document.querySelector('#comp-score')
const resultTag = document.querySelector('.result p');
//event listeners
listeners()
function listeners() {
    paper.addEventListener('click', () => { game('p') })
    rock.addEventListener('click', () => { game('r') })
    scissor.addEventListener('click', () => { game('s') })
}
//functions

function game(userChoice) {
   
    let iuChoice = getIuChoice()
    let iuChoiseForShow=''
    if(iuChoice==='r'){
        iuChoiseForShow='rock'
    }
    if(iuChoice==='s'){
        iuChoiseForShow='scissor'
    }
    if(iuChoice==='p'){
        iuChoiseForShow='paper'
    }

    switch ( userChoice+iuChoice) {
        case 'rs':
        case 'sp':
        case 'pr':
            win( iuChoiseForShow)
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose( iuChoiseForShow)
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            draw( iuChoiseForShow)
            break;
        default:
            break;
    }
}
function getIuChoice() {
    let choice = ['r', 'p', 's']
    let index = Math.floor(Math.random() * 3)
    return choice[index]

}
function win( iuChoice) {
   
    let message = `you win :-)  computerchoice:${iuChoice}`
    userPoint +=1
    showPoints()
    showMessage(message)
}
function lose( iuChoice) {
    
    let message = `you lose :-( computerchoice:${iuChoice}`
    iuPoint +=1
    showPoints()
    showMessage(message)
}
function draw( iuChoice) {
   
    let message = `Equal :-| computerchoice:${iuChoice}`
    showMessage(message)
}
function showMessage(message){
    resultTag.innerHTML=message
    setTimeout(() => {
        resultTag.innerHTML=''
    }, 5000);
}
function showPoints(){
    userPonitTag.innerHTML=userPoint
    iuPonitTag.innerHTML=iuPoint
}
