import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
  name: 'people',
  initialState: [
    {name: 'Jacob'},
    {name: 'Hexx'},
    {name: 'Adrian'}
  ],
  reducers: {
    add(state, action) {
      state.push({ name: action.payload });
    },
    remove(state, action) {
      return state.filter(person => person.name !== action.payload);
    }
  }
});

export const { add, remove } = peopleSlice.actions;

export default peopleSlice;
