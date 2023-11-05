import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment , setAssignments , assignments}) => {
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
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className=" px-5 ">
          <h2 className="">{tittle}</h2>
          <p>{description}</p>
          <p>Mark: {marks}</p>
          <p>Difficulty: {difficulty}</p>
          <p>Date: {date}</p>
          <div className="flex justify-between gap-4  ">
            <button onClick={() => handleDelete(_id)} className="btn btn-primary ">Delete</button>
           <button className="btn btn-primary ">  <Link to={`/updateassignment/${_id}`}> Update
           </Link></button>
           <button className="btn btn-primary ">  <Link to={`/viewdetails/${_id}`}> View Details
           </Link></button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

AssignmentCard.propTypes = {
  assignment: PropTypes.object,
   setAssignments: PropTypes.func ,
   assignments:  PropTypes.array
}

export default AssignmentCard;