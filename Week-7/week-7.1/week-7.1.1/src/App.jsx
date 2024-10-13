import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const Landing = lazy(() => import("./components/Landing"));
const MyNetwork = lazy(() => import("./components/MyNetwork"));
const Jobs = lazy(() => import("./components/Jobs"))

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/mynetwork" element={<MyNetwork />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
