import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Blog from "../components/blog/Blog";
import RecentPost from "../components/blog/RecentPost";
import Categories from "../components/cards/Categories";
import ContactCards from "../components/cards/ContactCards";
import HeadSlide from "../components/cards/HeadSlide";
import PostsLoader from "../components/loader/PostsLoader";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CategoriesList: [],
      PostsList: [],
      favorisPosts: [],
      isGet: true,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9002/api/categories")
      .then((res) => {
        if (res.data !== []) {
          this.setState({
            CategoriesList: res.data,
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
    axios
      .get("http://localhost:9002/api/posts/favoris-posts")
      .then((res) => {
        if (res.data !== []) {
          this.setState({
            favorisPosts: res.data,
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

    axios
      .get("http://localhost:9002/api/posts/recent-post")
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
      <div>
        <HeadSlide />
        <div className="">
          <div className="bg-recent-blog pb-5 pt-5 mb-6">
            <div className="container">
              {this.state.isGet ? (
                <PostsLoader />
              ) : (
                <div>
                  <h2 className="display-3 mb-4">
                    Les Actualités les plus populaires
                  </h2>
                  <div className="row mb-5">
                    {this.state.favorisPosts.map((favorisPosts, index) => (
                      <RecentPost
                        id={favorisPosts.id}
                        title={favorisPosts.title}
                        image={favorisPosts.image}
                        content={favorisPosts.content}
                        view={favorisPosts.view}
                        slug={favorisPosts.slug}
                        createdAt={favorisPosts.createdAt}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="container mb-6">
            {this.state.isGet ? (
              <PostsLoader />
            ) : (
              <div>
                <h2 className="display-3 mb-4">Les Actualites recents</h2>
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
          <div className="bg-recent-blog pb-5 pt-6 mb-6">
            <div className="container ">
              {this.state.isGet ? (
                <PostsLoader />
              ) : (
                <div>
                  {/* <h2 className="display-3 mb-4">Les Actualites recents</h2> */}
                  <div className="row mb-5">
                    {this.state.CategoriesList.map((category, index) => (
                      <Categories
                        id={category.id}
                        title={category.title}
                        image={category.image}
                        description={category.description}
                        slug={category.slug}
                        createdAt={category.createdAt}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <ContactCards />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
