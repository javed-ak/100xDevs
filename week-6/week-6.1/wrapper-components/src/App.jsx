
function App() {

  return (
    <>
    <CardWrapper>
      Hii there
    </CardWrapper>
    <CardWrapper>
      <ChildCardWrapper />
    </CardWrapper>
    </>
  )

  function ChildCardWrapper() {
    return <>
      <div>Hii there, I'm from ChildCardWrapper</div>
    </>
  }

  function CardWrapper({children}) {
    return <>
    <div style={{border: "2px solid black", padding: "20px", margin: "10px"}}>
      {children}
    </div>
    </>
  }

}

export default App
