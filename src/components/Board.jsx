import Button from "./Button";
import CalculateWinner from "./CalculateWinner";

function Board({value, numValue, onPlay}) {

  const handlClick = (i)=>{
    if (value[i] || CalculateWinner(value)) {
        return;
      }
      const arrValue = value.slice();
    if(numValue){
        // console.log(numValue);
        arrValue[i]= "X"
    } else{
        // console.log(numValue);
        arrValue[i] = "0"
    }
    onPlay(arrValue)
  }

  const winner = CalculateWinner(value);
  let status;
  if(winner){
    status = `${winner} is Winner` //"Winner: " + winner;
  }else{
    status = "Next player: " + (numValue ? "X" : "1")
  }

  return (
    <div className="container">
      <h1 style={{ margin: '0px 0px 10px 100px', backgroundColor:"lightgreen"}}>Tic-Tak-Toe Game</h1>
      <div style={{color: "red", fontSize: "20px", margin: '0px 0px 10px 100px', backgroundColor:"lightgreen"}}>{status}</div>
      <div className="app">
        <div className="buttons" >
          <Button value={value[0]} handlClick={()=>handlClick(0)} />
          <Button value={value[1]} handlClick={()=>handlClick(1)}/>
          <Button value={value[2]} handlClick={()=>handlClick(2)}/>
        </div>
        <div className="buttons" >
          <Button value={value[3]} handlClick={()=>handlClick(3)} />
          <Button value={value[4]} handlClick={()=>handlClick(4)}/>
          <Button value={value[5]} handlClick={()=>handlClick(5)}/>
        </div>
        <div className="buttons" >
          <Button value={value[6]} handlClick={()=>handlClick(6)} />
          <Button value={value[7]} handlClick={()=>handlClick(7)}/>
          <Button value={value[8]} handlClick={()=>handlClick(8)}/>
        </div>
                
      </div>
    </div>
  );
}



export default Board;
