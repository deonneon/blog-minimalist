const BlogHeader = () => {
  return (
    <div className={"header"}>
      <div className={"title-section"}>
        <h1 className={"title"}>DATA LAKE</h1>
        <p className={"description"}>
          A vast and ever-expanding repository of knowledge and insight. Topics
          may be random but insightful. Join me on this journey through the
          ever-changing landscape of technology.
        </p>
      </div>
      <style jsx>
        {`
          .header {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 60px 20px;
            min-width: 100vw;
            box-sizing: border-box;
          }
          h1 {
            font-weight: 300;
          }
          .title-section {
            max-width: 800px;
          }

          .title {
            font-size: 48px;
            margin-bottom: 20px;
          }

          .description {
            font-size: 1.4rem;
            font-weight: 100;
          }
        `}
      </style>
    </div>
  );
};

export default BlogHeader;