import React from 'react'
import Link from "next/dist/client/link";
import NavBar from "../../components/NavBar";
import Carousel from "react-bootstrap/Carousel"
import styled from "../../styles/Blog.module.scss"
import styles from "../../styles/BlogContent.module.scss"

export default function Once() {
    return (
        <>
            <NavBar />
            <div className="container blog blogpost">

                {/* <article className="type-post">
                    <div class="meta">
                        <div class="post-by"> By <a href="#" title="Admin"> Mr. Deepak Yadav</a></div>
                        <div class="post-date"><a href="#" title="June 6, 2021"> June 6, 2021</a></div>
                    </div>
                    <div class="title">
                        <h3>Tirthan Valley, tooooA Secluded Paradise. </h3>
                    </div>

                </article> */}

                <div className={styles.heading}>
                <div className={styled.entryMeta}>
                  <span className="post-by"><a href="#" title="Author"> Dr Anu Sehgal / </a></span>
                  <span className="post-date"><a href="#" title="March 19, 2018">  March 19, 2018</a></span>
                  <div className={styled.entryTitle}>
                  <h3>Nature's Lap Resort</h3>
                </div>
                <div className={styled.deco}></div>
                </div>
                </div>
                <div className={styles.contentFlexl}>
                    <img className={styles.image} src="/images/blogContent/8june-1.jpg" alt="blog1"></img>
                    <p className={styles.pright}>Tirthan Valley, concealed from the overcrowded tourism map is an ideal place to be. A short adventure trip, a longer time to spend with nature for rejuvenation post covid, or a time to study the grand flora and fauna of the Great Himalayan Park. It's also a place to know each other, just after marriage or after a long covid separation. It has many jewels to offer for every kind of visitor including a solo lady as it is almost crime free. The smell of earth, of wild flowers in spring and summer and woody in the monsoons and autumn will mesmerise you. White snow in winters is for those who dare the cold weather.<br/><br/>A long scenic drive on the Chandigarh-Manali highway and then taking a turn from Aut one lands next to the music of the clear water river Tirthan and its many streams flowing over stones. Tweets and whistles of mountain birds add more notes to this sonnets. Thick green forests of tall oak, deodhar, cedar and pine trees stand guard welcoming every tourist. Such is the magic, that once a person comes here, one remains captivated.</p>
                </div>
                <div className={styles.contentFlexr}>
                    <p className={styles.pleft}>Most of us are, by now, mentally tired of covid and lockdowns. Of masks and the madness of figures of disease and death. Some doctors are calling it Post Pandemic Stress Disorder. Even of the cities reopen, there will be smoke, dust, pollution, heat and humidity. Even our neighbourhood parks, picnic spots will remain over crowded for a long long time. The only birds we see are crows, pigeons and mynahs, even tge sparrows have deserted us. We are afraid to eat vegetables and salads fearing that these have been grown using polluted water.
                    <br/><br/>
                    Stress not, make reservations and head straight for Tirthan Valley. To a resort where you can drive your car or motorbike right upto the door step. The small hamlet of Jibhi provides home grown vegetables. Orchards nearby provide apples, apricots, peaches, pear, plums and hill lemon. Incidentally, the hill lemon or galgal, is great for pickles with lot of vitamin C. One can walk in to an orchard for an added nature activity. Those interested in fishing can easily obtain a token and catch fresh water trout.</p>
                    <img className={styles.image} src="/images/blogContent/8june-2.jpg" alt="blog1"></img>
                </div>
                <div className={styles.contentFlexl}>
                    <img className={styles.image} src="/images/blogContent/8june-3.jpg" alt="blog1"></img>
                    <p className={styles.pright}>For the senior citizens and those who seek mental peace, they can do yoga bang next to the river on the grassy plains.
                    Nearby are water falls and cute wooden bridges over streams for lazy afternoon picnics. The more adventurous can go to the Jalori pass, Sirolsar lake or take numerous other treks. Same with mountain bikers. Amateur photographers can run riot with amazing photographs. May it be the orange sunsets or misty mountains and majestic trees. The budding ornithologists can view many beautiful birds if they have patience. Botanists, graduate or doctoral can stay put for weeks together and keep discovering new things.
                    So take some time off and make your bookings to this heavenly place and have the time of your life.</p>
                </div>    
                <div className="carousel" style={{"text-align": "center"}}>
                <Carousel fade indicators={false} interval={2000}>
                    <Carousel.Item>
                        <img
                            className={styles.carouselDim}
                            src="/images/blogContent/8june-5.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={styles.carouselDim}
                            src="/images/blogContent/8june-6.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={styles.carouselDim}
                            src="/images/blogContent/8june-7.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className={styles.blogEnd}>
                    <p style={{"text-align":"justify"}}><h4>How to reach Tirthan Valley</h4><br/> The best way to reach Tirthan Valley, especially from Delhi, is to come via road. You will end up enjoying the views on your way and the drive will turn out more beautiful than you imagined. You can also take a train up to Kiratpur and then book a cab to reach Tirthan Valler. Those who prefer air travel can come till Bhuntar which is 2 hours drive from Tirthan valley. So, if you have already starting searching Google to plan your Tirthan Valley vacation, the easiest way to do is just visit <Link href="https://www.tirthanvalleystay.com"><span style={{"color": "#71bf44"}}><strong>www.tirthanvalleystay.com</strong></span></Link> or <Link href="https://wa.me/+919888334809"><a><img  style={{"vertical-align": "sub"}} src="/images/logos/whatsapp.png" alt="whatsapp_logo" width="20" height="20"></img></a></Link> <strong>+91-9888334809</strong> It is here you will find best ideas, stay options and touristy guidelines for Tirthan Valley.</p>
                    <img className={styles.imageAuthor} src="/images/blogContent/maj.jpg" alt="blog1"></img>
                    <p className={styles.authorCaption}>Writer – Maj. Gen Krishan Chauhan (Retd)</p>
                </div>
                <div className={styles.booknow}>
                    <button onClick={""}>BOOK NOW</button>
                </div>
            </div>
        </>

    )
}
