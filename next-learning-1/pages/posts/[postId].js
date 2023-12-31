function PostData({ post }) {
    return (
        <div>
            <h2>{post?.id} {post?.title}</h2>
        </div>
    )
}


export default PostData;

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    const paths = data?.map(item => {
        return {
            params: { postId: `${item?.id}` }
        }
    })
    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const data = await response.json();
    return{
        props:{
            post: data
        }
    }
}