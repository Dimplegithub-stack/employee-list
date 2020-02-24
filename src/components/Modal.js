import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap'; 

function EditemployeeModal({enable,handleClose,editData}) {
  const [show, setShow] = useState(false);
  console.log(editData)
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
const edit=()=>{
    
}

  return (
    <div>


      <Modal show={enable}  animation={false}>
        <Modal.Header >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><form >
            <label htmlFor="username" className="pr-3">Username:</label>
            <input
              type="text"
              name="username"
          value={editData.name}
  onChange={()=>edit()}
            />

     
          </form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e)=>handleClose(e)}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditemployeeModal