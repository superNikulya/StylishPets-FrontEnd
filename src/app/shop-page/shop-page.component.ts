import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent  {

  isValidSudoku(board: string[][]): boolean {
    for(let i = 0; i<board.length; i++) {
      const line = board[i];
      if (board.length < 9) {
        console.log('board.length<9');

        return false;
      }
      if (board[i].length < 9) {
        console.log('board[i].length<9');
        return false;
      }
      for (let a = 0; a < line.length; a++) {
        for (let b = 0; b < line.length; b++) {
          if (line[a] !== '.') {
            if (line[a] == line[b]) {
              if (a !== b) {
                console.log(line[a], line[b], 'line[a] == line[b]');
                return false;
              }
            }
          }
        }
      }
    }
    for (let i = 0; i<board.length; i++) {
      for (let a = 0; a<board[i].length; a++) {
        for (let c = 0; c<board.length; c++) {

          if (board[i][a] !== '.' && board[i][a] !== ',') {
            if (board[i]!=board[c]) {
              if (board[i][a]==board[c][a]) {
                console.log(board[i][a], board[c][a],i, c, a,'a!==b');
                return false;
              }
            }
          }

        }
      }
    }

    this.checkBox(0,3);

    return true;
  }
  board = [[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]];

  checkBox(x: number, y: number) {
    const numbers = new Set<string>();
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const currNumber = this.board[i + x][j + y];
        if (currNumber === '.') {
          continue;
        }
        if (numbers.has(currNumber)) {
          return false;
        }
        numbers.add(currNumber);
      }
    }
    return true;
  }


  click() {
    console.log(this.isValidSudoku(this.board));
  }
}


