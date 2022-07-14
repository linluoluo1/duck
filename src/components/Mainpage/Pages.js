import React from 'react';
import './Pages.css'
import {Carousel} from './Carousel';

const Pages = () => {
    return (
        <Carousel>
            <div className='article article1'>
            <article className='first-story-article'>
                        <h2 className='article-title'> Fancy-free Potrugal</h2>
                        <div className='img-wrapper'>
                            <img className=' photo photo-first-story' src={require("../img/Portuga.jfif")}
                                alt='volcanoimg' />
                        </div>
                        <p>
                            My first travel was something amazing t is
                            a long established fact that a reader will
                            be distracted by the readable content of
                            a page when looking at its layout. The
                            point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution
                            of letters, as opposed to using 'Content
                            here, content here', making it look
                            like readable English.
                        </p>
                     </article>
            </div>
            <div className='article article1'>
            <article className='second-story-article'>
                        <h2 className='article-title'> Mysterious Japan</h2>
                        <div className='img-wrapper'>
                            <img className=' photo photo-second-story' src={require("../img/Japan.jpg")}
                                alt='volcanoimg' />
                        </div>
                        <p>
                            My second travel was something amazing t is
                            a long established fact that a reader will
                            be distracted by the readable content of
                            a page when looking at its layout. The
                            point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution
                            of letters, as opposed to using 'Content
                            here, content here', making it look
                            like readable English.
                        </p>
                  
                    </article>
            </div>
            <div className='article article1'>
            <article className='third-story-article'>
                        <h2 className='article-title'> Romantic Italy</h2>
                        <div className='img-wrapper'>
                            <img className='photo photo-third-story' src={require("../img/Italy.webp")}
                                alt='volcanoimg' />
                        </div>
                        <p>
                            My first travel was something amazing t is
                            a long established fact that a reader will
                            be distracted by the readable content of
                            a page when looking at its layout. The
                            point of using Lorem Ipsum is that it
                            has a more-or-less normal distribution
                            of letters, as opposed to using 'Content
                            here, content here', making it look
                            like readable English.
                        </p>
                     
                    </article>
            </div>
        </ Carousel>
    )
}

export default Pages
