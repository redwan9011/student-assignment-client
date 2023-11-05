import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import MyAssignmentCard from "./myAssignmentCard";


const MyAssignment = () => {
    const {user} = useContext(AuthContext)
    const currentUser = user?.email 

    const assignmentsloaded = useLoaderData()
    const [assignments, setAssignments] = useState([])


  useEffect( () => {
   const myAssignment= assignmentsloaded.filter(assignment => assignment.email === currentUser )
   setAssignments(myAssignment)

  }, [assignmentsloaded, currentUser])

  console.log(assignments);
    return (
        <div>
            my all assignment : {assignments.length}

         <div className="grid grid-cols-3 gap-3">
         {
                assignments.map(assignment => <MyAssignmentCard 
                key={assignment._id}
                assignment={assignment}
                assignments={assignments}
                setAssignments={setAssignments}
                ></MyAssignmentCard> )
            }
         </div>
        </div>
    );
};

export default MyAssignment;