import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import StudentCard from "../card/StudentCard";
import { memo } from "react";

const StudentTable = ({
  students,
  editStudent,
  deleteStudent,
  search,
  group,
}) => {
  let results = students.filter(
    (student) =>
      student.firstName.toLowerCase().includes(search) ||
      student.lastName.toLowerCase().includes(search)
  );
  if (group !== "all") {
    results = results.filter((student) => student.group === group);
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Category</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {results.length !== 0 ? (
          results.map((student, i) => (
            <StudentCard
              {...student}
              key={student.id}
              order={i + 1}
              editStudent={editStudent}
              deleteStudent={deleteStudent}
            />
          ))
        ) : (
          <tr>
            <td className="text-center" colSpan={6}>
              No products
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

StudentTable.propTypes = {
  students: PropTypes.array,
  editStudent: PropTypes.func,
  deleteStudent: PropTypes.func,
  search: PropTypes.string,
  group: PropTypes.string,
};

const MemoStudentTable = memo(StudentTable);

export default MemoStudentTable;
