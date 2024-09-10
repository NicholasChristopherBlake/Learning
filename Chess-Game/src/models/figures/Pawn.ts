import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-pawn.png';
import whiteLogo from '../../assets/white-pawn.png';

export class Pawn extends Figure {

  isFirstStep: boolean = true; // по умолчанию может сходить на 2 клетки

  constructor(color: Colors, cell: Cell) {
    super(color, cell); // род.класс - Figure
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.PAWN
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false; // если родительский метод возвращает false, то возвращаем false (т.е. цвет и король)
    const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1 // черный двигаются вниз, а белые наверх
    const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2
    // проверяем смещение на 1 или 2 по y, а также проверяем что смещение идет по одной полосе x. И также проверяем что ячейка на которую хотим перейти пустая
    if ((target.y === this.cell.y + direction || this.isFirstStep && (target.y === this.cell.y + firstStepDirection))
    && target.x === this.cell.x
    && this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true;
    }
    // условие для атаки по диагонали. Проверяем что двигаемся по правильному направлению (на 1 ячейку либо вверх либо вниз + еще и по диагонали по x. А также проверяем что есть враг - isEnemy)
    if(target.y === this.cell.y + direction
    && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
    && this.cell.isEnemy(target)) {
      return true;
    }
    return false;
  }

  moveFigure(target: Cell) {
    super.moveFigure(target);
    this.isFirstStep = false; // после первого хода ставим на false
  }
}