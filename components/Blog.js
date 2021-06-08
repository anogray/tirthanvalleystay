import { Button, Card } from "react-bootstrap";
import NavBar from "../components/NavBar";
// import styles from "../../styles/blog.module.css"

export default function Blog() {
  return (
    <>
    {/* <NavBar/> */}
    <div className="blogpost"  >
      <Card style={{ width: "50%" }}>
        <Card.Img variant="top" src="https://www.tirthanvalleystay.com/images/blog-26.jpg" />
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">BY MR. BEHL NOVEMBER, 29 2019</Card.Subtitle>
          <Card.Title>HERE’S WHY TIRTHAN VALLEY IS AN IDEAL HOLIDAY DESTINATION FOR YOUR FAMILY</Card.Title>
          <Card.Text>
          Tirthan Valley is a wonder land located in the Kullu district of Himalayas at the Himalayas, this beautiful Himalayan hideaway is home to spell bound beauty that will leave you mesmerized, fast-flowing rivers –......
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}
