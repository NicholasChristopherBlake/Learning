import React, { FC } from "react"
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
  return (
    <div 
    className={["cell", cell.color, selected ? 'selected' : ''].join(' ')}
    onClick={() => click(cell)}
    // если на ячейке есть фигура, и она доступна для атаки - то зеленым подсветим
    style={{background: cell.available && cell.figure ? 'green' : ''}}>
      {/* Только если нет фигуры то рисуем возможые ходы и только для выбранной ячейки */}
      {cell.available && !cell.figure && <div className={'available'}></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
    </div>
  )
};

export default CellComponent;
