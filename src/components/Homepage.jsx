// import React from 'react'
import './Homepage.css'
import Card from './fragments/card'

function Homepage() {
  return (
    <body>
      <header>
        <nav className="firstNav">
          <p>
            Sign up and get 20% off to your first order{" "}
            <a href="#">Sign up now</a>
          </p>
        </nav>
        <nav className="secondNav">
          <h1 className="logo">
            Timbu<span>Med</span>
          </h1>
          <div className="firstLinks">
            <a href="">
              Categories
              <span>
                <box-icon name="chevron-down"></box-icon>
              </span>
            </a>
            <a href="">Vendors</a>
            <a href="">New arrivals</a>
            <a href="">About us</a>
            <a href="">Contact us</a>
          </div>
          <div className="searchBox">
            <box-icon name="search"></box-icon>
            <input type="text" />
          </div>
          <div className="lastLinks">
            <box-icon name="shopping-bag"></box-icon>
            <div>
              <box-icon name="user-circle"></box-icon>
              <a href="">Hi Joshua</a>
              <box-icon name="chevron-down"></box-icon>
            </div>
            <div>
              <box-icon name="help-circle"></box-icon>
              <a href="">Help</a>
              <box-icon name="chevron-down"></box-icon>
            </div>
            <box-icon name="cart"></box-icon>
          </div>
        </nav>

        <div className="path">
            <p>
            Home / Categories /<span> Medicine</span>
            </p>
        </div>
        <div className="path-hero">
            <h1>Medicine</h1>
        </div>
      </header>
      <main>
        <article className='filterProducts'>
            <aside>
                <div className='filterHead'>
                    <p>Filters</p>
                    <box-icon name='slider-alt' color='#A7A2A2'rotate='90' ></box-icon>
                </div>
                <hr/>
                <div className='pricing'>
                    <p>Price <span><box-icon name="chevron-up" color='#DC1250'></box-icon></span></p>
                    <div className="range-input"> 
                        <input type="range" 
                            className="min-range" 
                            min="0" 
                            max="10000"
                            value= "200" 
                            step="1"/>  
                    </div> 
                </div>

                <hr/>
                <div className="subcategories">
                    <p>Sub-categories<span><box-icon color='#DC1250' name="chevron-up"></box-icon></span></p>
                    <div className='checks'>
                        <span>
                            Antimalarial
                            <input type='checkbox' id='check' />
                        </span>
                        <span>
                            Nutrition
                            <input type='checkbox' id='check' />
                        </span>
                        <span>
                            Metabolism
                            <input type='checkbox' id='check' />
                        </span>
                        <span>
                            First Aid
                            <input type='checkbox' id='check' />
                        </span>
                        <span>
                            Surgical
                            <input type='checkbox' id='check' />
                        </span>
                        <span>
                            Multivitamins
                            <input type='checkbox' id='check' />
                        </span>
                        <span>
                            Diagnostic
                            <input type='checkbox' id='check' />
                        </span>
                        <span>
                            Supplements
                            <input type='checkbox' id='check' />
                        </span>
                        <span>
                            CVS
                            <input type='checkbox' id='check' />
                        </span>
                        <span>
                            HPT
                            <input type='checkbox' id='check' />
                        </span>
                    </div>

                </div>
                <button className='filterButton'>
                    Apply Filter
                </button>
  
            </aside>

            <article className='product'>
                <section className='productNav'>
                    <div className='nav-left'>
                        <span id='filter'>
                          <box-icon name='slider-alt' ></box-icon>
                          <p>Filter</p>
                        </span>
                        <box-icon type='solid' name='grid-alt'></box-icon>
                        <box-icon name='card'></box-icon>
                        <div className='vertical-line'></div>
                        <p>Showing 1-16 of 32 results</p>

                    </div>
                    <div className='nav-right'>
                        <span id='span-one'>
                          <p>Show</p>
                          <p>9</p>
                        </span>
                        <span id='span-two'>
                          <p>Sort by:</p>
                          <p>Most Popular </p>
                          <box-icon name="chevron-down" color='#DC1250'></box-icon>
                        </span>
                    </div>
                </section>
                <section className='cards'>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                </section>

                <section className='pagination'>
                  <div className='previous'>
                    <box-icon name='chevron-left' ></box-icon>
                    <p>Previous</p>
                  </div>
                  <div className='pages'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>...</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                  </div>
                  <div className='next'>
                    <p>Next</p>
                    <box-icon name='chevron-right' ></box-icon>
                    
                  </div>

                </section>
            </article>


        </article>
      </main>
    </body>
  )
}

export default Homepage