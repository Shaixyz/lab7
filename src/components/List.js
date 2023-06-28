import { Button, Row, Col, Container } from "react-materialize";
import { Link } from "react-router-dom";
export default function List(F) {
    console.log(F);
    return (
      <div>
        <Container>
          <Row>
            {F.F.map((f, index) => (
              f.actractive == true && (
              <Col s={12} m={6} l={4} key={index}>
                <div style={{ background: "	rgb(245,245,220)" }} className="card">
                  <div className="card-image">
                    <img src={f.img} alt={f.title} />
                  </div>
                  <div className="card-title">{f.title}</div>
                    <div className="card-content">{f.descrition}</div>
                  <Link to={`/detail/${f.id}`}>
                    <div className="card-action">
                      <Button>Read More</Button>
                    </div>
                  </Link>
                </div>
              </Col>
              )
            ))}
          </Row>
        </Container>
      </div>
    );
}