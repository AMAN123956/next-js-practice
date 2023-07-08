function PostList({posts}){
    return(
     <>
      <h1>List of Posts</h1>
      {posts.map((post,index) => {
          return(
              <div key={index}>
                 <h2>{post?.id}</h2>
                 <hr />
                 <h2>{post?.title}</h2>
              </div>
          )
      })}
     </>
    )
}

export default PostList


export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return{
        props:{
            posts: data
        }
    }
}