import { useState } from "react";
import { Nav } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import navbarlogo from "../../navbarlogo.png";
import ProfileCard from "../Cards/ProfileCard";
import { FaUsers, FaUserTie } from "react-icons/fa";

import "./Navbar.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <div
    //   className="bg-light min-vh-100 p-3 position-fixed shadow"
    //   style={{
    //     zIndex: 1000,
    //     right: 0,
    //     top: 0,
    //     width: "inherit",
    //     backgroundColor: "#1e293b",
    //   }}
    // >
    //   <Container
    //     fluid
    //     dir="rtl"
    //     style={{ margin: 0 }}
    //     className="p-0 m-0 bg-dark"
    //   >
    //     <Row className="g-0">
    //       {/* Sidebar Column */}
    //       <Col
    //         xs={3}
    //         md={2}
    //         className=" min-vh-100 p-3 position-fixed shadow p-0 m-0"
    //         style={{
    //           zIndex: 1000,
    //           right: 0,
    //           top: 0,
    //           backgroundColor: "#F8F9FA",
    //           backgroundColor: "#ffff",
    //         }}
    //       >
    //         <div className="text-dark fs-4 fw-bold mb-4 ">
    //           <div className="d-flex align-items-center justify-content-center gap-2 ">
    //             <img
    //               src={LogoImg}
    //               style={{
    //                 width: "150px",
    //                 height: "150px",

    //                 objectFit: "cover",
    //               }}
    //             />
    //           </div>

    //           <h2 className="m-0 fs-3 fw-bold">دار كيراز ارسلان</h2>
    //           {/* دار كيراز ارسلان */}
    //         </div>
    //         <Nav className="flex-column">
    //           <Nav.Link
    //             href="/home"
    //             className=" custom-nav-link rounded-2 d-flex align-items-center gap-2 mb-1 text-dark py-2"
    //             style={{ color: "#717986" }}
    //           >
    //             <IoIosAddCircle style={{ color: "#717986" }} /> اضافة يتيم جديد
    //           </Nav.Link>
    //           <Nav.Link
    //             href="/data"
    //             className=" custom-nav-link rounded-2 d-flex align-items-center gap-2 mb-1 text-dark py-2"
    //             style={{ color: "#717986" }}
    //           >
    //             <FaChildren style={{ color: "#717986" }} /> كل الايتام
    //           </Nav.Link>
    //           <Nav.Link
    //             href="#settings"
    //             className="custom-nav-link rounded-2 d-flex align-items-center gap-2 mb-1 text-dark py-2"
    //             style={{ color: "#717986" }}
    //           >
    //             <FaUser style={{ color: "#717986" }} /> الموظفين
    //           </Nav.Link>
    //         </Nav>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    // <>
    //   {/* زر القائمة للموبايل يظهر فقط في الشاشات الصغيرة ويختفي في الـ Desktop (d-md-none) */}
    //   <div className="d-md-none p-3 bg-white shadow-sm d-flex justify-content-between align-items-center" style={{ position: "fixed", top: 0, right: 0, left: 0, zIndex: 1050 }}>
    //     <button
    //       onClick={toggleNavbar}
    //       className="btn btn-light border"
    //       style={{ fontSize: "20px" }}
    //     >
    //       {isOpen ? <FaTimes /> : <FaBars />}
    //     </button>
    //     <span className="fw-bold" dir="rtl">دار كيراز أرسلان</span>
    //   </div>

    //   {/* الـ Navbar الأساسية */}
    //   <div
    //     className={`bg-light min-vh-100 p-3 shadow-sm ${isOpen ? "d-block" : "d-none"} d-md-block`}
    //     style={{
    //       zIndex: 1040,
    //       right: 0,
    //       top: 0,
    //       position: "fixed",
    //       width: "250px", // يمكنك تحديد عرض ثابت للـ sidebar لكي لا تغطي الشاشة كاملة
    //       backgroundColor: "#ffffff",
    //       // تأثير انتقال سلس في الموبايل
    //       transition: "0.3s ease-in-out"
    //     }}
    //   >
    //     <Container fluid dir="rtl" className="p-0 m-0 bg-white">
    //       <Row className="g-0">
    //         <Col xs={12} md={12} className="min-vh-100 p-0 m-0">

    //           {/* اللوغو والعنوان */}
    //           <div className="text-dark fs-4 fw-bold mb-4 text-center">
    //             <div className="d-flex align-items-center justify-content-center gap-2">
    //               <img
    //                 src={LogoImg}
    //                 style={{
    //                   width: "100px",
    //                   height: "100px",
    //                   objectFit: "cover",
    //                   borderRadius: "50%"
    //                 }}
    //               />
    //             </div>
    //             <h2 className="m-0 fs-5 fw-bold mt-2">دار كيراز أرسلان</h2>
    //           </div>

    //           {/* الروابط */}
    //           <Nav className="flex-column">
    //             <Nav.Link
    //               href="/home"
    //               onClick={() => setIsOpen(false)} // لغلق القائمة عند الضغط على الرابط في الموبايل
    //               className="custom-nav-link rounded-2 d-flex align-items-center gap-2 mb-1 text-dark py-2"
    //               style={{ color: "#717986" }}
    //             >
    //               <IoIosAddCircle style={{ color: "#717986" }} /> اضافة يتيم جديد
    //             </Nav.Link>

    //             <Nav.Link
    //               href="/data"
    //               onClick={() => setIsOpen(false)}
    //               className="custom-nav-link rounded-2 d-flex align-items-center gap-2 mb-1 text-dark py-2"
    //               style={{ color: "#717986" }}
    //             >
    //               <FaChildren style={{ color: "#717986" }} /> كل الايتام
    //             </Nav.Link>

    //             <Nav.Link
    //               href="#settings"
    //               onClick={() => setIsOpen(false)}
    //               className="custom-nav-link rounded-2 d-flex align-items-center gap-2 mb-1 text-dark py-2"
    //               style={{ color: "#717986" }}
    //             >
    //               <FaUser style={{ color: "#717986" }} /> الموظفين
    //             </Nav.Link>
    //           </Nav>

    //         </Col>
    //       </Row>
    //     </Container>
    //   </div>
    // </>
    <>
      {/* الشريط العلوي الثابت للموبايل */}
      <div
        className="d-md-none p-3 bg-white shadow-sm d-flex justify-content-between align-items-center w-100"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 1030,
          direction: "rtl",
          height: "70px",
          
        }}
      >
        <div className="d-flex align-items-center gap-2">
          <ProfileCard />
          <span className="fw-bold fs-5">دار كيراز أرسلان</span>
        </div>

        <button
          onClick={toggleNavbar}
          className="btn btn-light border"
          style={{ fontSize: "20px" }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div
          className="d-md-none"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: "90px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1040,
                overflowY: "auto",
           
          }}
        />
      )}
     {/* //هذا البرتقالي */}
      <div
        className={`  ${isOpen ? "d-block" : "d-none"} d-md-block`}
        style={{
          zIndex: 1050,
          position: isOpen?"fixed":"",
          right: 0,
          top: "90px",
          
          width: "225px",
          backgroundColor: "#fcf8f2",
          transition: "0.3s ease-in-out",
          overflowY: "auto",
          height:"100vh"
        }}
      >
        <div className="d-md-none d-flex justify-content-start mb-2">
          <button
            onClick={() => setIsOpen(false)}
            className="btn btn-sm btn-light border"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div
          className="sidebar-menu d-flex flex-column align-items-center py-4 px-3 w-100 h-100"
          dir="rtl"
        >
         
          <div className="text-center mb-4">
        
            <img src={navbarlogo} style={{width:"150px",height:"150px"}} alt="unfound"/>
          </div>

          {/* الروابط والأيقونات */}
          <Nav className="flex-column w-100 gap-2">
            <Nav.Link
              href="/home"
              className="sidebar-item rounded-3 d-flex align-items-center gap-3 px-3 py-2 text-dark text-decoration-none"
            >
              <IoIosAddCircle size={20} className="sidebar-icon" />
              <span className="fw-semibold sidebar-text">اضافة يتيم جديد</span>
            </Nav.Link>

            <Nav.Link
              href="/data"
              className="sidebar-item rounded-3 d-flex align-items-center gap-3 px-3 py-2 text-dark text-decoration-none"
            >
              <FaUsers size={20} className="sidebar-icon" />
              <span className="fw-semibold sidebar-text">كل الأيتام</span>
            </Nav.Link>

            <Nav.Link
              href="#employees"
              className="sidebar-item rounded-3 d-flex align-items-center gap-3 px-3 py-2 text-dark text-decoration-none"
            >
              <FaUserTie size={20} className="sidebar-icon" />
              <span className="fw-semibold sidebar-text">الموظفين</span>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
