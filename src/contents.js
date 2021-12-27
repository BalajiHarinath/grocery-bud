const Content = ({
  list,
  showAlert,
  setList,
  isediting,
  setIsediting,
  setName,
  setEditID
}) => {
  function deleteHandler(id) {
    showAlert(true, "danger", "item deleted");
    setList(list.filter((item) => item.id !== id));
  }
  function editHandler(id, title) {
    setIsediting(true);
    setName(title);
    setEditID(id);
  }
  return (
    <div className="div-container">
      {list.map((item) => {
        const { id, title } = item;
        return (
          <article className="article-container" key={id}>
            <div className="title-container">
              <p className="article-title">{title}</p>
            </div>
            <div className="button-container">
              <button
                className="edit-btn"
                onClick={() => editHandler(id, title)}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="trash-btn" onClick={() => deleteHandler(id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default Content;
