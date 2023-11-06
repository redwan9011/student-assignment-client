import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";


const AssignmentSubmit = () => {
    const {user} = useContext(AuthContext)
    const currentUSer = user?.email
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const pdf = form.pdf.value;
        const note = form.note.value;
        const status = 'pending'
        const AssignmentSubmit = { pdf, note, currentUSer , status};
        
        console.log(AssignmentSubmit);
    }   

    return (
        <div className=" flex  items-center">
           <form onSubmit={ handleSubmit} >
           <input type="text" name="pdf" placeholder="assignment pdf link" className="input input-bordered input-secondary w-full " />

           <textarea className="textarea textarea-secondary w-full" name="note" placeholder="quick note"></textarea> <br />
           <input type="submit" value="Submit" className="w-full bg-red-600" />

           </form>
        </div>
    );
};

export default AssignmentSubmit;