const Birth = ({ name1,closeHandler }) => {
  return (
    <>
      <div className="content">
        <div className="f1">
          <h1>Friends Birthday</h1>
        </div>
        {name1.map((nm) => {
          return (
            <div className="content-div">
              <div className="image-div">
                <img src={nm.img} className="img"></img>
              </div>
              <div>
                <span>{nm.Name}</span> <br />
                <span>{nm.id}</span>
              </div>
            </div>
          );
        })}
        <button className="close-btn" onClick={closeHandler}>Close all</button>
      </div>
      
    </>
  );
};
export default Birth;
