import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import  { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";

import * as XLSX from "xlsx";
const StaticsCard = () => {
  const [data, setData] = useState([]);
  // دالة لدمج البيانات المتداخلة (Maps) وتحويلها إلى أعمدة مسطحة
  const flattenObject = (obj, prefix = "") => {
    let flattened = {};
    for (let key in obj) {
      if (key.toLowerCase() === "image" || key.toLowerCase() === "img") {
          continue;
        }
      if (obj.hasOwnProperty(key)) {
        let name = prefix ? `${prefix}_${key}` : key;
        if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
          Object.assign(flattened, flattenObject(obj[key], name));
        } else {
          flattened[name] = obj[key];
        }
      }
    }
    return flattened;
  };

  const handleExportToExcel = async () => {
    try {
      // 1. جلب جميع المستندات من مجموعة orphones في قاعدة البيانات
      const querySnapshot = await getDocs(collection(db, "orphones"));
      const orphansList = [];

      querySnapshot.forEach((doc) => {
        const rawData = doc.data();
        
        // دمج معرف المستند مع البيانات بعد تفكيك الخرائط الفرعية (familyDetails, orphon, responsiborDetails)
        const flattenedData = flattenObject({
          doc_id: doc.id,
          ...rawData
        });
        
        orphansList.push(flattenedData);
      });

      if (orphansList.length === 0) {
        alert("لا توجد بيانات لتصديرها!");
        return;
      }

      // 2. إنشاء ملف إكسل وتجهيز الورقة
      const worksheet = XLSX.utils.json_to_sheet(orphansList);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "AllOrphansData");

      // 3. تنزيل الملف باسم orphones_complete_data.xlsx
      XLSX.writeFile(workbook, "orphones_complete_data.xlsx");

    } catch (error) {
      console.error("Error exporting data: ", error);
      alert("حدث خطأ أثناء تصدير البيانات.");
    }
  };
 
   useEffect(() => {
      const fetchData = async () => {
        try {
          const dataQuery = await getDocs(collection(db, "orphones"));
          const dataList = dataQuery.docs.map((doc) =>
            doc.data({
              id: doc.id,
              ...doc.data(),
            }),
          );
          setData(dataList);
        
          console.log(dataList, dataQuery);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
      fetchData();
    }, []);
  const mabeetCount = data.filter((item) => item.orphone.careState === "مبيت").length;
  const dailyCareCount = data.filter((item) => item.orphone.careState === "رعاية يومية").length;
  return (
    
    <div>
      <div className="p-3 mt-5 mb-4 bg-white rounded " dir="rtl" >
        <Row className="align-items-end d-flex   align-items-center justify-content-between  rounded-3 ">
          <Col xs="auto">
            <Card.Title className="h1 mb-0 d-flex align-items-center">
              <h4 className="me-2">بيانات الايتام</h4>
            </Card.Title>
          </Col>
          <Col className="text-start d-flex align-content-end gap-2" xs="auto">
           
            <Button
              // variant="outline-primary"
              className="d-flex align-items-center gap-2"
              onClick={handleExportToExcel}
              style={{boxShadow: '0px 1px 10px 1px #2A9D8F',backgroundColor:"#115E59" }}
              > تحميل الملف </Button>
              
          </Col>
        </Row>
      </div>
      <Row className="g-3">
        <Col md={3}>
          <Card className="border-light bg-white h-100 rounded-3 custom-table-card " style={{boxShadow: '0px 1px 10px 1px #A61D2F' }} >
            <Card.Body className="d-flex align-items-center  p-4">
              <div
                className=" rounded-5 p-3"
                style={{ backgroundColor: "#eec2c8" }}
              >
                <FaChildren className="h3 mb-0" style={{ color: "#A61D2F" }} />
              </div>
              <div className="me-3">
                <span className="text-muted d-block mb-1">
                  {" "}
                  اجمالي الايتام
                </span>
                <span className="h4 font-weight-bold">{data.length}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-light bg-white h-100 rounded-3" style={{boxShadow: '0px 1px 10px 1px #6C5CE7' }}>
            <Card.Body className="d-flex align-items-center  p-4">
              <div
                className=" rounded-5 p-3"
                style={{ backgroundColor: "#E0D7F5" }}
              >
                <FaHandHoldingHeart
                  className=" h3 mb-0"
                  style={{ color: "#6C5CE7" }}
                />
              </div>
              <div className="me-3">
                <span className="text-muted d-block mb-1">
                  {" "}
                  اجمالي ايتام المبيت
                </span>
                <span className="h4 font-weight-bold">{mabeetCount}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="border-light bg-white h-100 rounded-3" style={{boxShadow: '0px 1px 10px 1px #fa8ce8' }}>
            <Card.Body className="d-flex align-items-center  p-20">
              <div
                className=" rounded-5 p-3"
                style={{ backgroundColor: "#f7d9ef" }}
              >
                <FaHandHoldingHeart
                  className=" h3 mb-0"
                  style={{ color: "#fa8ce8" }}
                />
              </div>
              <div className="me-3">
                <span className="text-muted d-block mb-1">
                  {" "}
                  اجمالي ايتام الرعاية اليومية
                </span>
                <span className="h4 font-weight-bold">{dailyCareCount}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="border-light bg-white h-100 rounded-3" style={{boxShadow: '0px 1px 10px 1px #2A9D8F' }}>
            <Card.Body className="d-flex align-items-center  p-20">
              <div
                className=" rounded-5 p-3"
                style={{ backgroundColor: "#B8E0D2" }}
              >
                <FaHandHoldingHeart
                  className="h3 mb-0"
                  style={{ color: "#2A9D8F" }}
                />
              </div>
              <div className="me-3">
                <span className="text-muted d-block mb-1"> الكفالات</span>
                <span className="h4 font-weight-bold">0</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default StaticsCard;
