import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { postAdd } from '../../redux/posts';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);

    const onSavePostClicked = ()=>{
        // first method 
        // if(title&&content){
        //     dispatch(
        //         postAdd({
        //             id:nanoid(),
        //             title,
        //             content
        //         })
        //     )
        //     setTitle('');
        //     setContent('');
        // }
        // second method 
        if(title&&content){
                dispatch(
                    postAdd(title,content))
    }}
    return (
        <form>
            <label htmlFor="postTitle">Post Title</label>
            <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} />
            <label htmlFor="postContent">Content :</label>
            <textarea name="postContent" id="postContent" cols="30" rows="10" onChange={onContentChange} value={content}></textarea>
            <button type='button' onClick={onSavePostClicked}>Save Post</button>
        </form>
    )
}

export default AddPostForm