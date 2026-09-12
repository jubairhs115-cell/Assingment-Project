import { Suspense } from "react"
import Banner from "./Banner"
import Nav from "./Nav"

 

function App() {
  
  return (
    <>

    <Suspense fallback={<p>Loading...</p>}>
 <Nav/>
        <Banner/>

    </Suspense>
       
    </>
  )
}

export default App
