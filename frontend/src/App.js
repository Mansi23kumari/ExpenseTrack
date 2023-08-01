import React, { useMemo, useState } from "react";
import styled from "styled-components";
import bg from './img/bg.png';
import {MainLayout} from './styles/Layout';
import Orb from './components/orb/Orb';
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income";
import Expense from "./components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const[active,setactive]=useState(1);

 const global= useGlobalContext()
 console.log(global);

  const displayData = () =>{
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
         return <Dashboard/>
      case 3:
          return <Income/>
      case 4:
          return <Expense/>
      default: 
        return <Dashboard/>
    }
  }

  const orbMemo=useMemo(()=>{
    return <Orb/>
  },[])

  return (
    < AppStyled bg={bg} className="App">
      {orbMemo}
    <MainLayout>
      <Navigation active={active} setactive={setactive}/>
      <main>
    {displayData()}
      </main>
    </MainLayout>
    </ AppStyled>
  );
}
const AppStyled = styled.div`{
  height: 100vh;
  background-image: url(${props => props.bg})
  position : relative;
 .main{
  flex:1;
  background: rgba(252,246,249,0.78);
  border: 3px solid #FFFFFF;
  border-radius: 32px;
  overflow-x:hidden;
  &::-webkit-scrollbar{
    width:0;

  }
 }

}
`;
export default App;
