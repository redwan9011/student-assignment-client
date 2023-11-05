import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthPorvider/AuthProvider";


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
        </div>
    );
};

export default MyAssignment;