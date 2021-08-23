import React from 'react';
import "../Styles/cross.css";


const BlockFiller = ({...props}):JSX.Element => {
    const {blockMap,index} = props


    const pic = blockMap.map((el: any, idx: number) => {

       if (index === idx && el.isActive) {
          if (el.value.value === 'cross')
          {
              return (
                  <div key={el.ID} className="cross-wrapper__block--filled">
                      <img src='/image/cross.svg' alt={`game photo ${el.value.value}`}/>
                  </div>
              )
          }
          if (el.value.value === 'zero'){
              return (
                  <div key={el.ID} className="cross-wrapper__block--filled">
                      <img src='/image/null.svg' alt={`game photo ${el.value.value}`}/>
                  </div>
              )
          }

        }
        else {
            return null
        }

    });

    return(
<>
        {
            pic
        }

</>
    )




}

export default BlockFiller;
