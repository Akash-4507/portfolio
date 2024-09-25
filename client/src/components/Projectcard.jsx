import React from 'react'
import { Pencil, Trash } from 'lucide-react'
import {deleteProject} from '../services/Api'

const Projectcard = ({title,desc,pid,cover,id}) => {

    const handledelete=async()=>
    {
        try{
            const res=await deleteProject(id)
            console.log(res);
            if(res.status===200)
            {
                console.log("project deleted successfully");
            }
        }
        catch(error)
        {
            console.warn(error);
        }
    }

  return (
    <>
    <div className="flex flex-wrap justify-center gap-4">
  <div className="service-card w-[300px] h-[300px] shadow-xl cursor-pointer snap-start shrink-0 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#bebfc2]">
    <img src={cover} alt={title} className="h-[150px] w-full relative" />
    
    <p className="font-bold text-2xl group-hover:text-white text-black/80 px-6">
      {title}
    </p>
    <p className="text-gray-400 text-sm px-6">{desc}</p>
    
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-[80%] flex justify-center h-full items-center gap-2">
        <button className="p-2 w-12 h-12 rounded-full border-2 border-purple-500 text-purple-500 font-bold">
          <Pencil className="h-4 w-4" />
        </button>
        <button
          className="p-2 w-12 h-12 rounded-full border-2 border-red-500 text-red-500 font-bold"
          onClick={handledelete}
        >
          <Trash className="h-4 w-4" />
        </button>
      </div>
      <p
        style={{
          WebkitTextStroke: "1px gray",
          WebkitTextFillColor: "transparent",
        }}
        className="text-5xl font-bold self-end px-6"
      >
        {parseInt(pid, 10) + 1}
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default Projectcard
