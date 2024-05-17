export const Profile = () => {
  const familyStyle = {
    color: "blue",
    fontSize: "1.2rem"
  };
  return (
    <div className="row">
      <div className="col-md-4">
        <img src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg" alt="User Avatar" width="100%" />
      </div>
      <div className="col-md-8">
        <p>
          <span>Id: </span>
          <span>2</span>
        </p>
        <p>
          <span>Email: </span>
          <span>vania@mail.ru</span>
        </p>
        <p>
          <span style={familyStyle}>Фамилия и имя: </span>
          <span>Иван Иванов</span>
        </p>
        <p style={{color: "red", fontSize: "1.5rem"}}>
          Рассказ о себе
        </p>
      </div>
    </div>
  );
};