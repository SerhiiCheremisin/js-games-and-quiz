import React, {useEffect, useState} from 'react';
import "./Styles/cross.css"
import Result from "./Components/__Result";
import BlockFiller from "./Components/__BlockFiiler";


const Cross = ():JSX.Element => {

const [chose, setChose] = useState<boolean>(true);
const [peaceCount, setPaceCount] = useState<number>(0);
const [blockMap, setBlockMap] = useState<Array<any>>([
    {"ID": 0, "isActive" : false, 'value': ''},
    {"ID": 1, "isActive" : false, 'value': ''},
    {"ID": 2, "isActive" : false, 'value': ''},
    {"ID": 3, "isActive" : false, 'value': ''},
    {"ID": 4, "isActive" : false, 'value': ''},
    {"ID": 5, "isActive" : false, 'value': ''},
    {"ID": 6, "isActive" : false, 'value': ''},
    {"ID": 7, "isActive" : false, 'value': ''},
    {"ID": 8, "isActive" : false, 'value': ''},
]);



const [vertical, setVertical] = useState<boolean>(false);
const [horizontal, setHorizontal] = useState<boolean>(false);


const fillerPlayer  = chose ? "/image/null.svg" : "/image/cross.svg";
const value = chose ? 'zero': 'cross'


const hor = horizontal? "-75deg": "75deg";

useEffect(() => {
    document.addEventListener("mousemove", function (e) {
       if (e.clientX > 900) {
           setHorizontal(false)
       } else{
           setHorizontal(true)
       }
       if(e.clientY > 900) {
           setVertical(true)
       } else{
           setVertical(false)
       }
    })
 },[horizontal,vertical])


const setChosen = () => {
    setChose(!chose)
}

    const makeActive = (e: number) => {
            blockMap.map((el, idx) => {
            if (e === idx && !el.isActive) {
                let before = blockMap.slice(0,idx);
                let after = blockMap.slice(idx+1);
                let current = [{"ID": e, "isActive" : true, 'value': {value}}]
                let newArr = [...before,...current,...after]
                setBlockMap(newArr)
                setPaceCount(peaceCount + 1)
                setChose(!chose)
            } else if(el.isActive) {
                return
            }
            else {
                return
            }

        })

    };


const resetGame = () => {
    setPaceCount(0);
    let clearArr = [
        {"ID": 0, "isActive" : false, 'value': ''},
        {"ID": 1, "isActive" : false, 'value': ''},
        {"ID": 2, "isActive" : false, 'value': ''},
        {"ID": 3, "isActive" : false, 'value': ''},
        {"ID": 4, "isActive" : false, 'value': ''},
        {"ID": 5, "isActive" : false, 'value': ''},
        {"ID": 6, "isActive" : false, 'value': ''},
        {"ID": 7, "isActive" : false, 'value': ''},
        {"ID": 8, "isActive" : false, 'value': ''},
    ]
   setBlockMap(clearArr)
}

const imgStyle: {} = {
    objectFit : "cover",
    width: "100%",
    height: "100%",
    transform:`rotate(${hor})`,
    transition: `.7s ease`,
}

const blockMapping = blockMap.map((el,idx) => {
    return(
        <div key={idx} onClick={() => makeActive(idx)} className="cross-wrapper__block">
            <div className="cross-wrapper__block--filled">
               <BlockFiller
                   blockMap = {blockMap}
                   chose = {chose}
                   index = {idx}
               />
            </div>
        </div>
    )
})

    return (
        <div className='cross'>
            <div className="cross__par-cross-1">
                <img style={imgStyle} src="/image/cross.svg" alt=""/>
            </div>
            <div className="cross__par-cross-2">
                <img style={imgStyle} src="/image/cross.svg" alt=""/>
            </div>
            <div className="cross-par-null-1">
                <img style={imgStyle} src="/image/null.svg" alt=""/>
            </div>
            <div className="cross-par-null-2">
                <img style={imgStyle} src="/image/null.svg" alt=""/>
            </div>
            <div className="cross-wrapper">
                {blockMapping}
            </div>
            <div className="reset">
                <button onClick={resetGame}>Сброс игры</button>
            </div>
            <div className="result">
                <Result
                    resetGame={resetGame}
                    peaceCount={peaceCount}
                    chose={chose}
                    value={value}
                    blockMap={blockMap}
                />
            </div>
            <div className="pace">
                {`Ходит игрок:`} <img src={fillerPlayer} alt=""/>
            </div>

        </div>
    );

}

export default Cross;
