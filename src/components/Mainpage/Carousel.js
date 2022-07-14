import React, { cloneElement } from 'react';
import './Carousel.css'
import { useState, useEffect, Children } from 'react';

const pageWidth = 685;
export const Carousel = ({children}) => {
    const [pages, setPages] = useState([])

    useEffect(() => {

        

        setPages(

            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${pageWidth}px`,
                        maxWidth: `${pageWidth}px`,
                    }
                })
            })
        )
    }, [children])

  return (
    <div className='mainContainer'>
      <div className='window'>
        <div className='allArticles'> {children}</div>
      </div>
    </div>
  )
  }
