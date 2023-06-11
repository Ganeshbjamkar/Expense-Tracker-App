function createPost(post) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous post creation
      setTimeout(() => {
        // Assuming the post object contains relevant information
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime(activityTime) {
    return new Promise((resolve, reject) => {
      // Simulating updating the user's last activity time
      setTimeout(() => {
        // Assuming the activityTime is a valid timestamp
        resolve(activityTime);
      }, 1000);
    });
  }
  
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous post deletion
      setTimeout(() => {
        resolve(postId);
      }, 1000);
    });
  }
  
  // Usage example
  function updateLastUserActivityTimeDemo() {
    const user = {
      lastActivityTime: null,
      posts: [],
    };
  
    const post = {
      id: 1,
      title: "promise to all",
      content: "This is my first promise.",
    };
  
    createPost(post)
      .then((createdPost) => {
        user.posts.push(createdPost);
        return updateLastUserActivityTime(new Date());
      })
      .then((activityTime) => {
        user.lastActivityTime = activityTime;
        console.log("Posts created by the user:", user.posts);
        console.log("Last activity time of the user:", user.lastActivityTime);
        return deletePost(user.posts[user.posts.length - 1].id);
      })
      .then((deletedPostId) => {
        user.posts = user.posts.filter((post) => post.id !== deletedPostId);
        console.log("Posts after deletion:", user.posts);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }
  
  // Run the demo
  updateLastUserActivityTimeDemo();
  