import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../../app/redux/actions/fetchPosts";
import { deletePostAction } from "../../app/redux/actions/postActions";
import EditPost from "./EditPost";

import Pagination from "./Pagination";

const Posts = () => {
    const [isEdit, setIsEdit] = useState(false);
    const postsSelector = useSelector(
        (state) => state.posts.postListInitialState
    );
    const userPosts = useSelector(
        (state) => state.posts.usersPostListInitialState
    );
    const [pageNumber, setPageNumber] = useState(0);
    
    const postsPerPage = 10;
    const visitedPages = pageNumber * postsPerPage;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const addNewPost = () => {
        navigate("/create-post");
    };

    const handlePostEdit = (id) => {
        userPosts.forEach((post) => {
            if (post.id === id) {
                setIsEdit(!isEdit);
            }
        });
    };

    const deleteCurrentPost = (id) => {
        userPosts.forEach((post) => {
            if (post.id === id) {
                dispatch(deletePostAction(post));
            }
        });
    };

    return (
        <div>
            <div className="container">
                <div className="posts_grid">
                    <button className="add_post_btn" onClick={addNewPost}>
                        Add new post
                    </button>
                    {
                        userPosts.length !== 0 &&
                            userPosts
                                .map((userPost) => (
                                    <EditPost
                                        key={userPost.id}
                                        isEdit={isEdit}
                                        handlePostEdit={handlePostEdit}
                                        deleteCurrentPost={deleteCurrentPost}
                                        userPost={userPost}
                                        posts={userPosts}
                                    />
                                )).reverse()
                    }
                    {
                        postsSelector
                        .slice(visitedPages, visitedPages + postsPerPage)
                        .map((post) => (
                            <div key={post.id} className="post_container">
                                <div>
                                    <h2>{post.title}</h2>
                                </div>
                                <div className="post_body">{post.body}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Pagination setPageNumber={setPageNumber} postsPerPage={postsPerPage} postsData= {postsSelector} />
        </div>
    );
};

export default Posts;
