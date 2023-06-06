import { Component } from 'react';

class Post extends Component {
    render() {
        const {body,title,deletePost}=this.props;
        return (
            <div style={{border:" 2px gray solid" ,borderRadius:"5px"  , margin: "10px" , padding:"20px",backgroundColor:"#f1f9ff"}} >
                <h2>
                    {title}
                </h2>
                <p>
                    {body}
                </p>
                <button onClick={deletePost}  style={{border:" 2px gray solid", backgroundColor: "#ddf0ff"  , margin: "3px" , padding:"5px"}} >
                    delete
                </button>
            </div>
        );
    }
}

export default Post;