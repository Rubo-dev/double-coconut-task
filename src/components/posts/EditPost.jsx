import React, {useState} from 'react'

const EditPost = ({userPost, isEdit, handlePostEdit, deleteCurrentPost}) => {

    const [text, setText] = useState(userPost.body);
    const [open, setOpen] = useState(isEdit);

    const handleOpenPost = () => {
        setOpen(!open);
        handlePostEdit(userPost.id);
    };

    const deletePost = () => {
        deleteCurrentPost(userPost.id)
    }


    return (
        <div className='post_container'>
            <div>
                <h2>{userPost.title}</h2>
            </div>
            <div className='edit_delete_cont'>
                <div className='edit_block_container'>
                    <div className='edit_img_block'>
                        <div className='edit_img' onClick={handleOpenPost}>
                            <img src="http://cdn.onlinewebfonts.com/svg/img_419166.png" alt="Edit post"/>
                        </div>
                        <div className='delete_img' onClick={deletePost}>
                            <img src="https://www.svgrepo.com/show/12848/x-symbol.svg" alt="Delete post" />
                        </div>
                    </div>
                </div>
                {
                    open ?
                        <div className='edit_text_block'>
                            <input 
                                className='inputs editText' 
                                value={text} 
                                onChange={e => setText(e.target.value)}/>
                            <button onClick={() => setOpen(false)}>
                                Save
                            </button>
                        </div>
                        :
                        <div className="post_body">
                            <p>{text}</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default EditPost;
