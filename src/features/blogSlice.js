import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// post a blog
export const createBlog = createAsyncThunk("blogs/createBlog", async (data) => {
  try {
    const response = await axios.post("http://localhost:4000/blog", data);
    if (!response.data) {
      throw new Error("blog upload failed");
    }
    return response.data;
  } catch (error) {
    console.error("something went wrong",error);
  }
});

// get all blogs
export const getBlogs = createAsyncThunk("blogs/getBlogs", async () => {
    try{
        const response = await axios.get('http://localhost:4000/blog');
        if(!response.data) {
            throw new Error("blogs retrive failed")
        }
        return response.data
    }catch(error){
        console.error("something went wrong",error)
    }
})
const initialState = {
  blogs: [],
  status: [],
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createBlog.fulfilled, (state) => {
      state.status = "succeed";
    })
    .addCase(getBlogs.fulfilled, (state,action) => {
        state.status = 'succeed';
        state.blogs = action.payload;
    })
  },
});
export default blogSlice.reducer;
