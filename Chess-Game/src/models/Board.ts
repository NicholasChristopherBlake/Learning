import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { Figure } from "./figures/Figure";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

// Класс для доски. Содержит ячейки - как двумерный массив [][] (матрица)
export class Board {
  cells: Cell[][] = []
  lostBlackFigures: Figure[] = []
  lostWhiteFigures: Figure[] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [] // одномерный массив ячеек
      for (let j = 0; j < 8; j++) {
        if((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)) // Black cells
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)) // White cells
        }
      }
      this.cells.push(row); // добавляем эту строку 
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells; // переносим ячейки текущей доски сюда
    // переносим съеденные фигуры
    newBoard.lostWhiteFigures = this.lostWhiteFigures; 
    newBoard.lostBlackFigures = this.lostBlackFigures;
    return newBoard;
  }

  public highlightCells(selectedCell: Cell | null) {
    // проходим циклом по каждой ячейке на доске
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j]
        // вызываем фигуру, которая стоит на выбранной ячейки и вызываем у нее метод .canMove и в качестве ячейки на которую хотим походить передаем target
        // !! - преобразовываем к boolean
        target.available = !!selectedCell?.figure?.canMove(target)
      }
    }
  }

  // Для удобства получаем cell с этими координатами
  public getCell(x: number, y: number) {
    return this.cells[y][x] // y - первый аргумент
  }

  private addPawns() {
    for (let i = 0; i<8; i++) {
      new Pawn(Colors.BLACK, this.getCell(i, 1))
      new Pawn(Colors.WHITE, this.getCell(i, 6)) // на свои строки
    }
  }

  private addBishops() {
    new Bishop(Colors.BLACK, this.getCell(2, 0))
    new Bishop(Colors.BLACK, this.getCell(5, 0))
    new Bishop(Colors.WHITE, this.getCell(2, 7))
    new Bishop(Colors.WHITE, this.getCell(5, 7))
  }

  private addKnights() {
    new Knight(Colors.BLACK, this.getCell(1, 0))
    new Knight(Colors.BLACK, this.getCell(6, 0))
    new Knight(Colors.WHITE, this.getCell(1, 7))
    new Knight(Colors.WHITE, this.getCell(6, 7))
  }

  private addRooks() {
    new Rook(Colors.BLACK, this.getCell(0, 0))
    new Rook(Colors.BLACK, this.getCell(7, 0))
    new Rook(Colors.WHITE, this.getCell(0, 7))
    new Rook(Colors.WHITE, this.getCell(7, 7))
  }

  private addQueens() {
    new Queen(Colors.BLACK, this.getCell(3, 0))
    new Queen(Colors.WHITE, this.getCell(3, 7))
  }

  private addKings() {
    new King(Colors.BLACK, this.getCell(4, 0))
    new King(Colors.WHITE, this.getCell(4, 7))
  }
  // Если хотим играть в другие шахматы, можем создать другую доску
  // public addFisherFigures() {

  // }

  public addFigures() {
    this.addPawns()
    this.addBishops()
    this.addKnights()
    this.addRooks()
    this.addKings()
    this.addQueens()
  }
}