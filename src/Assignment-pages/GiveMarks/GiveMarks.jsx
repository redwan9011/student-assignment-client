import axios from "axios";
import { useLoaderData } from "react-router-dom";


const GiveMarks = () => {
    const givemarks = useLoaderData()
    console.log(givemarks);
    const {  pdf, note, status} =givemarks || {}
    console.log(status);
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
        <div>
            <div>
                <h1>PDF link : {pdf}</h1>
                <h1>Note : {note}</h1>
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