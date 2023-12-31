import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../../redux/posts';
import AddPostForm from './AddPostForm';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
const PostList = () => {
    const posts = useSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <div className="postCredit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date} />
                <ReactionButtons post={post}/>
            </div>
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