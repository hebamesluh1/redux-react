import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';

import { postAdd } from '../../redux/posts';
import { selectAllUsers } from '../../redux/user';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [usersId, setUsersId] = useState('');

    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);
    const onAuthorChange = e => setUsersId(e.target.value);

    const onSavePostClicked = () => {
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
        if (title && content) {
            dispatch(
                postAdd(title, content, usersId))
        }
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(usersId);

    const usersOption = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    
    return (
        <form>
            <label htmlFor="postTitle">Post Title</label>
            <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} />
            <label htmlFor="postAuthor">Author :</label>
            <select name="usersOption" id="postAuthor" value={usersId} onChange={onAuthorChange}>
                <option value=""></option>
                {usersOption}
            </select>
            <label htmlFor="postContent">Content :</label>
            <textarea name="postContent" id="postContent" cols="30" rows="10" onChange={onContentChange} value={content}></textarea>
            <button type='button' onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
        </form>
    )
}

export default AddPostForm