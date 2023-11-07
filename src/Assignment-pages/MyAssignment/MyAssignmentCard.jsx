import PropTypes from "prop-types"
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthPorvider/AuthProvider";

const MyAssignmentCard = ({assignment ,assignments,setAssignments}) => {
    const { user } = useContext(AuthContext)
    const currentUser = user?.email
    const { date, difficulty, description, marks, image, tittle, _id, email } = assignment || {};

    const handleDelete = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed && email === currentUser) {
    
            fetch(`http://localhost:3000/assignments/${id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
            const remaining = assignments.filter(assignment => assignment._id !== id)
            setAssignments(remaining)
              })
    
          }
          else {
            return Swal.fire('You Can not delete this Assignment')
          }
    
        })
      }
    return (
        <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
        <img src={image} alt="assignment image" className="rounded-xl w-full h-44" />
        </figure>
        <div className=" px-5 ">
        <h2 className="font-bold text-black text-xl my-2">{tittle}</h2>
       
       <div className="flex justify-between">
       <p className="font-semibold text-lg ">Mark: <span className="font-bold ">{marks}</span></p>
         <p className="font-semibold ">Difficulty: <span className="font-bold">{difficulty}</span></p>
       </div>

          {/* <div className="flex justify-between gap-4  ">
            <button onClick={() => handleDelete(_id)} className="btn btn-primary ">Delete</button>
           <button className="btn btn-primary ">  <Link to={`/updateassignment/${_id}`}> Update
           </Link></button>
           <button className="btn btn-primary ">  <Link to={`/viewdetails/${_id}`}> View Details
           </Link></button>
          </div> */}

<div className="flex justify-between gap-4  py-4">
            <button onClick={() => handleDelete(_id)} className="btn bg-red-600  text-white hover:bg-red-800">Delete</button>
           <button className="btn btn-outline btn-success ">  <Link to={`/updateassignment/${_id}`}> Update
           </Link></button>
           <button className="btn btn-outline btn-info ">  <Link to={`/viewdetails/${_id}`}> View Details
           </Link></button>
           
          </div>
        </div>
      </div>
    </div>
    );
};


MyAssignmentCard.propTypes = {
    assignment: PropTypes.object,
    setAssignments: PropTypes.func ,
   assignments:  PropTypes.array
  }

export default MyAssignmentCard;