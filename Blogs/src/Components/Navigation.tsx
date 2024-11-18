import { FaSearch, FaUserCircle } from "react-icons/fa"
import "../style.css"

const Navigation = () => {
  return (
    <nav className="border-2 text-black border-gray-200 p-4 flex justify-between items-center">
      <div className="flex  items-center border-2 rounded-full px-4 py-2 max-w-md ml-[5rem]">
        
       <FaSearch/>  

       <input type="text" placeholder="search.. " className="bg-transparent outline-name w-full"  />
      </div> 

      <section className="flex iems-center mr-[5rem]">
        <FaUserCircle className="text-3xl"/>
      </section>
       
    </nav>
  )
}

export default Navigation