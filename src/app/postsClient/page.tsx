'use client'

import { useEffect, useState } from "react"

interface PostProps{
    id: number
    title: string
    body:string
    userId: number
}

export default function PostsClient(){

    const [posts, setPosts] = useState<PostProps[]>([])

    useEffect(()=> {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    }, [])

    return(
        <div>
            {posts.map((p) => (
                <div key={p.id}>
                    <p>{p.title}</p>
                </div>
            ))}
        </div>
    )
}