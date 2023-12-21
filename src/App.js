import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState,createContext ,useRef,useReducer,useMemo} from "react";
import MainCompnent from "./components/MainCompnent";
// use state
// function App() {
//   const [value, setValue] = useState(0);
//   const [name,setName]= useState()
//   //const [value,setValue]=useState({counter:0,name:""})
//   const valueIncreaseHanlder = () => {
//     setValue(value + 1);
//   //   setValue((prev)=>({
//   //      ...prev,counter:prev.counter+1
//   // }))
//   };
//   const valueDecreaseHanlder = () => {
//    setValue(value - 1);
//     // setValue((prev)=>({
//     //   ...prev,counter:prev.counter-1
// //  }))
//   };
//   const nameHanlder = (e) => {
//      setName(e);
//     // setValue((prev)=>({
//     //   ...prev,name:e.target.name
// //  }))
//   };

//   return (
//     <div>
//       {/* how to usestate using input */}
//       <input type="text"onChange={(e)=>nameHanlder(e.target.value)}></input>
//       <h1>{name} is counter:{value}</h1>
//       {/* how to use usestae using button */}
//       <button onClick={valueIncreaseHanlder}>Increase</button>
//       <button onClick={valueDecreaseHanlder}>Decrease</button>
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////////////////
//useEffect ->used to perform side effects in our component
// 1 fetching data from api
//2 updating the dom  doucmnet
// 3timer function


// export default function App() {
//    const [value, setValue] = useState(0);
//    const[count,setCount] = useState(1);
//    const [time,setTime]= useState(0);
//   //  useEffect 
//   // useEffect(()=>{
//   //   document.title=`${value} new message`;
//   // })
//   //useEffect using variables
//   useEffect(()=>{
//     document.title=`${count} new message`;
//   },[count])
//   useEffect(()=>{
//     setInterval(()=>{
//       setTime(time+1);
//     },1000)
//   })
//   return (
//     <div>
//       <h3>{value}new message</h3>
//       <button onClick={()=>setValue(1+value)}>Increase</button>
//       <h3>{count}new message</h3>
//       <button onClick={()=>setCount(1+count)}>Increase</button>
//       <h3>{time}in second</h3>
//     </div>
//   )
// }
////////////////////////////////////////////////////////////////////////
//useContext->help us send the golbal data in child components
//1.creating the context
//2.Providing the Context
//3.Consuming the Context
// export const LoginContext = createContext();
// function App() {
 
//   return (
//     <LoginContext.Provider value={true}>
//       <div><MainCompnent /></div>
//     </LoginContext.Provider>
   
//   )
// }

///////////////////////////////////////////////
// useRef-> allow us to acces DOM elements
//1.helps us to create mutable variables which will not re-render the component


// function App() {
  
//   const inputEle = useRef();
//   const handleClick = ()=>{
//     console.log(inputEle.current)
//     inputEle.current.style.width="300px"
//     inputEle.current.focus()
//   }
//   return (
//     <div>
//        <input type="text" ref={inputEle} /> 
//        <button onClick={handleClick}>click here</button>
//     </div>
//   )
// }
//////////////////////////////////////////////////////////////////////////
//useReducer ->used to manage state in our react application
//work like state mangement
// const intialState = {count:0}
// const reducer = (state,action)=>{
//   if(action.type==='increase')
//     return {count:state.count+1}
//   else{
//     return {count:state.count-1}
//   }
// }
// function App() {
//   const[state,dispatch]= useReducer(reducer,intialState)
//   const valueIncreaseHanlder=()=>{
//       dispatch({type:"increase"})
//   }
//   const valueDecreaseHanlder= ()=>{
//     dispatch({type:"decrease"})
//   }
//   return (
//     <div> 
//          <h1>  counter:{state.count}</h1>
//           {/* how to use usestae using button */}
//            <button onClick={valueIncreaseHanlder}>Increase</button>
//          <button onClick={valueDecreaseHanlder}>Decrease</button></div>
//   )
// }
// ////////////////////////////////////////////////////////////////////////
//useMemo->used for memoization
//used for stop unwanting rendering
// const App = () => {
// const [count, setCount] = useState(0);
// const [todos, setTodos] = useState([]);
// const calculation = useMemo(() => expensiveCalculation(count), [count]);

// const increment = () => {
//   setCount((c) => c + 1);
// };
// const addTodo = () => {
//   setTodos((t) => [...t, "New Todo"]);
// };

// return (
//   <div>
//     <div>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//       <button onClick={addTodo}>Add Todo</button>
//     </div>
//     <hr />
//     <div>
//       Count: {count}
//       <button onClick={increment}>+</button>
//       <h2>Expensive Calculation</h2>
//       {calculation}
//     </div>
//   </div>
// );
// };

// const expensiveCalculation = (num) => {
// console.log("Calculating...");
// for (let i = 0; i < 1000000000; i++) {
//   num += 1;
// }
// return num;
// };
//////////////////////////////////////////////////////////
// useCallBack is used for to return memorixation function
//it prevent from unwanting function rendering

 export default App;
