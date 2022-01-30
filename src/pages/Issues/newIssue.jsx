import "./newIssue.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Issue</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Issue"/>
        </div>
        <div className="textArea">
          <label>Short description</label>
          <input type="textarea"/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>

        <div className="addProductItem">
          <label>Status</label>
          <select name="active" id="active">
            <option value="yes">Enabled</option>
            <option value="no">Disabled</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Cover page image</label>
          <input type="file" id="file" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
