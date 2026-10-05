import { PostProps } from "../page"

interface IDetailsPostProps{
    params: Promise<{id: string}>
}

export default async function DetailPost({params}:IDetailsPostProps){

    const {id} = await params
    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: PostProps = await response.json()

    return(
        <div>
            <h1>Details Post: {id} - {data.id}</h1>
            <h3>{data.title}</h3>
            <p>{data.body}</p>
        </div>
    )
}