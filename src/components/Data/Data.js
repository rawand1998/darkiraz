import{ useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import Table from "react-bootstrap/Table";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Col, Row, Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import StaticsCard from "../StasticsCard/StaticsCard";
import { FaEye } from "react-icons/fa";
import Editing from "../Updates/Editing";
const Data = () => {
  const [data, setData] = useState([]); //تتغير عن البحث
  const [originalData, setOriginalData] = useState([]); //تظل ثابتة
  const [filterAge, setFilterAge] = useState("all");
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage=5;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

const [showEditModal, setShowEditModal] = useState(false);
const [selectedOrphan, setSelectedOrphan] = useState(null);
const handleOpenEdit = (item) => {
  setSelectedOrphan(item); // تخزين بيانات اليتيم الحالي
  setShowEditModal(true); }
   // إظهار الـ Pop-up

  const removeData = async (id) => {
    const dataRef = doc(db, "orphones", id);
    try {
      await deleteDoc(dataRef);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing data: ", error);
    }
  };
  const handleSearch = async () => {
    try {
      // setData((prevData) =>
      //   prevData.filter((item) =>
      //   // item?.orphonename && item?.orphonename.toLowerCase().includes(searchName.toLowerCase()),
      //     item.orphone.orphonename.toLowerCase().includes(searchName.toLowerCase()),
      //     // console.log(item.orphone.orphonename.toLowerCase().includes(searchName.toLowerCase()))
      //   ),
      // );
      // setSearchName("");
      const filteredData = originalData.filter(
        (item) =>
          item?.orphone.orphonename &&
          item.orphone.orphonename
            .toLowerCase()
            .includes(searchName.toLowerCase()),
      );
      setData(filteredData); //تحديث البيانات المعروضة
    } catch (error) {
      console.error("Error removing data: ", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataQuery = await getDocs(collection(db, "orphones"));

        const dataList = dataQuery.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataList);
        setOriginalData(dataList);
        console.log(dataList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  try {
  } catch (error) {
    console.error("Error removing data: ", error);
  }

  return (
    <div className="container" dir="rtl">
     
    
      <StaticsCard />

      <div
        className="mb-4 bg-white rounded "
        dir="rtl"
        style={{ paddingRight: "2%", paddingBottom: "3%" }}
      >
        <Row className="g-3 align-items-end" style={{ marginTop: "2%" }}>
          <Col md={3} sm={12}>
            <Form.Group>
              <Form.Label className="fw-bold text-dark">
                حالة الفلتر
              </Form.Label>
              <Form.Select
                onChange={(e) => setFilterAge(e.target.value)}
                value={filterAge}
              >
                <option value="all">الجميع</option>
                <option value="above10">العمر اكبر من 10</option>
                <option value="under10">العمر اقل من 10</option>
                <option value="مبيت">مبيت</option>
                <option value="رعاية يومية">رعاية يومية</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6} sm={12}>
            <Form.Group>
              <Form.Label className="fw-bold text-dark mb-1">
                {" "}
                البحث
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="shadow-none"
                  placeholder="ابحث عن اسم الطفل ثلاثي"
                />
                <Button
                  
                  type="submit"
                  onClick={() => handleSearch()}
                  className="me-2"
           style={{ backgroundColor:"#115E59" ,border:"none"}}
                >
                  <i className="bi bi-search">بحث</i>
                </Button>
              </InputGroup>

              {/* </Form.Control> */}
            </Form.Group>
          </Col>
        </Row>
      </div>
<div className="table-responsive">
   <Table className="table align-middle text-nowrap">
        <thead className="table-secandary" style={{backgroundColor:"#115E59",color:"#ffffff"}}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">اسم الطفل</th>
            <th scope="col">رقم الهوية</th>
            <th scope="col">الحالة</th>
            <th scope="col"> اسم الوصي</th>
            <th scope="col">رقم الجوال</th>
            <th scope="col">تاريخ الانضمام </th>
            <th scope="col"> </th>
            <th scope="col"> </th>
            <th scope="col"> </th>
            <th scope="col"> </th>
          </tr>
        </thead>
        {/* table-group-divider */}
        <tbody className="bg-white">
          {currentData
            .filter((item) => {
              if (filterAge === "all") return true;
              const brithYear = item.orphone.brithday
                ? new Date(item.orphone.brithday).getFullYear()
                : null;
              const currentYear = new Date().getFullYear();
              const age = brithYear ? currentYear - brithYear : null;
              item.age = age; // Assign the calculated age to the item object
              if (filterAge === "above10") return age > 10;
              if (filterAge === "under10") return age < 10;
              if (filterAge === "مبيت")
                return item.orphone.careState === "مبيت";
              if (filterAge === "رعاية يومية")
                return item.orphone.careState === "رعاية يومية";
              return true;
            })
            .map((item, index) => (
              <tr key={item.id || index} className="bg-white">
                <th>{index + 1}</th>
                <td>{item.orphone.orphonename}</td>
                <td>{item.orphone.orphanId}</td>
                <td>
                  {item.orphone.careState === "مبيت" ? (
                    <span className="badge bg-info-subtle  text-info-emphasis px-3 py-2 rounded-pill fw-semibold"
                    style={{backgroundColor:"#0D484E"}} >مبيت</span>
                  ): item.orphone.careState === "رعاية يومية" ? (
                    <span className="badge  bg-secondary-subtle text-secondary px-3 py-2 rounded-pill fw-semibold" style={{backgroundColor:"#198754"}} >رعاية يومية</span>
                  ) : null}
                </td>
                <td>{item.responsiborDetails.responsibor}</td>
                <td>{item.responsiborDetails.phone}</td>
                <td>{item.responsiborDetails.joinDate}</td>

                <td>
                  {/* <MdDelete /> */}
                  <Link to={`/allData/${item.id}`}>
                  
                    <FaEye color="#4A9DFE" />
                  </Link>{" "}
                </td>
                <td>
                  <CiEdit color="#718096" onClick={()=>handleOpenEdit(item)}/>
                </td>
                <td>
                  <Link to="/allData"></Link>
                </td>

                {/* <button onClick={() => removeData(item.id)}></button>
              <button></button> */}
              </tr>
            ))}
        </tbody>
      </Table>
</div>
     

   <div className="d-flex justify-content-between align-items-center mt-3 px-2">
  <span className="text-muted">
    عرض {startIndex + 1} إلى {Math.min(startIndex + itemsPerPage, data.length)} من إجمالي {data.length}
  </span>

  <div className="btn-group" dir="ltr">
    {/* زر السهم السابق */}
    <button
      className="btn btn-outline-primary btn-sm"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((prev) => prev - 1)}
    >
      &laquo; السابق
    </button>

    {/* أرقام الصفحات */}
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        className={`btn btn-sm ${currentPage === index + 1 ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => setCurrentPage(index + 1)}
      >
        {index + 1}
      </button>
    ))}

    {/* زر السهم التالي */}
    <button
      className="btn btn-outline-primary btn-sm"
      disabled={currentPage === totalPages || totalPages === 0}
      onClick={() => setCurrentPage((prev) => prev + 1)}
    >
      التالي &raquo;
    </button>
  </div>
</div>
 <Editing 
  show={showEditModal}
  handleClose={() => setShowEditModal(false)}
  orphanData={selectedOrphan}
  dataForm={data}
  setDataForm={setData}
  onUpdateSuccess={() => {
    // دالة إعادة جلب البيانات أو تحديث الجدول بعد الحفظ الناجح
    // fetchData(); 
  }}/>
    </div>
   
  );
};
export default Data;
