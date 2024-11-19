import { useBlogs } from "../Shared/BlogContext"
import { Blog } from "../types";
import ArticleCard from "./ArticleCard";


interface ArticleListType {

onEdit:(blog:Blog)=>void;
  

}

const ArticleList:React.FC<ArticleListType> = ({onEdit}) => {

  const {blogs,deleteBlog} = useBlogs();


  return (
    <div className="ml-[5rem]">
    {blogs.map((blog) => (
      <ArticleCard
        key={blog.id}
        article={blog}
        onDelete={() => deleteBlog(blog.id)}
        onEdit={()=> onEdit(blog)}
      />
    ))}
  </div>
  )
}

export default ArticleList
