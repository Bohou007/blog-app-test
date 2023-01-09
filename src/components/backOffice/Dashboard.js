import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 col-sm-6 mb-4">
            <div className="card border-gray-300">
              <div className="card-body d-block d-md-flex align-items-center">
                <div className="icon icon-shape icon-md icon-shape-primary rounded-circle me-3 mb-4 mb-md-0">
                  <span className="fas fa-wallet" />
                </div>
                <div>
                  <span className="d-block h6 fw-normal"> Global Budget </span>
                  <h5 className="h3 fw-bold mb-1"> $25, 370.00 </h5>
                  <div className="small mt-2">
                    <span className="fas fa-angle-up text-success" />
                    <span className="text-success fw-bold"> 18.2 % </span>
                    higher vs previous month
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 mb-4">
            <div className="card border-gray-300">
              <div className="card-body d-block d-md-flex align-items-center">
                <div className="icon icon-shape icon-md icon-shape-primary rounded-circle me-3 mb-4 mb-md-0">
                  <span className="fas fa-file-invoice-dollar" />
                </div>
                <div>
                  <span className="d-block h6 fw-normal"> Sales </span>
                  <h5 className="h3 fw-bold mb-1"> $5, 220.00 </h5>
                  <div className="small mt-2">
                    <span className="fas fa-angle-up text-success" />
                    <span className="text-success fw-bold"> 4.2 % </span> higher
                    vs previous month
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

export default Dashboard;
