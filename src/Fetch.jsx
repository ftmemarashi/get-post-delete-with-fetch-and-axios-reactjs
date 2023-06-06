import { Component } from 'react';

class Fetch extends Component {
  constructor(props){
super(props);
this.state={
  postData:[],
}
  }
   getPost=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  componentDidMount(){
   
      fetch('https://jsonplaceholder.typicode.com/posts') 
      .then((response) => response.json())
      .then((json) => this.setState({
        postData:json,
      }));
  }
  sendPost=()=>{
    const  body= JSON.stringify({
      title: 'JSX',
      body: 
      "this is a excersice",
      userId: 1,
    })
    const  headers= {
      'Content-type': 'application/json; charset=UTF-8',
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
 body:body,
 headers:headers,
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }

  deletPost =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
.then((response) => response.json())
  .then((json) => console.log(json));  }
  render() {
    return (
      <div>
        <button onClick={this.getPost}>get post</button>
        <button onClick={this.sendPost}>send post</button>
        <button onClick={this.deletPost}>delete post</button>

        <h1>
          posts:
        </h1>
        {this.state.postData.map(post =><p key={post.id}>{post.title}</p>)}

      </div>
    );
  }
}

export default Fetch; 