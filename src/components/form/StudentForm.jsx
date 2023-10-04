import { forwardRef, memo } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

import { groups } from "../../data/groups";

const StudentForm = forwardRef(
  (
    {
      validated,
      handleSubmit,
      student: { firstName, lastName, group, age },
      handleStudent,
      selected,
      resetStudent,
    },
    ref
  ) => {
    console.log("StudentForm");
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={ref}
            onChange={handleStudent}
            value={firstName}
            required
            type="text"
          />
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={lastName}
            required
            type="text"
          />
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="group">
          <Form.Label>Category</Form.Label>
          <Form.Select onChange={handleStudent} value={group}>
            {groups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            onChange={handleStudent}
            value={age}
            required
            type="number"
          />
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Button className="mb-3 bg-danger" onClick={resetStudent}>
            Reset
          </Button>
          <Button className="mb-3" type="submit">
            {selected === null ? "Add" : "Save"} Product
          </Button>
        </div>
      </Form>
    );
  }
);

StudentForm.displayName = "StudentForm";

StudentForm.propTypes = {
  validated: PropTypes.bool,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleSubmit: PropTypes.func,
  student: PropTypes.object,
  handleStudent: PropTypes.func,
  resetStudent: PropTypes.func,
};

const MemoStudentForm = memo(StudentForm);

export default MemoStudentForm;
