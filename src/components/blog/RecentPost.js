import React, { Component } from "react";
import moment from "moment/min/moment-with-locales";
import { getUserLocales } from "get-user-locale";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";

Moment.globalMoment = moment;
Moment.globalLocale = getUserLocales();

class RecentPost extends Component {
  render() {
    return (
      <>
        <div className="col-6 col-lg-6 mb-lg-0">
          <div className="card shadow">
            <div className="row g-0 align-items-center">
              <div className="col-md-4">
                <div className="block-img-favoris">
                  <NavLink to={"/blog/" + this.props.slug}>
                    <img
                      src={this.props.image}
                      className="card-img rounded-start"
                      alt={this.props.title}
                    />
                  </NavLink>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <NavLink to={"/blog/" + this.props.slug}>
                    <h3 className="h5 card-title favoris-title">
                      {this.props.title}
                    </h3>
                  </NavLink>
                  <p className="favoris-description card-text mb-4">
                    {this.props.content.slice(0, 125) + "... "}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="card-text small">
                      <span className="far fa-calendar-alt me-2" />
                      <Moment format="D MMMM YYYY">
                        {this.props.createdAt}
                      </Moment>
                    </span>{" "}
                    <NavLink to="#" className="small">
                      <span className="far fa-comments me-2" />
                      21
                    </NavLink>
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

export default RecentPost;
