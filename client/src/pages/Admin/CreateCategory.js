import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";

import { Modal } from "antd";

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");
    //handle Form
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post("/api/v1/category/create-category", {
          name,
        });
        if (data?.success) {
          toast.success(`${name} is created`);
          getAllCategory();
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.log(error);
        // toast.error("somthing went wrong in input form");
      }
    };

    return (
        <Layout title={"Dashboard - Create Category"}>
          <div className="container-fluid m-3 p-3 dashboard">
            <div className="row">
              <div className="col-md-3">
                <AdminMenu />
              </div>
              <div className="col-md-9">
                <h1>Manage Category</h1>
                <div className="p-3 w-50">
                  <CategoryForm
                    handleSubmit={handleSubmit}
                    value={name}
                    setValue={setName}
                  />
                </div>
                <div className="w-75">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories?.map((c) => (
                        <>
                          <tr>
                            <td key={c._id}>{c.name}</td>
                            <td>
                              <button
                                className="btn btn-primary ms-2"
                                onClick={() => {
                                  setVisible(true);
                                  setUpdatedName(c.name);
                                  setSelected(c);
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-danger ms-2"
                                onClick={() => {
                                  handleDelete(c._id);
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Modal
                  onCancel={() => setVisible(false)}
                  footer={null}
                  visible={visible}
                >
                  <CategoryForm
                    value={updatedName}
                    setValue={setUpdatedName}
                    handleSubmit={handleUpdate}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </Layout>
      );
    };
    
    export default CreateCategory;