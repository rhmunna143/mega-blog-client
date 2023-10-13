

const Post = () => {
    const handlePost =(e) => {
        e.preventDefault()

        const form = e.target;
        const title = form.title.value;
        const post = form.post.value;

        const fullPost = {
            title,
            post
        }

        console.log(fullPost);

        fetch("http://localhost:8800/blogs", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(fullPost)
        })
        
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <form onSubmit={handlePost}>
                <br />
                <input type="text" name="title" id="" placeholder="Title" />

                <br />
                <br />
                <input type="text" name="post" placeholder="Your Post" id="" style={{padding: "100px 2px"}} />

                <br />
                <br />
                <button type="submit">Post</button>
                
            </form>
        </div>
    );
};

export default Post;