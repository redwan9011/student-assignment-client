

const CreateAssignment = () => {
    return (
        <div className="my-5 md:my-10">
            <form className=" space-y-5">

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
                            <input type="text" name="details" placeholder="assignment description" className="input input-bordered focus:outline-none w-full" />
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