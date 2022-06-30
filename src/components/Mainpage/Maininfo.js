import React from 'react';
import maininfocss from './Maininfo.module.css';
import Pages from './Pages'

function Maininfo() {
    return (
        <>
            <div className={maininfocss.headerWrapper}>
                <h1 className={maininfocss.headerH1}> Let it go</h1>
            </div>
            <main className='main-content'>
            <Pages />
               
            </main>
        </>
    )
}

export default Maininfo;
