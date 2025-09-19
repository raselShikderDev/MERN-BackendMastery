const BlogDetailsPage = async({params}:{params:Promise<{blogid:string}>}) => {
const {blogid} = await params
  return (
    <div>
      Blog Details Page <h1>Blogid: {blogid}</h1>
    </div>
  )
}

export default BlogDetailsPage