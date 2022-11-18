import React from 'react';
import { Box, Modal } from '@mui/material';

import Form from './Form';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  bgcolor: 'background.paper',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
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
        <Box sx={style}>
          <Form currentId={currentId} setCurrentId={setCurrentId} switchShowModal={switchShowModal}/>
        </Box>
      </Modal>
    </div>
  );
};