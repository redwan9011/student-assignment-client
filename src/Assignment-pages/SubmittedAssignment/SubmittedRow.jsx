
import PropTypes from "prop-types"

const SubmittedRow = ({ assignment }) => {
    const { name, status, title, marks, note, pdf , _id } = assignment || {}

    const handleMarksSubmit = e => {
        e.preventDefault()
        console.log('marks');
        
        const form = e.target
        form.reset()
        const giveMarks = form.giveMarks.value;
        const feedback = form.feedback.value;
        console.log(giveMarks, feedback);
        
    }
    
    const  handlestatusUpdate = (id) => {
        console.log(id);
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{title}</td>
            <td>{marks}</td>
            <td>{status}</td>

            <th>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Give Marks</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form  >
                        <div >
                        <h3 className="font-bold text-lg">PDF Link: {pdf}</h3>
                        <p className="py-4">Note: {note}</p>
                        </div>

                        <form onSubmit={handleMarksSubmit}>
                        <input type="text" placeholder="Marks" name="giveMarks" className="input input-bordered input-secondary w-full max-w-xs mb-1" />
                        <textarea className="textarea textarea-secondary w-full max-w-xs" placeholder="Feedback" name="feedback"></textarea> <br />
                        <button onClick={()=> handlestatusUpdate(_id)} className="btn btn-outline btn-secondary w-full max-w-xs">Submit</button>

                        </form>
                    </div>
                </dialog>
            </th>

        </tr>
    );
};



SubmittedRow.propTypes = {
    assignment: PropTypes.object
}
export default SubmittedRow;