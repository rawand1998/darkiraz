import React, { useState,useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Col,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase"; // تأكد من ضبط مسار ربط الفايربيس
import { useAuth } from "../../context/AuthProvider";
import {  FaEye, FaEyeSlash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../logoo.png";
const Login = () => {
  const { userId } = useParams();
  const [nationalId, setNationalId] = useState(userId || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { login ,currentUser} = useAuth();
console.log("currentUser",currentUser)
 
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // الاستعلام من Firestore باستخدام رقم الهوية كـ Document ID
      const userDocRef = doc(db, "user", nationalId.trim());
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();

        // التأكد من أن الحساب مفعل بـ isActive
        if (userData.isActive === false) {
          setError("هذا الحساب غير مفعل.");
          setLoading(false);
          return;
        }

        // مطابقة كلمة المرور المخزنة في Firestore
        if (userData.password === password.trim()) {
          // حفظ بيانات الدخول والتحويل لصفحة /home
          login({
            id: nationalId,
            name: userData.name || userData.name || "مستخدم",
          });
          navigate("/home", { replace: true });
          console.log("تم تسجيل الدخول بنجاح:", userData);
        } else {
          setError("كلمة المرور غير صحيحة.");
        }
      } else {
        setError("رقم الهوية غير مسجل في النظام.");
      }
    } catch (err) {
      console.error(err);
      setError("حدث خطأ في الاتصال بقاعدة البيانات.");
    } finally {
      setLoading(false);
    }
  };

  return (
   
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{ backgroundColor: "#f4f6f8" }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="border-0 shadow-lg rounded-4 overflow-hidden">
              <Row className="g-0">
                 {/* الجانب الأيمن: نموذج تسجيل الدخول */}
                <Col md={6} className="p-5 bg-white">
                  <div className="d-flex justify-content-center align-items-center mb-4">
                    <h3 className="fw-bold m-0" style={{ color: "#2C3E50" }}>
                      تسجيل <span style={{ color: "#2C3E50" }}>الدخول</span>
                    </h3>
                  
                  </div>

                  <Form onSubmit={handleLogin}>
                    {/* حقل البريد الإلكتروني */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="small text-muted mb-1">
                        ادخل رقم الهوية{" "}
                      </Form.Label>
                      <Form.Control
                        className="py-2 border-0 border-bottom rounded-0 px-0 shadow-none"
                        style={{ borderBottomColor: "#ccc",  backgroundColor: "#f9fbf9 !important" }}
                        required
                        type="text"
                        placeholder="أدخل رقم الهوية"
                        value={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                        dir="rtl"
                      />
                    </Form.Group>

                    {/* حقل كلمة المرور */}
                    <Form.Group
                    
                      className="mb-4 "
                      controlId="formBasicPassword"
                    >
                      <Form.Label className="small text-muted mb-1">
                        كلمة السر
                      </Form.Label>
                      <div className="position-relative d-flex align-iyems-center " >
 <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="py-2 border-0 border-bottom rounded-0 px-0 pe-4 shadow-none d-flex jusity-content-between align-items-center"
                        style={{ borderBottomColor: "#ccc" }}
                        required
                          dir="rtl"
                      />
                      <span
                        className="position-absolute start-0 top-50 translate-middle-y me-2 text-muted"
                        style={{ cursor: "pointer", zIndex: 10 }}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                      </div>
                     
                    </Form.Group>

                    {/* فاصل "أو" */}
                    <div className="text-center my-3 position-relative">
                      <hr className="text-muted" />
                      <span className="position-absolute top-50 start-50 translate-middle bg-white px-2 small text-muted">
                        or
                      </span>
                    </div>

                    {/* زر تسجيل الدخول الرئيسي */}
                    <Button
                      type="submit"
                      className="w-100 py-2 rounded-3 border-0 fw-semibold"
                      style={{ backgroundColor: "#5B8C5A", color: "#ffffff" }}
                    >
                      تسجيل الدخول
                    </Button>

                    {/* رابط استعادة كلمة المرور */}
                    <div className="text-center mt-3">
                      <a
                        href="#forgot"
                        className="small text-muted text-decoration-none"
                      >
                        نسيت كلمة المرور؟
                      </a>
                    </div>
                    {error && <Alert variant="danger" className="py-2 text-center small">{error}</Alert>}
                  </Form>
                </Col>
                {/* الجانب الأيسر: الشعار والهوية البصرية */}
                <Col
                  md={6}
                  className="p-1 d-flex flex-column align-items-center justify-content-center position-relative text-center"
                  style={{ backgroundColor: "#f9fbf9" }}
                >
              
                  <div className="mb-1 text-center">
                    <img
                      src={logo}
                      style={{
                        width: "200px",
                        height: "150px",

                        // objectFit: "cover",
                      }}
                    />
                  </div>
                  <h2
                    className="fw-bold mt-1"
                    style={{ color: "#5B8C5A", letterSpacing: "1px" }}
                  >
                    دار كيراز ارسلان
                  </h2>
                </Col>

               
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
