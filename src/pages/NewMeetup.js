import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-b55bb-default-rtdb.firebaseio.com/newmeetup.json',
      {
        method: 'POST', 
        body: JSON.stringify(meetupData),
        headres: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
    return (
      <section>
        <h1>Add New MeetUp</h1>
        <NewMeetUpForm onAddMeetup={addMeetupHandler} />
      </section>
    )
   };
  
  export default NewMeetupPage;