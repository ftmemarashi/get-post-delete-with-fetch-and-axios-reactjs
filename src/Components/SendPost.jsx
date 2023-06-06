import { Component } from 'react';
import axios from 'axios';
class SendPost extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:'',
        }
    }
    changeHandler=event =>{
        console.log(this.state)
this.setState({
    [event.target.name]:event.target.value,
})
    }

    postHandler=()=>{
        const {title,body}=this.state;
        const data={
            title:title,
            body:body
        }
axios.post("https://jsonplaceholder.typicode.com/posts", data)
.then(Response => console.log(Response))
    }
    render() {
        const {title , body} =this.state;
        return (
            <div>
                <label style={{ backgroundColor: "#ddf0ff"  , margin: "3px" , padding:"5px",color:"gray",fontWeight:"bold"}}>
                    title
                </label>
                <input type='text' name='title' value={title} onChange={this.changeHandler} style={{border:" 2px gray solid",borderRadius:"5px", backgroundColor: "#ddf0ff"  , margin: "3px" , padding:"5px"}}/>
                <br />
                <label style={{ backgroundColor: "#ddf0ff"  , margin: "3px" , padding:"5px",color:"gray",fontWeight:"bold"}}>
                    body
                </label>
                <input type='text' name='body' value={body} onChange={this.changeHandler} style={{border:" 2px gray solid",borderRadius:"5px", backgroundColor: "#ddf0ff"  , margin: "3px" , padding:"5px"}}/>
                <button onClick={this.postHandler} style={{border:" 2px gray solid", backgroundColor: "#ddf0ff"  , margin: "3px" , padding:"5px"}}>
                    send post
                </button>
            </div>
        );
    }
}

export default SendPost;