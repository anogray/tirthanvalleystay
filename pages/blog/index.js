import Head from "next/head";
import Image from 'next/image'
import { Button, Card } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import styles from "../../styles/Blog.module.scss"
import blogData from "../../content/blogs/blogs.json"
import Parser from 'html-react-parser'
import Link from "next/dist/client/link";
import Once from "../../components/Once"

 // React.createElement('p', {}, 'Hello, World!')

export default function Blog() {
  return (
    <>

    <NavBar/>
    
    <div className={styles.containerblog}>
      
        <div className=""> 
        <article className={`${styles.blogPost}`} >
              <div className="entry-cover">

              {/* <Link href="/blog/once" ><a><img src="/images/blog/8june-2.jpg" alt="blog-nature"/></a>
              </Link> */}
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/8june-2.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Mr. Deepak Yadav  / </a></span>
                  <span className="post-date"><a href="#" title="November, 29 2019">  June, 6 2021</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once" title="Tirthan Valley, A Secluded Paradise">Tirthan Valley, A Secluded Paradise </Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                  <p>Tirthan Valley, concealed from the overcrowded tourism map is an ideal place to be. A short adventure trip, a longer time to spend with nature for rejuvenation post covid, or a time to study the grand flora and fauna of the Great Himalayan Park.....</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>

          </article>
        
          <article className={`${styles.blogPost}`} >
              <div className="entry-cover">

              {/* <Link href="/blog/once" ><a><img src="/images/blog/8june-2.jpg" alt="blog-nature"/></a>
              </Link> */}
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-26.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Mr. Behl  / </a></span>
                  <span className="post-date"><a href="#" title=" November, 29 2019">   November, 29 2019</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once" title="Tirthan Valley, A Secluded Paradise">Here’s Why Tirthan Valley is an Ideal Holiday Destination for Your Family </Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                  <p>Tirthan Valley is a wonder land located in the Kullu district of Himalayas at the Himalayas, this beautiful Himalayan hideaway is home to spell bound beauty that will leave you mesmerized, fast-flowing rivers –......</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>

          </article>

          <article className={`${styles.blogPost}`} >
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-26.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr. Anu Sehgal  / </a></span>
                  <span className="post-date"><a href="#" title=" September, 8 2018">September, 8 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once" title="Tirthan Valley, A Secluded Paradise">Tirthan Valley after Rains – Rendezvous with Lush and Green Nature !</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                  <p>Rains are over; the beauty of Himachal Pradesh is blooming more than ever! So this autumn, if you are planning a break, no other place would refresh you like Tirthan Valley. Let us give you a glimpse of what awaits you in Tirthan –.....</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
          </article>

          <article className={`${styles.blogPost}`} >
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-do.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Rachita Saxena / </a></span>
                  <span className="post-date"><a href="#" title="September, 7 2018"> September, 7 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once" title="Tirthan Valley, A Secluded Paradise">Dos and Donts: Some Guidelines for Visiting Tirthan Valley</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <h3>Why Do We Need to Be Careful While Visiting Tirthan Valley?</h3>
								<p>Tirthan Valley is one of the few untouched places in India which is why it is still pristine and lovely to visit. There aren’t any dams made over the river and the locals take extreme care while interacting with their surroundings. This is why this place still has an abundance of flora and fauna and is home to many amazing wildlife creatures like bears, leopards, fishes, birds, etc.....</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
          </article>

        </div>
        

      <div className={styles.aside}>
        <article className="" >
              <div className="entry-cover">

              {/* <Link href="/blog/once" ><a><img src="/images/blog/8june-2.jpg" alt="blog-nature"/></a>
              </Link> */}
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/8june-2.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className="ok">
                <div className="entry-meta">
                  <div className="post-by">By <a href="#" title="Author"> Mr. Deepak Yadav</a></div>
                  <div className="post-date"><a href="#" title="November, 29 2019">  June, 6 2021</a></div>
                </div>
                <div className="entry-title">
                  {/* <h3><a href="tirthan-valley-a-secluded-paradise.php" title="Tirthan Valley, A Secluded Paradise">Tirthan Valley, A Secluded Paradise </a></h3> */}
                </div>
                <div className="entry-content">
                  <p>Tirthan Valley, concealed from the overcrowded tourism map is an ideal place to be. A short adventure trip, a longer time to spend with nature for rejuvenation post covid, or a time to study the grand flora and fauna of the Great Himalayan Park.....</p>
                </div>
                {/* <a href="tirthan-valley-a-secluded-paradise.php" title="Read More">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></a> */}
              </div>

          </article>

          
        </div>
      
      </div>
    </>
  );
}
