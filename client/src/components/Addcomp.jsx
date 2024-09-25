import React, { useRef } from 'react'
import { addProject } from '../services/Api'
import { useState } from 'react'

const Addcomp = () => {
    const [visible,setVisible]=useState(false)
    const titleref=useRef(null)
    const descref=useRef(null)
    const linkref=useRef(null)
    const coverref=useRef(null)

    const handleAdd=async(e)=>
    {
       e.preventDefault(); // Corrected the typo
       const projectData={
        title:titleref.current.value,
        desc:descref.current.value,
        link:linkref.current.value,
        cover:coverref.current.value 
       }
       try {
        const response = await addProject(projectData)
        console.log(response.status)
        if (response.status === 201) {
            console.log("added")

        }
    } catch (error) {
        console.warn(error)

    }
       console.log(projectData);
       setVisible(false)
    }


  return (
    <>
      <div className="w-full h-full text-[#080b40] text-3xl font-bold items-center cursor-pointer" onClick={() => setVisible(true)}>
    ADD +
</div>

        {
            visible && (
                <>
                   <div className="h-screen w-screen absolute top-5 left-0 right-0 flex  justify-center items-center  bg-white z-50 ">

                   <div className="w-[30%] h-[50%] flex flex-col  items-center  bg-white text-[#080b40]  ">
                    <div className="w-full h-[12%] flex justify-center items-start text-[#080b40] text-4xl font-bold border-b-2 border-[#080b40]">
                        ADD PROJECT
                    </div>
                    <div className="h-[21rem] w-[70%] bg-white  flex flex-col justify-center gap-2 items-center">
                        <form onSubmit={handleAdd}>
                  <div className=" h-[20rem] w-[21rem] bg-[#f8f8f8] flex flex-col justify-start text-[#080b40] items-center gap-6 z-50 p-2">
                  <input type="text" ref={titleref} id="title" placeholder="Enter Title" className="w-5/6 justify-start items-center p-2 border-b-2 shadow-lg" />
                  <input type="text" ref={descref} id="desc" placeholder="Enter Description" className="w-5/6 justify-start items-center p-2 border-b-2 shadow-lg" />
                  <input type="text" ref={linkref} id="link" placeholder="Enter Project link" className="w-5/6 justify-start items-center p-2 border-b-2 shadow-lg" />
                  <input type="text" ref={coverref} id="cover" placeholder="Enter cover url" className="w-5/6 justify-start items-center p-2 border-b-2 shadow-lg" />
                  <button type="submit" className="items-center justify-center w-2/6 bg-[#080b40] text-white font-bold text-lg ">ADD</button>
                  </div>
                        </form>
                  </div>
                 </div>
                   </div>
                </>
            )
        }
     </>
  )
}

export default Addcomp;
