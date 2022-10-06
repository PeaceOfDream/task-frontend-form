import { Button } from '@mui/material'
import React from 'react'
import style from './PrimaryButton.module.css'

export const PrimaryButton = ({children, ...props}) => {
  return (
	 <Button className={style.button} type='submit' fullWidth variant='contained'  {...props} >
		{children}
	 </Button>
  )
}
