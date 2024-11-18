const trends=[
  {title:"Be the Person You are on Vacation",
    author:"Maren Torff"
  },
  {title:"My Turn: The Autobiography",
    author:"Johan Cryuff"
  },
  {title:"A Song of Ice and Fire- A Game of Thrones",
    author:"R.R Martin"
  },
  {title:"Harry Potter and the Prisoner of Azkaban",
    author:"J.K Rowling"
  },
  {title:"The Hound of the Baskervilles",
    author:"Sir Arthur Conan Doyle"
  },
]

const TrendList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mt-8">
      <h3 className="font-semibold text-lg mb-4">Todays' Top Trends </h3>
      <ul className="space-y-4">
        {trends.map((trend,index)=>(
          <li key={index} className="flex flex-col">
            <span className="font-medium">{trend.title}</span>
            <span className="font-medium">By {trend.author}</span>
          </li>
        ))}

      </ul>
    </div>
  )
} 

export default TrendList