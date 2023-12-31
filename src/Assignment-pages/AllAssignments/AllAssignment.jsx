import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import {   useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";




const AllAssignment = () => {

const {isPending ,data:assignmentsloaded } = useQuery({
    queryKey: ['assignmentsloaded'],
    queryFn: async() => {
        const res = await  fetch('https://student-assignment-server.vercel.app/assignments')
        return res.json()
    }
})

//    const [assignmentsloaded , setAssignmentsloaded ]= useState([])
//  useEffect ( ()=> {
//     fetch('https://student-assignment-server.vercel.app/assignments')
//     .then(res => res.json())
//     .then(data => setAssignmentsloaded(data) )
//  }, [setAssignmentsloaded ])

    const [assignments, setAssignments] = useState([])

    const [itemsperPage, setItemsPerPage] = useState(5)
    const [curerentPage, setCurrentPage] = useState(0)
    
    const {count} = useLoaderData()
    const numberofPages = Math.ceil (count / itemsperPage)

    const pages = [ ...Array(numberofPages).keys()]
    
    useEffect(()=> {
        fetch(`https://student-assignment-server.vercel.app/assignments?page=${curerentPage}&size=${itemsperPage}`)
        .then(res => res.json())
        .then(data => setAssignments(data))
    } , [curerentPage, itemsperPage])
    console.log(assignments);

   

    const handleSort = e => {
        e.preventDefault()
        const sort = e.target.sort.value;
        console.log(sort);
        const remaining = assignmentsloaded?.filter( assignment => assignment.difficulty === sort )
        console.log(remaining);
        setAssignments(remaining)
       
    }


    const handlePerPageItems =(e) => {
        const value = parseInt(e.target.value)
        // console.log(value)
        setItemsPerPage(value)
        setCurrentPage(0)
    }

    const handlePrev = () => {
        if(curerentPage > 0) {
            setCurrentPage(curerentPage - 1)
        }
    }

    const handleNextpage = () => {
        if( curerentPage < pages.length -1){
            setCurrentPage(curerentPage + 1)
        }
    }

    if( isPending) {
        return <div className="h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg  "></span>
        </div>
    }
    return (
        <div>
           <form  className="py-5" onSubmit={ handleSort} >
           <select className="select select-secondary w-1/2 md:w-full max-w-xs mr-5" name="sort">
                   
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
               
            </select>
            <input type="submit" value="Sort by" className=" btn btn-outline btn-secondary "/>
           </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    assignments.map(assignment => <AssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                        assignments={assignments}
                        setAssignments={setAssignments}
                    ></AssignmentCard>)
                }
            </div>

            <div className="text-center flex justify-center gap-2 my-10 ">
               
               <button onClick={handlePrev} className="bg-red-600 btn text-white 
               hover:bg-red-600">prev</button>
                {
                
                    pages.map ( page => <button key={page}
                        onClick={()=> setCurrentPage(page)}
                        className={curerentPage === page ? 'bg-red-600 btn text-white hover:bg-red-600' : 'bg-black btn text-white hover:bg-black'}
                    >{page}</button>)
                
                }
                 <button onClick={handleNextpage} className="bg-red-600 btn text-white hover:bg-red-600">Next</button>
                <select className="btn" onChange={handlePerPageItems} value={itemsperPage}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default AllAssignment;