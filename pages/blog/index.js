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
        <div className={styles.eachBlog}>
              <div className="entry-cover">
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
            </div>
          </article>
        
          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
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
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
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
              </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
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
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-himalaya.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Anand Kumar Jha / </a></span>
                  <span className="post-date"><a href="#" title="July 4, 2018"> July 4, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once" title="Tirthan Valley, A Secluded Paradise">Himalaya’s Best Kept Secret - Tirthan Valley</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p>Do you want a different and unique vacation? if yes, then <strong><Link href="http://www.tirthanvalleystay.com" alt="blog"> Tirthan Valley is the best choice </Link></strong> we have for you.
								This location can act as the perfect hideaway destination at more than 1600 meters above the sea level.
								It gives you the best and most needed break from your daily chaos. Tirthan is a good option not only <strong><Link href="http://www.tirthanvalleystay.com/camping" alt="blog"> for an
								adventure seeker  </Link></strong> </p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-explore.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Anand Kumar Jha / </a></span>
                  <span className="post-date"><a href="#" title="June 26, 2018"> June 26, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Explore Tirthan Valley - Places to Visit in Tirthan Valley</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p>To make the most out of this <strong>offbeat Himachal holiday destination ,<Link href="http://www.tirthanvalleystay.com/ghnp" alt="blog">here is a list of places to visit in Tirthan Valley.</Link> </strong></p>

								<p>There is no doubt that the state of Himachal Pradesh is one of the most beautiful states in India.
								It is the topmost destination for summer getaway destinations. However, most people limit their visit to  <strong><i>popular destinations
								such as Shimla and Manali , </i> </strong> While these destinations are great, they are extremely crowded in summers. If you’re looking for a holiday that is quieter and a step closer to nature than popular holiday destinations, then Tirthan Valley is the destination for you...</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>
          
          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-trek.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Anand Kumar Jha / </a></span>
                  <span className="post-date"><a href="#" title="June 18, 2018">  June 18, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Best Packages for Trekking in Indian Himalayas</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p>Want to have fun this vacation?
								<Link href="http://www.tirthanvalleystay.com/trekking" alt="blog">Trekking is undoubtedly</Link>
								one of the most refreshing adventurous activity that the youth of this generation prefer. It is a ride into the
								<Link href="http://www.tirthanvalleystay.com" alt="blog">laps of Mother Nature </Link>  to escape from the heat of mechanical life...</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>
          
          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-camp.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr. Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="June 1, 2018">  June 1, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Staying in Tirthan Holiday Camp & Cottages: A lifetime experience</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p>No more ordinary destination this vacation – If this is the goal, you must read this article to know more about the quaint charm of <Link href="http://www.tirthanvalleystay.com" alt="blog">Tirthan Valley</Link> and an incredible experience of <strong>staying in Holiday Camp & Cottages </strong>...</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-10.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr. Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="May 8, 2018">  May 22, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Why should you plan Tirthan Valley trip in May and June ?</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p>The scorching summers are here in north India and kids are demanding a holiday in hills. As you finally decide to take this long overdue trip; would you like to know more about popular hill stations in Himachal Pradesh or best summer vacation hill stations? Or are you a different kind of traveler and wish to explore a virgin destination of Himachal to enjoy the best summer vacation trip in Himachal Pradesh sans noise and crowd...</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-9.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr. Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="May 8, 2018">  May 8, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">This summer, explore the unexplored places in Himachal Pradesh!</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p>If you are one person who says a big No-No to CROWD and LOUD kind of touristy; head for <strong>the unexplored places in Himachal Pradesh.</strong>Think Offbeat; Think Himachal. Nowhere else in the world will you find such amazing and unique experiences that will spellbind and enthrall you as in Himachal...</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/7-best.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr. Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="May 1, 2018">  May 1, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">7 Best places to stay in Tirthan valley</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p><strong><Link href="http://www.tirthanvalleystay.com">Tirthan Valley</Link></strong> is one of the magical destinations where every nature lover wants to go once in a lifetime. There are various <strong><Link href="http://www.tirthanvalleystay.com/wheretostay"> best places to stay in Tirthan Valley</Link></strong>. You can get a number of hotels and camps but amongstall these best places to stay in Tirthan Valley, the best option for your stay would be the Homestays..</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-26.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr. Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="April 26, 2018">  April 26, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Let Tirthan Valley Stay team plan your escape.</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
								<p>Rare would be a travel-enthusiast who doesn’t dream of or hasn’t already done Himachal Pradesh’s quaint towns and villages! Himachal Pradesh is no less than Mecca for Nature-travellers. Where else on this earth you will find larger-than- life snow-covered peaks perfectly complimented by green valleys and gushing rivers..</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/jibhi-blog.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr. Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="April 20, 2018">  April 20, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Whatever kind of traveller you are: Jibhi is meant for you!</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p>A virgin destination of Himachal Pradesh, Jibhi is a beautiful, slow and sleepy perfect retreat – a place where you would want to go to forget your chaotic life and enjoy some lazy lamhe.
                Blessed with natural beauty, Jibhi is more than just green expanses and fantastical views. It has something for everyone</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/trout-blog.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr. Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="April 20, 2018">  April 20, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Trout Fishing lovers - Tirthan Valley is calling !</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
								<p>If you seek an adventure of a lifetime, and an escape that rejuvenates you, trout fishing at Tirthan Valley is for you. Tirthan Valley is an exotic spot that is untouched by commercialization and all the hoopla that surrounds other hill stations. If you want a peaceful fishing experience, this spot is for you. </p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-4th.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Pooja Bhagat / </a></span>
                  <span className="post-date"><a href="#" title="April 3, 2018">  April 3, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">5 Things to Know About Tirthan Valley</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
								<p>Craving for a getaway? Then Tirthan Valley is just the place for you. The things you can do, the places you can explore and the rejuvenation you will get at this beautiful place in Himachal Pradesh will definitely leave you with some happy, lifelong memories.</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-3rd.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Pooja Bhagat / </a></span>
                  <span className="post-date"><a href="#" title="April 2, 2018">  April 2, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">3-Day Itinerary For Exploring Tirthan Valley</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
								<p>Craving for a getaway? Then Tirthan Valley is just the place for you. The things you can do, the places you can explore and the rejuvenation you will get at this beautiful place in Himachal Pradesh will definitely leave you with some happy, lifelong memories.</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog-nature.jpg" alt="blog-nature"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="March 27, 2018">  March 27, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Make your holidays unique with Homestay experience in Tirthan Valley</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
								<p>The state of snow-clad hills and apple orchids, Himachal Pradesh, is also well-reckoned for its warm and hospitable people who will win your heart with their simple yet so very special ways. This summer, treat yourself to an exotic experience in Tirthan Valley’s HOMESTAY options; that end up giving you the best vacations of your life !</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blog1.jpg" alt="blog1"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="March 19, 2018">  March 19, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Tirthan Vallley is where you should head to this summer !</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p><strong>This summer, ditch the crowd, rush and mundane… choose to holiday in a unique manner!</strong><br/>If crowded hill stations like Manali and Mussorie are not your idea of an ideal vacation, Tirthan Valley is where you should head to. Why ? One simple reason – It is one of those virgin places of Himachal where you can revel and relax in the enormous and welcoming wealth of nature...</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/blogpost-why6.jpg" alt="blog1"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="March 19, 2018">  March 19, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Why Your First Trip Of 2019 should be to Tirthan Valley?</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p><strong><br/>The New Year begins and many of you must have written your travelling goals.</strong> After all, the everyday work and responsibility pressure calls for leaving your precious desktop
                  for a few days and head to the hills. Let us suggest you a perfect place to begin your Wanderlust for 2019 – Tirthan Valley....</p>                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/gonefishing2.jpg" alt="blog1"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="March 19, 2018">  March 19, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">GONE FISHING COTTAGE – YOUR HOME AWAY FROM HOME</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
								<p><br/>Few places stay engraved on your soul once you have visited them. One such place the Gone Fishing Cottage, located on the bank of Kalwari stream, which joins up with the Tirthan River....</p>                
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/solo4.jpg" alt="blog1"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="March 19, 2018">  March 19, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">PLAN YOUR SOLO TRAVEL TO TIRTHAN VALLEY</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p><b></b><br/>There’s something very enticing about the mere concept of travelling to an unknown place all 
								by yourself. Exploring new places and new things can be intimidating, but, it’s an adventure worth risking 
								your comfort for. Interestingly,  has always been one of the many wishes on everyone’s bucket list and women,
								especially, are breaking the stereotypes and....</p>
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
            </div>
          </article>

          <article className={`${styles.blogPost}`} >
          <div className={styles.eachBlog}>
              <div className="entry-cover">
              <Link href="/blog/once" ><a><img className={`${styles.blogImg}`} src="/images/blog/naturelap2.jpg" alt="blog1"/></a>
              </Link>
              </div>
              <div className={styles.entryContentBlock}>
                <div className={styles.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="March 19, 2018">  March 19, 2018</a></span>
                </div>
                <div className={styles.entryTitle}>
                  <h3><Link href="/blog/once">Nature's Lap Resort</Link></h3>
                </div>
                <div className={styles.deco}></div>
                <div className={styles.entryContent}>
                <p><br/>Wouldn't it be great to escape to a place, once in a while, which feels straight out of fairy tale? A place 
								named Jibhi fits perfectly to these details! Jibhi, a place in Tirthan Valley is a scenic hamlet sculpted unequivocally to 
								make your fairy tale come true. Just an overnight drive from Delhi or Jalandhar or Chandigarh, you would cross the small town 
								of Aut, and there it is – Paradise.....</p>                
                </div>
                <button className={styles.readMore} ><Link href="/blog/once" title="Read More">Read More </Link></button>
              </div>
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
                <p><strong><Link href="http://www.tirthanvalleystay.com">Tirthan Valley</Link></strong> is one of the magical destinations where every nature lover wants to go once in a lifetime. There are various <strong><Link href="http://www.tirthanvalleystay.com/wheretostay"> best places to stay in Tirthan Valley</Link></strong>. You can get a number of hotels and camps but amongstall these best places to stay in Tirthan Valley, the best option for your stay would be the Homestays..</p>
                </div>
                {/* <a href="tirthan-valley-a-secluded-paradise.php" title="Read More">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></a> */}
              </div>

          </article>

          
        </div>
      
      </div>
    </>
  );
}
