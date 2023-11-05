import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";


const AllAssignment = () => {
    const assignmentsloaded = useLoaderData()
    const [assignments, setAssignments] = useState(assignmentsloaded)
    console.log(assignments);
    return (
        <div>
                <h1>assignments: {assignments.length}</h1>

              <div className="grid grid-cols-3 gap-8"> 
              {
                    assignments.map(assignment => <AssignmentCard 
                        key={assignment._id} 
                        assignment={assignment}
                        
                        ></AssignmentCard>)
                }
              </div>
        </div>
    );
};

export default AllAssignment;