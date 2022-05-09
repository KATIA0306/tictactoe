const readline = require('readline')

class TicTacToeGame {
  constructor(){
    this.ticTacToe = [];
    this.ticTacToe[8] = undefined;
    this.ticTacToeLayout = '';
    this.currentPlayer = true;
    this.gameEnded = false;
    this.moves = [];
    
    this.readLine = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

  }

createGrid(){
this.ticTacToeLayout = 
`${this.displayItem(this.ticTacToe[0])} | ${this.displayItem(this.ticTacToe[1])} | ${this.displayItem(this.ticTacToe[2])}
---------
${this.displayItem(this.ticTacToe[3])} | ${this.displayItem(this.ticTacToe[4])} | ${this.displayItem(this.ticTacToe[5])}
---------
${this.displayItem(this.ticTacToe[6])} | ${this.displayItem(this.ticTacToe[7])} | ${this.displayItem(this.ticTacToe[8])}`;
console.log(`Player's ${this.displayPlayer(this.currentPlayer)} move`)
}

  displayItem(item){
    return item === undefined ? ' ' : item
  }

  displayPlayer(player){
    return player ? 1 : 2
  }

  getPlayerFromCharacter(character){
    return this.displayPlayer(character === 'X')
  }

  getCharacter(player){
    return player ? 'X' : 'O'
  }
  
  display(){
    this.createGrid()
    console.log(this.ticTacToeLayout);
  }

  startGame(){
    this.display();

    this.readLine.on("line", (input) => {
      if(this.ticTacToe.length <= 9){
        this.readMove(parseInt(input))
      } else {
        console.log("Game Over");
        this.processGame();
      }
    })
  }

  endGame(){
    this.readLine.close();
    this.gameEnded = true;
    process.exit();
  }

  continuePlay(){
    this.display();
    this.processGame();
    if(!this.gameEnded){
      this.currentPlayer = arguments[0] ? this.currentPlayer : !this.currentPlayer;
      console.log(`Player's ${this.displayPlayer(this.currentPlayer)} move`)
    }
  }

  processGame(){
    if(this.moves.length >= 5){
      const checkSet = new Set();

      if(this.ticTacToe[0] && this.ticTacToe[3] && this.ticTacToe[6] && (Array.from(checkSet.add(this.ticTacToe[0]).add(this.ticTacToe[3]).add(this.ticTacToe[6])).length === 1)){
        console.log(`Player ${this.getPlayerFromCharacter(this.ticTacToe[0])} won`);
        this.endGame();
      }
      checkSet.clear();
      if(this.ticTacToe[1] && this.ticTacToe[4] && this.ticTacToe[7] && (Array.from(checkSet.add(this.ticTacToe[1]).add(this.ticTacToe[4]).add(this.ticTacToe[7])).length === 1)){
        console.log(`Player ${this.getPlayerFromCharacter(this.ticTacToe[1])} won`);
        this.endGame();
      }
      checkSet.clear();
      if(this.ticTacToe[2] && this.ticTacToe[5] && this.ticTacToe[8] && (Array.from(checkSet.add(this.ticTacToe[2]).add(this.ticTacToe[5]).add(this.ticTacToe[8])).length === 1)){
        console.log(`Player ${this.getPlayerFromCharacter(this.ticTacToe[2])} won`);
        this.endGame();
      }
      checkSet.clear();
      if(this.ticTacToe[0] && this.ticTacToe[1] && this.ticTacToe[2] && (Array.from(checkSet.add(this.ticTacToe[0]).add(this.ticTacToe[1]).add(this.ticTacToe[2])).length === 1)){
        console.log(`Player ${this.getPlayerFromCharacter(this.ticTacToe[0])} won`);
        this.endGame();
      }
      checkSet.clear();
      if(this.ticTacToe[3] && this.ticTacToe[4] && this.ticTacToe[5] && (Array.from(checkSet.add(this.ticTacToe[3]).add(this.ticTacToe[4]).add(this.ticTacToe[5])).length === 1)){
        console.log(`Player ${this.getPlayerFromCharacter(this.ticTacToe[3])} won`);
        this.endGame();
      }
      checkSet.clear();
      if(this.ticTacToe[6] && this.ticTacToe[7] && this.ticTacToe[8] && (Array.from(checkSet.add(this.ticTacToe[6]).add(this.ticTacToe[7]).add(this.ticTacToe[8])).length === 1)){
        console.log(`Player ${this.getPlayerFromCharacter(this.ticTacToe[6])} won`);
        this.endGame();
      }
      checkSet.clear();
      if((this.ticTacToe[0] && this.ticTacToe[4] && this.ticTacToe[8] && (Array.from(checkSet.add(this.ticTacToe[0]).add(this.ticTacToe[4]).add(this.ticTacToe[8])).length === 1)) || (this.ticTacToe[2] && this.ticTacToe[4] && this.ticTacToe[6] && (Array.from(checkSet.add(this.ticTacToe[2]).add(this.ticTacToe[4]).add(this.ticTacToe[6])).length === 1))){
        console.log(`Player ${this.getPlayerFromCharacter(this.ticTacToe[4])} won`);
        this.endGame();
      }
      checkSet.clear();
    }
  }

  //Moves
  readMove(position){
    const self = this
    if((position > 9) || position < 1){
    }

    if(self.ticTacToe[(position - 1)] !== undefined){
      console.log(self.ticTacToe[(position - 1)])
    } else {
      self.ticTacToe[(position - 1)] = self.getCharacter(self.currentPlayer);
      self.recordMove((position - 1), self.currentPlayer);
      self.continuePlay();
    }
  }

  recordMove(position){
    this.moves.push({
      position: position,
      char: this.getCharacter(this.currentPlayer),
      player: this.displayPlayer(this.currentPlayer)
    });
  }
}

new TicTacToeGame().startGame();