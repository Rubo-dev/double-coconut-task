import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../App.scss'
import { useNavigate } from 'react-router-dom';
import {fetchPosts} from "../../app/redux/actions/fetchPosts";

const Posts = () => {

    const postsSelector = useSelector(state => state.postListInitialState);
    const userPosts = useSelector(state => state.usersPostListInitialState);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    // console.log(state )

    useEffect(() =>{
        dispatch(fetchPosts())
    }, []);

    // const {postsList} = postsSlice.addPost;

    const addNewPost = () =>{
        navigate('/create-post')
    }

    return (
        <div>
            <button onClick={addNewPost}>Add new post</button>
            <div className='posts_grid'>
                {
                    userPosts.length !==0
                        ? userPosts.map(
                        (userPost) =>
                            <div key={userPost.id} className='post_container'>
                                <div>
                                    <h2>{userPost.title}</h2>
                                </div>
                                <div>
                                    {userPost.body}
                                </div>
                            </div>
                        ).reverse()
                        : ''
                }


                {
                    postsSelector.map(
                        (post) =>
                        <div key={post.id} className='post_container'>
                            <div>
                                <h2>{post.title}</h2>
                                </div>
                            <div>
                                {post.body}
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Posts;
