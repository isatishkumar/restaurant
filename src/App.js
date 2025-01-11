import './App.css';
import Header from './components/header/Header';
import Main from './components/homepage/Main';
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router';
import NotFound from './components/common/NotFound';
import BookingPage from './components/BookingPage/BookingPage';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/reservations' element={<BookingPage/>}/>
       {/* 404 Route */}
       <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
