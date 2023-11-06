import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthPorvider/AuthProvider";


const Update = () => {
    const assignmentData = useLoaderData()
    console.log(assignmentData);
    const { user} = useContext(AuthContext)
    const currentUser = user?.email;

    const {date, difficulty, description, marks, image, tittle, _id , email} = assignmentData || {};
    
    const handleUpdateAssignment = (e) => {
        e.preventDefault()
        const form = e.target;
        const tittle = form.title.value;
        const image = form.image.value;
        const marks = form.marks.value;
        const difficulty = form.difficulty.value;
        const date = form.date.value;
        const description = form.description.value;

        const updateAssignment = { tittle , image, marks, difficulty, date, description}
        
    if( currentUser === email) {
        fetch(`http://localhost:3000/assignments/${_id}` , {
        method: "PUT",
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify( updateAssignment)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
            Swal.fire('Assignment Update SuccessFully')
        }
        
    })
    }
    else {
        return  Swal.fire('You can not update this Assignment ')
    }

    }
   
    return (
        <div className="my-5 md:my-10">
        <form className=" space-y-5" onSubmit={ handleUpdateAssignment }>

            <div className="grid md:grid-cols-2 gap-3 md:gap-8  w-full">
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 "> Title</span>
                        <input type="text" name="title" placeholder="Assignment titile" defaultValue={tittle} className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Image</span>
                        <input type="text" name="image" placeholder="image URL" defaultValue={image} className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>

            </div>



            <div className="grid md:grid-cols-3 gap-3 md:gap-8  w-full">

                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24">Marks</span>
                        <input type="text" name="marks" defaultValue={marks} placeholder="Marks" className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>

                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Difficulty</span>
                        <select className="input input-bordered focus:outline-none w-full " id="cars" name="difficulty" defaultValue={difficulty}  >
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                           
                        </select>
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-24 ">Date</span>
                       <input type="date" name="date" id="" defaultValue={date} className="input input-bordered focus:outline-none w-full"/>
                    </label>
                </div>

            </div>

            <div className="  w-full">
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-red-600 text-white w-28 ">Description</span>
                        <input type="text" name="description" placeholder="assignment description" defaultValue={description} className="input input-bordered focus:outline-none w-full" />
                    </label>
                </div>

            </div>
            <div className="  w-full">

                <input type="submit" value="Update Assignment" className="btn bg-red-600 w-full hover:bg-red-800 text-white md:text-xl" />
            </div>


        </form>
    </div>
    );
};

export default Update;