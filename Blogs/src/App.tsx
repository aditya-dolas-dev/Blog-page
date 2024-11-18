import PeopleToFollow from "./Components/PeopleToFollow"
import Navigation from "./Components/Navigation"
import TrendList from "./Components/TrendList"
import TopicsList from "./Components/TopicsList"
import { BlogProvider, useBlogs } from "./Shared/BlogContext"
import { IoMdAddCircle } from "react-icons/io"
import { useState } from "react"
import { Blog } from "./types"
import Modal from "./Components/Modal"
import BlogForm from "./Components/BlogForm"

const App = () => {

  const[isModalOpen,setIsModelOpen] = useState(false);

  const[editingBlog,setEditingBlog] = useState<Blog|null>(null);

  const openModalForNewBlog = ()=>{
    setEditingBlog(null);
    setIsModelOpen(true);
  }

  const openModalForEditing=()=>{
    setEditingBlog(blog);
    setIsModelOpen(true)
  }

  return (
    <div>
      <BlogProvider>
      <Navigation/>

      <div className="flex justify-center">

        <section className="mx-auto p-6">
          <div>
          <button
                onClick={openModalForNewBlog}
                className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
              </button>

              {/* Article List  */}

              {isModalOpen && (
                <Modal onClose={() => setIsModelOpen(false)}>
                  <BlogForm/>
                </Modal>
              )}

          </div>
        </section>

        <div className="w-[30%]">
          <PeopleToFollow/>
          <TrendList/>
          <TopicsList/>
        </div>
      </div>
    </BlogProvider>
    </div>
  )
}

export default App