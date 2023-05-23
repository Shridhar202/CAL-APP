import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {
  const [inputvalue1, setinputvalue1] = useState(0);
  const [oprationvalue, setOprationvalue] = useState(0);
  const [currentOpration, setCurrentOpration] = useState('');

  const allBtArr = [
    {
      value: 0,
      btFun: () => {
        setinputvalue1((prevValue) => parseInt(prevValue.toString() + 0));
      },
    },

    {
      value: 1,
      btFun: () => {
        setinputvalue1((prevValue) => parseInt(prevValue.toString() + 1));
      },
    },

    {
      value: 2,
      btFun: () => {
        setinputvalue1((prevValue) => parseInt(prevValue.toString() + 2));
      },
    },

    {
      value: 3,
      btFun: () => {
        setinputvalue1((prevValue) => parseInt(prevValue.toString() + 3));
      },
    },

    {
        value: 4,
        btFun: () => {
          setinputvalue1((prevValue) => parseInt(prevValue.toString() + 4));
        },
      },

      {
        value: 5,
        btFun: () => {
          setinputvalue1((prevValue) => parseInt(prevValue.toString() + 5));
        },
      },

      {
        value: 6,
        btFun: () => {
          setinputvalue1((prevValue) => parseInt(prevValue.toString() + 6));
        },
      },

      {
        value: 7,
        btFun: () => {
          setinputvalue1((prevValue) => parseInt(prevValue.toString() + 7));
        },
      },

      {
        value: 8,
        btFun: () => {
          setinputvalue1((prevValue) => parseInt(prevValue.toString() + 8));
        },
      },

      {
        value: 9,
        btFun: () => {
          setinputvalue1((prevValue) => parseInt(prevValue.toString() + 9));
        },
      },
  ];
    
  const oprationArr = [
    
    {
        value: '+',
        btFun: () =>{
            setCurrentOpration('+');
            setOprationvalue(inputvalue1);
            setinputvalue1(0);
        }
    },
    {
        value: '-',
        btFun: () =>{
            setCurrentOpration('-');
            setOprationvalue(inputvalue1);
            setinputvalue1(0);
        }
    },
    {
        value: '*',
        btFun: () =>{
            setCurrentOpration('*');
            setOprationvalue(inputvalue1);
            setinputvalue1(0);
        }
    },
    {
        value: '/',
        btFun: () =>{
            setCurrentOpration('/');
            setOprationvalue(inputvalue1);
            setinputvalue1(0);
        }
    },
    {
        value: '=',
        btFun: () =>{
            if (currentOpration === '+') {
                
                setinputvalue1((prevValue) => {
                    return prevValue + oprationvalue
                })

            }else if (currentOpration === '-') {
                setinputvalue1((prevValue) => {
                    return oprationvalue - prevValue
                })
            }else if (currentOpration === '*') {
                setinputvalue1((prevValue) => {
                    return oprationvalue * prevValue
                })
            }else if (currentOpration === '/') {
                setinputvalue1((prevValue) => {
                    return oprationvalue / prevValue
                })
            }
        }
    }
  ];

  return (
    <div>
      <p> This is cal js {inputvalue1} </p>
      <p> {oprationvalue} {currentOpration} </p>

      <CalWrapper allBtArr={allBtArr} oprationArr={oprationArr}/>
    </div>
  );
};

export default Cal;
