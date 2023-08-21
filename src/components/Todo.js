import {useState} from 'react';
import Modal from './Modal'
import Backdrop from './Backdrop';

export default function Todo(props) {
  const [modalItsOpen, setModalItsOpen] = useState(false);
  
  function deleteHandler() {
    setModalItsOpen(true);
 }

 function closeModalHandler(){
    setModalItsOpen(false);
 }


  return(
    <div>
        <div className='card'>
          <h2>{props.text}</h2>
          <div className='atcions'>
            <button className='btn' onClick={deleteHandler}>
               Delete
            </button>
          </div>
       </div>
        {modalItsOpen && (
        <Modal onCancel={closeModalHandler} onConfrim={closeModalHandler} />
        )}
        {modalItsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>  
    );
}