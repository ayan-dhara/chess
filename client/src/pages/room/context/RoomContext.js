"use strict"

import {change as changeBoardPieces, currentBoardPieces} from './BoardPieces.js'
import {change as changeBoardCells, currentBoardCells} from "./BoardCells";

import {KEYWORDS} from "../../../KeyWords";

const LOCAL_PORT = 5000
const socket = new WebSocket(`${window.location.protocol.replace("http", "ws")}//${window.location.hostname}:${(window.location.hostname==="localhost"||window.location.hostname.toString().startsWith("127.0.0"))?LOCAL_PORT:window.location.port}/ws${window.location.pathname}`)


let boardReady = false;
export function setBoardReady(status){boardReady = status}
const requestInitialBoard = () => {
  if (!boardReady){
    setTimeout(()=>{
      requestInitialBoard()
    }, 100)
    return
  }
  socket.send(JSON.stringify({
    type: KEYWORDS.REQUEST,
    request: KEYWORDS.BOARD
  }))
}
socket.addEventListener("open", ()=>{
  requestInitialBoard()
})


const handleMessage = (message)=>{
  switch (message.type){
    case KEYWORDS.MOVE: {
      console.log("MOVE", message.move)
      break
    }
    case KEYWORDS.STATUS: {
      console.log("STATUS", message.status)
      break
    }
    case KEYWORDS.BOARD: {
      changeBoardPieces(message[KEYWORDS.BOARD])
      break
    }
    default:{
      console.log("Cannot identify message")
    }
  }
}


export const onClickPiece = (event) => {
  const piece = event.target
  const i = piece.dataset.i*1
  const j = piece.dataset.j*1
  const type = piece.dataset.piece
  removeHighlights()
  if(movingPiece === piece){
    movingPiece = null
    return
  }
  movingPiece = piece

  const boardCells = [...currentBoardCells]
  boardCells[i][j] = "selected"
  const moves = pieceMoves[type[1]].move
  switch (pieceMoves[type[1]].type){
    case 1: {
      for (let [dx, dy] of moves){
        let x = i + dx
        let y = j + dy
        while(x > -1 && y > -1 && x < 8 && y < 8){
          if(haveSameSidePiece(type, x, y)){
            // break
          }
          if(haveOtherSidePiece(type, x, y)){
            boardCells[x][y] = "red"
            break
          }
          boardCells[x][y] = "green"
          x = x + dx
          y = y + dy
        }
      }
    }
  }
  changeBoardCells(boardCells)
}
const haveSameSidePiece = (type, x, y)=>{
  for(let i in currentBoardPieces){
    for(let j in currentBoardPieces[i]){
      if(x === i*1 && y === j*1){
        if(currentBoardPieces[i][j][0] && currentBoardPieces[i][j][0] === type[0])
          return true
      }
    }
  }
  return false
}
const haveOtherSidePiece = (type, x, y)=>{
  for(let i in currentBoardPieces){
    for(let j in currentBoardPieces[i]){
      if(x === i*1 && y === j*1){
        if(currentBoardPieces[i][j][0] && currentBoardPieces[i][j][0] !== type[0])
          return true
      }
    }
  }
  return false
}


export let movingPiece = null
export const onClickCell = (x, y) =>{
  if(!movingPiece)
    return
  socket.send(JSON.stringify(
    {
      type: KEYWORDS.MOVE,
      move: {
        from:{
          x: movingPiece.dataset.i,
          y: movingPiece.dataset.j
        },
        to:{
          x: x,
          y: y
        }
      }
    }
  ))
  removeHighlights()
  movingPiece = null
}
export const removeHighlights = () => {
  const boardCells = [...currentBoardCells]
  for(let i in boardCells){
    for(let j in boardCells[i]){
      boardCells[i][j] = undefined
    }
  }
  changeBoardCells(boardCells)
}

// 0 once
// 1 infinite
// 2 move and cut different
// 3 special
export const pieceMoves = {
  K: {
    move: [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ],
    castling: [
      [0, 1],
      [0,-1]
    ],
    type: 3
  },
  Q: {
    move: [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ],
    type: 1
  },
  R: {
    move: [
      [-1, 0],
      [0, -1],
      [0, 1],
      [1, 0],
    ],
    type: 1
  },
  B: {
    move: [
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1]
    ],
    type: 1
  },
  N:  {
    move: [
      [-1, 2],
      [-1, -2],
      [1, 2],
      [1, -2],
      [-2, 1],
      [-2, -1],
      [2, 1],
      [2, -1]
    ],
    type: 0
  },
  P:  {
    initial: [
      [-1, 0],
      [-2, 0]
    ],
    move: [
      [-1, 0]
    ],
    cut: [
      [-1, 1],
      [-1, -1]
    ],
    type: 3
  }
}





socket.addEventListener("message", (event) =>{
  let message = {}
  try {
    message = JSON.parse(event.data)
  }catch(e){}
  handleMessage(message)
})


