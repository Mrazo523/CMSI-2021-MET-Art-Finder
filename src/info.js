export default function Info({ data }) {
  return (
    <section>
      {data.primaryImage && data.title ? (
        <>
          <h2>Meet {data.title}</h2>
          <figure>
            <img
              src={data.primaryImage}
              alt={data.title}
              style={{
                width: "400px",
                height: "auto",
                transform: "rotate(0deg)",
              }}
            />
          </figure>
        </>
      ) : (
        <p> API Has no data on this artist </p>
      )}
    </section>
  );
}
