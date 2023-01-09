import axios from "axios";
import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Redirect } from "react-router-dom";
import ItemsDesign from "./CategoryItems/ItemsDesign";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      currentUser: [],
      PostSlug: this.props.match.params.slug,
      postData: {},
      category_id: [],
      postCategories_id: [],
      categories: [],
      redirection: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnEditorChange = this.handleOnEditorChange.bind(this);
    this.handleUpdatePost = this.handleUpdatePost.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("userInfo") != null) {
      this.setState({
        currentUser: JSON.parse(localStorage.getItem("userInfo")),
      });
    }

    axios
      .get("http://localhost:9002/api/posts/" + this.state.PostSlug)
      .then((res) => {
        console.log("khjjv lerhvr : ", res.data.Categories);
        let data_loop = [];
        for (let index = 0; index < res.data.Categories.length; index++) {
          const element = res.data.Categories[index];
          data_loop.push(element.id);
        }
        this.setState({
          postData: res.data,
          postCategories_id: data_loop,
        });
      })
      .catch((error) => {
        console.log(error);
      });

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

  handleUpdatePost = (event) => {
    event.preventDefault();
    let item = { ...this.state.item };
    item["user_id"] = this.state.currentUser.id;
    this.setState({ item });
    axios
      .put("http://localhost:9002/api/posts/" + this.state.PostSlug, item)
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
      console.log("indexOf:", this.state.postCategories_id.indexOf(item.id));
      let checked =
        this.state.postCategories_id.indexOf(item.id) == -1 ? false : true;
      return (
        <ItemsDesign
          id={item.id}
          title={item.title}
          image={item.image}
          checked={checked}
          description={item.description}
          slug={item.slug}
          createdAt={item.createdAt}
          key={index}
          handleCharge={this.handleCharge}
          handleChange={this.handleChange}
        />
      );
    });
    return (
      <div>
        <div>
          <form
            onSubmit={this.handleUpdatePost}
            className="card border-gray-300 p-4 mb-4"
          >
            <h1 className="h5 mb-4">
              Modification de l'article : <b>{this.state.postData.title}</b>
            </h1>
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="mb-4">
                  <label htmlFor="firstname">Titre</label>{" "}
                  <input
                    type="text"
                    name="title"
                    value={this.state.postData.title}
                    // placeholder="Entrer le titre de votre article"
                    className="form-control"
                    id="firstname"
                    required
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-12">
                <div className="mb-4">
                  <label htmlFor="type">Categories</label>
                  <div className="inline-block">{categoriesList}</div>
                </div>
              </div>
              <div className="col-12 col-lg-12">
                <div className="mb-4">
                  <h2 className="h6">Featured image</h2>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div className="profile-image-small fmxw-200 me-4">
                      <img
                        className="rounded"
                        src={this.state.postData.image}
                        alt="Office"
                      />
                    </div>
                    <div className="mb-3 col-width-block">
                      <label htmlFor="formFile" className="form-label">
                        Image url
                      </label>{" "}
                      <input
                        className="form-control"
                        name="image"
                        value={this.state.postData.image}
                        placeholder="Entrer l'url de votre image"
                        type="text"
                        id="formFile"
                        required
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <small className="text-gray fw-light font-xs d-block mt-2">
                    Vous pouvez notamment changer l'url de l'image actuel
                  </small>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-4">
              <label htmlFor="description">Contenu de votre article</label>{" "}
              <CKEditor
                className="form-control text-gray"
                editor={ClassicEditor}
                data={this.state.postData.content}
                onChange={this.handleOnEditorChange}
              />
              {/* <textarea
                rows={10}
                name="content"
                className="form-control text-gray"
                id="description"
                required
                onChange={this.handleChange}
                defaultValue={this.state.postData.content}
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
      </div>
    );
  }
}

export default EditPost;
