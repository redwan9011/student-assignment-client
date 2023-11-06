import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";


const AllAssignment = () => {
    const assignmentsloaded = useLoaderData()
    const [assignments, setAssignments] = useState(assignmentsloaded)
    console.log(assignments);

    const handleSort = e => {
        e.preventDefault()
        const sort = e.target.sort.value;
        console.log(sort);
    }

    return (
        <div>
            <h1>assignments: {assignments.length}</h1>
           <form  className="py-5" onSubmit={handleSort}>
           <select className="select select-secondary w-full max-w-xs mr-5" name="sort">
               
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
               
            </select>
            <input type="submit" value="Sort by" className=" btn btn-outline btn-secondary"/>
           </form>
            <div className="grid grid-cols-3 gap-8">
                {
                    assignments.map(assignment => <AssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                        assignments={assignments}
                        setAssignments={setAssignments}
                    ></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;