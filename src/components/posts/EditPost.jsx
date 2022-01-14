import React, {useState} from 'react'

import '../../App.scss'


const EditPost = ({userPost, setIsEdit, isEdit, posts}) => {

    const [value, setValue] = useState(userPost.body);

    console.log(posts)

    const handlePostId = () => {
        posts.map(post => {
            if (post.id === userPost.id) {
                setIsEdit(!isEdit)
            }
        })
    }


    return (
        <div key={userPost.id} className='post_container'>
            <div>
                <h2>{userPost.title}</h2>
            </div>
            <div>
                <div className='edit_img'>
                    <div onClick={handlePostId}>
                        <img src="http://cdn.onlinewebfonts.com/svg/img_419166.png" alt=""/>
                    </div>
                </div>
                {
                    isEdit ?
                        <>
                            <input className='inputs' value={value} onChange={e => setValue(e.target.value)}/>
                            <button onClick={() => setIsEdit(false)}>
                                Save
                            </button>
                        </>
                        :
                        <div className="post_body">
                            {value}
                        </div>
                }
            </div>
        </div>
    )
}

export default EditPost;
