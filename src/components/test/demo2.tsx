// export const Demo2 = (props:any) => {
//     return (
//         <>
//         <h1>Demo2</h1>
//         <p className={props.dataClass}>p</p>

import { useState } from "react";

//         <div onClick={()=>alert("hi")}>
//             <button onClick={(e)=>
//             {e.stopPropagation()
//                 alert("hello")}
//                 }>

//                 Click Me

//             </button>
//         </div>

//         </>
//     )

//   }

export const Demo2 = (props: any) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    alert("hello");
  };

  const handleDivClick = () => {
    alert("hi");
  };

  return (
    <>
      <h1>Demo2</h1>
      <p className={props.dataClass}>p</p>

      <div onClick={handleDivClick}>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
};

