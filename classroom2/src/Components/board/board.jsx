import React, { Component, useEffect, useRef, useState } from 'react'
import './style.css'
function Board(){
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isdrawing, setIsdrawing] = useState(false)
    const [color,setcolor] = useState("blue")

    const startDrawing = ({nativeEvent})=> {
        const {offsetX,offsetY} = nativeEvent; 
        contextRef.current.beginPath()
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

        const context = canvas.getContext("2d")
        context.scale(2,2)
        context.lineCap = "round"
        context.strokeStyle= `${color}`
        context.lineWidth =5
        contextRef.current = context;
    },[])
        return (
            <canvas 
                className="board" 
                id="board"
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            >
            </canvas>
        )
    }

export default Board
