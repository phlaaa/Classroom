import React, { Component, useEffect, useRef, useState } from 'react'
import './style.css'
function Board(props){
    
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isdrawing, setIsdrawing] = useState(false)
    const [color,setcolor] = useState("black");

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
        context.lineWidth =1
        contextRef.current = context;  

        
    },[]);
    useEffect(()=>{
        
        contextRef.current.strokeStyle=color;
       
    },[color]);
    function colorchanger(e){
        setcolor(e.target.value);
    }
        return (<>
            <canvas 
                className="board" 
                id="board"
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            >
            </canvas>
            <input type="color" onChange={colorchanger}id="favcolor" name="favcolor" value="#ff0000"/>
            </>
        )
    }

export default Board
