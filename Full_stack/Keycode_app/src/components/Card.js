import { Col, Card as BootstrapCard } from "react-bootstrap";

function Card(props) {
  const { title, value } = props;

  return (
    <Col sm={12} md={6} lg={3} className={"mb-3"}>
      <BootstrapCard>
        <BootstrapCard.Header>
          <code>{title}</code>
        </BootstrapCard.Header>
        <BootstrapCard.Body style={{minHeight: "4rem"}}>
          <BootstrapCard.Text>
            <code style={{color: "black"}}>{value}</code>
          </BootstrapCard.Text>
        </BootstrapCard.Body>
      </BootstrapCard>
    </Col>
  );
}

export default Card;
