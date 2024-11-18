const topics =[

  "Technology",
  "Design Thinking",
   "Crypto",
   "NFT",
   "Personal Growth",
   "Reading",

]
const TopicsList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
      <h3 className="font-semibold text-lg mb-4">Topics for You</h3>
      <div className="flex flex-wrap grap-2">
        {topics.map((topic,index)=>(
          <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full cursor-pointer hover:bg-gray-400">{topic}</span>
        ))}
      </div>
    </div>
  )
}

export default TopicsList