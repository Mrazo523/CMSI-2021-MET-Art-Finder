const titleStyle = {
  backgroundColor: "navajowhite",
  color: "black",
  padding: 20,
  marginTop: 0,
};

export default function Title({ title }) {
  return (
    <div>
      <h1 style={titleStyle}>{title}</h1>
      <h3>
        {" "}
        Search the name of an artist for a piece of their art that's in the MET!{" "}
      </h3>
      <p>Some suggestions: Da vinci, michelangelo, degas, vermeer</p>
    </div>
  );
}
