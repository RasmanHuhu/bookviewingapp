function Book({ id, title, info }) {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
}

export default Book;
