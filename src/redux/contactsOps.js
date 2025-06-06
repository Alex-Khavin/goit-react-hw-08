import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://683b0c5043bb370a867495bf.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
   try {
    const res = await axios.get("/contacts");
    return res.data;
   } catch {
       return thunkAPI.rejectWithValue(404);
   }
});

export const addContact = createAsyncThunk("contacts/addContact", async (newContact) => {
    const res = await axios.post("/contacts", newContact)
    return res.data;
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId) => {
    const res = await axios.delete(`/contacts/${contactId}`)
    return res.data;
})
