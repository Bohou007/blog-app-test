import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Blog from "../blog/Blog";
import PostsLoader from "../loader/PostsLoader";

class PostCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostSlug: this.props.match.params.slug,
      PostDatas: [],
      isGet: true,
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.setState({ PostSlug: params.slug });

    axios
      .get("http://localhost:9002/api/categories/" + this.state.PostSlug)
      .then((res) => {
        console.log(res.data);
        if (res.data !== []) {
          this.setState({
            PostDatas: res.data,
          });
        }
        setTimeout(() => {
          this.setState({
            isGet: false,
          });
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <section className="section section-header pb-7 bg-primary text-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-8 text-center">
                <h1 className="display-2 mb-3">{this.state.PostDatas.title}</h1>
                <p className="lead">
                  <NavLink to="/">Home</NavLink> / Categorie /{" "}
                  {this.state.PostDatas.title}
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
                {this.state.PostDatas.Posts.map((post, index) => (
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

export default PostCategory;
