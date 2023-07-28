import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts } from '../../redux/posts';
import AddPostForm from './AddPostForm';
const PostList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ))
    return (
        <div>
            <AddPostForm/>
            <section>
                <h2>Posts</h2>
                {renderedPosts}
            </section>
        </div>
    )
}

export default PostList