import React from 'react'
import { SingUpInfo } from '../SingUpInfo/SingUpInfo'

import {  useSelector } from 'react-redux';
import { PersonalInfo } from '../PersonalInfo/PersonalInfo';



export const Form = () => {

	const {isSwitched} = useSelector(state => state.schemaReducer)

  return (
	 <div >
	 	{!isSwitched ? <SingUpInfo/> : <PersonalInfo/>}
	 </div>
  )
}
