

const AssignmentCard = ({assignment}) => {
    const { date, difficulty, description, marks, image, tittle} = assignment || {}

    return (
        <div>
           <div className="card bg-base-100 shadow-xl">
  <figure className="px-5 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className=" px-5 ">
    <h2 className="">{tittle}</h2>
    <p>{description}</p>
    <p>Mark: {marks}</p>
    <p>Difficulty: {difficulty}</p>
    <p>Date: {date}</p>
    <div className="flex justify-between gap-4  ">
      <button className="btn btn-primary w-2/5">Delete</button>
      <button className="btn btn-primary w-2/5">Update</button>
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default AssignmentCard;