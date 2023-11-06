import { useLoaderData } from "react-router-dom";
import SubmittedRow from "./SubmittedRow";


const SubmittedAssignment = () => {
    const submittedAssignments = useLoaderData();
    return (
        <div>
            submitted assignment {submittedAssignments.length}

            <div >
  <table className="table text-center">
    {/* head */}
    <thead>
      <tr className="font-bold text-black text-base">
      
      <th>Name</th>
        <th>Date</th>
        <th className="">Title</th>
        <th>Marks</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        submittedAssignments.map(assignment => <SubmittedRow 
            key={assignment._id}
            assignment={assignment}
        ></SubmittedRow>)
     }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default SubmittedAssignment;