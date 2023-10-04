import { useCallback, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { v4 } from "uuid";

import StudentForm from "../components/form/StudentForm";
import StudentHeader from "../components/header/StudentHeader";
import StudentTable from "../components/table/StudentTable";

const StudentsPage = () => {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: "",
    group: "REACT N1",
  });
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("all");
  const firstNameRef = useRef();

  const resetStudent = useCallback(() => {
    setStudent({
      firstName: "",
      lastName: "",
      age: "",
      group: "REACT N1",
    });
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const form = event.currentTarget;

      if (form.checkValidity()) {
        let newStudent = { ...student, age: +student.age, id: v4() };
        let newStudents;
        if (selected === null) {
          newStudents = [...students, newStudent];
        } else {
          newStudents = students.map((student) => {
            if (student.id === selected) {
              return newStudent;
            } else {
              return student;
            }
          });
        }
        firstNameRef.current.focus();
        setStudents(newStudents);
        resetStudent();
        setSelected(null);
        localStorage.setItem("students", JSON.stringify(newStudents));
      } else {
        setValidated(true);
      }
    },
    [resetStudent, selected, student, students]
  );

  const handleStudent = useCallback(
    (e) => {
      setStudent({ ...student, [e.target.id]: e.target.value });
    },
    [student]
  );

  const editStudent = useCallback(
    (id) => {
      let student = students.find((student) => student.id === id);
      setSelected(id);
      setStudent(student);
    },
    [students]
  );

  const deleteStudent = useCallback(
    (id) => {
      let newStudents = students.filter((student) => student.id !== id);
      setStudents(newStudents);
      localStorage.setItem("students", JSON.stringify(newStudents));
    },
    [students]
  );

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

export default StudentsPage;
