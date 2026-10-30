import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
const Data = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("ID from URL:", id, data); // تحقق من الـ id القادم من الرابط
  useEffect(() => {
    if (!id || id === "undefined" || id === "null") {
      console.log("cndhbfc");
      return;
    }
    const fetchData = async () => {
      try {
        const docRef = doc(db, "orphones", id);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [id]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  try {
  } catch (error) {
    console.error("Error removing data: ", error);
  }
  const handleDelete = async () => {
    if (!id) {
      alert("لا يوجد");
      return;
    }
    const confirmDelete = window.confirm(
      "هل أنت متأكد أنك تريد حذف هذا اليتيم؟",
    );
    if (!confirmDelete) {
      return; // إذا لم يؤكد المستخدم، لا نفعل شيئًا
    }
    try {
      await deleteDoc(doc(db, "orphones", id));
      alert("تم حذف اليتيم بنجاح.");
      navigate("/data");
    } catch (error) {
      // إعادة التوجيه إلى الصفحة الرئيسية بعد الحذف}
      console.error("Error deleting document: ", error);
    }
  };
  return (
    <>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div className="container py-4" dir="rtl">
          {/* عنوان الصفحة */}
          <div className=" container  py-4 mb-4 mt-5 mt-md-0 d-flex justify-content-between align-items-center">
            <h3 className="fw-bold text-dark">تفاصيل اليتيم </h3>

            <Button
              variant="danger"
              className="fw-bold"
              onClick={() => handleDelete()}
            >
              حذف اليتيم
            </Button>
          </div>
          
 <div className="row g-4 mb-4 px-3 justify-content-center">
            <div className="col-md-5">
              <div
                className="card  border-0 h-100"
                style={{ boxShadow: "0px 1px 10px 1px #2A9D8F" }}
              >
                <div
                  className="card-header  d-flex justify-content-between align-items-center py-3"
                  style={{ backgroundColor: "#115E59" }}
                >
                  <h5 className="mb-0 fw-bold text-dark text-white">
                    معلومات اليتيم
                  </h5>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4 border-bottom pb-3">
                    <img
                      src={
                        data?.orphone?.image || "https://via.placeholder.com/80"
                      }
                      alt="صورة اليتيم"
                      className="rounded-circle border"
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="ms-3 me-3 ">
                      <h6 className="mb-1 text-muted" dir="rtl">
                        اليتيم
                      </h6>
                      <h5 className="fw-bold mb-0">
                        {data?.orphone?.orphonename || "لا يوجد"}
                      </h5>
                    </div>
                  </div>

                  <table className="table table-borderless align-middle mb-0">
                    <tbody>
                      <tr>
                        <td className="text-muted text-end">الهوية</td>
                        <td className=" text-start">
                          {data?.orphone?.orphanId || "لا يوجد"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-end fw-semibold">
                          تاريخ الميلاد
                        </td>
                        <td className=" text-start">
                          {data?.orphone?.brithday || "لا يوجد"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-end fw-semibold">
                          مكان الميلاد
                        </td>
                        <td className=" text-start">
                          {data?.orphone?.brithdayPlace || "لا يوجد"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-end fw-semibold">
                          الحالة
                        </td>
                        <td className="text-start">
                          <span
                            className="badge"
                            style={{ backgroundColor: "#115E59" }}
                          >
                            {data?.orphone?.careState || "لا يوجد"}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-end fw-semibold">
                          {" "}
                          السنة الدراسية
                        </td>
                        <td className=" text-start">
                          {data?.orphone?.studyLevel || "gh"}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-end">تاريخ الانضمام</td>
                        <td className=" text-start">
                          {data?.responsiborDetails?.joinDate || "gh"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* ))} */}
            </div>

            <div className="col-md-5">
              <div
                className="card  border-0 h-100"
                style={{ boxShadow: "0px 1px 10px 1px #51ada7" }}
              >
                <div
                  className="card-header  d-flex justify-content-between align-items-center py-3"
                  style={{ backgroundColor: "#FCF8F2" }}
                >
                  <h5 className="mb-0 fw-bold " style={{color:"#115E59"}}>
                    معلومات الوصي
                  </h5>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4 border-bottom pb-3">
                    <div className="ms-3 me-3 ">
                      <h6 className="mb-1 text-muted" dir="rtl">
                        اسم الوصي 
                      </h6>
                      <h5 className="fw-bold mb-0">
                        {data?.responsiborDetails?.responsibor}
                      </h5>
                    </div>
                  </div>
                  <table className="table table-borderless align-middle mb-0">
                    <tbody>
                      <tr>
                        <td className="text-muted text-end">هوية الوكيل</td>
                        <td className="text-start">
                          {data?.responsiborDetails?.responsiborId}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-end">صلة القرابة</td>
                        <td className=" text-start">
                          {data?.responsiborDetails?.relative}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-end">مهنة الوكيل</td>
                        <td className=" text-start">
                          {data?.responsiborDetails?.responsiborJob}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-end">رقم الجوال</td>
                        <td className=" text-start">
                          {data?.responsiborDetails?.phone}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-muted text-end">
                          رقم الجوال البديل
                        </td>
                        <td className=" text-start">
                          {data?.responsiborDetails?.alternativePhone}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>

          {/* القسم العلوي: معلومات اليتيم ومعلومات الوكيل */}
         
          {/* القسم السفلي: جدول سجل العهد */}
          <div className="container py-4" dir="rtl">
            <div className="card shadow-sm border-0 rounded-3">
              <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
                <h5 className="fw-bold mb-0 text-dark">سجل اليتيم</h5>
                {/* <button className="btn btn-sm btn-putline-primary btn-primary px-4 fw-semibold rounded-pill shadow-sm">تعديل</button> */}
              </div>

              <div className="card-body p-4">
                {/* <div className="mb-4">
                  <h6 className="fw-bold text-primary mb-3">بيانات الطفل</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered align-middle text-center m-0">
                      <thead className="table-light">
                        <tr>
                          <th>اسم الطفل</th>
                          <th>الهوية</th>
                          <th> تاريخ الميلاد</th>
                          <th>مكان الميلاد</th>
                          <th>الحالة </th>
                          <th>السنة الدراسية</th>
                          <th>تاريخ الانضمام</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="fw-semibold">
                            {data?.orphone?.orphonename || "لا يوجد"}
                          </td>
                          <td>
                            <span class="badge bg-light text-dark border fs-6">
                              {data?.orphone?.orphanId || "لا يوجد"}
                            </span>
                          </td>
                          <td> {data?.orphone?.brithday || "لا يوجد"}</td>
                          <td>
                            <span class="badge  text-black px-3 py-2">
                              {data?.orphone?.brithdayPlace || "لا يوجد"}
                            </span>
                          </td>
                             <td>
                            <span class="badge bg-primary-subtle text-black px-3 py-2">
                              {data?.orphone?.careState || "لا يوجد"}
                            </span>
                          </td>
                             <td>
                            <span class="badge text-black px-3 py-2">
                              {data?.orphone?.studyLevel || "لا يوجد"}
                            </span>
                          </td>
                              <td>
                            <span class="badge text-black px-3 py-2">
                              {data?.responsiborDetails?.joinDate || "لا يوجد"}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
    {/* <div className="mb-4" >
                  <h6 className="fw-bold text-primary mb-3">بيانات الوصي</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered align-middle text-center m-0" >
                      <thead>
                        <tr>
                          <th>اسم الوصي</th>
                          <th>الهوية</th>
                          <th> صلة القرابة</th>
                          <th>مهنة الوصي</th>
                          <th>رقم الجوال </th>
                          <th>رقم الجوال البديل</th>
                          <th>رقم الجوال الواتس</th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="fw-semibold">
                            {data?.responsiborDetails?.responsibor || "لا يوجد"}
                          </td>
                          <td>
                            <span class="badge bg-light text-dark border fs-6">
                              {data?.responsiborDetails?.responsiborId || "لا يوجد"}
                            </span>
                          </td>
                          <td> {data?.responsiborDetails?.relative || "لا يوجد"}</td>
                          <td>
                            <span class="badge  text-black px-3 py-2">
                              {data?.responsiborDetails?.responsiborJob || "لا يوجد"}
                            </span>
                          </td>
                             <td>
                            <span class="badge  text-black px-3 py-2">
                              {data?.responsiborDetails?.phone || "لا يوجد"}
                            </span>
                          </td>
                             <td>
                            <span class="badge text-black px-3 py-2">
                              {data?.responsiborDetails?.allerativePhone || "لا يوجد"}
                            </span>
                          </td>
                             <td>
                            <span class="badge text-black px-3 py-2">
                              {data?.responsiborDetails?.whatsappPhone || "لا يوجد"}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}

                <div className="mb-4">
                  <h6 className="fw-bold text-primary mb-3">بيانات الأب</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered align-middle text-center m-0">
                      <thead className="table-light">
                        <tr>
                          <th>الاسم</th>
                          <th>الهوية</th>
                          <th>تاريخ الوفاة</th>
                          <th>سبب الوفاة</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="fw-semibold">
                            {data?.familyDetails?.fatherName}{" "}
                          </td>
                          <td>
                            <span class="badge bg-light text-dark border fs-6">
                              {data?.familyDetails?.fatherId}
                            </span>
                          </td>
                          <td>{data?.familyDetails?.dieDate}</td>
                          <td>
                            <span class="badge bg-danger-subtle text-danger px-3 py-2">
                              {data?.familyDetails?.dieReason}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold text-primary mb-3">بيانات الأم</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered align-middle text-center m-0">
                      <thead className="table-light">
                        <tr>
                          <th>الاسم</th>
                          <th>الهوية</th>
                          <th>حالة الأم</th>
                          <th>تاريخ الوفاة</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="fw-semibold">
                            {data?.familyDetails?.motherName}{" "}
                          </td>
                          <td>
                            <span className="badge bg-light text-dark border fs-6">
                              {data?.familyDetails?.motherId}
                            </span>
                          </td>
                          <td>
                            <span className="badge bg-success-subtle text-success px-3 py-2">
                              {data?.familyDetails?.motherState}
                            </span>
                          </td>
                          <td className="text-muted">
                            {" "}
                            {data?.familyDetails?.motherdieDate || "____"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h6 className="fw-bold text-primary mb-3">بيانات إضافية</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered align-middle text-center m-0">
                      <thead className="table-light">
                        <tr>
                          <th>حالة المنزل</th>
                          <th>الحالة المعيشية</th>
                          <th>عدد الأخوة</th>
                          <th>عدد الأخوات</th>
                          <th>عدد الوفيات في العائلة</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{data?.familyDetails?.homeState}</td>
                          <td>
                            <span className="badge bg-warning-subtle text-warning-emphasis px-3 py-2">
                              {data.familyDetails?.livingState}
                            </span>
                          </td>
                          <td className="fw-bold">
                            {data?.familyDetails?.bothersNumber}
                          </td>
                          <td className="fw-bold text-danger">
                            {data?.familyDetails?.sistersNumber || "____"}
                          </td>
                          <td className="fw-bold text-danger">
                            {data?.familyDetails?.diesFamilyNo || "____"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Data;
