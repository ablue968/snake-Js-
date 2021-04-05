import { getiInputDirection } from "./input.js";

export const snakeSpeed = 5  //speed control
const snakeBody = [{x:10, y:11}];
let newSegments = 0


export function update(){

    addSegments()

    const inputDirection = getiInputDirection()

    //con esto nos aseguramos que esté en el "cuerpo" el mov.
    for(let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    //este es el movimiento de la "cabeza"
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
};

export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
};

export function expandSnake(amount){
    newSegments += amount
}

export function onSnake(position, { ignoreHead= false } = {}){
    return snakeBody.some((segment, index) => {
        if( ignoreHead && index === 0 ) return false
        return samePosition(segment, position)
    })
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function samePosition(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(){
    for (let i = 0; i < newSegments; i++){
        snakeBody.push( { ...snakeBody[snakeBody.length - 1] })
    }
    //this stop the snake from growing without eating
    newSegments = 0
}

