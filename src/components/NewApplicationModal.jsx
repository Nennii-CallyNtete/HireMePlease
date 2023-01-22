import { Modal } from 'rsuite';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


const NewApplicationModal = () => {
    const [open, setOpen] = useState(false);
    const [progress, setProgress] = useState(1)

    return(
        <div>
            <Modal backdrop={'static'} keyboard={false} open={open} onClose={()=>setOpen(false)}>
                <Modal.Header>New Job Application</Modal.Header>
                <Modal.Body>
                    <p>Hey there</p>
                </Modal.Body>
                <Modal.Footer>
                    <button>Add</button>
                    <button onClick={()=>setOpen(false)}>Cancel</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default NewApplicationModal;