import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";


const AssignmentSubmit = () => {
    const assignment = useLoaderData()
    console.log(assignment);


    const {user} = useContext(AuthContext)
    const currentUSer = user?.email
    const name = user?.displayName
    const title = assignment?.tittle
    const marks = assignment?.marks
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const pdf = form.pdf.value;
        const note = form.note.value;
        const status = 'pending'
        const assignmentSubmit = { pdf, note, currentUSer , status , name , title ,marks };
        

      axios.post('http://localhost:3000/submit' ,assignmentSubmit)
      .then(res => {
        console.log(res.data);
      })
    }   
   
    return (
        <div className=" flex  items-center justify-center mb-10 border-2 border-red-400 h-[55vh] md:h-[70vh] px-3 md:px-0 mt-3">
           <form onSubmit={ handleSubmit} >
           <input type="text" name="pdf" placeholder="assignment pdf link" className="input input-bordered input-secondary w-full mb-3" required />

           <textarea className="textarea textarea-secondary w-full py-3" name="note" placeholder="quick note" required></textarea> <br />
           <input type="submit" value="Submit" className="w-full bg-red-600 py-2 rounded-lg text-white md:text-2xl mt-2" />

           </form>
        </div>
    );
};

export default AssignmentSubmit;