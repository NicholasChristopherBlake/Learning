import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-queen.png';
import whiteLogo from '../../assets/white-queen.png';

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell); // род.класс - Figure
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.QUEEN
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false; // если родительский метод возвращает false, то возвращаем false (т.е. цвет и король)
    if(this.cell.isEmptyVertical(target))
      return true; // если вертикаль пустая
    if(this.cell.isEmptyHorizontal(target))
      return true; // если горизонталь пустая
    if(this.cell.isEmptyDiagonal(target))
      return true; // если диагональ пустая
    return false;
  }
}