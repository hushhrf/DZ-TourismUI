import { useState, useEffect } from "react";
import "./newPostPage.scss";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiRequest.get("/types");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setSelectedCategory(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        name: inputs.name,
        description: value,
        category: selectedCategory,
        location: inputs.location,
        date: inputs.date,
        duration: parseInt(inputs.duration),
        price: parseFloat(inputs.price),
        capacity: parseInt(inputs.capacity)
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Activity & Tour Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" />
            </div>
            <div className="item">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="datetime-local" />
            </div>
            <div className="item">
              <label htmlFor="location">Destination</label>
              <input id="location" name="location" type="text" />
            </div>
            <div className="item">
              <label htmlFor="category">Type</label>
              <select
                name="category"
                value={selectedCategory}
                onChange={handleChange}
                className="rounded-md px-2 py-0 text-sm w-full pl-6 pr-2 outline-none appearance-none bg-white text-gray-500"
              >
                <option value="" disabled hidden>
                  Choose type
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id} style={{ color: 'black' }}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="capacity">Capacity</label>
              <input min={0} id="capacity" name="capacity" type="number" />
            </div>
            <div className="item">
              <label htmlFor="duration">Duration</label>
              <input min={0} id="duration" name="duration" type="number" />
              <span className="durationIndicator">(days)</span>
            </div>
            <div className="item description">
              <label htmlFor="description">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <button className="sendButton">Post</button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPostPage;
