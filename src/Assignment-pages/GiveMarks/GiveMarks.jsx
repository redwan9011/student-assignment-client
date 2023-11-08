import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const GiveMarks = () => {
    const givemarks = useLoaderData()
   
    const {  pdf, note, } =givemarks || {}
   
        const handleMarksSubmit = (e) => {
        e.preventDefault()
        const form = e.target
      
        const giveMarks = form.giveMarks.value;
        const feedback = form.feedback.value;
       
        const submitMark = { giveMarks, feedback}
        axios.post('http://localhost:3000/submitmark' , submitMark)
        .then(res => {
            console.log(res.data);
            form.reset()
            Swal.fire("Give mark Done");
        })
    }

    // const handlechangestatus = id => {

    //     fetch(`http://localhost:3000/submit/${id}`, {
    //         method: 'PATCH',
    //         headers: { 'content-type': 'application/json'} ,
    //         body: JSON.stringify(status)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }
    return (
        <div className="my-5 ">
            <div className="mb-5  ">
                <h1 className="text-xl font-bold">PDF Link : <a className="btn btn-link text-lg"  >{pdf}</a></h1>
                <h1 className="font-semibold text-lg">Note : {note}</h1>
               
            </div>
              <form onSubmit={ handleMarksSubmit }>
                        <input type="text" placeholder="Marks" name="giveMarks" className="input input-bordered input-secondary w-full max-w-xs mb-1" required /> <br />
                        <textarea className="textarea textarea-secondary w-full max-w-xs" placeholder="Feedback" name="feedback"></textarea> <br />
                        <button  className="btn btn-outline btn-secondary w-full max-w-xs">Submit</button>

                        </form>
        </div>
    );
};

export default GiveMarks;