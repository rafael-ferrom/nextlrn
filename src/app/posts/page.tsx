interface PostProps{
    id: number
    title: string
    body:string
    userId: number
}

interface Response{
    posts: PostProps[]
}


export default async function Posts(){

    const response = await fetch('https://dummyjson.com/posts')
    const data: Response = await response.json()
    console.log(data)
    return(
        <div>
            {data.posts.map((p) => (
                <div key={p.id}>
                    <p >{p.title}</p>
                </div>
            ))}
        </div>
    )
}