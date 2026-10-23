 {/* <div className="bg-light min-vh-100 d-flex p-3 align-items-center justify-content-center">
      <Modal show={true} centered size="lg">
        <Modal.Header className="border-0 pb-0">
          <Modal.Title className="fw-bold text-primary  fs05 w-100 text-end">
            بيانات الايتام تفاصيل اليتيم
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4" dir="rtl">
          <Row className="mb-4 text-secondary small">
            {data.map((item, index) => (
              <>
                <Col className="text-start" xs={6}>
                  <div className="mb-3">
                    <span className="text-muted d-block">اليتيم</span>
                    <div className="text-muted">{item.orphone.orphonename}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted d-block">الهوية</span>
                    <div className="text-muted">{item.orphone.orphanId}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted d-block">تاريخ الميلاد</span>
                    <div className="text-muted">{item.orphone.brithday}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted d-block">مكان الميلاد</span>
                    <div className="text-muted">{item.orphone.brithdayPlace}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted d-block">الحالة</span>
                    <div className="text-muted">{item.orphone.careState}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted d-block">تاريخ الانضمام</span>
                    <div className="text-muted">{item.responsiborDetails.joinDate}</div>
                  </div>
                </Col>
                <Col className="text-start" xs={6}>
                  <div className="mb-3">
                    <span className="text-muted d-block">الوكيل</span>
                    <div className="text-muted">{item.responsiborDetails.responsibor}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted d-block">هوية الوكيل</span>
                    <div className="text-muted">{item.responsiborDetails.responsiborId}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted d-block">صلة القرابة</span>
                    <div className="text-muted">{item.responsiborDetails.relative}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted d-block"> مهنة الوكيل</span>
                    <div className="text-muted">{item.responsiborDetails.responsiborJob}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted d-block">رقم الجوال</span>
                    <div className="text-muted">{item.responsiborDetails.phone}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted d-block">
                      {" "}
                      رقم الجوال البديل
                    </span>
                    <div className="text-muted">{item.responsiborDetails.allerativePhone}</div>
                  </div>
                </Col>
              </>
            ))}
          </Row>

          <h6>بيانات العائلة</h6>
          <Table
            bordered
            hover
            responsive
            className="text-center align-middle mb-4"
          >
            <thead className="table-light text-muted small">
              <tr>
                <th>اسم الاب</th>
                <th>الهوية</th>
                <th>سبب الوفاة</th>
                <th>تاريخ الاسشتهاد</th>
                <th>اسم الام</th>
                <th>الهوية</th>
                <th>حالة الام</th>

                <th>تاريخ الاسشتهاد</th>
                <th>عدد وفيات نفس الاسرة</th>
                <th>عدد الاخوة</th>
                <th>العنوان</th>
                <th>حالة الاسرة</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item, index) => (
                <tr key={item.id || index} className="bg-white">
                  <th>{index + 1}</th>
                  <td>{item.familyDetails.fatherName}</td>
                  <td>{item.familyDetails.fatherId}</td>
                  <td>{item.familyDetails.dieReason}</td>
                  <td>{item.familyDetails.dieDate}</td>
                  <td>{item.familyDetails.motherName}</td>
                  <td>{item.familyDetails.motherId}</td>
                  <td>{item.familyDetails.motherState}</td>
                  <td>{item.familyDetails.motherdieDate}</td>

                  <td>{item.familyDetails.diesFamilyNo}</td>
                  <td>{item.familyDetails.address}</td>
                  <td>{item.familyDetails.livingState}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>

        <Modal.Footer className="border-0 pt-0">
          <Button variant="secondary" className="px-4">
            اغلاق
          </Button>
        </Modal.Footer>
      </Modal>
    </div> */}





    {/* <div className="container py-4 " dir="rtl">
        <div className="row mb-4">
          <div className="col-12 text-end">
            <h3 className="fw-bold text-secondary">تفاصيل اليتيم</h3>
          </div>
        </div>
        <div className="row g-4 mb-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-header bg-white d-flex justify-content-between align-items-center bpy-3">
              <h5 className="mb-0 fw-bold text-dark">تفاصيل اليتيم</h5>
              <button className="btn btn-sm btn-secondary px-3">تعديل</button>
            </div>
            <div className="card-body">
              <table className="table table-borderless align-middle mb-0">
                <tbody>
                  {data.map((item, index) => {
                    <tr key={item.id || index} className="bg-white">
                      <th>{index + 1}</th>
                      <tr>
                        <td>اسم الاب</td>
                         <td>{item.familyDetails.fatherName}</td>
                      </tr>
                      <td>{item.familyDetails.fatherName}</td>
                      <td>{item.familyDetails.fatherId}</td>
                      <td>{item.familyDetails.dieReason}</td>
                      <td>{item.familyDetails.dieDate}</td>
                      <td>{item.familyDetails.motherName}</td>
                      <td>{item.familyDetails.motherId}</td>
                      <td>{item.familyDetails.motherState}</td>
                      <td>{item.familyDetails.motherdieDate}</td>

                      <td>{item.familyDetails.diesFamilyNo}</td>
                      <td>{item.familyDetails.address}</td>
                      <td>{item.familyDetails.livingState}</td>
                    </tr>;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}


        <div className="row">
            <div className="col-12">
              <div className="card shadow-sm border-0">
                <div className="card-header bg-white d-flex justify-content-between align-items-center py-3">
                  <h5 className="mb-0 fw-bold text-dark">سجل العهد</h5>
                  <button className="btn btn-sm btn-primary px-3">تعديل</button>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0 text-center">
                      <thead className="table-light">
                        <tr>
                          <th className="py-3 fw-bold">الاب</th>
                          <th className="py-3"> الاسم</th>
                          <th className="py-3">الهوية</th>
                          <th className="py-3">تاريخ الوفاة </th>
                          <th className="py-3">سبب الوفاة </th>
                        </tr>
                        {/* <tbody> */}
                        <tr>
                          <td className="fw-bold">بيانات الاب</td>
                          <td>{data?.familyDetails?.fatherName} </td>
                          <td>{data?.familyDetails?.fatherId}</td>
                          <td>{data?.familyDetails?.dieDate}</td>
                          <td>{data?.familyDetails?.dieReason}</td>
                        </tr>

                        {/* </tbody> */}
                      </thead>

                      <thead className="table-light">
                        <tr>
                          <th>الام</th>
                          <th className="py-3"> الاسم</th>
                          <th className="py-3">الهوية</th>
                          <th className="py-3"> حالة الام</th>
                          <th className="py-3">تاريخ الوفاة </th>
                        </tr>
                        {/* <tbody> */}

                        <tr>
                          <td className="fw-bold">بيانات الام</td>
                          <td>{data?.familyDetails?.motherName} </td>
                          <td>{data?.familyDetails?.motherId}</td>
                          <td>{data?.familyDetails?.motherState}</td>
                          <td>
                            {data?.familyDetails?.motherdieDate || "____"}
                          </td>
                          {/* <td>{data?.familyDetails?.dieReason}</td> */}
                        </tr>
                        {/* </tbody> */}
                      </thead>
                      <thead className="table-light">
                        <tr>
                          <th>بيانات اضافية</th>
                          <th className="py-3"> حالة المنزل</th>
                          <th className="py-3">الحالة المعيشية</th>
                          <th className="py-3"> عدد الاخوة</th>
                          <th className="py-3">عدد الوفيات في نفس العائلة </th>
                        </tr>
                        {/* <tbody> */}

                        <tr>
                          <td className="fw-bold">بيانات اضافية </td>
                          <td>{data?.familyDetails?.homeState} </td>
                          <td>{data.familyDetails.livingState}</td>
                          <td>{data?.familyDetails?.bothersNumber}</td>
                          <td>{data?.familyDetails?.diesFamilyNo || "____"}</td>
                          {/* <td>{data?.familyDetails?.dieReason}</td> */}
                        </tr>
                        {/* </tbody> */}
                      </thead>
                   
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>





   {/* <div className="d-flex justify-content-between align-items-center px-2 mt-4">
        <span className="text-muted">
          {data.length} من {Math.min (startIndex+itemsPerPage, data.length)} الى {startIndex+1}
        </span>
        {/* <div className="btn-group" dir="ltr">
          <button className="btn btn-outline-primary btn-sm">&laquo السابق</button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index+1} className="btn btn-outline-primary btn-sm">
              {index+1}
            </button>
          ))}
        </div> */}
        
      </div> */}






<Card className="p-4 shadow-sm mb-4">
          <h4 className="fw-bold">بيانات اليتيم</h4>

          <Form onSubmit={handleData}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>الاسم رباعي</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل اسم الطفل رباعي"
                    onChange={(e) => setOrphoneName(e.target.value)}
                    value={orphonename}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>رقم الهوية </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="ادخل رقم هوية الطفل"
                    onChange={(e) => setorphanId(e.target.value)}
                    value={orphanId}
                    className="form-control"
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
                    // placeholder="ادخل تاريخ الميلاد"
                    onChange={(e) => setBrithday(e.target.value)}
                    value={brithday}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>مكان الميلاد</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="    اسم المدينة/اسم المستشفى"
                    onChange={(e) => setbrithdayPlace(e.target.value)}
                    value={brithdayPlace}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>المرحلة الدراسية</Form.Label>
                  <Form.Control
                    type="phone"
                    // placeholder="Enter your phone"
                    onChange={(e) => setStudyLevel(e.target.value)}
                    value={studyLevel}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>اضافة صورة </Form.Label>
                  <Form.Control
                    type="file"
                    // placeholder="Enter your phone"
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const base64 = await convertToBase64(file);
                        setImage(base64);
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
                          value="انثى"
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
            </Row>

            {/* <Button type="submit" className="text-center">Submit</Button> */}
          </Form>
        </Card>































  <Card className="p-4 shadow-sm mb-4">
          <h4 className="fw-bold">بيانات اسرة اليتيم</h4>
          <Form onSubmit={handleData}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>الاسم الاب</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل اسم الاب"
                    onChange={(e) => setFatherName(e.target.value)}
                    value={fatherName}
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
                    onChange={(e) => setFatherId(e.target.value)}
                    value={fatherId}
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
                    onChange={(e) => setDieDate(e.target.value)}
                    value={dieDate}
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
                    onChange={(e) => setDieReason(e.target.value)}
                    value={dieReason}
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
                    onChange={(e) => setMatherName(e.target.value)}
                    value={motherName}
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
                    onChange={(e) => setMathorId(e.target.value)}
                    value={motherId}
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
                      onChange={(e) => setMathorState(e.target.value)}
                      value={motherState}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>تاريخ الوفاة</Form.Label>
                    <Form.Control
                      type="date"
                      // placeholder="ادخل تاريخ الميلاد"
                      onChange={(e) => setMotherDieDate(e.target.value)}
                      value={motherdieDate}
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
                    // placeholder="Enter your phone"
                    onChange={(e) => setDiesFamilyNo(e.target.value)}
                    value={diesFamilyNo}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>عدد الاخوة الذكور</Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="Enter your phone"
                    onChange={(e) => setBrothersNumber(e.target.value)}
                    value={bothersNumber}
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
                    // placeholder="Enter your phone"
                    onChange={(e) => setSistersNumber(e.target.value)}
                    value={sistersNumber}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label> الحالة المعيشية</Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="  "
                    onChange={(e) => setLivingState(e.target.value)}
                    value={livingState}
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
                    onChange={(e) => setHomeState(e.target.value)}
                    value={homeState}
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
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            {/* <Button type="submit" className="text-center">Submit</Button> */}
          </Form>
        </Card>



 <Card className="p-4 shadow-sm mb-4">
          <h4 className="fw-bold">بيانات الوصي</h4>
          <Form onSubmit={handleData}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>الاسم الوصي</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="ادخل اسم الوصي رباعي"
                    onChange={(e) => setResponsibor(e.target.value)}
                    value={responsibor}
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
                    onChange={(e) => setresponsiborId(e.target.value)}
                    value={responsiborId}
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
                    onChange={(e) => setRelative(e.target.value)}
                    value={relative}
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
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
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
                    onChange={(e) => setWhatsappPhone(e.target.value)}
                    value={whatsappPhone}
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
                    onChange={(e) => setAllerativePhone(e.target.value)}
                    value={allerativePhone}
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
                    onChange={(e) => setResponsiborJob(e.target.value)}
                    value={responsiborJob}
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
                    onChange={(e) => setJoinDate(e.target.value)}
                    value={joinDate}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* <Button type="submit" className="text-center">Submit</Button> */}
          </Form>
        </Card>

        
dbeafe   back

1D4ED8 color





