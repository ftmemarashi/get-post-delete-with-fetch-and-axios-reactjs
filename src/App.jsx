import { Component } from 'react';
import axios from 'axios';
import Post from './Components/Post';
import SendPost from "./Components/SendPost";
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      postData:[],
      isError:false
    }
  }
    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(Response =>this.setState({postData:Response.data}))
      .catch(() =>this.setState({isError:true}))
    }
    deletePost=(id)=>{
axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`) 
.then(Response=>console.log("delete",Response))   }
  render() {
    const {postData ,isError}=this.state;
    return (
  <div>
    <h1>
    post:  
      </h1>
      <SendPost/>
      {isError ?
      <h1>
        an error accured
      </h1>
      :
       postData.map(post =><Post key={post.id} deletePost={()=>this.deletePost(post.id)} title={post.title} body={post.body}/>)}
  </div>
    );
  }
}

export default App;