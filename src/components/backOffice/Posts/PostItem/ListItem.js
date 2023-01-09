import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { getUserLocales } from "get-user-locale";
import moment from "moment/min/moment-with-locales";
import Moment from "react-moment";

Moment.globalMoment = moment;
Moment.globalLocale = getUserLocales();

class Listitem extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  render() {
    return (
      <div className="col-12 col-md-6 col-lg-12">
        <div className="card border-gray-300 mb-4">
          <div className="row g-0 align-items-center">
            <div className="col-12 col-lg-6 col-xl-4">
              <NavLink to="#">
                <img
                  src={this.props.image}
                  alt="macbook pro"
                  className="card-img p-2 rounded-xl"
                />
              </NavLink>
            </div>
            <div className="col-12 col-lg-6 col-xl-8">
              <div className="card-body py-lg-0">
                <div className="d-flex g-0 align-items-center mb-2">
                  <div className="col text-left">
                    <ul className="list-group mb-0">
                      <li className="list-group-item border-0 small p-0">
                        <span className="fas fa-medal text-tertiary me-2" />
                        Promoted until:{" "}
                        <Moment format="D MMMM YYYY">
                          {this.props.createdAt}
                        </Moment>
                      </li>
                    </ul>
                  </div>
                  <div className="col text-right">
                    <div className="btn-group">
                      <button
                        className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="icon icon-sm">
                          <span className="fas fa-ellipsis-h icon-secondary" />
                        </span>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <div className="dropdown-menu list">
                        <NavLink
                          className="dropdown-item rounded-top"
                          to={"/dashboard/posts/edit/" + this.props.slug}
                        >
                          <span className="fas fa-edit me-2" />
                          Edit Item
                        </NavLink>
                        <NavLink className="dropdown-item" to="/log/2">
                          <span className="fas fa-chart-line me-2" />
                          Statistics
                        </NavLink>
                        <NavLink
                          className="dropdown-item text-danger rounded-bottom"
                          to="/log/3"
                        >
                          <span
                            className="fa fa-trash me-2"
                            aria-hidden="true"
                          />
                          Disable
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <NavLink to="#">
                  <h2 className="h5">{this.props.title}</h2>
                </NavLink>
                <p className="card-text">
                  {this.props.content.slice(0, 90) + " ..."}
                </p>
                <div className="col d-flex ps-0">
                  <span className="text-success font-small me-3">
                    <span className="fas fa-check-circle me-2" />
                    Active
                  </span>
                  <span className="text-muted font-small me-3">
                    <span className="fas fa-eye me-2" />
                    {this.props.view
                      ? this.props.view < 10
                        ? "0" + this.props.view
                        : this.props.view
                      : 0}
                  </span>
                  <span className="text-muted font-small me-3">
                    <span className="far fa-heart me-2" />
                    10
                  </span>
                  <NavLink className="font-small text-dark" to="#">
                    <span className="fas fa-envelope me-2" />8
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Listitem;
