import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AProposImg from "../assets/images/paul-elie.png";
class Apropos extends Component {
  render() {
    return (
      <>
        <section className="section section-header bg-primary text-white pb-7">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 text-center">
                <h1 className="display-3 mb-4 blog-head-title">A Propos</h1>
                <p className="lead blog-head-content">
                  Restez connecté au monde de l'informatique.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-lg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="lead">
                  <span className="font-weight-bold">Spaces</span> is the
                  largest, real time network for office space. The Spaces
                  Network transforms the entire commercial real estate process
                  by connecting growing teams and professionals looking for
                  space, directly with venue partners, space providers, real
                  estate professionals and service providers.
                </p>
              </div>
              <div className="col-md-6">
                {/* <img
                  className="mt-4"
                  src={AProposImg}
                  alt="signature"
                  height="344"
                  width="100%"
                /> */}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Apropos;
