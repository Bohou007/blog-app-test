import axios from "axios";
import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Redirect } from "react-router-dom";
import "../../../assets/css/check.css";

import "../../../assets/css/app.css";
import ItemsDesign from "./CategoryItems/ItemsDesign";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      currentUser: [],
      categories: [],
      category_id: [],
      redirection: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnEditorChange = this.handleOnEditorChange.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("userInfo") != null) {
      this.setState({
        currentUser: JSON.parse(localStorage.getItem("userInfo")),
      });
    }

    axios
      .get("http://localhost:9002/api/categories")
      .then((res) => {
        console.log(res.data);
        this.setState({
          categories: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleOnEditorChange = (evt, editor) => {
    const name = "content";
    const value = editor.getData();
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  };

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    console.log(value);

    if (target.checked) {
      this.setState({
        category_id: [...this.state.category_id, value],
      });
    } else {
      const index = this.state.category_id.indexOf(value);
      this.state.category_id.splice(index, 1);
      this.setState({
        category_id: this.state.category_id,
      });
    }
    console.log(this.state.category_id);
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  }

  handlePost = (event) => {
    event.preventDefault();
    console.log("aaaaa =", this.state.category_id);

    let item = { ...this.state.item };
    item["user_id"] = this.state.currentUser.id;
    item["category_id"] = this.state.category_id;
    this.setState({ item });

    axios
      .post("http://localhost:9002/api/posts", item)
      .then((res) => {
        console.log(res.data);
        this.setState({
          redirection: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  };

  render() {
    const { redirection } = this.state;
    if (redirection) {
      //Affichage de la redirection
      return <Redirect to="/dashboard/all-posts" />;
    }

    const categoriesList = this.state.categories.map((item, index) => {
      return (
        <ItemsDesign
          id={item.id}
          title={item.title}
          checked={false}
          image={item.image}
          description={item.description}
          slug={item.slug}
          createdAt={item.createdAt}
          key={index}
          handleChange={this.handleChange}
        />
        // <option value={item.id} key={index}>
        //   {item.title}
        // </option>
      );
    });

    return (
      <div>
        <form
          onSubmit={this.handlePost}
          className="card border-gray-300 p-4 mb-4"
        >
          <h1 className="h5 mb-4">AJOUTER UN ARTICLE</h1>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="mb-4">
                <label htmlFor="firstname">Titre</label>{" "}
                <input
                  type="text"
                  name="title"
                  placeholder="Entrer le titre de votre article"
                  className="form-control"
                  id="firstname"
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="">
                <div className="mb-4">
                  <label htmlFor="formFile" className="form-label">
                    Image
                  </label>{" "}
                  <input
                    className="form-control"
                    name="image"
                    placeholder="Entrer l'url de votre image"
                    type="text"
                    id="formFile"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                {/* <div className="mb-4">
                  <label htmlFor="formFile" className="form-label">
                    Image
                  </label>{" "}
                  <input
                    className="form-control"
                    name="image"
                    type="file"
                    id="formFile"
                    required
                    onChange={this.handleChange}
                  />
                </div> */}
              </div>
            </div>
            <div className="col-12 col-lg-12">
              <div className="row mb-4">
                <label htmlFor="type">Categories</label>
                <div className="inline-block">{categoriesList}</div>
                {/* <select
                  name="category_id"
                  className="form-select"
                  id="type"
                  aria-label="Type select example"
                  onChange={this.handleChange}
                >
                  <option value="" selected="selected">
                    Selectionnez la categorie de votre article
                  </option>
                  {categoriesList}
                </select> */}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description">Contenu de votre article</label>{" "}
            <CKEditor
              className="form-control text-gray"
              editor={ClassicEditor}
              data={this.state.item.content}
              onChange={this.handleOnEditorChange}
            />
            {/* <textarea
              rows={10}
              name="content"
              className="form-control text-gray"
              id="description"
              required
              onChange={this.handleChange}
              defaultValue={""}
            /> */}
          </div>
          <div className="row">
            <div className="col">
              <button
                className="btn btn-primary btn-dark mt-2 animate-up-2"
                type="submit"
              >
                Enregistrer votre article
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
