import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Header';

import '../../App.scss'
import {changePostTitleAction} from "../../app/redux/actions/changePostTitleAction";
import {changePostBodyAction} from "../../app/redux/actions/changePostBodyAction";
import {setPostIdAction} from "../../app/redux/actions/setPostIdAction";
import { useLogin } from '../../contexts/AuthContext'
import {setUserIdAction} from "../../app/redux/actions/setUserIdAction";
import {useNavigate} from "react-router-dom";
import {addPostAction} from "../../app/redux/actions/addPostToListAction";

const CreatePost = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    // const title = useSelector((state => state.title));
    // const body = useSelector((state => state.body));

    const dispatch = useDispatch()

    const { currentUser } = useLogin()

    // console.log(currentUser.uid)

    const postId = Math.floor(Math.random() * 99999)

    const createPostId =() =>{
        dispatch(changePostTitleAction(title))
        dispatch(changePostBodyAction(body))
        dispatch(setPostIdAction(postId))
        dispatch(setUserIdAction(currentUser.uid))
        dispatch(addPostAction({
            title: title,
            body: body,
            id: postId,
            userId: currentUser.uid,
        }))
        navigate('/')
        // dispatch(changePostTitleAction(''))
        // dispatch(changePostBodyAction(''))

    }

    return (
    
        <div>
            <Header />
            <div className="container">
                <div className='card'>
                    <h2>Create new post</h2>
                    <form>
                        <div>
                            <label >Title</label>
                            <input type="text"
                                value={title}
                                onChange={e=>setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea
                                value={body}
                                onChange={e=>setBody(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type='submit' onClick={createPostId}>Add post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
