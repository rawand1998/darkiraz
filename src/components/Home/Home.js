import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Card, Row, InputGroup } from "react-bootstrap";
import {
  FaUser,
  FaIdCard,
  FaMapMarkerAlt,
  FaImage,
  FaFileAlt,
  FaGraduationCap,
  FaBook,
  FaPhone
} from "react-icons/fa";
import "./Home.module.css";
export default function Home() {
  const { currentUser } = useAuth();
  const nagigate = useNavigate();
  const [error, setError] = useState("");
  //orphone infromation

  const [orphonename, setOrphoneName] = useState("");
  const [orphanId, setorphanId] = useState("");
  const [brithday, setBrithday] = useState("");
  const [brithdayPlace, setbrithdayPlace] = useState("");
  const [gender, setGender] = useState("");
  const [studyLevel, setStudyLevel] = useState("");
  const [careState, setCareState] = useState("");
  const [image, setImage] = useState(null);
  // Father information
  const [fatherName, setFatherName] = useState("");
  const [fatherId, setFatherId] = useState("");
  const [dieReason, setDieReason] = useState("");
  const [dieDate, setDieDate] = useState("");
  // mother infromation
  const [motherName, setMatherName] = useState("");
  const [motherState, setMathorState] = useState("");
  const [motherId, setMathorId] = useState("");
  const [motherdieDate, setMotherDieDate] = useState("");
  const [bothersNumber, setBrothersNumber] = useState("");
  const [sistersNumber, setSistersNumber] = useState("");
  const [homeState, setHomeState] = useState("");
  const [livingState, setLivingState] = useState("");
  const [address, setAddress] = useState("");
  // const [motherReason, setMotherDieReason] = useState("");
  const [diesFamilyNo, setDiesFamilyNo] = useState("");
  // orphone respon information
  const [responsibor, setResponsibor] = useState("");
  const [responsiborId, setresponsiborId] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsappPhone, setWhatsappPhone] = useState("");
  const [allerativePhone, setAllerativePhone] = useState("");
  const [responsiborJob, setResponsiborJob] = useState("");
  const [relative, setRelative] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const handleImageChange = async (e)=>{
    const file = e.target.files[0];
    if(file){
      try{
        const base64=await convertToBase64(file);
        setImage(base64)

      }catch(error){
console.log("erroer converting image",error)
      }
    }
  }
  const handleData = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        orphone: {
          orphonename: orphonename,
          orphanId: orphanId,
          brithday: brithday,
          brithdayPlace: brithdayPlace,
          studyLevel: studyLevel,
          gender: gender,
          careState: careState,
          image: image,
        },
        familyDetails: {
          fatherName: fatherName,
          fatherId: fatherId,
          dieReason: dieReason,
          dieDate: dieDate,
          motherName: motherName,
          motherId: motherId,
          motherState: motherState,
          motherdieDate: motherdieDate,
          diesFamilyNo: diesFamilyNo,
          bothersNumber: bothersNumber,
          sistersNumber: sistersNumber,
          homeState: homeState,
          livingState: livingState,
          address: address,
        },
        responsiborDetails: {
          responsibor: responsibor,
          responsiborId: responsiborId,
          relative: relative,
          phone: phone,
          whatsappPhone: whatsappPhone,
          allerativePhone: allerativePhone,
          responsiborJob: responsiborJob,
          joinDate: joinDate,
        },
      };
      // await addDoc(collection(db, "users"), {});
      await addDoc(collection(db, "orphones"), formData);

      setOrphoneName("");
      setorphanId("");

      setBrithday("");
      setbrithdayPlace("");
      setGender("");
      setStudyLevel("");
      setFatherName("");
      setFatherId("");
      setDieDate("");
      setDieReason("");
      setMatherName("");
      setMathorId("");
      setMathorState("");
      setMotherDieDate("");
      setDiesFamilyNo("");
      setBrothersNumber("");
      setHomeState("");
      setLivingState("");
      setAddress("");
      setResponsibor("");
      setresponsiborId("");
      setRelative("");
      setPhone("");
      setWhatsappPhone("");
      setAllerativePhone("");
      setResponsiborJob("");
      setJoinDate("");
      console.log("send");
      alert("Table created/updated with a new record!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <>
      {/* <Header/> */}
      <div className="container" dir="rtl">
      
        <Row className="justify-content-center mt-5">
          <Col xs={12} xl={10}>
            {/* كارد النموذج الرئيسي */}
            <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              {/* عنوان النموذج */}
              <div className="d-flex align-items-center gap-2 mb-4 pb-3 border-bottom">
                <FaFileAlt className="text-secondary fs-5" />
                <h5 className="fw-bold m-0 text-dark">
                  نموذج بيانات اليتيم - إضافة طفل جديد
                </h5>
              </div>

              <Form onSubmit={handleData}>
                <Row className="g-4">
                  <Col lg={8}>
                    <Row className="g-3">
                      <Col md={12}>
                        <Form.Group controlId="fullName">
                          <Form.Label className=" d-felx align-items-center gap-2  fw-semibold text-secondary small mb-1">
                            اسم اليتيم
                          </Form.Label>
                          <InputGroup
                            className="rounded-3 overflow-hidden"
                            style={{
                              backgroundColor: "#dbeafe",
                              color: "#1D4ED8",
                            }}
                          >
                            <InputGroup.Text className="border-0 bg-transparent text-warning pe-3">
                              <FaUser style={{ color: "#1D4ED8" }} />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="الاسم الكامل للطفل"
                              value={orphonename}
                              onChange={(e) => setOrphoneName(e.target.value)}
                              className="bg-light border-0 py-2 text-end bg-transparent"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#dbeafe !important",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>

                      {/* رقم الهوية ID */}
                      <Col md={12}>
                        <Form.Group controlId="orphanId">
                          <Form.Label className="fw-semibold text-secondary small mb-1">
                            رقم الهوية ID
                          </Form.Label>
                          <InputGroup>
                            <InputGroup.Text
                              className="border-0 rounded-start-0 rounded-end-3"
                              style={{
                                backgroundColor: "#dbeafe",
                                color: "#1d4ed8",
                              }}
                            >
                              <FaIdCard />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="ادخل رقم هوية الطفل"
                              value={orphanId}
                              onChange={(e) => setorphanId(e.target.value)}
                              className="border-0 rounded-start-3 rounded-end-0 py-2 text-end"
                              style={{
                                backgroundColor: "#dbeafe",
                                fontSize: "0.9rem",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>

                      {/* تاريخ الولادة */}
                      <Col md={6}>
                        <Form.Group controlId="birthDate">
                          <Form.Label className="fw-semibold text-secondary small mb-1">
                            تاريخ الولادة
                          </Form.Label>

                          <InputGroup>
                            <Form.Control
                              type="date"
                              value={brithday}
                              onChange={(e) => setBrithday(e.target.value)}
                              className=" border bg-transparent-0 py-2 border-0 text-end text-muted"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#fef3c7",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>

                      {/* مكان الولادة */}
                      <Col md={6}>
                        <Form.Group controlId="birthPlace">
                          <Form.Label className="fw-semibold  text-secondary small mb-1">
                            مكان الولادة
                          </Form.Label>
                          <InputGroup
                            className="rounded"
                            style={{ backgroundColor: "#fef3c7" }}
                          >
                            <InputGroup.Text
                              className="bg-transparent border-0 text-muted rounded"
                              style={{ color: "#FFC107" }}
                            >
                              <FaMapMarkerAlt style={{ color: "#FFC107" }} />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="اسم المدينة / اسم المستشفى"
                              value={brithdayPlace}
                              onChange={(e) => setbrithdayPlace(e.target.value)}
                              className="  bg-transparent-0 py-2 border-0 text-end text-muted"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#fef3c7",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>الجنس</Form.Label>

                          <Row>
                            <Col md={2}>
                              <div className="mb-3 d-flex align-items-center">
                                <Form.Check
                                  type="radio"
                                  name="group1"
                                  value="ذكر"
                                  // label="ذكر"
                                  id="radio-1"
                                  checked={gender === "ذكر"}
                                  onChange={(e) => setGender(e.target.value)}
                                />
                                <label>`ذكر</label>
                              </div>
                            </Col>

                            <Col md={2}>
                              <div className="mb-3 d-flex align-items-center">
                                <Form.Check
                                  type="radio"
                                  name="group1"
                                  value={"انثى"}
                                  // label="انثى"
                                  id="radio-1"
                                  checked={gender === "انثى"}
                                  onChange={(e) => setGender(e.target.value)}
                                />
                                <label>انثى</label>
                              </div>
                            </Col>
                          </Row>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="status">
                          <Form.Label className="fw-semibold text-secondary small mb-1">
                            المرحلة الدراسية
                          </Form.Label>
                          <InputGroup
                            className="rounded"
                            style={{ backgroundColor: "#c0f0ec" }}
                          >
                            <InputGroup.Text
                              className="bg-transparent border-0 text-muted"
                              style={{ color: "#FFC107" }}
                            >
                              <FaGraduationCap style={{ color: "#115E59" }} />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="المرحلة الدراسية"
                              value={studyLevel}
                              onChange={(e) => setStudyLevel(e.target.value)}
                              className=" border-0 py-2 text-end rounded"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#c0f0ec",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>

                      {/* المدرسة / الدرجة */}
                      <Col md={6}>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>الحالة </Form.Label>
                          <Row dir="rtl">
                            <Col md={6}>
                              <div className="mb-3 d-flex align-items-center">
                                <Form.Check
                                  type="radio"
                                  // label="مبيت"
                                  name="group2"
                                  value="مبيت"
                                  id="radio-3"
                                  checked={careState === "مبيت"}
                                  onChange={(e) => setCareState(e.target.value)}
                                />

                                <label>مبيت</label>
                              </div>
                            </Col>

                            <Col md={6}>
                              <div className="mb-3 d-flex align-items-center">
                                <Form.Check
                                  type="radio"
                                  name="group2"
                                  value="رعاية يومية"
                                  id="radio-4"
                                  // label="رعاية يومية"
                                  checked={careState === "رعاية يومية"}
                                  onChange={(e) => setCareState(e.target.value)}
                                />
                                <label>رعاية يومية</label>
                              </div>
                            </Col>
                          </Row>
                        </Form.Group>
                      </Col>

                      {/* أزرار الحفظ والإلغاء */}
                    </Row>
                  </Col>

                  {/* القسم الأيسر: كارد إضافة الصورة الشخصية */}
                  <Col lg={4}>
                    <Card className="border rounded-4 p-3 text-center h-100 d-flex flex-column justify-content-center align-items-center bg-light">
                      <div className="mb-2 text-muted">
                        <FaImage size={35} />
                      </div>
                      <span
                        className="fw-bold mb-3 text-dark"
                        style={{ fontSize: "0.9rem" }}
                      >
                        إضافة صورة
                      </span>
                      <Form.Control
                        type="file"
                        size="sm"
                        
                        onChange={handleImageChange}
                        className="d-none"
                        id="upload-image"
                      />
                      <label
                        htmlFor="upload-image"
                        className="btn btn-sm px-4 py-2 rounded-3 text-white fw-semibold cursor-pointer shadow-sm"
                        style={{
                          backgroundColor: "#115e59",
                          fontSize: "0.85rem",
                        }}
                      >
                        إضافة صورة
                      </label>
                    </Card>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
        <Form onSubmit={handleData}>
 <Row className="justify-content-center mt-5">
          <Col xs={12} xl={10}>
            <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <div className="d-flex align-items-center gap-2 mb-4 pb-3 border-bottom">
                <FaFileAlt className="text-secondary fs-5" />
                <h5 className="fw-bold m-0 text-dark">
                  نموذج بيانات اليتيم - إضافة بيانات العائلة
                </h5>
              </div>
              <Form onSubmit={handleData} className=" d-flex align-items-center">
                <Row className="g-4">
                  <Col lg={6}>
                    <Row className="g-3 align-items-start">
                      <Col md={12}>
                        <Form.Group controlId="fullName">
                          <Form.Label className=" d-felx align-items-center gap-2  fw-semibold text-secondary small mb-1">
                            اسم الاب
                          </Form.Label>
                          <InputGroup
                            className="rounded-3 overflow-hidden"
                            style={{
                              backgroundColor: "#dbeafe",
                              color: "#1D4ED8",
                            }}
                          >
                            <InputGroup.Text className="border-0 bg-transparent text-warning pe-3">
                              <FaUser style={{ color: "#1D4ED8" }} />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="ادخل اسم الاب"
                              onChange={(e) => setFatherName(e.target.value)}
                              value={fatherName}
                              className="bg-light border-0 py-2 text-end bg-transparent"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#dbeafe !important",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group controlId="orphanId">
                          <Form.Label className="fw-semibold text-secondary small mb-1">
                            رقم الهوية ID
                          </Form.Label>
                          <InputGroup>
                            <InputGroup.Text
                              className="border-0 rounded-start-0 rounded-end-3"
                              style={{
                                backgroundColor: "#dbeafe",
                                color: "#1d4ed8",
                              }}
                            >
                              <FaIdCard />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="ادخل رقم هوية الاب"
                              onChange={(e) => setFatherId(e.target.value)}
                              value={fatherId}
                              className="border-0 rounded-start-3 rounded-end-0 py-2 text-end"
                              style={{
                                backgroundColor: "#dbeafe",
                                fontSize: "0.9rem",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="birthDate">
                          <Form.Label className="fw-semibold text-secondary small mb-1">
                           تاريخ وفاة الاب
                          </Form.Label>

                          <InputGroup>
                            <Form.Control
                              type="date"
                              onChange={(e) => setDieDate(e.target.value)}
                              value={dieDate}
                              className=" border bg-transparent-0 py-2 border-0 text-end text-muted"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#fef3c7",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="birthPlace">
                          <Form.Label className="fw-semibold  text-secondary small mb-1">
                            سبب وفاة الاب  
                          </Form.Label>
                          <InputGroup
                            className="rounded"
                            style={{ backgroundColor: "#fef3c7" }}
                          >
                            <InputGroup.Text
                              className="bg-transparent border-0 text-muted rounded"
                              style={{ color: "#FFC107" }}
                            >
                              <FaMapMarkerAlt style={{ color: "#FFC107" }} />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="   شهيد/سبب اخر"
                              onChange={(e) => setDieReason(e.target.value)}
                              value={dieReason}
                              className="  bg-transparent-0 py-2 border-0 text-end text-muted"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#fef3c7",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group controlId="status">
                          <Form.Label className="fw-semibold text-secondary small mb-1">
                            اسم الام
                          </Form.Label>
                          <InputGroup
                            className="rounded"
                            style={{ backgroundColor: "#DBEAFE" }}
                          >
                            <InputGroup.Text
                              className="bg-transparent border-0 text-muted"
                              style={{ color: "#FFC107" }}
                            >
                              <FaBook style={{ color: "#1D4ED8" }} />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="ادخل اسم الام رباعي"
                              onChange={(e) => setMatherName(e.target.value)}
                              value={motherName}
                              className=" border-0 py-2 text-end rounded"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#DBEAFE",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group controlId="status">
                          <Form.Label className="fw-semibold text-secondary small mb-1">
                            هوية الام
                          </Form.Label>
                          <InputGroup
                            className="rounded"
                            style={{ backgroundColor: "#DBEAFE" }}
                          >
                            <InputGroup.Text
                              className="bg-transparent border-0 text-muted"
                              style={{ color: "#FFC107" }}
                            >
                              <FaBook style={{ color: "#1D4ED8" }} />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="ادخل رقم هوية الام"
                              onChange={(e) => setMathorId(e.target.value)}
                              value={motherId}
                              className=" border-0 py-2 text-end rounded"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#DBEAFE",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                     
                    </Row>
                  </Col>
                  <Col lg={6}>
                    {/* <Card className="border rounded-4 p-3 text-center h-100 d-flex flex-column justify-content-center align-items-center bg-light"> */}
                      <Row className="g-4 align-items-start">
                        <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              حالة الام
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#dbeafe" }}
                            >
                              <InputGroup.Text
                                className="bg-transparent border-0 text-muted"
                                style={{ color: "#FFC107" }}
                              >
                                <FaBook style={{ color: "#1D4ED8" }} />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="متوفية او عايشة"
                                onChange={(e) => setMathorState(e.target.value)}
                                value={motherState}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#dbeafe",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              تاريخ الوفاة
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#dbeafe" }}
                            >
                             
                              <Form.Control
                                type="date"
                                placeholder="ادخل اسم الام رباعي"
                                onChange={(e) =>
                                  setMotherDieDate(e.target.value)
                                }
                                value={motherdieDate}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#dbeafe",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              عدد وفيات نفس الاسرة
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#dbeafe" }}
                            >
                              <InputGroup.Text
                                className="bg-transparent border-0 text-muted"
                                style={{ color: "#FFC107" }}
                              >
                                <FaBook style={{ color: "#1D4ED8" }} />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="متوفية او عايشة"
                                onChange={(e) =>
                                  setDiesFamilyNo(e.target.value)
                                }
                                value={diesFamilyNo}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#dbeafe",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              عدد الاخوة الذكور
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#dbeafe" }}
                            >
                              <InputGroup.Text
                                className="bg-transparent border-0 text-muted"
                                style={{ color: "#FFC107" }}
                              >
                                <FaBook style={{ color: "#1D4ED8" }} />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="عدد الاخوة الذكور"
                                onChange={(e) =>
                                  setBrothersNumber(e.target.value)
                                }
                                value={bothersNumber}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#dbeafe",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              عدد الاخوة الاناث
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#FEF3C7" }}
                            >
                              <InputGroup.Text
                                className="bg-transparent border-0 text-muted"
                                style={{ color: "#FFC107" }}
                              >
                                <FaBook style={{ color: "#FFC107" }} />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="عدد الاخوة الاناث"
                                onChange={(e) =>
                                  setSistersNumber(e.target.value)
                                }
                                value={sistersNumber}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#FEF3C7",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              الحالة المعيشية
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#FEF3C7" }}
                            >
                              <InputGroup.Text
                                className="bg-transparent border-0 text-muted"
                                style={{ color: "#FFC107" }}
                              >
                                <FaBook style={{ color: "#FFC107" }} />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder=" الحالة المعيشية "
                                onChange={(e) => setLivingState(e.target.value)}
                                value={livingState}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#FEF3C7",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        
                        <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              العنوان
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#c0f0ec" }}
                            >
                              <InputGroup.Text
                                className="bg-transparent border-0 text-muted"
                                style={{ color: "#FFC107" }}
                              >
                                <FaBook style={{ color: "#115E59" }} />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="اسم المدينة/اسم الحي/اسم الشارع"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#c0f0ec",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                         <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              حالة البيت
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#c0f0ec" }}
                            >
                              <InputGroup.Text
                                className="bg-transparent border-0 text-muted"
                                style={{ color: "#FFC107" }}
                              >
                                <FaBook style={{ color: "#115E59" }} />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                placeholder="ملك/اجار/خيمة"
                                onChange={(e) => setHomeState(e.target.value)}
                                value={homeState}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#c0f0ec",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                    {/* </Card> */}
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
        </Form>
       <Form onSubmit={handleData}>
          <Row className="justify-content-center mt-5">
          <Col xs={12} xl={10}>
            <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <div className="d-flex align-items-center gap-2 mb-4 pb-3 border-bottom">
                <FaFileAlt className="text-secondary fs-5" />
                <h5 className="fw-bold m-0 text-dark">
                  نموذج بيانات اليتيم - إضافة بيانات الوصي
                </h5>
              </div>
              <Form onSubmit={handleData} className="align-items-center">
                <Row className="g-4">
                  <Col lg={6}>
                    <Row className="g-3 align-items-start">
                      <Col md={12}>
                        <Form.Group controlId="fullName">
                          <Form.Label className=" d-felx align-items-center gap-2  fw-semibold text-secondary small mb-1">
                            اسم الوصي
                          </Form.Label>
                          <InputGroup
                            className="rounded-3 overflow-hidden"
                            style={{
                              backgroundColor: "#dbeafe",
                              color: "#1D4ED8",
                            }}
                          >
                            <InputGroup.Text className="border-0 bg-transparent text-warning pe-3">
                              <FaUser style={{ color: "#1D4ED8" }} />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                             placeholder="ادخل اسم الوصي رباعي"
                    onChange={(e) => setResponsibor(e.target.value)}
                    value={responsibor}
                              className="bg-light border-0 py-2 text-end bg-transparent"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#dbeafe !important",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group controlId="orphanId">
                          <Form.Label className="fw-semibold text-secondary small mb-1">
                            رقم الهوية ID
                          </Form.Label>
                          <InputGroup>
                            <InputGroup.Text
                              className="border-0 rounded-start-0 rounded-end-3"
                              style={{
                                backgroundColor: "#dbeafe",
                                color: "#1d4ed8",
                              }}
                            >
                              <FaIdCard />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                               placeholder="ادخل رقم هوية "
                    onChange={(e) => setresponsiborId(e.target.value)}
                    value={responsiborId}
                              className="border-0 rounded-start-3 rounded-end-0 py-2 text-end"
                              style={{
                                backgroundColor: "#dbeafe",
                                fontSize: "0.9rem",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="birthDate">
                          <Form.Label className="fw-semibold text-secondary small mb-1">
                             صلة القرابة
                          </Form.Label>

                          <InputGroup>
                            <Form.Control
                              type="text"
                             placeholder="ادخل صلة القرابة"
                    onChange={(e) => setRelative(e.target.value)}
                    value={relative}
                              className=" border bg-transparent-0 py-2 border-0 text-end text-muted"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#fef3c7",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="birthPlace">
                          <Form.Label className="fw-semibold  text-secondary small mb-1">
                            رقم الجوال 
                          </Form.Label>
                          <InputGroup
                            className="rounded"
                            style={{ backgroundColor: "#fef3c7" }}
                          >
                            <InputGroup.Text
                              className="bg-transparent border-0 text-muted rounded"
                              style={{ color: "#FFC107" }}
                            >
                              <FaPhone style={{ color: "#FFC107" }} />
                            </InputGroup.Text>
                            <Form.Control
                              type="text"
                             placeholder="ادخل رقم الجوال"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                              className="  bg-transparent-0 py-2 border-0 text-end text-muted"
                              style={{
                                fontSize: "0.9rem",
                                backgroundColor: "#fef3c7",
                              }}
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                     
                    </Row>
                  </Col>
                  <Col lg={6}>
                    {/* <Card className="border rounded-4 p-3 text-center h-100 d-flex flex-column justify-content-center align-items-center bg-light"> */}
                      <Row className="g-4 align-items-start">
                        <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              رقم الواتس 
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#dbeafe" }}
                            >
                              <InputGroup.Text
                                className="bg-transparent border-0 text-muted"
                                style={{ color: "#FFC107" }}
                              >
                                <FaPhone style={{ color: "#1D4ED8" }} />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                                  placeholder="ادخل رقم الواتس"
                    onChange={(e) => setWhatsappPhone(e.target.value)}
                    value={whatsappPhone}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#dbeafe",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                       <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              رقم الجوال البديل 
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#dbeafe" }}
                            >
                              <InputGroup.Text
                                className="bg-transparent border-0 text-muted"
                                style={{ color: "#FFC107" }}
                              >
                                <FaPhone style={{ color: "#1D4ED8" }} />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                           placeholder="ادخل رقم جوال بديل"
                    onChange={(e) => setAllerativePhone(e.target.value)}
                    value={allerativePhone}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#dbeafe",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                              مهنة الوصي
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#dbeafe" }}
                            >
                              <InputGroup.Text
                                className="bg-transparent border-0 text-muted"
                                style={{ color: "#FFC107" }}
                              >
                                <FaBook style={{ color: "#1D4ED8" }} />
                              </InputGroup.Text>
                              <Form.Control
                                type="text"
                               placeholder="ادخل مهنة الوصي"
                    onChange={(e) => setResponsiborJob(e.target.value)}
                    value={responsiborJob}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#dbeafe",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="status">
                            <Form.Label className="fw-semibold text-secondary small mb-1">
                             تاريخ الانضمام
                            </Form.Label>
                            <InputGroup
                              className="rounded"
                              style={{ backgroundColor: "#dbeafe" }}
                            >
                             
                              <Form.Control
                                type="date"
                                placeholder="ادخل تاريخ الانضمام "
                    onChange={(e) => setJoinDate(e.target.value)}
                    value={joinDate}
                                className=" border-0 py-2 text-end rounded"
                                style={{
                                  fontSize: "0.9rem",
                                  backgroundColor: "#dbeafe",
                                }}
                              />
                            </InputGroup>
                          </Form.Group>
                        </Col>
                     
                      </Row>
                    {/* </Card> */}
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
       </Form>
       
        <div
          className=" container d-flex justify-content-start p-4  mb-4 border-0"
          dir="ltr"
        >
          <Button
            type="submit"
            onClick={handleData}
            className="px-4"
            style={{ backgroundColor: "#FC8424", border: "none" }}
          >
            حفظ
          </Button>
        </div>

      </div>
    </>
  );
}
