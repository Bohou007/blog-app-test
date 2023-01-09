import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const bgCat = {
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url("${this.props.image}")`,
      overflow: "hidden",
      width: "100%",
      backgroundSize: "cover",
      // textAlign: "center",
      color: "#fff",
    };
    return (
      <>
        {/* <div className="mt-5 mb-5"> */}
        <div className="col-6 col-md-6 col-lg-4">
          <NavLink to={"/blog-by-category/" + this.props.slug}>
            <div
              className="card shadow bg-img bg-cat p-1 p-md-4 mb-4 mb-lg-0"
              style={bgCat}
            >
              <div className="card-body">
                <div className="icon icon-shape icon-blog-x1 rounded-circle mb-4">
                  <span className="far fa-lightbulb" />
                </div>
                <h3 className="h5 mb-3 bg-cat-title">{this.props.title}</h3>
                <p>{this.props.description.slice(0, 50) + " ."}</p>
              </div>
            </div>
          </NavLink>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default Categories;
