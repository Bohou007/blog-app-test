import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PostsLoader from "../../loader/PostsLoader";
import Listitem from "./PostItem/ListItem";

class ListPosts extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], isGet: true };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9002/api/posts")
      .then((res) => {
        if (res.data !== []) {
          this.setState({
            items: res.data,
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
      <div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="d-grid">
              <NavLink
                to="/dashboard/posts/add"
                className="btn btn-outline-secondary mb-4 py-3"
              >
                <span className="me-2">
                  <span className="fas fa-plus" />
                </span>
                Submit New Item
              </NavLink>
            </div>
          </div>
          <div>
            {this.state.isGet ? (
              <PostsLoader />
            ) : (
              <div>
                {this.state.items.map((post, index) => (
                  <Listitem
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
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ListPosts;
