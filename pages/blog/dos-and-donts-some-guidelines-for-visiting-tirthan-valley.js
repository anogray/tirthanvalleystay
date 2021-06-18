import React from 'react'
import Link from "next/dist/client/link";
import NavBar from "../../components/NavBar";
import Carousel from "react-bootstrap/Carousel"
import styled from "../../styles/Blog.module.scss"
import styles from "../../styles/BlogContent.module.scss"
import Head from 'next/head'

export default function Once() {
    return (
        <>
        <Head>
        <title>Guidelines in Tirthan Valley https://tirthanvalleystay.vercel.app/ </title>
        <meta name="description" content="DOS AND DONTS: SOME GUIDELINES FOR VISITING TIRTHAN VALLEY" />
        <meta property="og:title" content="Guidelines in Tirthan Valley https://tirthanvalleystay.vercel.app/" />
        <meta property="og:description" content="Come to my store for great apparel!" />
        <meta property="og:url" content="https://tirthanvalleystay.vercel.app/" />
      </Head>
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
                  <span className="post-by"><a href="#" title="Author"> Rachita Saxena / </a></span>
                  <span className="post-date"><a href="#" title="September, 7 2018">  September, 7 2018</a></span>
                  <div className={styled.entryTitle}>
                  <h3>Dos and Donts: Some Guidelines for Visiting Tirthan Valley</h3>
                </div>
                <div className={styled.deco}></div>
                </div>
                </div>
                <div className={styles.contentFlexl}>
                    <img className={styles.image} src="/images/blogContent/blog-himalaya1.jpg" alt="blog1"></img>
                    <div className="para">
                    <h3 className={styles.para}>Why Do We Need to Be Careful While Visiting Tirthan Valley?</h3>
                    <p className={styles.pright}>
                        <p>Tirthan Valley is one of the few untouched places in India which is why it is still pristine and lovely to visit. There aren’t any dams made over the river and the locals take extreme care while interacting with their surroundings. This is why this place still has an abundance of flora and fauna and is home to many amazing wildlife creatures like bears, leopards, fishes, birds, etc.</p>
                        <p>They practice ecotourism here to ensure that the travelers can really, truly enjoy an authentic experience here while protecting the valley at the same time.
                        Due to the effort of the locals, Tirthan Valley is relatively clean and not as polluted or crowded as a few other cities/towns in Himachal Pradesh. This is why it is important that we, as responsible travelers, make sure that we don’t disturb this delicate balance.</p>
                        <p>We need to remember that nature is here to let us experience its beauty and abundance. So, it is important that we take measures to keep it intact when we are exploring the lands of this gorgeous place. If we don’t, then soon this place will be turned into other crowded touristy places as well and will lose its unique charm and magic.</p>
                        <h3 style={{"color": "#44a64d"}}>Things to Avoid When Visiting Tirthan Valley</h3>
                        <p>A few things that you should definitely avoid doing here are as follows:</p>
                        <h4 >Don’t Come to Get High Here</h4>
                        <p>Let’s face it, a lot of us often head towards the mountains when we feel like having a party and loosen up a little. And, 
                        while having fun is good, smoking up and getting high in the mountains is not only stupid but downright dangerous.
                        You could encounter several dangerous animals in your high state and get injured. Or, you could create a ruckus and 
                        disrupt the quietness and sanctity of the valley.</p>
                    </p>
                    </div>
                </div>
                <div className={styles.alignpara}>
                    <p>Tirthan valley is a place where you can relax and meditate but it is not suitable for people who are looking to just get high. So, don’t come here with the mentality to get high on alcohol or drugs, instead come here to get high on life itself.</p>
                    <h4>Don’t Make a Lot of Noise While Staying in the Valley</h4>
                    <p>A lot of us who have lived in cities our whole lives are not accustomed to the quietness of the mountains. As a result, we often end up making a lot of noise. This can often scare away the fauna here and can also alarm the locals who live here.</p>
                    <p>So, please refrain from shouting or making too much noise while you are here. Instead, listen to the loud river sounds and revel in the beauty of the mountains.</p>
                    <h4>Don’t Use Plastic Bags</h4>
                    <p>One of the worst habits of us travelers is to purchase food products or items in plastic bags and then throw it on the roads. This is not a good habit, regardless of where you are, but this is particularly harmful to the valley. How?</p>
                    <p>Because when you throw away plastic bags, bottles, etc. while trekking, a lot of animals often end up chewing up this stuff. So, please avoid using any plastic bags or bottles. And if you do, then make sure you don’t throw it on the road and carry it back with you.</p>
                </div>

                <div className={styles.contentFlexr}>
                <div class="entry-cover">	
                    <h4>Don’t Go Alone for Trekking or Adventurous Activities</h4>
                    <div className={styles.alignpara}>
                    <p>We often think ourselves to be really experienced trekkers or travelers and might feel that solo trekking is a great idea. But, trust me; it is not wise, especially in this part of the valley. Because there are many animals living here, who prowl around the valley. So, you are putting yourself in grave danger when you are trekking or going out alone here.</p>
                    <p>Another reason why you should avoid going off alone is that there isn’t a network signal in a lot of areas. So, if you get injured or stuck somewhere, no one would know how and where to find you. Also, always go in a small group and take a guide with you when going to explore off the area.</p>
                    <h4>Don’t Shout Near the River</h4>
                    <p>Now, this point might sound a little weird to you but there is a perfectly reasonable explanation for this. You see, the villages who stay near the river, often get alarmed when someone is shouting. They presume the person to be in danger. So, if you repeatedly shout or be loud near the river, the villages will be fooled into thinking that you need help.</p>
                    <p>If this happens repeatedly, then after some time they will ignore your noise, even if you actually need help. So, please avoid making too much noise near the river and just enjoy the river flow calmly and quietly.</p>
                    <h4>Don’t Persuade or Ask the Locals to Sell their Land/Business</h4>
                    <p>Tirthan valley is different from other popular spots in Himachal. How? Because there are barely any hotels or resorts constructed here. This is because locals opt to open local businesses, instead of selling their land to some stranger.</p>
                    <p>So, if you ask them to sell their land to you, it could really upset them.
                    Just enjoy your time in this small, pristine valley and don’t discuss any proposal for buying the land for them.</p>
                    </div>
                </div>
                    <img className={styles.image} src="/images/blogContent/blog-do-1.jpg" alt="blog1"></img>
                </div>
                
                <div className="entry-content">
                    <div className={styles.alignpara}>
                        <h4>Avoid Playing Loud Music in your Car</h4>
                        <p>
                        Yes, this one is an important point to remember. You might feel that playing music is not really harming anyone, but that is not true. You are disturbing the environment of the valley and also scaring away the animals and the birds which live here. Sure, you can play soft music while driving in the car but there is no need to play discotheque songs at a loud volume while traveling to this place.
                        </p>
                        <h4>Don’t Waste Water</h4>
                        
                        
                        <p>We all are already aware of the water scarcity that the country is facing, especially the hills. Recently, Dharamshala and Shimla faced a water shortage issue and there wasn’t water for the locals to use for their daily jobs too.</p>
                        <p>While Tirthan Valley isn’t facing any such issues right now, it is always better to be careful with your water usage. So, avoid water wastage at the place you stay and use it judiciously for your purpose.</p>
                        
                        <h3 style={{color: "#44a64d"}}>Things to Do When Visiting Tirthan Valley</h3>
                        <p>Here are a few things that you should consider doing when visiting this captivating valley, so as to make your trip more amazing.</p>
                        <h4>Help the Locals by Sharing their Stories</h4>
                        <p>Since Tirthan Valley is still not a popular tourist spot, a lot of people are hesitant to come here. This is good and you can help in keeping this place an offbeat place which offers a local Himachali experience to the travelers by spreading the stories. Interact with locals and learn what their vision is about this place. And then help them in any small way that you can.</p>
                        
                        <p>This is a great way to show your gratitude for the hospitality that they would be providing to you.</p>
                        <h4>Stay in Homestays for a Truly Authentic Experience</h4>
                        <p>As I said earlier, there are barely hotels or resorts in this area which is good for the local tourism. Instead, you will find here amazing homestays and camps which will provide you a truly rustic feel. There are a few places beside the riverside too so, you will surely enjoy your stay here.</p>
                        <p>The homestays and the camps are really homely and offer delicious food as well along with some amazing views. So, opt to stay in the homestays/camps for a true Himachali experience.</p>
                        
                        <h4>Give Plastic Bags/Bottles to your Homestay Owner</h4>
                        <p>While it is advisable to not use plastic bags or bottles, sometimes you mightn’t be able to help it. Don’t worry, you can still protect the valley by handing over the plastic items to your homestay owner once you return back to your room. All the homestay and shop owners collect the plastic items and other garbage every day. And then, they take it to the Kullu waste management system every week in a truck.</p>
                        <p>So, all you have to do is carry your waste back to the place you stay and hand it over to them. Rest, they will take care to make sure the valley stays clean. Sounds simple enough, right?</p>								
                        <h4>Drink Lots of Liquid While Trekking or Hiking</h4>
                        <p>Although Himachal tends to be cool for the most part, sunny days can be harsh and slightly energy draining. So, it is important that you take water with you to keep yourself hydrated. Avoid purchasing new water bottles; instead, fill the old plastic bottles with water. You can even ask the place you stay at to provide you with bottles so that you can take it with you on the trek.</p>
                        <p>But, don’t forget to bring the bottles back.</p>
                        
                        <h4>Be Careful while Bathing in the River</h4>
                        <p> Tirthan River is really cool and clear and makes an excellent place to take a bath and enjoy. However, it is important that you choose a lagoon area which would be safe to bathe in. The current is strong in many places and the rocks can be a little slippery. So, please be careful while bathing or swimming in it.</p>
                        
                        <p>Also, avoid going alone in the water and inform a few people when you are going into the river.</p>
                        <h4>Keep All the Emergency Contact Numbers for the Area</h4>
                        <p>Make sure that you have all the important numbers saved in your mobile. This will allow you to contact locals in case of any emergencies. Keep the local police number, medical facility number, TTDA number, etc.</p>								
                        <h4>Keep Your Homestay Owner Updated about your Plans</h4>
                        <p>And most importantly, let your homestay owner know about your plans. Tell them your schedule so that they would know to look for you, in case you go missing. Trust me, you don’t want to go exploring the valley without informing someone. Because, if any mishap happens, only the locals will be able to find you and help you out.</p>								
                        <blockquote>
                            <p>Traveling in the mountains is great but it is important that you are careful and responsible. Respect the mountains and they will return the favor.</p>	
                        </blockquote>
                    </div>
				</div>	
                
                <div className={styles.booknow}>
                    <button onClick={""}>BOOK NOW</button>
                </div>
            </div>
        </>

    )
}
