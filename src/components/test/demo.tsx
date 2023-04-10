import { useState } from "react";

export const Demo = () => {
  const text = "Demo!!!";
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export const Demo3 = () => {
  // const arraylist = ["a", "b", "c"];
  const users=[{
    name:"name1",
    email:"zayar1@gmail.com",
    
  },
  {
    name:"name2",
    email:"zayar2@gmail.com",
    age:21
  },
  {
    name:"name3",
    email:"zayar3@gmail.com",
    age:21
  }
]
  return (
    <>
      {/* <ul>
        {arraylist.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}

      <ul>
        {users.map((item,index) =>(
         <li key={index}>
          <ol>
            <li>{item['name']}</li>
            <li>{item['email']}</li>
            {item['age'] && <li>{item['age']}</li>}
          </ol>
         </li>
        ))}
      </ul>
    </>
  );
};

export const Demo4=()=>{
  const num:number=1;
  const [data,setData]=useState(num);
  return(
    <>
      <p>{data}</p>
      <button onClick={()=>setData(data+1)}>++</button>
      
    </>
  )
}

