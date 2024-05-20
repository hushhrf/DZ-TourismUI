
import "./newPostPage.scss";

function NewPostPage() {
  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form>
            <div className="item">
              <label htmlFor="title">Activity name</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="Hike" defaultChecked>
                  Hike
                </option>
                <option value="Camping">Camping</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input id="price" name="price" type="number" />
            </div>
            <div className="item">
              <label htmlFor="Destination">Destination</label>
              <input id="Destination" name="Destination" type="text" />
            </div>
            
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            {/* <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div> */}
            
           
            <div className="item">
              <label htmlFor="utilities">Payment Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            
            
            <div className="item">
              <label htmlFor="size">Date</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="Notes">Notes</label>
              <input id="Notes" name="Notes" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bus">bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Add</button>
          </form>
        </div>
      </div>
      {/* <div className="sideContainer">
      {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div> */}
    </div>
  );
}

export default NewPostPage;
