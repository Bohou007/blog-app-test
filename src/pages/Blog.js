import axios from "axios";
import React, { Component } from "react";
import Blog from "../components/blog/Blog";
import PostsLoader from "../components/loader/PostsLoader";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostsList: [],
      isGet: true,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9002/api/posts")
      .then((res) => {
        if (res.data !== []) {
          this.setState({
            PostsList: res.data,
          });

          setTimeout(() => {
            this.setState({
              isGet: false,
            });
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <section className="section section-header bg-primary text-white pb-7">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 text-center">
                <h1 className="display-3 mb-4 blog-head-title">Blog</h1>
                <p className="lead blog-head-content">
                  Suivez toutes vos acualités.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mt-6 mb-6">
          {this.state.isGet ? (
            <PostsLoader />
          ) : (
            <div>
              <div className="row mb-5">
                {this.state.PostsList.map((post, index) => (
                  <Blog
                    id={post.id}
                    title={post.title}
                    image={post.image}
                    content={post.content}
                    view={post.view}
                    slug={post.slug}
                    createdAt={post.createdAt}
                    key={index}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
