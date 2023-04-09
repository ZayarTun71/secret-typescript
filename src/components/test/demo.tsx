export const Demo = () => {
  const text = "Demo!!!";
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

export const Demo3 = () => {
  const arraylist = ["a", "b", "c"];
  return (
    <>
      <ul>
        {arraylist.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};
