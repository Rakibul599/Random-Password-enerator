import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lowercase, numbers, symbols, uppercase } from "./Data/charset";

function App() {
  let [upper,setUpper]=useState(false);
  let [lower,setLower]=useState(false);
  let [num,setNum]=useState(false);
  let [symb,setSymb]=useState(false);
  let [passlen,setPasslen]=useState(10);
  let [showPass,setShowpass]=useState('');
  let charset='';
  let finalpass="";
  let passgen=()=>{
    if(upper || lower || num || symb)
      {
        if(upper)
          {
            charset+=uppercase;
          }
          if(lower) charset+=lowercase;
          if(num) charset+=numbers;
          if(symb) charset+=symbols;
         
          for(let i=0;i<passlen;i++)
            {
              finalpass+=charset.charAt(Math.floor(Math.random()*charset.length));
            }
            setShowpass(finalpass);
      }
      else{
        toast.error("Not selected!");
      }
  }
  let copypass=()=>{
    navigator.clipboard.writeText(showPass);
    toast.success("copied!");
    
  }
  return (
    <>
    <ToastContainer />
      <div className="bg-[#9581fc] w-[100%] h-[100vh] flex items-center justify-center ">
        <div className="bg-white  w-80 p-5">
          <h1>Password Generator</h1>
          <div className="flex place-content-between">
            <input type="text" name="" id="" className="border-[2px] border-black border-r-0  basis-[80%] " readOnly value={showPass}/>
            <button className="border-[2px] border-black border-l-0 basis-[20%]" onClick={copypass}>Copy</button>
          </div>
          <div className="flex place-content-between mt-1">
            <label htmlFor="" className="basis-[80%]">Password length</label>
            <input type="number" className="basis-[20%] w-[50px] border-[2px] border-black" max={20} min={10} value={passlen} onChange={(e)=>setPasslen(e.target.value)}/>
          </div>
          <div className="flex place-content-between mt-1">
            <label htmlFor="">Include Uppercase Letters</label>
            <input type="checkbox" checked={upper} onChange={()=>setUpper(!upper)} />
          </div>
          <div className="flex place-content-between mt-1">
            <label htmlFor="">Include Lowercase Letters</label>
            <input type="checkbox" checked={lower} onChange={()=>setLower(!lower)} />
          </div>
          <div className="flex place-content-between mt-1">
            <label htmlFor="">Include Number </label>
            <input type="checkbox" checked={num} onChange={()=>setNum(!num)} />
          </div>
          <div className="flex place-content-between mt-1">
            <label htmlFor="">Include Symbol</label>
            <input type="checkbox" checked={symb} onChange={()=>setSymb(!symb)}/>
          </div>
          <div className="flex place-content-between mt-1">
            <button className="text-center bg-[#907aff] w-full mt-3 p-2" onClick={passgen}>Generate Password</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
