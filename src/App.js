import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";

import Data from "./components/Data/Data";
//import Contacts from './components/Contacts/Contacts'
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
//import Error from './components/Error'
// import AuthProvider from "./context/AuthContext";
import {AuthProvider} from "./context/AuthProvider";
import RequiredAuth from "./context/RequiredAuth";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Row, Col } from "react-bootstrap";
import AllData from './components/AllDtat/AllData'
import Header from "./components/Header/Header";

function App() {
  function AppContent(){
    const location = useLocation();
    const hideNavBar = location.pathname === "/login";
    return(
  //     <Row>
  //       <Col md={hideNavBar?12:10}>
  // <Routes>
  //               <Route path="/login" element={<Login />} />
  //               <Route path="/register" element={<Register />} />
  //               <Route path="/forgetpassword" element={<ForgetPassword />} />

  //               <Route path="/data" element={<RequiredAuth><Data /></RequiredAuth>} />
  //               <Route path="/home" element={<RequiredAuth><Home /></RequiredAuth>} />
  //               <Route path="*" element={<RequiredAuth><Home /></RequiredAuth>} />
  //               <Route path="/allData/:id" element={<RequiredAuth><AllData /></RequiredAuth>} />
  //             </Routes>
  //       </Col>
  //       {!hideNavBar && (<Col md={2}>
  //         <Navbar />
  //       </Col>)}
  //     </Row>
<div className="app-wrapper w-100 min-vh-100 p-0 m-0">
      {/* 1. الهيدر في أعلى الشاشة تماماً بعرض 100% */}
      {!hideNavBar && <Header />}

      {/* 2. الصف الرئيسي للمحتوى والنافبار الجانبي أسفل الهيدر مباشرة */}
      <Row className="w-100 m-0 flex-nowrap">
        {/* محتوى الصفحات */}
        <Col md={hideNavBar ? 12 : 10} className="p-0">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/data" element={<RequiredAuth><Data /></RequiredAuth>} />
            <Route path="/home" element={<RequiredAuth><Home /></RequiredAuth>} />
            <Route path="*" element={<RequiredAuth><Home /></RequiredAuth>} />
            <Route path="/allData/:id" element={<RequiredAuth><AllData /></RequiredAuth>} />
          </Routes>
        </Col>

        {/* القائمة الجانبية (Navbar) تصبح تحت الهيدر على اليمين */}
        {!hideNavBar && (
          <Col md={2} className="p-0 border-start">
            <Navbar />
          </Col>
        )}
      </Row>
    </div>
    )
    
  }
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F8F7FA",overflowX: "hidden" }}>
      <AuthProvider>
        <BrowserRouter>
          <Row>
       
<AppContent/>
            
          </Row>
        </BrowserRouter>
      </AuthProvider>
    </div>

  );
}
export default App;
