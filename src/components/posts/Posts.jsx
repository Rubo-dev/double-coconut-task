import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import '../../App.scss'
import { useNavigate } from 'react-router-dom';
import {fetchPosts} from "../../app/redux/actions/fetchPosts";
import EditPost from "./EditPost";
import Pagination from "./Pagination";


const Posts = () => {

    const [isEdit, setIsEdit] = useState(false);
    const postsSelector = useSelector(state => state.posts.postListInitialState);
    const userPosts = useSelector(state => state.posts.usersPostListInitialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    const addNewPost = () => {
        navigate('/create-post')
    }

    return (
        <div>
            <div className="container" >
                <div className='posts_grid'>
                    <button className='add_post_btn' onClick={addNewPost}>Add new post</button>
                    {
                        userPosts.length !== 0
                            ? userPosts.map((userPost) => <EditPost isEdit={isEdit} setIsEdit={setIsEdit} userPost={userPost} posts={userPosts}/>).reverse()
                            : ''
                    }
                    {
                        postsSelector.map(
                            (post) =>
                                <div key={post.id} className='post_container'>
                                    <div>
                                        <h2>{post.title}</h2>
                                    </div>
                                    <div className="post_body">
                                        {post.body}
                                    </div>
                                </div>
                        )
                    }
                </div>
            </div>
            {/* <Pagination  totalCount= {postsSelector} /> */}
        </div>
    )
}

export default Posts;
