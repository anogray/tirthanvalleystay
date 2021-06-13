import Head from "next/head";
import Image from 'next/image'
import { Button, Card } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import styles from "../../styles/Blog.module.css"
import blogData from "../../content/blogs/blogs.json"
import Parser from 'html-react-parser'
import Link from "next/dist/client/link";

 // React.createElement('p', {}, 'Hello, World!')

export default function Blog() {
    console.log("json",blogData)
  return (
    <>

    <NavBar/>
    
    <div  className={styles.blog}>
    {/* <img  src="/images/blog/blogpost-why.png" alt="loading pic" width="50%" height="100%"/> */}
      <div className={styles.blogpost}>
    {
        blogData.map((eachBlog)=>(
        <article className="type-post">
            <Card className={styles.card}>
            <div className="entry-cover">
              
            </div>
                <Card.Img variant="top" src={eachBlog.imgURL} alt={eachBlog.alt} />
                <Card.Body>
                {/* <Card.Subtitle className={`mb-2 text-muted ${styles.by}`}> {`${eachBlog.author} / ${eachBlog.date}`} </Card.Subtitle> */}
                {/* <Card.Title className={styles.title}>{eachBlog.title}</Card.Title> */}
                <div className="entry-meta ">
								<span className="post-by"><a href="#" title="Author"> {eachBlog.author} /</a></span>
								<span className="post-date"><a href="#" title="June 26, 2018">  {eachBlog.date}</a></span>
							</div>
                <div className="entry-title">
                <h3>
                {Parser(eachBlog.title)}
                </h3>
                </div>
                {eachBlog["sub-title"] && <Card.Title className={styles.title}>{eachBlog["sub-title"]}</Card.Title>}
                {/* <Card.Text className={styles.title}> */}
                {/* {console.log("parseddd",eachBlog.less, Parser(eachBlog.less))} */}
                <div className="entry-content">
                {Parser(eachBlog.less)}
                </div>
                {/* </Card.Text> */}
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </article>
            )
        )
    }
      </div>
   
      <div className="">
      <article className={`type-post ${styles.card}`} >
            <Card >
                <Card.Img variant="top" src={blogData[0].imgURL} alt={blogData.alt} />
                <Card.Body>
                <Card.Subtitle className={`mb-2 text-muted ${styles.by}`}> {`${blogData[0].author} / ${blogData[0].date}`} </Card.Subtitle>
                <Card.Title className={styles.title}>{blogData[0].title}</Card.Title>
                {blogData[0]["sub-title"] && <Card.Title className={styles.title}>{blogData[0]["sub-title"]}</Card.Title>}
                {/* <Card.Text className={styles.title}> */}

                {console.log("parseddd",blogData[0].less, Parser(blogData[0].less))}
                {Parser(blogData[0].less)}
                {/* </Card.Text> */}
                <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
            </article>
      </div>
   </div> 
    </>
  );
}
