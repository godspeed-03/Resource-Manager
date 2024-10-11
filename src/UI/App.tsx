import { useEffect } from "react";


function App() {

  useEffect (() => {
window.electron.SubscribeStatics(stats => console.log(stats));
  }, [])



  return (
    <>
      <div>AppWindow it is new  changes   </div>
      <p>yeah its showing</p>
    </>
  )
}

export default App
