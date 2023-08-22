import { Link } from "react-router-dom";

const DUMMY_DATE = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: '#',
    address: '#',
    description: 
      'This is a first, amazing meetup'
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: '#',
    address: '#',
    description: 
      'This is a second, amazing meetup'
  }
]
 
 
 function AllMeetupsPage() {
  return ( 
   <div>
    <ul>
    <h1>AllMeetups</h1>
    {DUMMY_DATE.map((meetup) => {
      return <li key = {meetup.id}>{meetup.title}</li>
    })}
    </ul>
    </div>
  )
 }

 export default AllMeetupsPage;