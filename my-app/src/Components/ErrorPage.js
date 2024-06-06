import React, { Component } from "react";

export class ErrorPage extends Component {
  render() {
    return (
      <div>
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                  </div>
                  <div className="contentBox">
                    <h3 className="h2">Please Login To view details</h3>
                       <p>Page Not Available!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ErrorPage;