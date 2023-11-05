import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import Swal from "sweetalert2";


const CreateAssignment = () => {
    const {user} = useContext(AuthContext)
    const handleSubmitAssignment = e => {
        e.preventDefault()
        const form = e.target;
        const tittle = form.title.value;
        const image = form.image.value;
        const marks = form.marks.value;
        const difficulty = form.difficulty.value;
        const date = form.date.value;
        const description = form.description.value;
        const email = user?.email
        
        const assignmentData = { tittle , image, marks, difficulty, date, description, email }
    
        console.log(assignmentData);


        fetch('http://localhost:3000/assignments' , {
            method: 'POST',
            headers: { 'content-type': 'application/json'} ,
            body: JSON.stringify(assignmentData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged) {
                Swal.fire('Assignment Submit SuccessFully')
            }
        })
    }

    return (
        <div className="my-5 md:my-10">
            <form className=" space-y-5" onSubmit={ handleSubmitAssignment }>

                <div className="grid md:grid-cols-2 gap-3 md:gap-8  w-full">
                    <div className="form-control">
                        <label className="input-group">
                            <span className="bg-red-600 text-white w-24 "> Title</span>
                            <input type="text" name="title" placeholder="assignment title" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="input-group">
                            <span className="bg-red-600 text-white w-24">Image</span>
                            <input type="text" name="image" placeholder="image URL" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>

                </div>



                <div className="grid md:grid-cols-3 gap-3 md:gap-8  w-full">

                    <div className="form-control">
                        <label className="input-group">
                            <span className="bg-red-600 text-white w-24">Marks</span>
                            <input type="text" name="marks" placeholder="Marks" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="input-group">
                            <span className="bg-red-600 text-white w-24 ">Difficulty</span>
                            <select className="input input-bordered focus:outline-none w-full " id="cars" name="difficulty"  >
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                               
                            </select>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="input-group">
                            <span className="bg-red-600 text-white w-24 ">Date</span>
                           <input type="date" name="date" id="" className="input input-bordered focus:outline-none w-full"/>
                        </label>
                    </div>

                </div>

                <div className="  w-full">
                    <div className="form-control">
                        <label className="input-group">
                            <span className="bg-red-600 text-white w-28 ">Description</span>
                            <input type="text" name="description" placeholder="assignment description" className="input input-bordered focus:outline-none w-full" />
                        </label>
                    </div>

                </div>
                <div className="  w-full">

                    <input type="submit" value="Submit Assignment" className="btn bg-red-600 w-full hover:bg-red-800 text-white md:text-xl" />
                </div>


            </form>
        </div>
    );
};

export default CreateAssignment;