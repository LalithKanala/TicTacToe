import React from 'react';
import Status from './components/Status';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      board: Array(9).fill(null),
      player: null,
      winner:null
    }
  }
  checkWinner(){
    let winLines = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "9"]
    ]
    for(let index=0; index<winLines.length;index++){
      const [a,b,c] = winLines[index];
      if(this.state.board[a] && this.state.board[a]=== this.state.board[b] && this.state.board[a]
        === this.state.board[c] ){
          alert("you won");
          this.setState({
            winner:this.state.player
          })
        }
    }
  }
  handleClick(index){
    if(this.state.player && !this.state.winner){
      let newBoard=this.state.board
    if(this.state.board[index]=== null){
    newBoard[index]=this.state.player
     this.setState({
      board: newBoard,
      player : this.state.player === "X"?"O":"X"
    })
    this.checkWinner()

    }
    }
    
    }
    setPlayer(player){
      this.setState({
        player
      })
    }
  renderBoxes(){
    return this.state.board.map(
      (box,index)=><div key={index}
   onClick={()=>this.handleClick(index)}
   className="box">{box}</div>)
  }
  reset(){
    this.setState({
      player:null,
      winner:null,
      board: Array(9).fill(null)

    })
  }
  
  render() {
  
    return (
      <div className="container">
      <h1>Tic Tac Toe</h1>
      <Status player={this.state.player}
      winner={this.state.winner}

      setPlayer={(e)=>{this.setPlayer(e)}}/>
      
      <div className="board">
     {this.renderBoxes()}
      </div>
      <button disabled={!this.state.winner} onClick={()=>this.reset()}>
           Reset
       </button>
      </div>
    );
  }
}

export default App;
