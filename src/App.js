import './App.css';
import Greetings from './Greetings'
import Post from './Post'

function App() {
    console.log('loadodths')
    let newPost = {
        title: 'coolpost',
        author: 'coolman',
        body: 'This is a story all about how my life got flipped turned upside down',
        comments: [
            'cool!',
            'not cool >:C',
            'bro, relax^^^'
        ]
    }
    return ( 
        <>
            <Post 
                title={newPost.title}
                author={newPost.author}
                body={newPost.body}
                comments={newPost.comments}
            />
            <Greetings 
                name={'Chris'} 
                age={98} 
                location={"Sorry, I couldn't hear"}
                number={500}
            />
        </>
    )
}

export default App;
