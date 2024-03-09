
const Button = ({value, handlClick}) => {
    

  
  return (
    <div>
        <button className="button" onClick={handlClick}>
          <h1>{value}</h1>
        </button>
      </div>
  );
};

export default Button;
