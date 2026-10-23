import React from 'react'
import './Header.css'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { FaHome,FaFileAlt,FaUsers,FaBell,FaSearch } from 'react-icons/fa'
import ProfileCard from '../Cards/ProfileCard'
function Header() {
  return (
//  <Navbar expand="lg" className="custom-app-header p-0 w-100" dir="rtl">
//       <Container fluid className="px-3 py-2 d-flex align-items-center justify-content-between">   
//         <Nav className="d-flex align-items-center gap-4 m-0 p-0 flex-row flex-nowrap">
//           <Nav.Link href="#home" className="d-flex align-items-center gap-2 text-white active">
//             <FaHome size={18} />
//             <span className="fw-semibold">الرئيسية</span>
//           </Nav.Link>
//           <Nav.Link href="#reports" className="d-flex align-items-center gap-2  text-white">
//             <FaFileAlt size={18} />
//             <span className="fw-semibold">التقارير</span>
//           </Nav.Link>
//           <Nav.Link href="#employees" className="d-flex align-items-center gap-2 text-white">
//             <FaUsers size={18} />
//             <span className="fw-semibold">الموظفين</span>
//           </Nav.Link>
//         </Nav>

//         <div className="header-center-title text-center">
//           <h4 className="m-0 text-white fw-bold"> دار كيراز ارسلان</h4>
//         </div>

//         <div className="d-flex align-items-center gap-3">
        

        
//           <div className=" d-md-inline d-md-flex d-flex align-items-center gap-2 text-white ps-3 ms-1 ">
          
//             <ProfileCard/>
//           </div>
//         </div>

//       </Container>
//     </Navbar> 
<Navbar expand="lg" className="custom-app-header p-0 w-100" dir="rtl">
      <Container fluid className="px-2 py-2 d-flex align-items-center justify-content-between flex-nowrap">
        
        {/* القوائم بجانب بعضها دائماً (أفقي) مع تصغير المسافات في الموبايل */}
        <Nav className="d-flex flex-row align-items-center gap-1 gap-md-3 m-0 p-0 flex-nowrap">
          <Nav.Link href="#home" className="d-flex align-items-center gap-1 text-white active p-1">
            <FaHome size={16} />
            <span className="fw-semibold small-text d-none d-sm-inline">الرئيسية</span>
          </Nav.Link>

          <Nav.Link href="#reports" className="d-flex align-items-center gap-1 text-white p-1">
            <FaFileAlt size={16} />
            <span className="fw-semibold small-text d-none d-sm-inline">التقارير</span>
          </Nav.Link>

          <Nav.Link href="#employees" className="d-flex align-items-center gap-1 text-white p-1">
            <FaUsers size={16} />
            <span className="fw-semibold small-text d-none d-sm-inline">الموظفين</span>
          </Nav.Link>
        </Nav>

        {/* عنوان الهيدر في المنتصف */}
        <div className="header-center-title text-center px-1 mx-auto">
          <h5 className="m-0 text-white fw-bold text-truncate" style={{ fontSize: 'clamp(13px, 2.5vw, 18px)' }}>
            دار كيراز أرسلان
          </h5>
        </div>

        {/* ProfileCard تختفي تماماً في الموبايل وتظهر في الشاشات المتوسطة والكبيرة */}
        <div className="d-none d-md-flex align-items-center text-white flex-shrink-0">
          <ProfileCard />
        </div>

      </Container>
    </Navbar>
  )
}

export default Header