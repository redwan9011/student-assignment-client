import { Link, useLoaderData } from "react-router-dom";


const ViewDetails = () => {
    const assignmentData = useLoaderData()
    console.log(assignmentData);
    const {date, difficulty, description, marks, image, tittle,_id } = assignmentData || {};

    return (
        <div className="mb-12">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-5 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-2/3 h-80" />
        </figure>
        <div className=" px-5 space-y-1 mt-5">
          <h2 className="font-bold text-xl md:text-4xl">{tittle}</h2>
          <p className="md:text-xl text-slate-700">{description}</p>
       
        <p className="font-semibold md:text-lg">Mark: {marks}</p>
          <p className="font-semibold md:text-lg">Difficulty: {difficulty}</p>
          <p className="md:text-xl font-bold ">Date: {date}</p>
       
          <div className="flex justify-between gap-4  ">
           
            <Link to={`/assignmentsubmit/${_id}`} className="btn bg-red-600 my-5 text-white hover:bg-red-800 w-full"> Take Assignment
           </Link>
         
           
          </div>
        </div>
      </div>
    </div>
    );
};

export default ViewDetails;