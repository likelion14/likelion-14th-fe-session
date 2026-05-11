import React, {useState, useEffect, useReducer, useRef} from "react";

function UseStateDemo(){
  const [count,setCount] = useState(0);
  return(
    <div>
      <h2>useState 실습</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
       <button onClick={() => setCount(count + 1)}>+</button>

    </div>
  );

}

function useEffectDemo(){
  const [count,setCount] = useState(0);
  useEffect(()=> {
    console.log("페이지에 접속하셨습니다.");
  },[]);
  useEffect(()=>{
    console.log("count 변경됨:",count);
  }, [count]);
  return(
    <div>
      <h2>useEffect 실습</h2>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  );
}

function useReducerDemo(){
  function reducer(state,action){
    switch(action.type){
      case "increment":
        return state+1;
      case "decrement":
        return state -1;
      case "reset":
        return 0;
      default:
        return state;
    }
  }
  const [count,dispatch] = useReducer(reducer,0);
  return(
    <div>
      <h2>useReducer 실습</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "reset"})}>reset</button>
      
    </div>
  )
}

function FormDemo(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const isEmailValid = email.includes("@");

  const handleSubmit = () => {
    const enteredEmail = emailRef.current.value;
    const enteredPw = passwordRef.current.value;

    if(!enteredEmail || !enteredPw){
      alert("빈 칸이 있습니다!");
      return;
    }
    console.log("이메일", enteredEmail);
    console.log("비밀번호:", enteredPw);
  };
  return(
    <div>
      <h2>Form 실습</h2>
      <h4>Controlled Form</h4>
      <input
          type = "text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
      <input
          type = "email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{borderColor: isEmailValid ? "black" : "red"}}
          />
          <h4>Uncontrolled Form</h4>
          <input type = "text" placeholder="이메일" ref = {emailRef}/>
          <input type = "password" placeholder="비밀번호" ref = {passwordRef} />
          <button onClick={handleSubmit}>로그인</button>
    </div>
  )
}

function App(){
  const [tab,setTab] = useState("useState");

  return(
    <div style={{padding: 24}}>
      <h1>React Hook & From 통합 실습</h1>
      <div style={{marginBottom: 16}}>
        <button onClick= {() => setTab("useState")}>useState</button>
        <button onClick= {() => setTab("useEffect")}>useEffect</button>
        <button onClick= {() => setTab("useReducer")}>useReducer</button>
        <button onClick= {() => setTab("form")}>Form</button>
      </div>
      {tab === "useState" && <UseStateDemo/>}
      {tab === "useEffect" && <UseEffectDemo/>}
      {tab === "useReducer" && <UseReducerDemo/>}
      {tab === "Form" && <FormDemo/>}
    </div>
  );
}

export default App;