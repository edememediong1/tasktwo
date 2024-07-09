// import React from 'react'
import './card.css'

function Card() {
  return (
    <div className="card-container">
        <section className='upper-section'>
            <img src="https://s3-alpha-sig.figma.com/img/7a0b/f7dd/cc7d99e3b48181f0c247ba2affff32cf?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AKQ5RMgIxEIWLyEh~W5mzaL6T2zL1bpEqBvWtKTq1D9lvecEeLwgPTMu7bf9G92eIoQIFfXpEGls4DLMiE3y4Csz-C9A3yQdGYc3~JQ0Ro7L1zG1hJpySm4shc0oEFyVpgBiq3xBug8MY65jm2MkKjMMmjOAhHrItmnCLTqFaEua4CddsBZstTjySMd22v5MLsQj-jSjpr31bdmiU4MGShhAxEzYycR6L-1BdgVYLRKqUymd9hWLX9WiN4C9tQSPsEdrJemF7lhjst2Oi-8~5ifKj6-DGfEXL69J1TFVneQbtIKoHEHKxFV4wjADVSU6Q~3G4wg2hP1mrqTnrF4ODA__" alt="" />
        
            <p>-30%</p>
            <div>
                <box-icon name='heart'></box-icon>
            </div>
        </section>
        <section className='lower-section'>
            <div id='title'>
                <p>Cough Medication</p>
                <p>Medications</p>
            </div>
            <div id='price'>
                <p>NGN2500.00</p>
                <p>NGN3500.00</p>
            </div>
        </section>

    </div>
  )
}

export default Card