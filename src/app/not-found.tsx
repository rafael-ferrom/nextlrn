import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h1>Error 404 ! not find nothing</h1>
            <h2>The page that you tried access don t exists</h2>
            <Link href={"/"}>Return to home</Link>
        </div>
    )
}