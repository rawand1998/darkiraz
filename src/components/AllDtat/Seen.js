// import React, { useState, useEffect } from "react";
// import { Col, Row, Modal, Table, Button } from "react-bootstrap";
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   doc,
//   getDoc,
// } from "firebase/firestore";
// import { useParams } from "react-router-dom";
// import { db } from "../../firebase";
// const Data = () => {
//   const [data, setData] = useState(null);
//   const { id } = useParams();
//   console.log("ID from URL:", id, data); // تحقق من الـ id القادم من الرابط
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const docRef = doc(db, "orphones", id);

//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setData({ id: docSnap.id, ...docSnap.data() });
//           console.log("Document raaand:", docSnap.data());
//         }

//         // console.log("Document data:", docSnap.data());

//         // const docSnap = await getDoc(doc(db, "orphones", id));
//         // if(docSnap.exists()) {
//         //   setData(docSnap.data());
//         //   console.log("Document data:", docSnap.data());

//         // }
//         //    else{
//         //     console.log("No such document!");
//         //   }
//         // const dataQuery = await getDocs(collection(db, "orphones",id));
//         // const dataList = dataQuery.docs.map((doc) =>
//         //   doc.data({
//         //     id: doc.id,
//         //     ...doc.data(),
//         //   }),
//         // );
//         // setData(dataQuery);
//         // console.log(dataList, dataQuery);
//         console.log("Data fetched successfully:", data);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };
//     fetchData();
//   }, [id]);

//   try {
//   } catch (error) {
//     console.error("Error removing data: ", error);
//   }
//   if (!data) {
//   }
//   return (
//     <>
//       {!data ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="container py-4" dir="rtl">
//           {/* عنوان الصفحة */}
//           <div className="row mb-4">
//             <div className="col-12 text-end">
//               <h3 className="fw-bold text-secondary">تفاصيل اليتيم </h3>
//             </div>
//           </div>

//           {/* القسم العلوي: معلومات اليتيم ومعلومات الوكيل */}
//           <div className="row g-4 mb-4">
//             <div className="col-md-6">
//               {/* {data.map((item,index)=>( */}
//               <div className="card shadow-sm border-0 h-100">
//                 <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
//                   <h5 className="mb-0 fw-bold text-dark">معلومات اليتيم</h5>
//                   <button className="btn btn-sm btn-primary px-3">طباعة</button>
//                 </div>
//                 <div className="card-body">
//                   {/* صورة اليتيم والاسم الرئيسي */}
//                   <div className="d-flex align-items-center mb-4 border-bottom pb-3">
//                     {/* <img
//                     src="https://via.placeholder.com/80"
//                     alt="صورة اليتيم"
//                     className="rounded-circle border"
//                     style={{
//                       width: "70px",
//                       height: "70px",
//                       objectFit: "cover",
//                     }}
//                   /> */}
//                     <div className="ms-3 me-3 text-start">
//                       <h6 className="mb-1 text-muted" dir="rtl">
//                         اليتيم
//                       </h6>
//                       <h5 className="fw-bold mb-0">
//                         {data?.orphone?.orphonename || "لا يوجد"}
//                       </h5>
//                     </div>
//                   </div>

//                   <table className="table table-borderless align-middle mb-0">
//                     <tbody>
//                       <tr>
//                         <td className="text-muted text-end">الهوية</td>
//                         <td className="fw-semibold text-start">
//                           {data?.orphone?.orphanId || "لا يوجد"}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="text-muted text-end">تاريخ الميلاد</td>
//                         <td className="fw-semibold text-start">
//                           {data?.orphone?.brithday || "لا يوجد"}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="text-muted text-end">مكان الميلاد</td>
//                         <td className="fw-semibold text-start">
//                           {data?.orphone?.brithdayPlace || "لا يوجد"}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="text-muted text-end">الحالة</td>
//                         <td className="fw-semibold text-start">
//                           <span className="badge bg-success">
//                             {data?.orphone?.careState || "لا يوجد"}
//                           </span>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="text-muted text-end"> السنة الدراسية</td>
//                         <td className="fw-semibold text-start">
//                           {data?.orphone.studyLevel || "gh"}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="text-muted text-end">تاريخ الانضمام</td>
//                         <td className="fw-semibold text-start">
//                           {data?.responsiborDetails.joinDate || "gh"}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//               {/* ))} */}
//             </div>

//             {/* بطاقة معلومات الوكيل */}
//             <div className="col-md-6">
//               <div className="card shadow-sm border-0 h-100">
//                 <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
//                   <h5 className="mb-0 fw-bold text-dark">معلومات الوكيل</h5>
//                   <button className="btn btn-sm btn-primary px-3">تعديل</button>
//                 </div>
//                 <div className="card-body">
//                   <div className="d-flex align-items-center mb-4 border-bottom pb-3">
//                     {/* <img
//                     src="https://via.placeholder.com/80"
//                     alt="صورة اليتيم"
//                     className="rounded-circle border"
//                     style={{
//                       width: "70px",
//                       height: "70px",
//                       objectFit: "cover",
//                     }}
//                   /> */}
//                     <div className="ms-3 me-3 text-start">
//                       <h6 className="mb-1 text-muted" dir="rtl">
//                         الوكيل
//                       </h6>
//                       <h5 className="fw-bold mb-0">
//                         {data?.responsiborDetails?.responsibor}
//                       </h5>
//                     </div>
//                   </div>
//                   <table className="table table-borderless align-middle mb-0">
//                     <tbody>
//                       <tr>
//                         <td className="text-muted text-end">هوية الوكيل</td>
//                         <td className="fw-semibold text-start">
//                           {data?.responsiborDetails?.responsiborId}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="text-muted text-end">صلة القرابة</td>
//                         <td className="fw-semibold text-start">
//                           {data?.responsiborDetails?.relative}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="text-muted text-end">مهنة الوكيل</td>
//                         <td className="fw-semibold text-start">
//                           {data?.responsiborDetails?.responsiborJob}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="text-muted text-end">رقم الجوال</td>
//                         <td className="fw-semibold text-start">
//                           {data?.responsiborDetails?.phone}
//                         </td>
//                       </tr>
//                       <tr>
//                         <td className="text-muted text-end">
//                           رقم الجوال البديل
//                         </td>
//                         <td className="fw-semibold text-start">
//                           {data?.responsiborDetails?.alternativePhone}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>

//             {/* بطاقة معلومات اليتيم */}
//           </div>

//           {/* القسم السفلي: جدول سجل العهد */}
//          <div class="container py-4" dir="rtl">
//   <div class="card shadow-sm border-0 rounded-3">
    

//     <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
//       <h5 class="fw-bold mb-0 text-dark">سجل العهد</h5>
//       <button class="btn btn-primary px-4 btn-sm fw-semibold">تعديل</button>
//     </div>

//     <div class="card-body p-4">
      

//       <div class="mb-4">
//         <h6 class="fw-bold text-primary mb-3">بيانات الأب</h6>
//         <div class="table-responsive">
//           <table class="table table-bordered align-middle text-center m-0">
//             <thead class="table-light">
//               <tr>
//                 <th>الاسم</th>
//                 <th>الهوية</th>
//                 <th>تاريخ الوفاة</th>
//                 <th>سبب الوفاة</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td class="fw-semibold">سمير سامي</td>
//                 <td><span class="badge bg-light text-dark border fs-6">900258523</span></td>
//                 <td>2025-11-12</td>
//                 <td><span class="badge bg-danger-subtle text-danger px-3 py-2">شهيد</span></td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

     
//       <div class="mb-4">
//         <h6 class="fw-bold text-primary mb-3">بيانات الأم</h6>
//         <div class="table-responsive">
//           <table class="table table-bordered align-middle text-center m-0">
//             <thead class="table-light">
//               <tr>
//                 <th>الاسم</th>
//                 <th>الهوية</th>
//                 <th>حالة الأم</th>
//                 <th>تاريخ الوفاة</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td class="fw-semibold">سامية</td>
//                 <td><span class="badge bg-light text-dark border fs-6">400258523</span></td>
//                 <td><span class="badge bg-success-subtle text-success px-3 py-2">عايشة</span></td>
//                 <td class="text-muted">—</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

  
//       <div>
//         <h6 class="fw-bold text-primary mb-3">بيانات إضافية</h6>
//         <div class="table-responsive">
//           <table class="table table-bordered align-middle text-center m-0">
//             <thead class="table-light">
//               <tr>
//                 <th>حالة المنزل</th>
//                 <th>الحالة المعيشية</th>
//                 <th>عدد الأخوة</th>
//                 <th>عدد الوفيات في العائلة</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>خيمة</td>
//                 <td><span class="badge bg-warning-subtle text-warning-emphasis px-3 py-2">صعبة</span></td>
//                 <td class="fw-bold">4</td>
//                 <td class="fw-bold text-danger">1</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </div>
//   </div>
// </div>

//         </div>
//       )}
//     </>
//   );
// };
// export default Data;
