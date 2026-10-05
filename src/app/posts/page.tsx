 export interface PostProps{
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

    async function handleFetchPosts(){
        'use server'
        const response = await fetch('https://dummyjson.com/posts')
        const data: Response = await response.json()
        console.log(data.posts);
        
    }

    async function handleUser(formData: FormData){
        'use server'
        const userId = formData.get('userId')
        const response = await fetch(`https://dummyjson.com/posts/${userId}`)
        const data: Response = await response.json()
        console.log(data);
        
    }

    return(
        <div>
            <button onClick={handleFetchPosts}>Search</button>

            <form action={handleUser}>
                <input type="text" placeholder="Id user" name="userId"/>
                <button type="submit">Search User</button>
            </form>

            {data.posts.map((p) => (
                <div key={p.id}>
                    <p >{p.title}</p>
                </div>
            ))}
        </div>
    )
}