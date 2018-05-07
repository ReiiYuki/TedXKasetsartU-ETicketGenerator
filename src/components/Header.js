import Logo from 'TEDWhiteLogo.png'
import React from 'react'

export default () => (
    <section className='hero is-black'>
        <div className='hero-body'>
            <div className='container'>
                <div className='columns'>
                    <div className='column is-one-third'>
                        <img src={Logo} alt='TedXKasetsartU' />
                    </div>
                    <div className='column'>
                        <h2 className='subtitle'>
                            E-Ticket Generator
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
