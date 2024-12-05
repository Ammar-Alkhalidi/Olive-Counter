
const Text = ({ count }) => {
  if (count > 10) {
    return <p className="backgroundOlive">Count is bigger than 10</p>;
  }

  return (
    <p className={count > 5 ? "backgroundOlive" : ""}>
      The current count is: {count}
    </p>
  );
};

export default Text;
