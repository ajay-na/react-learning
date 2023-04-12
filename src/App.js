import { useState } from "react";
import "./App.css";
import people from "./data";

function App() {
  const [data, setdata] = useState(people);
  const [value, setvalue] = useState(0);
  console.log('sdsafd'+data.length);
  const valueCheck = (id)=>{
    if(id==data.length-1){
      return 0;
    }
    else if(id<0){
      return data.length-1;
    }
    return id;
  }
  const rightFunc = () => {
    return setvalue(valueCheck(value + 1));
  };
  const leftFunc = () => {
    console.log(valueCheck(setvalue(value - 1)));
    return setvalue(valueCheck(value - 1));
  };
  const { id, image, name, title, quote } = data[value];
  return (
    <div className="App">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{quote}</p>
      <button onClick={()=>leftFunc()}>left</button>
      <button on onClick={() => rightFunc()}>
        right
      </button>
    </div>
  );
}

export default App;
