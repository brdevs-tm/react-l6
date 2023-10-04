import PropTypes from "prop-types";

const StudentCard = ({
  firstName,
  lastName,
  age,
  group,
  order,
  id,
  editStudent,
  deleteStudent,
}) => {
  return (
    <tr>
      <td>{order}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{age}</td>
      <td>{group}</td>
      <td className="text-end">
        <button
          className="btn btn-danger me-3"
          onClick={() => deleteStudent(id)}
        >
          Delete
        </button>
        <button className="btn btn-primary" onClick={() => editStudent(id)}>
          Edit
        </button>
      </td>
    </tr>
  );
};

StudentCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  group: PropTypes.string,
  order: PropTypes.number,
  id: PropTypes.string,
  editStudent: PropTypes.func,
  deleteStudent: PropTypes.func,
};

export default StudentCard;
