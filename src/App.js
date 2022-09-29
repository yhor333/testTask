import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import ListPage from "./pages/ListPage/ListPage";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<ListPage />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
