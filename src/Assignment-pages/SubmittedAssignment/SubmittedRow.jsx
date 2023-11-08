import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const SubmittedRow = ({ assignment }) => {
    console.log(assignment);
    const { name, status, title, marks, _id} = assignment || {}
   
    // const handleMarksSubmit = (e) => {
    //     e.preventDefault()
    //     const form = e.target
      
    //     const giveMarks = form.giveMarks.value;
    //     const feedback = form.feedback.value;
    //     console.log(giveMarks, feedback);
    //     const submitMark = { giveMarks, feedback}
    //     axios.post('https://student-assignment-server.vercel.app/submitmark' , submitMark)
    //     .then(res => {
    //         console.log(res.data);
    //         form.reset()
    //     })

    // }

    
    return (
        <tr >
            <td>{name}</td>
            <td>{title}</td>
            <td>{marks}</td>
            <td>{status}</td>

            <th >
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
               <button ><Link to={`/givemarks/${_id}`} className="btn bg-red-600 text-white hover:bg-red-700 ">Give Marks</Link></button>
            </th>

        </tr>
    );
};



SubmittedRow.propTypes = {
    assignment: PropTypes.object
}
export default SubmittedRow;





