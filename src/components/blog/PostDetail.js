import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PostSlug: this.props.match.params.slug,
      PostData: [],
    };
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.setState({ PostSlug: params.slug });

    axios
      .get("http://localhost:9002/api/posts/" + this.state.PostSlug)
      .then((res) => {
        console.log(res.data);
        this.setState({
          PostData: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <section className="section-header pb-5 pb-sm-7 bg-primary text-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 text-center">
                <div className="mb-4">
                  <NavLink
                    to="#"
                    className="badge bg-success text-uppercase me-2 px-3"
                  >
                    Seo
                  </NavLink>{" "}
                  <NavLink
                    to="#"
                    className="badge bg-warning text-uppercase px-3"
                  >
                    Marketing
                  </NavLink>
                </div>
                <h1 className="display-3 mb-4 px-lg-5">
                  {this.state.PostData.title}
                </h1>
                <div className="post-meta">
                  <span className="fw-bold me-3">James Curran</span>{" "}
                  <span className="post-date me-3">January 31, 2021</span>{" "}
                  <span className="fw-bold">7 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section section-sm bg-white pt-5 pt-lg-6 text-black">
          <article className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <p></p>
                <p>
                  <img
                    className="rounded"
                    src={this.state.PostData.image}
                    alt="Themesberg office"
                  />
                </p>
                <h2>Setup</h2>
                <p>
                  The themes are{" "}
                  <NavLink to="#">activated by CSS classes</NavLink> on the root
                  element. When the page is loaded, I want to apply the theme
                  that most likely suits the visitor (you!) best. After all,
                  most people don’t like configuring websites before they can
                  read a blog post, so the the whole theming feature would
                  likely remain unused otherwise. So I have to make a guess
                  about what the visitor wants and expects. I do that in this
                  order:
                </p>
                <ol>
                  <li>
                    I assume people don’t want the theme to change when they
                    navigate between pages. So if the page loaded isn’t the
                    first page they visit, I want to use the theme that was used
                    before.
                  </li>
                  <li>
                    If it’s the first page they view on my site, their browser
                    may be able to tell their preference.
                  </li>
                  <li>
                    If no preference is available, we can base the choice based
                    on whether it’s day or night.
                  </li>
                </ol>
                <p>
                  Every time a page is loaded, in the current or a new tab, it
                  checks if a theme was set previously. Because the preference
                  for a light or dark theme can change during the day, with
                  every change, I add a time stamp to the saved setting. Only
                  when the state was saved less than two hours ago, it’s
                  applied:
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque distinctio nemo tempora similique necessitatibus
                  asperiores inventore ipsum, nostrum velit, quasi vitae natus
                  numquam veritatis nobis, reiciendis deleniti facere molestias
                  a.
                </p>
                <h2>Header 2</h2>
                <h3>Header 3</h3>
                <h4>Header 4</h4>
                <h5>Header 5</h5>
                <h6>Header 6</h6>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  velit perferendis labore vel, necessitatibus laboriosam fugit
                  inventore ad odio tenetur vitae veritatis, earum numquam
                  consectetur voluptatem illum, sequi asperiores commodi?
                </p>
                <ul>
                  <li>list item 1</li>
                  <li>list item 2</li>
                  <li>list item 3</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  corrupti dolorem at iste perferendis! Modi praesentium vel,
                  rem aliquid illo, nostrum asperiores dolorem corrupti odio
                  tempora impedit deleniti eius voluptatibus.
                </p>
              </div>
            </div>
            <div className="row justify-content-sm-center align-items-center py-3 mt-3">
              <div className="col-12 col-lg-8">
                <div className="row">
                  <div className="col-9 col-md-6">
                    <h6 className="fw-bolder d-inline mb-0 me-3">Share:</h6>
                    <button
                      className="btn btn-sm me-2 btn-icon-only btn-pill btn-twitter d-inline text-white"
                      aria-label="twitter social link"
                    >
                      <span className="fab fa-twitter" />
                    </button>{" "}
                    <button
                      className="btn btn-sm me-2 btn-icon-only btn-pill btn-facebook d-inline"
                      aria-label="facebook social link"
                    >
                      <span className="fab fa-facebook-f" />
                    </button>{" "}
                    <button
                      className="btn btn-sm btn-icon-only btn-pill bg-orange d-inline text-white"
                      aria-label="reddit social link"
                    >
                      <span className="fab fa-reddit-alien" />
                    </button>
                  </div>
                  <div className="col-3 col-md-6 text-right">
                    <span
                      className="far fa-bookmark text-primary"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title
                      data-original-title="Bookmark story"
                      data-bs-original-title="Bookmark story"
                      aria-label="Bookmark story"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="section section-md bg-white text-black pt-0 line-bottom-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div>
                  <label
                    className="h5 mb-4"
                    htmlFor="exampleFormControlTextarea1"
                  >
                    <span className="badge badge-md bg-primary text-uppercase me-2">
                      23
                    </span>{" "}
                    Comments
                  </label>{" "}
                  <textarea
                    className="form-control border border-gray-300-gray"
                    id="exampleFormControlTextarea1"
                    placeholder="Add your comment"
                    rows={6}
                    data-bind-characters-target="#charactersRemaining"
                    maxLength={1000}
                    defaultValue={""}
                  />
                  <div className="d-flex justify-content-between mt-3">
                    <small className="fw-light text-dark">
                      <span id="charactersRemaining">1000</span> characters
                      remaining
                    </small>{" "}
                    <button className="btn btn-primary animate-up-2">
                      Send
                    </button>
                  </div>
                  <div className="mt-5">
                    <div className="card bg-gray-200 border-gray-300 rounded p-4 mb-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="font-small">
                          <NavLink to="#">
                            <img
                              className="avatar-sm img-fluid rounded-circle me-2"
                              src="../../assets/img/team/profile-picture-1.jpg"
                              alt="avatar"
                            />{" "}
                            <span className="fw-bold">John Doe</span>{" "}
                          </NavLink>
                          <span className="ms-2">2 min ago</span>
                        </span>
                        <div>
                          <button
                            className="btn btn-link text-danger"
                            aria-label="report button"
                          >
                            <span className="far fa-flag" />
                          </button>
                        </div>
                      </div>
                      <p className="m-0">
                        I really like that the Pixel uses a lot of Bootstrap 4's
                        classes to position elements across the website. I also
                        like the fact that we can get a version of the code
                        without Sass if needed.
                        <br />
                        <br />
                        When is the next product coming? :)
                      </p>
                      <div className="mt-4 mb-3 d-flex justify-content-between">
                        <div>
                          <span
                            className="far fa-thumbs-up text-action text-success me-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-original-title="Like comment"
                            data-bs-original-title="Like comment"
                            aria-label="Like comment"
                          />{" "}
                          <span
                            className="far fa-thumbs-down text-action text-danger me-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-original-title="Dislike comment"
                            data-bs-original-title="Dislike comment"
                            aria-label="Dislike comment"
                          />{" "}
                          <span className="font-small fw-light">4 likes</span>
                        </div>
                        <NavLink
                          className="text-action fw-light font-small"
                          data-bs-toggle="collapse"
                          role="button"
                          to="#replyContainer1"
                          aria-expanded="false"
                          aria-controls="replyContainer1"
                        >
                          <span className="fas fa-reply me-2" /> Reply
                        </NavLink>
                      </div>
                      <div className="collapse" id="replyContainer1">
                        <label
                          className="mb-4 d-none"
                          htmlFor="exampleFormControlTextarea10"
                        >
                          Replay
                        </label>{" "}
                        <textarea
                          className="form-control border"
                          id="exampleFormControlTextarea10"
                          placeholder="Reply to John Doe"
                          rows={6}
                          data-bind-characters-target="#charactersRemainingReply"
                          maxLength={1000}
                          defaultValue={""}
                        />
                        <div className="d-flex justify-content-between mt-3">
                          <small className="fw-light">
                            <span id="charactersRemainingReply">1000</span>{" "}
                            characters remaining
                          </small>{" "}
                          <button className="btn btn-primary btn-sm animate-up-2">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-gray-200 border-gray-300 rounded p-4 ms-5 mb-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="font-small">
                          <NavLink to="#">
                            <img
                              className="avatar-sm img-fluid rounded-circle me-2"
                              src="../../assets/img/team/profile-picture-2.jpg"
                              alt="Bonnie avatar"
                            />{" "}
                            <span className="fw-bold">Bonnie Green</span>{" "}
                          </NavLink>
                          <span className="ms-2">2 min ago</span>
                        </span>
                        <div>
                          <button
                            className="btn btn-link text-danger"
                            aria-label="report button"
                          >
                            <span className="far fa-flag" />
                          </button>
                        </div>
                      </div>
                      <p className="m-0">
                        Hi John Doe,
                        <br />
                        <br />
                        We're happy to hear you like our product. A new one will
                        come soon enough!
                      </p>
                      <div className="mt-4 mb-3 d-flex justify-content-between">
                        <div>
                          <span
                            className="far fa-thumbs-up text-action text-success me-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-original-title="Like comment"
                            data-bs-original-title="Like comment"
                            aria-label="Like comment"
                          />{" "}
                          <span
                            className="far fa-thumbs-down text-action text-danger me-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-original-title="Dislike comment"
                            data-bs-original-title="Dislike comment"
                            aria-label="Dislike comment"
                          />{" "}
                          <span className="font-small fw-light">2 likes</span>
                        </div>
                        <NavLink
                          className="text-action fw-light font-small"
                          data-bs-toggle="collapse"
                          role="button"
                          to="#replyContainer2"
                          aria-expanded="false"
                          aria-controls="replyContainer2"
                        >
                          <span className="fas fa-reply me-2" /> Reply
                        </NavLink>
                      </div>
                      <div className="collapse" id="replyContainer2">
                        <label
                          className="mb-4 d-none"
                          htmlFor="exampleFormControlTextarea11"
                        >
                          Replay
                        </label>{" "}
                        <textarea
                          className="form-control border"
                          id="exampleFormControlTextarea11"
                          placeholder="Reply to John Doe"
                          rows={6}
                          data-bind-characters-target="#charactersRemainingReply2"
                          maxLength={1000}
                          defaultValue={""}
                        />
                        <div className="d-flex justify-content-between mt-3">
                          <small className="fw-light">
                            <span id="charactersRemainingReply2">1000</span>{" "}
                            characters remaining
                          </small>{" "}
                          <button className="btn btn-primary btn-sm animate-up-2">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-gray-200 border-gray-300 rounded p-4 mb-4">
                      <div className="d-flex justify-content-between mb-4">
                        <span className="font-small">
                          <NavLink to="#">
                            <img
                              className="avatar-sm img-fluid rounded-circle me-2"
                              src="../../assets/img/team/profile-picture-3.jpg"
                              alt="James avatar"
                            />{" "}
                            <span className="fw-bold">James Curran</span>{" "}
                          </NavLink>
                          <span className="ms-2">2 min ago</span>
                        </span>
                        <div>
                          <button
                            className="btn btn-link text-danger"
                            aria-label="report button"
                          >
                            <span className="far fa-flag" />
                          </button>
                        </div>
                      </div>
                      <p className="m-0">
                        Hey there! We want to say that{" "}
                        <span className="text-tertiary">you're awesome</span>{" "}
                        and we think you'll build great websites! Why not use
                        Pixel to make things easier?
                      </p>
                      <div className="mt-4 mb-3 d-flex justify-content-between">
                        <div>
                          <span
                            className="far fa-thumbs-up text-action text-success me-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-original-title="Like comment"
                            data-bs-original-title="Like comment"
                            aria-label="Like comment"
                          />{" "}
                          <span
                            className="far fa-thumbs-down text-action text-danger me-3"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-original-title="Dislike comment"
                            data-bs-original-title="Dislike comment"
                            aria-label="Dislike comment"
                          />{" "}
                          <span className="font-small fw-light">4 likes</span>
                        </div>
                        <NavLink
                          className="text-action fw-light font-small"
                          data-bs-toggle="collapse"
                          role="button"
                          to="#replyContainer3"
                          aria-expanded="false"
                          aria-controls="replyContainer3"
                        >
                          <span className="fas fa-reply me-2" /> Reply
                        </NavLink>
                      </div>
                      <div className="collapse" id="replyContainer3">
                        <label
                          className="mb-4 d-none"
                          htmlFor="exampleFormControlTextarea12"
                        >
                          Replay
                        </label>{" "}
                        <textarea
                          className="form-control border"
                          id="exampleFormControlTextarea12"
                          placeholder="Reply to John Doe"
                          rows={6}
                          data-bind-characters-target="#charactersRemainingReply3"
                          maxLength={1000}
                          defaultValue={""}
                        />
                        <div className="d-flex justify-content-between mt-3">
                          <small className="fw-light">
                            <span id="charactersRemainingReply3">1000</span>{" "}
                            characters remaining
                          </small>{" "}
                          <button className="btn btn-primary btn-sm animate-up-2">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                    <div id="extraContent" style={{ display: "none" }}>
                      <div className="card bg-gray-200 border-gray-300 p-4 mb-4">
                        <div className="d-flex justify-content-between mb-4">
                          <span className="font-small">
                            <NavLink to="#">
                              <img
                                className="avatar-sm img-fluid rounded-circle me-2"
                                src="../../assets/img/team/profile-picture-2.jpg"
                                alt="Neil avatar"
                              />{" "}
                              <span className="fw-bold">Neil Sims</span>{" "}
                            </NavLink>
                            <span className="ms-2">2 min ago</span>
                          </span>
                          <div>
                            <button
                              className="btn btn-link text-danger"
                              aria-label="report button"
                            >
                              <span className="far fa-flag" />
                            </button>
                          </div>
                        </div>
                        <p className="m-0">
                          I really like that the Pixel uses a lot of Bootstrap
                          4's classes to position elements across the website. I
                          also like the fact that we can get a version of the
                          code without Sass if needed.
                          <br />
                          <br />
                          When is the next product coming? :)
                        </p>
                        <div className="mt-4 mb-3 d-flex justify-content-between">
                          <div>
                            <span
                              className="far fa-thumbs-up text-action text-success me-3"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-original-title="Like comment"
                              data-bs-original-title="Like comment"
                              aria-label="Like comment"
                            />{" "}
                            <span
                              className="far fa-thumbs-down text-action text-danger me-3"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-original-title="Dislike comment"
                              data-bs-original-title="Dislike comment"
                              aria-label="Dislike comment"
                            />{" "}
                            <span className="font-small fw-light">4 likes</span>
                          </div>
                          <NavLink
                            className="text-action fw-light font-small"
                            data-bs-toggle="collapse"
                            role="button"
                            to="#replyContainer4"
                            aria-expanded="false"
                            aria-controls="replyContainer4"
                          >
                            <span className="fas fa-reply me-2" /> Reply
                          </NavLink>
                        </div>
                        <div className="collapse" id="replyContainer4">
                          <label
                            className="mb-4 d-none"
                            htmlFor="exampleFormControlTextarea13"
                          >
                            Replay
                          </label>{" "}
                          <textarea
                            className="form-control border"
                            id="exampleFormControlTextarea13"
                            placeholder="Reply to John Doe"
                            rows={6}
                            data-bind-characters-target="#charactersRemainingReply4"
                            maxLength={1000}
                            defaultValue={""}
                          />
                          <div className="d-flex justify-content-between mt-3">
                            <small className="fw-light">
                              <span id="charactersRemainingReply4">1000</span>{" "}
                              characters remaining
                            </small>{" "}
                            <button className="btn btn-primary btn-sm animate-up-2">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="card bg-gray-200 rounded border-gray-300 p-4 ms-5 mb-4">
                        <div className="d-flex justify-content-between mb-4">
                          <span className="font-small">
                            <NavLink to="#">
                              <img
                                className="avatar-sm img-fluid rounded-circle me-2"
                                src="../../assets/img/team/profile-picture-5.jpg"
                                alt="Jose avatar"
                              />{" "}
                              <span className="fw-bold">Jose Leos</span>{" "}
                            </NavLink>
                            <span className="ms-2">2 min ago</span>
                          </span>
                          <div>
                            <button
                              className="btn btn-link text-danger"
                              aria-label="report button"
                            >
                              <span className="far fa-flag" />
                            </button>
                          </div>
                        </div>
                        <p className="m-0">
                          Hi John Doe,
                          <br />
                          <br />
                          We're happy to hear you like our product. A new one
                          will come soon enough!
                        </p>
                        <div className="mt-4 mb-3 d-flex justify-content-between">
                          <div>
                            <span
                              className="far fa-thumbs-up text-action text-success me-3"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-original-title="Like comment"
                              data-bs-original-title="Like comment"
                              aria-label="Like comment"
                            />{" "}
                            <span
                              className="far fa-thumbs-down text-action text-danger me-3"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title
                              data-original-title="Dislike comment"
                              data-bs-original-title="Dislike comment"
                              aria-label="Dislike comment"
                            />{" "}
                            <span className="font-small fw-light">2 likes</span>
                          </div>
                          <NavLink
                            className="text-action fw-light font-small"
                            data-bs-toggle="collapse"
                            role="button"
                            to="#replyContainer5"
                            aria-expanded="false"
                            aria-controls="replyContainer5"
                          >
                            <span className="fas fa-reply me-2" /> Reply
                          </NavLink>
                        </div>
                        <div className="collapse" id="replyContainer5">
                          <label
                            className="mb-4 d-none"
                            htmlFor="exampleFormControlTextarea14"
                          >
                            Replay
                          </label>{" "}
                          <textarea
                            className="form-control border"
                            id="exampleFormControlTextarea14"
                            placeholder="Reply to John Doe"
                            rows={6}
                            data-bind-characters-target="#charactersRemainingReply5"
                            maxLength={1000}
                            defaultValue={""}
                          />
                          <div className="d-flex justify-content-between mt-3">
                            <small className="fw-light">
                              <span id="charactersRemainingReply5">1000</span>{" "}
                              characters remaining
                            </small>{" "}
                            <button className="btn btn-primary btn-sm animate-up-2">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 text-center">
                      <button
                        id="loadOnClick"
                        className="btn btn-primary btn-loading-overlay me-2 mb-2"
                      >
                        <span className="spinner">
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          />{" "}
                        </span>
                        <span className="ms-1 btn-inner-text">
                          Load more comments
                        </span>
                      </button>
                      <p id="allLoadedText" style={{ display: "none" }}>
                        That's all, Sparky!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PostDetail;
