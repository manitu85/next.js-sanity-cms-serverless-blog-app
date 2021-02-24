const BlogHeader = ({ title, subtitle, coverImage, date, author }) => {
  return (
    <div className="blog-detail-header">
      <p className="lead mb-3">
        <img
          src={author?.avatar}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        {author?.name} {', '} {date}
      </p>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">
        {title}
      </h1>
      <h3 className="blog-detail-header-subtitle mb-3">{subtitle}</h3>
      {/* Check if contains cover image */}
      <img
        className="img-fluid rounded"
        src={coverImage}
        alt="TODO: provide alt"
      />
    </div>
  );
};

export default BlogHeader;
