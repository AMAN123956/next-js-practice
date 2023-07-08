import Link from "next/link";
function Index (){
    return (
        <div>
            Index
            <Link href='/posts'>Posts</Link>
            <Link href='/users'>Users</Link>
        </div>
    )
}

export default Index;