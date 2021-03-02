const NotFound = ({header, img}) => {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>{header}</h1>
        <img src={img} alt='404' width='100%' />
      </div>
    );
  };
  
  export default NotFound;