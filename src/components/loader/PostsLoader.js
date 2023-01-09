import React from "react";
import { Animated } from "react-animated-css";
import "../../assets/css/style.css";

const PostsLoader = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <Animated
          animationIn="bounceInRight"
          animationOut="fadeOut"
          animationInDelay={600}
          isVisible={true}
        >
          <div className="box">
            <div className="box-content">
              <div className="product-load-items">
                <div className="product-item">
                  <div className="sector-1">
                    <div className="text">
                      <div className="text-line"> </div>
                    </div>
                  </div>
                  <div className="sector-2">
                    <div className="text">
                      <div className="text-line"> </div>
                      <div className="text-line"></div>
                      <div className="text-line"> </div>
                      <div className="text-line"> </div>
                      <div className="text-line"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animated>
      </div>
      <div className="col-md-4">
        <Animated
          animationIn="bounceInRight"
          animationOut="fadeOut"
          animationInDelay={500}
          isVisible={true}
        >
          <div className="box">
            <div className="box-content">
              <div className="product-load-items">
                <div className="product-item">
                  <div className="sector-1">
                    <div className="text">
                      <div className="text-line"> </div>
                    </div>
                  </div>
                  <div className="sector-2">
                    <div className="text">
                      <div className="text-line"> </div>
                      <div className="text-line"></div>
                      <div className="text-line"> </div>
                      <div className="text-line"> </div>
                      <div className="text-line"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animated>
      </div>
      <div className="col-md-4">
        <Animated
          animationIn="bounceInRight"
          animationOut="fadeOut"
          animationInDelay={400}
          isVisible={true}
        >
          <div className="box">
            <div className="box-content">
              <div className="product-load-items">
                <div className="product-item">
                  <div className="sector-1">
                    <div className="text">
                      <div className="text-line"> </div>
                    </div>
                  </div>
                  <div className="sector-2">
                    <div className="text">
                      <div className="text-line"> </div>
                      <div className="text-line"></div>
                      <div className="text-line"> </div>
                      <div className="text-line"> </div>
                      <div className="text-line"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </div>
  );
};

export default PostsLoader;
