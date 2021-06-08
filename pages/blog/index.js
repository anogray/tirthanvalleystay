import Head from "next/head";
import { Button, Card } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import styles from "../../styles/Blog.module.css"
import blogData from "../../content/blogs/blogs.json"

export default function Blog() {
    console.log("json",blogData)
  return (
    <>
    <Head>
        <link href = "/static/blog.css" rel="stylesheet"/>
    </Head>
    <NavBar/>
    <div className={styles.blogpost}>

    
    {
        blogData.map((eachBlog)=>(
        <article className="type-post">
            <div className={styles.card}>
            <Card style={{ width: "50%" }}>
                <Card.Img variant="top" src={eachBlog.imgURL} alt={eachBlog.alt} />
                <Card.Body>
                <Card.Subtitle className={`mb-2 text-muted ${styles.by}`}> {`${eachBlog.author} / ${eachBlog.date}`} </Card.Subtitle>
                <Card.Title className={styles.title}>{eachBlog.title}</Card.Title>
                {eachBlog["sub-title"] && <Card.Title className={styles.title}>{eachBlog["sub-title"]}</Card.Title>}
                <Card.Text className={styles.title}>
                <p>{eachBlog.less} ...</p>
                </Card.Text>
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </div>
            </article>
            )
        )
     

    /* <article className="type-post">

     <div className={styles.card}>
      <Card style={{ width: "50%" }}>
        <Card.Img variant="top" src={blogData[0].imgURL} alt={blogData[0].alt} />
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">BY MR. BEHL NOVEMBER, 29 2019</Card.Subtitle>
          <Card.Title>{blogData[0].title}</Card.Title>
          <Card.Text>
          {blogData[0].less} ...
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
      </div>
    </article> */}

      {/* <article className="type-post">

      <div className={styles.card}>
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
      </article> */}

      </div>
    </>
  );
}
