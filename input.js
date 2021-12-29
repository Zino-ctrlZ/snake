import {squares, currentIndex, width as gameWidth, direction} from './snakeApp.js'

//assign functions to keycodes 
// function control(e) {
//     squares[currentIndex].classList.remove('snake')

//     if(e.code === 'ArrowRight') {
//         direction = 1 //right press arrow ('>') on key board, snake goes right by one div
//     } else if (e.code == 'ArrowUp'){
//         direction = - width //up arrow press ('^') snake goes back ten divs, appearing to go up
//     } else if( e.code === 'ArrowLeft'){
//         direction  = -1 // left arrow press ('<') snake will go left one div
//     } else if (e.code === 'ArrowDown') {
//         direction = +width // down arrow press snake head will appear ten divs downward from current div 
//     }
// }


//assign functions to keycodes 
export function control(e){

    squares[currentIndex].classList.remove('snake')
    switch(e.code){
        case "ArrowRight" :
            direction = 1
            break
        case "ArrowUp" :
            direction = -gameWidth
            break
        case "ArrowLeft" : 
            direction = -1
            break
        case "ArrowDown" :
            direction = +gameWidth
            break 
    }
}