import React, { useState, useEffect } from "react";
import IPost from "../interfaces/IPost";
import useFetch from "../utils/useFetch";
/*interface GreetingProps {
  name: string;
}*/
type Props = {
  postid: string;
};

const Post: React.FC<any> = (props: Props) => {
  const [post, setPost] = useState<IPost>();
  const url = "https://jsonplaceholder.typicode.com/posts/" + props.postid;
  useEffect(() => {
    // const post = useFetch(url)
    console.log(post);
    // fetch(url)
    //   .then((r) => r.json())
    //   .then((data) => setPost(data));
  }, [props.postid]);

  return <h1>Hello! {post?.title}</h1>;
};

export default Post;
