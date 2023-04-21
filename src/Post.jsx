import Comment from "./Comment";

function Post(props) {
    const { comments, title, author, body } = props

    return (
        <div>
            <h1>{title}</h1>
            <p>By: {author}</p>
            <div>{body}</div>
            <ul>{
                comments.map((comment, index) => (
                    <Comment message={comment} key={index} />
                ))
                }
            </ul>
        </div>
    );
}

export default Post;
