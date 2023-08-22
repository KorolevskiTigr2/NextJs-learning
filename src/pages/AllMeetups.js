import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATE = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: '',
    address: 'Dom Pyshkina',
    description: 
      'This is a first, amazing meetup'
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://pexels.com/photo/high-angle-view-of-cityscape-against-cloudy-sky-313782/',
    address: 'Dom Esenina',
    description: 
      'This is a second, amazing meetup'
  }
]
 
 
 function AllMeetupsPage() {
  return ( 
   <section>
      <MeetupList meetups={DUMMY_DATE}/>
    </section>
  )
 }

 export default AllMeetupsPage;