

function BlogList({blogs,title}){
    //const blogs = props.blogs;
    //const title = props.title
    
    return (
      <div className="blog-list">
        <h1>{title}</h1>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h2>{blog.body}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    );
}
 
export default  BlogList;