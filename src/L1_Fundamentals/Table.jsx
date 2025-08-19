const TableHead = () => {
  return (
    <thead>
          <tr>
            <th className="">Name</th>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
  );
}

const TableBody = () => {
    const studentData = [
    { id: 1, name: "Alice", subject: "Math", grade: "A" },
    { id: 2, name: "Bob", subject: "Science", grade: "B" },
    { id: 3, name: "Charlie", subject: "History", grade: "A-" },
    { id: 4, name: "Diana", subject: "English", grade: "B+" },
    { id: 5, name: "Edward", subject: "Math", grade: "C" },
  ];
  return (
    <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.subject}</td>
              <td
                className={
                  student.grade.charAt(0) === "A"
                    ? "bg-success"
                    : student.grade.charAt(0) === "B"
                    ? "bg-warning"
                    : "bg-danger"
                }
              >
                {student.grade}
              </td>
            </tr>
          ))}
        </tbody>
  );
}

const Table = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <h2 className="mx-5 ">Student Data</h2>
      <table className="table table-striped table-bordered table-hover table-responsive table-sm mx-5 w-25">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
