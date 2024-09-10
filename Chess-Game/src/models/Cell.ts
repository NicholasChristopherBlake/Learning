import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

// Координаты x,y и цвет ячейки нельзя изменять
export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null; // если ячейка пустая, то null
  board: Board;
  // образуется кольцевая зависимость - Cell знает про Board, a Board про Cell. Это не есть хорошо, но здесь будем использовать
  available: boolean; // может ли переместиться
  id: number; // для ключей

  constructor(board: Board, x:number, y:number, color: Colors, figure: Figure | null) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.available = false;
    this.id = Math.random()
  }
  // если фигура у текущей ячейке не null, то возвращаем true
  isEmpty(): boolean {
    return this.figure === null;
  }

  isEnemy(target: Cell): boolean {
    // просто сравниваем цвет таргета и наш цвет
    if (target.figure) {
      return this.figure?.color !== target.figure.color;
    }
    return false;
  }

  // проверяет вертикаль на пустоту
  isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x) {
      return false; // сразу же отсеиваем другие столбцы
    }
    const min = Math.min(this.y, target.y);
    const max = Math.max(this.y, target.y);
    // если ячейка НЕ пустая, то возвращаем false
    // проходимся по всей вертикали
    for (let y = min + 1; y < max; y++) {
      if(!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }
    return true;
  }
  // проверяет горизонталь на пустоту
  isEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y) {
      return false; 
    }
    const min = Math.min(this.x, target.x);
    const max = Math.max(this.x, target.x);

    for (let x = min + 1; x < max; x++) {
      if(!this.board.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }
    return true;
  }
  // проверяет диагональ на пустоту
  // разница x / y == 0
  isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);
    if (absY !== absX)
      return false;
    
    // определяем направление движения
    const dy = this.y < target.y ? 1 : -1
    const dx = this.x < target.x ? 1 : -1

    for (let i = 1; i < absY; i++) {
      if(!this.board.getCell(this.x + dx*i, this.y + dy*i).isEmpty())
        return false;
    }
    return true;
  }

  setFigure(figure: Figure) {
    this.figure = figure; // для ячейки меняем фигуру
    this.figure.cell = this; // для ячейки на которую смотрит фигура тоже меняем
  }

  // съедение фигур
  addLostFigure(figure: Figure) {
    figure.color === Colors.BLACK
      ? this.board.lostBlackFigures.push(figure)
      : this.board.lostWhiteFigures.push(figure)
  }

  moveFigure(target: Cell) {
    // если на ячейке есть фигура и она может двигаться (true)
    if(this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target)
      // определяем съели ли фигуру
      if (target.figure) {
        this.addLostFigure(target.figure);
      }
      target.setFigure(this.figure); // переместили фигуру
      this.figure = null; // убрали фигуру со старой клетки
    }
  }
}

