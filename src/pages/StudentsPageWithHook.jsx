import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import StudentForm from "../components/form/StudentForm";
import StudentHeader from "../components/header/StudentHeader";
import StudentTable from "../components/table/StudentTable";
import useCRUD from "../hooks/useCRUD";

const StudentsPageWithHook = () => {
  const firstNameRef = useRef();
  
  const {
    data: student,
    allData: students,
    selected,
    validated,
    resetForm: resetStudent,
    handleData: handleStudent,
    handleSubmit,
    editData: editStudent,
    deleteData: deleteStudent,
  } = useCRUD({
    localStorageKey: "students",
    initialData: {
      firstName: "",
      lastName: "",
      age: "",
      group: "REACT N1",
    },
    targetRef: firstNameRef,
  });

  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("all");

  const studentFormProps = {
    selected,
    student,
    validated,
    resetStudent,
    handleStudent,
    handleSubmit,
  };

  const studentHeaderProps = {
    group,
    search,
    setGroup,
    setSearch,
  };

  const studentTableProps = {
    group,
    search,
    students,
    editStudent,
    deleteStudent,
  };

  return (
    <Container className="pt-3">
      <Row>
        <Col md="4">
          <StudentForm ref={firstNameRef} {...studentFormProps} />
        </Col>
        <Col md="8">
          <StudentHeader {...studentHeaderProps} />
          <StudentTable {...studentTableProps} />
        </Col>
      </Row>
    </Container>
  );
};

export default StudentsPageWithHook;
