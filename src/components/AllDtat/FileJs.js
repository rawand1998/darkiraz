
    // import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // 1. استيراد useParams لالتقاط الـ id من الرابط
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { db } from "../../firebase";
// import { collection, getDocs, deleteDoc, doc,getDoc } from "firebase/firestore";
// استيراد قاعدة بيانات فايربيس (تأكد من صحة مسار الاستيراد لديك)
// import { db } from '../../firebase'; 
// import { doc, getDoc } from 'firebase/firestore';

// function AllData() {
  // 2. التقاط الـ id من الـ URL (الرابط)
  // const { id } = useParams();

  // تخزين بيانات اليتيم الواحد كـ كائن (Object) وليس مصفوفة
  // const [orphanData, setOrphanData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchOrphanById = async () => {
  //     try {
        
          // // 3. الطريقة الصحيحة لجلب مستند واحد من Firestore باستخدام الـ id:
          // const docRef = doc(db, "orphones", id); // استبدل "orphans" باسم الـ collection لديك
          // console.log("Document data:", docRef);
          // const docSnap = await getDoc(docRef);
          // if (docSnap.exists()) {
          //   setOrphanData(docSnap.data());
          //   console.log("hiiii",docSnap.data())
          // } else {
          //   console.log("No such document!");
          // }
        

        // محاكاة بيانات تجريبية بناءً على الـ id القادم من الرابط
        // setOrphanData({
        //   orphonename: "سمير سمير",
        //   orphanId: id, // يتم عرض الـ ID القادم من الرابط هنا
        //   brithday: "2020-11-12",
        //   brithdayPlace: "غزة",
        //   status: "نشط",
        //   joinDate: "2026-01-08",
        //   agentName: "سامية",
        //   agentId: "40005595",
        //   relation: "أم",
        //   job: "لا عمل",
        //   phone: "123456789",
        //   altPhone: "123456789"
        // });

  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching orphan data: ", error);
  //       setLoading(false);
  //     }
  //   };

  //   if (id) {
  //     fetchOrphanById();
  //   }
  // }, [id]);

  // if (loading) {
  //   return (
  //     <div className="text-center py-5" dir="rtl">
  //       <div className="spinner-border text-secondary" role="status">
  //         <span className="visually-hidden">جاري التحميل...</span>
  //       </div>
  //     </div>
  //   );
  // }

  // if (!orphanData) {
  //   return <div className="text-center py-5 text-danger" dir="rtl">عذراً، لم يتم العثور على بيانات لهذا اليتيم.</div>;
  // }

  // return (
  //   <div>hi</div>
    // <div className="container py-4" dir="rtl">
    //   {/* عنوان الصفحة */}
    //   <div className="row mb-4">
    //     <div className="col-12 text-end">
    //       <h3 className="fw-bold text-secondary">تفاصيل اليتيم</h3>
    //     </div>
    //   </div>

    //   {/* القسم العلوي: معلومات اليتيم ومعلومات الوكيل */}
    //   <div className="row g-4 mb-4">
    //       {/* بطاقة معلومات اليتيم */}
    //     <div className="col-md-6">
    //       <div className="card shadow-sm border-0 h-100">
    //         <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
    //           <button className="btn btn-sm btn-secondary px-3">طباعة</button>
    //           <h5 className="mb-0 fw-bold text-dark">معلومات اليتيم</h5>
    //         </div>
    //         <div className="card-body">
    //           {/* صورة اليتيم والاسم الرئيسي */}
    //           <div className="d-flex align-items-center mb-4 border-bottom pb-3">
    //             <img 
    //               src="https://via.placeholder.com/80" 
    //               alt="صورة اليتيم" 
    //               className="rounded-circle border" 
    //               style={{ width: '70px', height: '70px', objectFit: 'cover' }}
    //             />
    //             <div className="ms-3 me-3 text-start">
    //               <h6 className="mb-1 text-muted">اليتيم</h6>
    //               <h5 className="fw-bold mb-0">{orphanData.orphonename}</h5>
    //             </div>
    //           </div>

    //           <table className="table table-borderless align-middle mb-0">
    //             <tbody>
    //               <tr>
    //                 <td className="text-muted text-end">الهوية</td>
    //                 <td className="fw-semibold text-start">{orphanData.orphanId}</td>
    //               </tr>
    //               <tr>
    //                 <td className="text-muted text-end">تاريخ الميلاد</td>
    //                 <td className="fw-semibold text-start">{orphanData.brithday}</td>
    //               </tr>
    //               <tr>
    //                 <td className="text-muted text-end">مكان الميلاد</td>
    //                 <td className="fw-semibold text-start">{orphanData.brithdayPlace}</td>
    //               </tr>
    //               <tr>
    //                 <td className="text-muted text-end">الحالة</td>
    //                 <td className="fw-semibold text-start">
    //                   <span className="badge bg-success">{orphanData.careState}</span>
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td className="text-muted text-end">تاريخ الانضمام</td>
    //                 <td className="fw-semibold text-start">{orphanData.joinDate}</td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     </div>
    //     {/* بطاقة معلومات الوكيل */}
    //     <div className="col-md-6">
    //       <div className="card shadow-sm border-0 h-100">
    //         <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
    //           <button className="btn btn-sm btn-secondary px-3">تعديل</button>
    //           <h5 className="mb-0 fw-bold text-dark">معلومات الوكيل</h5>
    //         </div>
    //         <div className="card-body">
    //           <table className="table table-borderless align-middle mb-0">
    //              <tbody>
    //               <tr>
    //                 <td className="text-muted text-end">الوكيل</td>
    //                 <td className="fw-semibold text-start">{orphanData.agentName}</td>
    //               </tr>
    //               <tr>
    //                 <td className="text-muted text-end">هوية الوكيل</td>
    //                 <td className="fw-semibold text-start">{orphanData.agentId}</td>
    //               </tr>
    //               <tr>
    //                 <td className="text-muted text-end">صلة القرابة</td>
    //                 <td className="fw-semibold text-start">{orphanData.relation}</td>
    //               </tr>
    //               <tr>
    //                 <td className="text-muted text-end">مهنة الوكيل</td>
    //                 <td className="fw-semibold text-start">{orphanData.job}</td>
    //               </tr>
    //               <tr>
    //                 <td className="text-muted text-end">رقم الجوال</td>
    //                 <td className="fw-semibold text-start">{orphanData.phone}</td>
    //               </tr>
    //               <tr>
    //                 <td className="text-muted text-end">رقم الجوال البديل</td>
    //                 <td className="fw-semibold text-start">{orphanData.altPhone}</td>
    //               </tr>
    //             </tbody> 
    //           </table>
    //         </div>
    //       </div>
    //     </div>

      

    //   </div>
    // </div>
  // );
// }

// export default AllData;