import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from '../../assets/black-king.png';
import whiteLogo from '../../assets/white-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell); // род.класс - Figure
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.KING
  }
  // логику по ходам короля надо написать самим
  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false; // если родительский метод возвращает false, то возвращаем false (т.е. цвет и король)
    return true
  }
}