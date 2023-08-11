export default function Todo(props) {
 function deleteHandler() {
  console.log(props.text);
 }



  return(
    <div>
        <div className='card'>
          <h2>{props.text}</h2>
          <div className='atcions'>
            <button className='btn' onClick={deleteHandler()}>Delete</button>
          </div>
       </div>
    </div>  
    );
}