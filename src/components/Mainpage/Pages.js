import React from 'react';
import './Pages.css'

function Pages() {
  return (
  <>
    <div className='wrapper-container'>
     <div className='article-wrapper article-wrapper-1' >
                    <article className='first-story-article'>
                        <h2 className='article-title'> Fancy-free Potrugal</h2>
                        <div className='img-wrapper'>
                            <img className='photo-first-story' src={require("../img/Portuga.jfif")}
                                alt='volcanoimg' width='685' height='540' />
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
                        <button className='btn'>
                            <a href='/'>Full story</a>
                        </button>
                    </article>
                </div>

                <div className='article-wrapper article-wrapper-2'>
                    <article className='second-story-article'>
                        <h2 className='article-title'> Mysterious Japan</h2>
                        <div className='img-wrapper'>
                            <img className='photo-second-story' src={require("../img/Japan.jpg")}
                                alt='volcanoimg' width='685' height='540' />
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
                        <button className='btn'>
                            <a href='/'>Full story</a>
                        </button>
                    </article>
                </div>

                <div className='article-wrapper article-wrapper-3'>
                    <article className='third-story-article'>
                        <h2 className='article-title'> Romantic Italy</h2>
                        <div className='img-wrapper'>
                            <img className='photo-third-story' src={require("../img/Italy.webp")}
                                alt='volcanoimg' width='685' height='540' />
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
                        <button className='btn'>
                            <a href='/'>Full story</a>
                        </button>
                    </article>
                </div>
    </div>
  </>
  )
}

export default Pages
