import { Row, Col } from 'react-bootstrap';
import AuthorIntro from '@/components/AuthorIntro';
import CardListItem from '@/components/CardListItem';
import CardItem from '@/components/CardItem';

const Home = () => {
  return (
    <div className="blog-detail-page">
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        <Col md="10">
          <CardListItem />
        </Col>
        <Col md="4">
          <CardItem />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
