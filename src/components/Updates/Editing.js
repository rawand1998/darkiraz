import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col,Card } from "react-bootstrap";
import { db } from "../../firebase"; // عدلي مسار الـ firebase حسب مشروعك
import { doc, updateDoc } from "firebase/firestore";

function Editing({ show, handleClose, orphanData, onUpdateSuccess }) {
  const [dataForm, setDataForm] = useState({
    orphone: {
      orphonename: "",
      orphanId: "",
      brithday: "",
      brithdayPlace: "",
      studyLevel: "",
      gender: "",
      careState: "",
      image: "",
    },
    familyDetails: {
      fatherName: "",
      fatherId: "",
      dieReason: "",
      dieDate: "",
      motherName: "",
      motherId: "",
      motherState: "",
      motherdieDate: "",
      diesFamilyNo: "",
      bothersNumber: "",
      sistersNumber: "",
      homeState: "",
      livingState: "",
      address: "",
    },
    responsiborDetails: {
      responsibor: "",
      responsiborId: "",
      relative: "",
      phone: "",
      whatsappPhone: "",
      allerativePhone: "",
      responsiborJob: "",
      joinDate: "",
    },
  });
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  useEffect(() => {
    if (orphanData) {
      setDataForm({
        orphone: {
          orphonename: orphanData.orphone?.orphonename || "",
          orphanId: orphanData.orphone?.orphanId || "",
          brithday: orphanData.orphone?.brithday || "",
          brithdayPlace: orphanData.orphone?.brithdayPlace || "",
          studyLevel: orphanData.orphone?.studyLevel || "",
          careState: orphanData.orphone?.careState || "",
          image: orphanData.orphone?.image || "",
          gender: orphanData.orphone?.gender || "",
        },
        familyDetails: {
          fatherName: orphanData.familyDetails?.fatherName || "",
          fatherId: orphanData.familyDetails?.fatherId || "",
          dieReason: orphanData.familyDetails?.dieReason || "",
          dieDate: orphanData.familyDetails?.dieDate || "",
          motherName: orphanData.familyDetails?.motherName || "",
          motherId: orphanData.familyDetails?.motherId || "",
          motherState: orphanData.familyDetails?.motherState || "",
          motherdieDate: orphanData.familyDetails?.motherdieDate || "",
          diesFamilyNo: orphanData.familyDetails?.diesFamilyNo || "",
          bothersNumber: orphanData.familyDetails?.bothersNumber || "",
          sistersNumber: orphanData.familyDetails?.sistersNumber || "",
          homeState: orphanData.familyDetails?.homeState || "",
          livingState: orphanData.familyDetails?.livingState || "",
          address: orphanData.familyDetails?.address || "",
        },
        responsiborDetails: {
          responsibor: orphanData.responsiborDetails?.responsibor || "",
          responsiborId: orphanData.responsiborDetails?.responsiborId || "",
          relative: orphanData.responsiborDetails?.relative || "",
          phone: orphanData.responsiborDetails?.phone || "",
          whatsappPhone: orphanData.responsiborDetails?.whatsappPhone || "",
          allerativePhone: orphanData.responsiborDetails?.allerativePhone || "",
          responsiborJob: orphanData.responsiborDetails?.responsiborJob || "",
          joinDate: orphanData.responsiborDetails?.joinDate || "",
        },
      });
    }
  }, [orphanData]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!orphanData) {
      return;
    }
    try {
      const docRef = doc(db, "orphones", orphanData.id);
      //  await updateDoc(docRef, dataForm);
      await updateDoc(docRef, {
        orphone: dataForm.orphone,
        familyDetails: dataForm.familyDetails,
        responsiborDetails: dataForm.responsiborDetails,
      });
      onUpdateSuccess();
      handleClose();
    } catch (error) {
      console.error("Error updating orphan data:", error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose} size="lg" dir="rtl">
      <Modal.Header closeButton className="d-flex justify-content-between align-items-center">
        <Modal.Title>تعديل بيانات اليتيم والوصي</Modal.Title>
      </Modal.Header>
       <Form onSubmit={handleUpdate}>
         <Modal.Body style={{ maxHeight: "75vh", overflowY: "auto" }}>
        <div className="text-end mt-4">
      
         
        </div>
        <Card className="p-4 shadow-sm mb-4">
          <h4 className="fw-bold">بيانات اليتيم</h4>
          {/* <Form onSubmit={handleUpdate}> */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>الاسم رباعي</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل اسم الطفل رباعي"
                    name="orphonename"
                    value={dataForm.orphone.orphonename}
                    onChange={(e) =>
                      setDataForm({
                        ...dataForm,
                        orphone: {
                          ...dataForm.orphone,
                          orphonename: e.target.value,
                        },
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>رقم الهوية </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="ادخل رقم هوية الطفل"
                    name="orphanId"
                    value={dataForm.orphone.orphanId}
                    onChange={(e) =>
                      setDataForm({
                        ...dataForm,
                        orphone: {
                          ...dataForm.orphone,
                          orphanId: e.target.value,
                        },
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>تاريخ الميلاد</Form.Label>
                  <Form.Control
                    type="date"
                    name="brithday"
                    value={dataForm.orphone.brithday}
                    onChange={(e) =>
                      setDataForm({
                        ...dataForm,
                        orphone: {
                          ...dataForm.orphone,
                          brithday: e.target.value,
                        },
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>مكان الميلاد</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="    اسم المدينة/اسم المستشفى"
                    name="brithdayPlace"
                    value={dataForm.orphone.brithdayPlace}
                    onChange={(e) =>
                      setDataForm({
                        ...dataForm,
                        orphone: {
                          ...dataForm.orphone,
                          brithdayPlace: e.target.value,
                        },
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>المرحلة الدراسية</Form.Label>
                  <Form.Control
                    type="text"
                    name="studyLevel"
                    value={dataForm.orphone.studyLevel}
                    onChange={(e) =>
                      setDataForm({
                        ...dataForm,
                        orphone: {
                          ...dataForm.orphone,
                          studyLevel: e.target.value,
                        },
                      })
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>اضافة صورة </Form.Label>
                  <Form.Control
                    type="file"
                    // placeholder="Enter your phone"
                    name="image"
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        // تحويل الصورة إلى Base64 وتحديث الحالة مباشرة داخل orphone
                        const base64 = await convertToBase64(file);
                        setDataForm({
                          ...dataForm,
                          orphone: {
                            ...dataForm.orphone,
                            image: base64,
                          },
                        });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
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
                          checked={dataForm.orphone.gender === "ذكر"}
                          onChange={(e) =>
                            setDataForm({
                              ...dataForm,
                              orphone: {
                                ...dataForm.orphone,
                                gender: e.target.value,
                              },
                            })
                          }
                        />
                        <label>`ذكر</label>
                      </div>
                    </Col>

                    <Col md={2}>
                      <div className="mb-3 d-flex align-items-center">
                        <Form.Check
                          type="radio"
                          name="group1"
                          value="انثى"
                          // label="انثى"
                          id="radio-1"
                          checked={dataForm.orphone.gender === "انثى"}
                          onChange={(e) =>
                            setDataForm({
                              ...dataForm,
                              orphone: {
                                ...dataForm.orphone,
                                gender: e.target.value,
                              },
                            })
                          }
                        />
                        <label>انثى</label>
                      </div>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
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
                          checked={dataForm.orphone.careState === "مبيت"}
                          onChange={(e) =>
                            setDataForm({
                              ...dataForm,
                              orphone: {
                                ...dataForm.orphone,
                                careState: e.target.value,
                              },
                            })
                          }
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
                          checked={dataForm.orphone.careState === "رعاية يومية"}
                          onChange={(e) =>
                            setDataForm({
                              ...dataForm,
                              orphone: {
                                ...dataForm.orphone,
                                careState: e.target.value,
                              },
                            })
                          }
                        />
                        <label>رعاية يومية</label>
                      </div>
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            {/* <Button type="submit" className="text-center">Submit</Button> */}
          {/* </Form> */}
        </Card>
        <Card className="p-4 shadow-sm mb-4">
          <h4 className="fw-bold">بيانات اسرة اليتيم</h4>
          {/* <Form onSubmit={handleUpdate}> */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>الاسم الاب</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل اسم الاب"
                    onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          fatherName: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.fatherName}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>رقم الهوية </Form.Label>
                  <Form.Control
                    type="age"
                    placeholder="ادخل رقم هوية الاب"
                    onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {

                          ...dataForm.familyDetails,
                          fatherId: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.fatherId}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>تاريخ الوفاة</Form.Label>
                  <Form.Control
                    type="date"
                    // placeholder="ادخل تاريخ الميلاد"
                    onChange={(e) =>
                      setDataForm({
                          ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          dieDate: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.dieDate}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>سبب الوفاة</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="   شهيد/سبب اخر"
                    onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          dieReason: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.dieReason}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>اسم الام</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="ادخل اسم الام رباعي"
                    onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          motherName: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.motherName}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>رقم الهوية</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل رقم هوية الام"
                     onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          motherId: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.motherId}
                    required
                  />
                </Form.Group>
              </Col>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>حالة الام</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="متوفية او عايشة"
                    
                       onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          motherState: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.motherState}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>تاريخ الوفاة</Form.Label>
                    <Form.Control
                      type="date"
                       onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {

                          ...dataForm.familyDetails,
                          motherDieDate: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.motherDieDate}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>عدد الوفيات نفس الاسرة</Form.Label>
                  <Form.Control
                    type="number"
                  
                     onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          diesFamilyNo: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.diesFamilyNo}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>عدد الاخوة الذكور</Form.Label>
                  <Form.Control
                    type="text"
                 
                      onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          brothersNumber: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.brothersNumber}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label> عدد الاخوة الاناث</Form.Label>
                  <Form.Control
                    type="text"
                  
                     onChange={(e) =>
                      setDataForm({ 
                        ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          sistersNumber: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.sistersNumber}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label> الحالة المعيشية</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          livingState: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.livingState}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label> حالة البيت</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ملك/اجار/مقصوف"
                  
                          onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {
                          ...dataForm.familyDetails,
                          homeState: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.homeState}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label> العنوان</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="اسم المدينة/اسم الحي/اسم الشارع"
                   
                       onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        familyDetails: {
                            
                          ...dataForm.familyDetails,
                          address: e.target.value,
                        },
                      })
                    }
                    value={dataForm.familyDetails.address}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            {/* <Button type="submit" className="text-center">Submit</Button> */}
          {/* </Form> */}
        </Card>
        <Card className="p-4 shadow-sm mb-4">
          <h4 className="fw-bold">بيانات الوصي</h4>
          {/* <Form onSubmit={handleUpdate}> */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>الاسم الوصي</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل اسم الوصي رباعي"
                   onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        responsiborDetails: {
                          ...dataForm.responsiborDetails,
                          responsibor: e.target.value,
                        },
                      })
                    }
                    value={dataForm.responsiborDetails.responsibor}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>رقم الهوية </Form.Label>
                  <Form.Control
                    type="age"
                    placeholder="ادخل رقم هوية "
                 
                     onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        responsiborDetails: {
                          ...dataForm.responsiborDetails,
                          responsiborId: e.target.value,
                        },
                      })
                    }
                    value={dataForm.responsiborDetails.responsiborId}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>صلة القرابة</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل صلة القرابة"
                 
                     onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        responsiborDetails: {
                          ...dataForm.responsiborDetails,
                          relative: e.target.value,
                        },
                      })
                    }
                    value={dataForm.responsiborDetails.relative}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>رقم الجوال</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="ادخل رقم الجوال"
                  
                     onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        responsiborDetails: {
                          ...dataForm.responsiborDetails,
                          phone: e.target.value,
                        },
                      })
                    }
                    value={dataForm.responsiborDetails.phone}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>رقم الواتس</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="ادخل رقم الواتس"
                  
                    
                     onChange={(e) =>
                      setDataForm({
                         ...dataForm,
                        responsiborDetails: {
                          ...dataForm.responsiborDetails,
                          whatsappPhone: e.target.value,
                        },
                      })
                    }
                    value={dataForm.responsiborDetails.whatsappPhone}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>رقم جوال بديل</Form.Label>
                  <Form.Control
                    type="phone"
                    placeholder="ادخل رقم جوال بديل"
                    onChange={(e) => setDataForm({
                         ...dataForm,
                      responsiborDetails: {
                        ...dataForm.responsiborDetails,
                        alternativePhone: e.target.value,
                      },
                    })}
                    value={dataForm.responsiborDetails.alternativePhone}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>مهنة الوصي</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل مهنة الوصي"
                    onChange={(e) => setDataForm({
                         ...dataForm,
                      responsiborDetails: {
                        ...dataForm.responsiborDetails,
                        responsiborJob: e.target.value,
                      },
                    })}
                    value={dataForm.responsiborDetails.responsiborJob}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label> تاريخ الانضمام</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="ادخل تاريخ الانضمام "
                    onChange={(e) => setDataForm({
                         ...dataForm,
                      responsiborDetails: {
                        ...dataForm.responsiborDetails,
                        joinDate: e.target.value,
                      },
                    })}
                    value={dataForm.responsiborDetails.joinDate}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* <Button type="submit" className="text-center">Submit</Button> */}
          {/* </Form> */}
        </Card>
        {/* <Card className="p-4  mb-4 border-0" dir="ltr"> */}
        <div
          className="d-flex justify-content-start p-4  mb-4 border-0"
          dir="ltr"
        >
          <Button
            type="submit"
              onClick={handleUpdate}
            className="px-4"
            style={{ backgroundColor: "#FC8424", border: "none" }}
          >
            حفظ
          </Button>
        </div>
      </Modal.Body>
       </Form>
     
    </Modal>
  );
}

export default Editing;
