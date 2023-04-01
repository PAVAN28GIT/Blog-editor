import React, { useMemo, useRef, useState } from 'react'
import JoditEditor from 'jodit-react';

const Editor = () => {
    const editor = useRef(null);
    const [post, setPost] = useState({
        title: '',
        category: '',
        tags: '',
        author: '',
        slug: '',
        preview: '',
        content: '',
    })

    const onChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const onChangeEditor = (data) => {
        setPost({ ...post, content: data })
    }

    const createPost = async () => {
        console.log(post)
        const res = await fetch('http://localhost:8000/api/blogs/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        const data = await res.json()
        console.log(data)
    }

    return (
        <>
            <div className="wrapper mb-20">
                <h1 className='text-center text-6xl my-8 lg:my-0 lg:mt-8 font-Dancing-script font-bold text-white'>Editor for The Daily Scoop</h1>
                <div className="editor p-4 mb-10 lg:mb-0 lg:p-20 flex flex-col space-y-8 justify-center items-center">
                    <div className="title w-full">
                        <input onBlur={onChange} required name='title' className='outline-none rounded-lg p-4 w-full' type="text" placeholder='Title for the blog' />
                    </div>
                    <div className="category w-full flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 justify-start">
                        <input onBlur={onChange} required name='category' className='outline-none lg:w-1/3 rounded-lg p-4' type="text" placeholder='Category for the blog' />
                        <input onBlur={onChange} required name='tags' className='outline-none lg:w-1/3 rounded-lg p-4' type="text" placeholder='Tag for the blog' />
                        <input onBlur={onChange} required name='author' className='outline-none lg:w-1/3 rounded-lg p-4' type="text" placeholder='Author of the blog' />
                    </div>
                    <div className="slug w-full">
                        <input onBlur={onChange} required name='slug' className='outline-none rounded-lg p-4 w-full' type="text" placeholder='Slug for the blog (same as title but each word should be separated with "-")' />
                    </div>
                    <div className="preview w-full">
                        <input onBlur={onChange} required name='preview' className='outline-none rounded-lg p-4 w-full' type="text" placeholder='Preview for the blog. A short & catchy description for the blog.' />
                    </div>
                    <div className="content w-full">
                        <JoditEditor
                            ref={editor}
                            value={post.content}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={onChangeEditor} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => { }}
                        />
                    </div>
                </div>
                <div className="button text-center">
                    <button onClick={createPost} className={`bg-[#f4bb60] shadow-2xl shadow-black p-3 rounded-sm transition-all duration-300 hover:-translate-y-1`}>Post the blog</button>
                </div>
            </div>
        </>
    )
}

export default Editor
