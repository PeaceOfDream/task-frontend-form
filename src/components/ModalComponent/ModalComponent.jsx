import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { TypographyModal } from './TypographyModal';
import { FormTitle } from '../UI/FormTitle/FormTitle';
import dayjs from 'dayjs';
import { switchModal } from '../../store/schemaSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export const ModalComponent = () => {
  const dispatch = useDispatch();
  const { openModal } = useSelector((state) => state.schemaReducer);
  const handleClose = () => dispatch(switchModal(false));
  const formData = useSelector((state) => state.schemaReducer.data);
  const birthdayDate = dayjs(formData.birthday).format('DD/MM/YYYY');
  const hobbyData = formData.hobby.join(', ');
  return (
    <Modal open={openModal} onClose={handleClose}>
      <Box sx={style}>
        <FormTitle sx={{ mb: 2 }}>Form</FormTitle>
        <TypographyModal field={formData.mobilePhone} label="Mobile phone" />
        <TypographyModal field={formData.email} label="Email " />
        <TypographyModal field={formData.password} label="Password" />
        <TypographyModal field={formData.repeatPassword} label="Repeat Password" />
        <TypographyModal field={formData.firstName} label="First Name" />
        <TypographyModal field={formData.lastName} label="Last Name" />
        <TypographyModal field={formData.sex} label="Sex" />
        <TypographyModal field={birthdayDate} label="Birthday" />
        <TypographyModal field={formData.ocean} label="Ocean" />
        <TypographyModal field={hobbyData} label="Hobby" />
      </Box>
    </Modal>
  );
};
