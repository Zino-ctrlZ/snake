// const { clearInterval } = require("timers")
import {control} from './input.js'

export let squares = document.querySelectorAll('.grid div')
const scoreDisplay = document.querySelector('span')
const startBtn = document.querySelector('.start')

export let width =  10
export let currentIndex = 0
export let direction =  1



let appleIndex = 0 
let currentSnake = [2,1,0] //2 represents the head, 0 being tail, and 1 being body
let score = 0
let speed = 0.9
let intervalTime = 0
let interval = 0


document.addEventListener('DOMContentLoaded', () => {
    
  



    //to start, and restart game 
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        placeApple() // randmise placement of apple 
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index ].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    function moveOutcomes() {
        //deals with snake hitting border and hitting self 
        if((currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits bottom
        (currentSnake[0] % width === width -1 && direction === 1 ) || //if snake hits right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall 
        (currentSnake[0] - width < 0 && direction === -width) || //if snake hits top
        (squares[currentSnake[0] + direction].classList.contains('snake') )){ //if snake goes in itself 
            return clearInterval(interval) //clears the interval if any of the conditions is true 
        }

        const tail = currentSnake.pop() //removes last ite of the array and shows it 
        squares[tail].classList.remove('snake') //removes class of snake from the tail
        currentSnake.unshift(currentSnake[0] + direction) //gives direction to head

        //deals with snake getting apple
        if(squares[currentSnake[0]].classList.contains('apple')){
            squares[currentSnake[0]].classList.remove('apple')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)
            placeApple()
            score++
            scoreDisplay.innerText = score; 
            clearInterval(intervalTime); 
            intervalTime = interval * speed
            interval = setInterval(moveOutcomes, intervalTime)
        }

        squares[currentSnake[0]].classList.add('snake')
    }
    
    function placeApple(){
        do{
            appleIndex = Math.floor(Math.random() * squares.length)
        }while(squares[appleIndex].classList.contains('snake'))
              
        squares[appleIndex].classList.add('apple')
    }

    document.addEventListener('keyup', control)
    startBtn.addEventListener('click', startGame)
})

