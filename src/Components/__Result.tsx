import React, {useEffect, useState} from 'react';
import "../Styles/cross.css";


const Result = ({...props}):JSX.Element => {
    const {peaceCount,resetGame,blockMap} = props;
    const [field,setField] = useState<Array<any>>([]);

  useEffect(() =>{
      let newField:Array<any> = []
         blockMap.map((el:any, idx:number) => {
          if (el.value.value === 'cross'){
              newField[idx] = 'cross';
              setField(newField)
          }
          if(el.value.value === 'zero'){
              newField[idx] = 'zero';
              setField(newField)
          }
          newField.push('')
          setField(newField)
      })

  },[blockMap])

     if (
         (field[0] === 'cross' && field[1] === 'cross' && field[2] === 'cross') ||
         (field[0] === 'cross' && field[3] === 'cross' && field[6] === 'cross') ||
         (field[0] === 'cross' && field[4] === 'cross' && field[8] === 'cross') ||
         (field[3] === 'cross' && field[4] === 'cross' && field[5] === 'cross') ||
         (field[6] === 'cross' && field[7] === 'cross' && field[8] === 'cross') ||
         (field[1] === 'cross' && field[4] === 'cross' && field[7] === 'cross') ||
         (field[2] === 'cross' && field[5] === 'cross' && field[8] === 'cross') ||
         (field[2] === 'cross' && field[4] === 'cross' && field[6] === 'cross')
     )
     {
             return (
                 <>
                     <div className="result__all-paces-done">
                      <h2>Игра окончена, победа за игроком,который играл за Крестик</h2>
                      <button onClick={resetGame}>Начать заново</button>
                     </div>
                 </>
             );

     }
    if (
        (field[0] === 'zero' && field[1] === 'zero' && field[2] === 'zero') ||
        (field[0] === 'zero' && field[3] === 'zero' && field[6] === 'zero') ||
        (field[0] === 'zero' && field[4] === 'zero' && field[8] === 'zero') ||
        (field[3] === 'zero' && field[4] === 'zero' && field[5] === 'zero') ||
        (field[6] === 'zero' && field[7] === 'zero' && field[8] === 'zero') ||
        (field[1] === 'zero' && field[4] === 'zero' && field[7] === 'zero') ||
        (field[2] === 'zero' && field[5] === 'zero' && field[8] === 'zero') ||
        (field[2] === 'zero' && field[4] === 'zero' && field[6] === 'zero')

    )
    {
        return (
            <>
                <div className="result__all-paces-done">
                    <h2>Игра окончена, победа за игроком,который играл за Нолик</h2>
                    <button onClick={resetGame}>Начать заново</button>
                </div>
            </>
        );

    }
    if (peaceCount === 9){
        return (
            <>
                <div className="result__all-paces-done">
                    <h2>Игра окончена, все ходы сделаны</h2>
                    <button onClick={resetGame}>Начать заново</button>
                </div>
            </>
        )
    }

    return (
        <>

        </>
    )


}

export default Result;
