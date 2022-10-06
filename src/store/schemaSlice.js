import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import dayjs from "dayjs";


export const fetchSchema = createAsyncThunk(
	'schema/fetchSchema',
	async function() {
		 const res = await axios.get('./data.json');
     	 return res.data;
	}
)

const schemaSlice = createSlice({
  name: 'schema',
  initialState: {
    schema: {},
    data: {
      mobilePhone: '',
      email: '',
      password: '',
      repeatPassword: '',
      firstName: '',
      lastName: '',
      sex: '',
      birthday: dayjs().format(),
      ocean: '',
      hobby: [],
    },
    error: null,
    isSwitched: false,
    openModal: false,
  },
  reducers: {
    addSingUpData(state, action) {
      state.data.mobilePhone = action.payload.mobilePhone;
      state.data.email = action.payload.email;
      state.data.password = action.payload.password;
      state.data.repeatPassword = action.payload.repeatPassword;
    },
    addPersonalData(state, action) {
      state.data.firstName = action.payload.firstName;
      state.data.lastName = action.payload.lastName;
      state.data.sex = action.payload.sex;
      state.data.birthday = dayjs(action.payload.birthday).format();
      state.data.ocean = action.payload.ocean;
      state.data.hobby = action.payload.hobby;
    },
    switchForm(state) {
      state.isSwitched = !state.isSwitched;
    },
    switchModal(state, action) {
      state.openModal = action.payload;
    },
  },
  extraReducers: {
    [fetchSchema.pending]: (state) => {
      state.error = null;
    },
    [fetchSchema.fulfilled]: (state, action) => {
      state.schema = action.payload;
    },
    [fetchSchema.rejected]: (state, action) => {
      state.error = 'fetch error';
    },
  },
});


export const { addSingUpData, addPersonalData, switchForm, switchModal } = schemaSlice.actions;
export default schemaSlice.reducer