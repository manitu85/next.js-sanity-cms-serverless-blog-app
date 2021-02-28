import NextLink from 'next/link';
import { Card } from 'react-bootstrap';
import { urlFor } from '@/lib/api';

const CardListItem = ({
  title,
  subtitle,
  image,
  author,
  slug,
  date,
  mode = 'normal'
}) => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          {mode === 'placeholder' ? (
            <div>
              <Card.Title className="font-weight-bold mb-1">
                Placeholder Author
              </Card.Title>
              <Card.Text className="card-date">Placeholder Date</Card.Text>
            </div>
          ) : (
            <div>
              <Card.Title className="font-weight-bold mb-1">
                {author?.name}
              </Card.Title>
              <Card.Text className="card-date">{date}</Card.Text>
            </div>
          )}
        </Card.Header>
        <Card.Body style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ maxWidth: '300px' }} className="view overlay">
            {mode === 'placeholder' ? (
              <div className="image-placeholder" />
            ) : (
              image && (
                <Card.Img
                  src={urlFor(image)
                    .height(300)
                    .crop('center')
                    .fit('clip')
                    .url()}
                  alt="Card image cap"
                />
              )
            )}
          </div>
          {mode === 'placeholder' ? (
            <div style={{ alignSelf: 'center' }}>
              <Card.Title className="card-main-title">
                Placeholder Title
              </Card.Title>
              <Card.Text>Placeholder Subtitle</Card.Text>
            </div>
          ) : (
            <div style={{ alignSelf: 'center' }}>
              <Card.Title className="card-main-title">{title}</Card.Title>
              <Card.Text>{subtitle}</Card.Text>
            </div>
          )}
        </Card.Body>
      </div>
      <NextLink as={`/blogs/${slug}`} href="/blogs/[slug]">
        <a className="card-button">Read More</a>
      </NextLink>
    </Card>
  );
};

export default CardListItem;
