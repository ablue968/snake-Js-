import {onSnake, expandSnake} from './snake.js'
import { randomGridPosition } from './grid.js'

//when using grid, the "0" doesnt acutally exist, is instead {x: 1, y: 1}
let food = getRandomFoodPosition()

const expansionRate = 5


// It looks for a new position to spawn the food
export function update(){
    if(onSnake(food)){
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }

};

export function draw(gameBoard){
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y;
        foodElement.style.gridColumnStart = food.x;
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    }

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}