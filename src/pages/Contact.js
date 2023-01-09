import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <>
        <section className="section section-header pb-7 bg-primary text-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-8 text-center">
                <h1 className="display-2 mb-3">Contactez-nous</h1>
                <p className="lead">
                  Contactez-nous pour nous faire part de vos besoins, nous vous
                  répondrons le jour même.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-lg block-contact pt-6">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="card border-0 p-2 p-md-3 p-lg-5">
                  <div className="card-header bg-white border-0 text-center">
                    <h2>Vous voulez nous faire des propositions?</h2>
                    <p>Cool! Ecrivez nous.</p>
                  </div>
                  <div className="card-body px-0 pt-0">
                    <form action="#">
                      <div className="mb-4">
                        <label htmlFor="name">Nom complet</label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon3">
                            <span className="fas fa-user-circle" />
                          </span>{" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Entrer votre nom en entier"
                            id="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email">Adresse E-mail</label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon4">
                            <span className="fas fa-envelope" />
                          </span>{" "}
                          <input
                            type="email"
                            className="form-control"
                            placeholder="example@company.com"
                            id="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message">Votre Message</label>{" "}
                        <textarea
                          placeholder="Entrer le contenu de votre message"
                          className="form-control"
                          id="message"
                          rows="10"
                          cols="5"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn rounded btn-primary"
                        >
                          Envoyez votre Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <iframe
                  className="map rounded"
                  id="gmap_canvas"
                  height="542"
                  allowfullscreen=""
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127118.28783222978!2d-4.049705551414426!3d5.348617047460415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sus!4v1638199372659!5m2!1sfr!2sus"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
