import React, { Component, useEffect, useRef, useState } from 'react'
import './style.css'
function Board(props){
    
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isdrawing, setIsdrawing] = useState(false)
    const [color,setcolor] = useState("black");
    const [Clearscreen,setclear] = useState(false);

    const startDrawing = ({nativeEvent})=> {
        const {offsetX,offsetY} = nativeEvent; 
        contextRef.current.beginPath()
        console.log("function1"+contextRef.current.stroke);
        contextRef.current.moveTo(offsetX,offsetY)
        setIsdrawing(true)
    }
    const finishDrawing = ()=>{
        contextRef.current.closePath()
        setIsdrawing(false)
    }

    const draw = ({nativeEvent})=>{
        if(!isdrawing){
            return
        }
        const {offsetX,offsetY} = nativeEvent; 
        contextRef.current.lineTo(offsetX,offsetY)
        contextRef.current.stroke()
    }
   
    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth*2;
        canvas.height = window.innerHeight*2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        const context = canvas.getContext("2d");
        context.scale(2,2);
        context.lineCap = "square"
        console.log("function"+color);
        context.lineWidth =2
        contextRef.current = context;  

        
    },[Clearscreen]);
    useEffect(()=>{
        
        contextRef.current.strokeStyle=color;
        contextRef.current.lineWidth=2;
       
    },[color]);
    function colorclear(e){
        setclear(!Clearscreen);
    }
    function colorchanger(e){
        setcolor(e.target.value);
    }
    function eraser(e){
        contextRef.current.strokeStyle="#f5f5f5";

contextRef.current.lineWidth=10;
    }
        return (<>
          <input type="color" onChange={colorchanger}id="favcolor" name="favcolor" value="#ff0000"/>
            <button onClick={colorclear}>Clear</button>
            <button onClick={eraser}>Eraser</button>
            <canvas 
                className="board" 
                id="board"
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            >
            </canvas>
          
            </>
            
        )
    }

export default Board
