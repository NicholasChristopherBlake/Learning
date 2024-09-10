import React, { FC, useEffect, useState } from "react"
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import CellComponent from "./CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    // условие - если выбранная клетка не равна текущей и если на эту клетку можно походить
    if(selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer()
      setSelectedCell(null);
      updateBoard()
    } else {
      if(cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell)
      } // нельзя выбирать вражеские фигуры
    }
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell]) // вызываем highlightCells при любом изменении выбранной ячейки

  // Подсвечиваем доступные ячейки
  // Изменение каких-то данных внутри объекта board не будет вести к ререндеру.
  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }
  // Чтобы при изменении был ререндер создадим новую функцию
  function updateBoard() {
    // создаем копию, чтобы изменилась ссылка на объект и произошел ререндер
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div>
      <h3>Current Player: {currentPlayer?.color}</h3>
      <div className="board">
      {board.cells.map((row, index) => 
        <React.Fragment key={index}>
          {row.map(cell => 
            <CellComponent 
              click={click}
              cell={cell}
              key={cell.id}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />
          )}
        </React.Fragment>
      )}
      </div>
    </div>

  )
};

export default BoardComponent;
