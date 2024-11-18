import PeopleToFollow from "./Components/PeopleToFollow"
import Navigation from "./Components/Navigation"
import TrendList from "./Components/TrendList"
import TopicsList from "./Components/TopicsList"
import { BlogProvider } from "./Shared/BlogContext"


const App = () => {
  return (
    <div>
      <BlogProvider>
      <Navigation/>

      <div className="flex justify-center">
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