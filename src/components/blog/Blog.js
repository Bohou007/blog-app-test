import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { getUserLocales } from "get-user-locale";
import moment from "moment/min/moment-with-locales";
import Moment from "react-moment";

Moment.globalMoment = moment;
Moment.globalLocale = getUserLocales();

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
          <div className="card shadow">
            <div className="blog-img">
              <img
                src={this.props.image}
                className="card-img-top rounded-top"
                alt="Designer desk"
              />
            </div>

            <div className="card-body blog-content">
              <div className="media d-flex align-items-center justify-content-between">
                <div className="post-group">
                  <span className="small">
                    <span className="far fa-eye me-2" />
                    {this.props.view
                      ? this.props.view < 10
                        ? "0" + this.props.view
                        : this.props.view
                      : 0}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <span className="small">
                    <span className="far fa-calendar-alt me-2" />
                    <Moment format="D MMMM YYYY">{this.props.createdAt}</Moment>
                  </span>
                </div>
              </div>

              <div className="blog-title">
                <NavLink to={"/blog/" + this.props.slug}>
                  <h3 className="h5 card-title mt-4">{this.props.title}</h3>
                </NavLink>
              </div>
              <p className="card-text">
                {this.props.content.slice(0, 90) + " ..."}
              </p>
              <NavLink
                to={"/blog/" + this.props.slug}
                className="btn btn-primary btn-sm"
              >
                Lire Plus
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Blog;
