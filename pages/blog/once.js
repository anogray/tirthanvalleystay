import React from 'react'
import NavBar from "../../components/NavBar";

export default function Once() {
    return (
    <>
        <NavBar/>
        <div className="container blog blogpost">

            <article className="type-post">
                <div class="meta">
                    <div class="post-by"> By <a href="#" title="Admin"> Mr. Deepak Yadav</a></div>
                    <div class="post-date"><a href="#" title="June 6, 2021"> June 6, 2021</a></div>
                </div>
                <div class="title">
                    <h3>Tirthan Valley, tooooA Secluded Paradise. </h3>
                </div>

            </article>
        </div>
    </>

    )
}
