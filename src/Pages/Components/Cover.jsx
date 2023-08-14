const Cover = ({img, heading}) => {
  return (
    <div className="cover-container">
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: `url("${img}")`
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md border-2 border-orange-500 text-white w-[650px] py-8 bg-black opacity-50">
            <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
