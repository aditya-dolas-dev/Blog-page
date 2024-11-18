import UserCard from "./UserCard"

const peopleToFollow =[
  {name:"Aitana Bonamati", following: true},
  {name:"Alexias Pulteas" ,following:false},
  {name:"Luis Suarez" , following:false},
  {name:"Pau Cubarsi" , following: true},
]

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
     <h3 className="font-semibold text-lg mb-4">People to Follow</h3>
    <div className="space-y-4">
      {peopleToFollow.map((person,index)=>(
        <UserCard key={index} person={person}/>
      ))}
    </div>
     </div>
  )
}

export default PeopleToFollow