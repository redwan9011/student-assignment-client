import { useLoaderData } from "react-router-dom";
import SubmittedRow from "./SubmittedRow";


const SubmittedAssignment = () => {
    const submittedAssignments = useLoaderData();
    return (
        <div className="mt-4 mb-10">
            <div className="bg-red-100">
  <table className="table text-center">
    {/* head */}
    <thead >
      <tr className="font-bold text-black text-base">
      
      <th>Name</th>
      <th className="">Title</th>
        <th>Marks </th>
        
        <th>Status</th>
        <th> </th>
      </tr>
    </thead>
    <tbody className="space-y-2">
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