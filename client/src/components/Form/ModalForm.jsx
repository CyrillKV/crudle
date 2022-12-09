import React from 'react';
import { Container, Modal } from '@mui/material';

import Form from './Form';


const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow: 24,
  p: '1rem',
  width: 380,
};

export default function ModalForm({currentId, setCurrentId, showModal, switchShowModal}) {
  return (
    <div>
      <Modal
        open={showModal}
        onClose={switchShowModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container component="main" maxWidth="xs" sx={style}>
          <Form currentId={currentId} setCurrentId={setCurrentId} switchShowModal={switchShowModal}/>
        </Container>
      </Modal>
    </div>
  );
};