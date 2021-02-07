import React, { useState, useEffect, useRef } from "react";

import Api from "../../api";

const Card = () => {
  const [post, setPost] = useState({ title: "post 1" });
  const [load, setLoad] = useState(true);
  const isMountedRef = useRef(true);

  // console.log(post);

  const updatePost = () => {
    const postGet = new Api();
    postGet.getPost().then((res) => {
      setTimeout(() => {
        if (isMountedRef.current) {
          setPost(res);
          setLoad(false);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    updatePost();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (load) return <h1>Loading</h1>;
  return (
    <div>
      <h1>Card</h1>
      <h2>{post.title}</h2>
    </div>
  );
};

export default Card;
