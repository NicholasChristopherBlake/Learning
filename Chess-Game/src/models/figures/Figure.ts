import { Colors } from "../Colors";
import logo from '../../assets/black-king.png';
import { Cell } from "../Cell";

export enum FigureNames {
  FIGURE = 'Figure',
  KING = 'King',
  KNIGHT = 'Knight',
  PAWN = 'Pawn',
  QUEEN = 'Queen',
  ROOK = 'Rook',
  BISHOP = 'Bishop'
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames
  // здесь также создаем кольцевую зависимость - ячейка знает про фигуру, на которой стоит, и фигура знает про ячейку
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null; // т.к. базовый класс
    this.name = FigureNames.FIGURE // т.к. базовый класс
    this.id = Math.random()
  }
  // Может ли фигура двигаться
  canMove(target: Cell): boolean { // target - куда хотим переместиться
    if(target.figure?.color === this.color)
      return false // если фигура того же цвета - нельзя
    if(target.figure?.name === FigureNames.KING)
      return false // если король - нельзя
    return true;
  }
  moveFigure(target: Cell) {
    
  }
}