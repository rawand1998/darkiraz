import React, { useState, useEffect } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../context/AuthProvider";
import { signOut, sendPasswordResetEmail } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Dropdown, Card, Button, Modal, Form } from "react-bootstrap";
import { db } from "../../firebase";
import {  getDoc } from "firebase/firestore";
export default function ProfileCard() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [nationalIdInput, setNationalIdInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(" ");
  const [message, setMessage] = useState({ text: "", type: "" }); // لرسائل النجاح أو الخطأ
  //   const handleClose = () => {
  //     setShowModal(false);
  //     setEmailInput('');
  //     setMessage({ text: '', type: '' });
  //   };

  //   const handleShow = () => setShowModal(true);

  // دالة إرسال رابط إعادة تعيين كلمة المرور عبر Firebase
  //   const handlePasswordResetSubmit = async (e) => {
  //     e.preventDefault();
  //     if (!emailInput) {
  //       setMessage({ text: 'يرجى إدخال البريد الإلكتروني', type: 'danger' });
  //       return;
  //     }

  //     setLoading(true);
  //     setMessage({ text: '', type: '' });

  //     try {
  //       await sendPasswordResetEmail(auth, emailInput);
  //       setMessage({
  //         text: 'تم إرسال رابط تغيير كلمة المرور إلى بريدك الإلكتروني بنجاح! تحقق من صندوق الوارد.',
  //         type: 'success'
  //       });
  //       setTimeout(() => {
  //         handleClose();
  //       }, 3000); // إغلاق الـ Modal تلقائياً بعد 3 ثوانٍ
  //     } catch (error) {
  //       console.error("Error sending reset email: ", error.message);
  //       let errorMsg = 'حدث خطأ، يرجى التأكد من البريد الإلكتروني المدخل.';
  //       if (error.code === 'auth/user-not-found') {
  //         errorMsg = 'هذا البريد الإلكتروني غير مسجل لدينا.';
  //       }
  //       setMessage({ text: errorMsg, type: 'danger' });
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  const { currentUser} = useAuth();
  console.log("currentUser", currentUser.id);
 useEffect(() => {
    const fetchUserName = async () => {
      // التأكد من أن الـ id للمستخدم الحالي موجود
      const currentUserId = currentUser?.id; 

      if (!currentUserId) {
        return;
      }

      try {
        // جلب وثيقة المستخدم مباشرة من الفايرستور باستخدام الـ ID الخاص به
        const docRef = doc(db, "user", currentUserId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setName(docSnap.data().name); // جلب الاسم وعرضه
        } else {
          console.log("المستخدم غير موجود!");
        }
      } catch (error) {
        console.error("خطأ في جلب اسم المستخدم:", error);
      }
    };

    fetchUserName();
  }, [currentUser]);


  const handleClose = () => {
    setShowModal(false);
    setNationalIdInput("");
    setNewPasswordInput("");
    setMessage({ text: "", type: "" });
  };
  const handleShow = () => setShowModal(true);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("error signout", error);
    }
  };
  const handlePasswordUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!nationalIdInput || !newPasswordInput) {
      setMessage({
        text: "يرجى إدخال رقم الهوية وكلمة المرور الجديدة",
        type: "danger",
      });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      // الوصول إلى المستند الخاص برقم الهوية في مجموعة user
      const userDocRef = doc(db, "user", nationalIdInput);

      // تحديث حقل الـ password فقط
      await updateDoc(userDocRef, {
        password: newPasswordInput,
      });

      setMessage({
        text: "تم تغيير كلمة المرور وتحديثها في قاعدة البيانات بنجاح!",
        type: "success",
      });

      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch (error) {
      console.error("Error updating password in Firestore: ", error);
      setMessage({
        text: "حدث خطأ، تأكد من صحة رقم الهوية المدخل.",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="d-flex justify-content-start p-3" dir="ltr">
      <Dropdown dir="ltr">
        {/* زر القائمة المنسدلة (أيقونة المستخدم في الشريط العلوي) */}
        <Dropdown.Toggle
          as="div"
          id="dropdown-custom-components"
          style={{ cursor: "pointer" }}
          className="position-relative d-inline-block"
        >
          <div className="position-relative d-inline-block">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" // استبدليها برابط صورة المستخدم الفعلية
              alt="User"
              className="rounded-circle border border-2 border-primary"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            {/* نقطة الحالة الخضراء */}
            <span
              className="position-absolute bottom-0 start-0 translate-middle-y bg-success border border-white rounded-circle"
              style={{ width: "10px", height: "10px" }}
            ></span>
          </div>
        </Dropdown.Toggle>

        {/* محتوى القائمة المنسدلة (Card) */}
        <Dropdown.Menu
          className="shadow-lg border-0 rounded-4 p-0 mt-2"
          style={{ width: "280px" }}
        >
          <Card className="border-0 rounded-4 overflow-hidden">
            <Card.Body className="p-3">
              {/* القسم العلوي: الرقم التعريفي، الاسم، والصورة */}
              <div
                className="d-flex align-items-center  pb-3 border-bottom"
                dir="rtl"
              >
                <div className="position-relative">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" // استبدليها برابط صورة المستخدم الفعلية
                    alt="User"
                    className="rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    className="position-absolute bottom-0 start-0 bg-success border border-white rounded-circle"
                    style={{ width: "11px", height: "11px" }}
                  ></span>
                </div>
                <div
                  className="text-start"
                  dir="ltr"
                  style={{ marginRight: "10px" }}
                >
                  <h6
                    className="mb-1 fw-bold text-dark"
                    style={{ fontSize: "1rem" }}
                    dir="ltr"
                  >
                    404524852
                  </h6>
                  <div className="text-end" dir="rtl">
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: "0.85rem" }}
                      dir="rtl"
                    >
                    {name||'لم يتم الوصول لاسم المستخدم'}
                    </p>
                  </div>
                </div>
              </div>

              {/* زر تغيير كلمة المرور */}
              <div className="pt-3">
                <Button
                  variant="primary"
                  className="w-100 d-flex align-items-center justify-content-center py-2 rounded-3"
                  style={{ backgroundColor: "#4355B9", border: "none" }}
                  onClick={() => handleShow()}
                >
                  <FaKey className="ms-2" />
                  <span>تغيير كلمة المرور</span>
                </Button>
              </div>
              <div className="pt-3">
                <Button
                  variant="primary"
                  className="w-100 d-flex align-items-center justify-content-center py-2 rounded-3"
                  style={{ backgroundColor: "#A61D2F", border: "none" }}
                  onClick={() => handleLogout()}
                >
                  <IoIosLogOut className="ms-2" />
                  <span> تسجيل الخروج </span>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Dropdown.Menu>
      </Dropdown>

      {/* الـ Pop-up (Modal) الخاص بإدخال الإيميل لإرسال رابط تغيير كلمة المرور */}
      <Modal show={showModal} onHide={handleClose} centered dir="rtl">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold" style={{ fontSize: "1.1rem" }}>
            تغيير كلمة المرور
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePasswordUpdateSubmit}>
            {/* حقل رقم الهوية للتحقق من المستند الصحيح */}
            <Form.Group className="mb-3">
              <Form.Label>رقم الهوية (للتأكيد):</Form.Label>
              <Form.Control
                type="text"
                placeholder="أدخل رقم الهوية الخاص بك"
                value={nationalIdInput}
                onChange={(e) => setNationalIdInput(e.target.value)}
                required
                dir="ltr"
                className="text-end"
              />
            </Form.Group>

            {/* حقل كلمة المرور الجديدة */}
            <Form.Group className="mb-3">
              <Form.Label>كلمة المرور الجديدة:</Form.Label>
              <Form.Control
                type="password"
                placeholder="أدخل كلمة المرور الجديدة"
                value={newPasswordInput}
                onChange={(e) => setNewPasswordInput(e.target.value)}
                required
                dir="ltr"
                className="text-end"
              />
            </Form.Group>

            {message.text && (
              <div
                className={`alert alert-${message.type} p-2 text-center`}
                style={{ fontSize: "0.85rem" }}
              >
                {message.text}
              </div>
            )}

            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button variant="secondary" onClick={handleClose}>
                إلغاء
              </Button>
              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                style={{ backgroundColor: "#4355B9", border: "none" }}
              >
                {loading ? "جاري التحديث..." : "تحديث كلمة المرور"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
