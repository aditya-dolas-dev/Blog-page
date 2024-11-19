import PeopleToFollow from "./Components/PeopleToFollow"
import Navigation from "./Components/Navigation"
import TrendList from "./Components/TrendList"
import TopicsList from "./Components/TopicsList"
import { BlogProvider} from "./Shared/BlogContext"
import { IoMdAddCircle } from "react-icons/io"
import { useState } from "react"
import { Blog } from "./types"
import Modal from "./Components/Modal"
import BlogForm from "./Components/BlogForm"
import ArticleList from "./Components/ArticleList"

const App = () => {

  const[isModalOpen,setIsModelOpen] = useState(false);

  const[editingBlog,setEditingBlog] = useState<Blog|null>(null);

  const openModalForNewBlog = ()=>{
    setEditingBlog(null);
    setIsModelOpen(true);
  }

  const openModalForEditing=(blog:Blog)=>{
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

              <ArticleList onEdit={openModalForEditing}/>

              {isModalOpen && (
                <Modal onClose={() => setIsModelOpen(false)}>
                   <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setIsModelOpen(false)}
                  />
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