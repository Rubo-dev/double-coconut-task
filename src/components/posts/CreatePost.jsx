import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import Header from '../Header';

import '../../App.scss'

import {createPostTitleAction} from "../../app/redux/actions/createPostTitleAction";
import {createPostBodyAction} from "../../app/redux/actions/createPostBodyAction";
import {setPostIdAction} from "../../app/redux/actions/setPostIdAction";
import {setUserIdAction} from "../../app/redux/actions/setUserIdAction";
import {addPostAction} from "../../app/redux/actions/addPostToListAction";

import {useLogin} from '../../contexts/AuthContext'
import {useNavigate} from "react-router-dom";

const CreatePost = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const dispatch = useDispatch()

    const {currentUser} = useLogin()


    const postId = Math.floor(Math.random() * 99999)

    const createPostId = () => {
        dispatch(createPostTitleAction(title))
        dispatch(createPostBodyAction(body))
        dispatch(setPostIdAction(postId))
        dispatch(setUserIdAction(currentUser.uid))
        dispatch(addPostAction({
            title: title,
            body: body,
            id: postId,
            userId: currentUser.uid,
        }))
        navigate('/')
    }

    return (

        <div>
            <Header/>
            <div className="container">
                <div className='create_post_container'>
                    <div className="create_new_post_block">
                        <div className="title_cont">
                            <h2>Create new post</h2>
                        </div>
                        <form onSubmit={createPostId}>
                            <div className="form_cont">

                                <div className="input_label_block">
                                    <label>Title</label>
                                    <input type="text"
                                           className="inputs"
                                           value={title}
                                           onChange={e => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="input_label_block">
                                    <label>Description</label>
                                    <input
                                        className="inputs"
                                        value={body}
                                        onChange={e => setBody(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <button type='submit'>Add post</button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
