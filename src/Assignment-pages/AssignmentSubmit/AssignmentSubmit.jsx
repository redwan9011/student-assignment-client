

const AssignmentSubmit = () => {
    return (
        <div className=" flex  items-center">
           <form  >
           <input type="text" placeholder="assignment pdf link" className="input input-bordered input-secondary w-full " />

           <textarea className="textarea textarea-secondary w-full " placeholder="quick note"></textarea> <br />
           <input type="submit" value="Submit" className="w-full bg-red-600" />

           </form>
        </div>
    );
};

export default AssignmentSubmit;