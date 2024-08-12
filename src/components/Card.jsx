import React from 'react';

const Card = () => {
  return (
   
    <div>
        <h1 className = "card-texth1">Recent Trips</h1>
          <h3 className = "card-texth3">The previous Destinations we visited</h3>
        <div className='container2'>
        <div className="card" >
        <img src="./assets/Assam1.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Trip to Assam</h5>
          <p className="card-text">Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. In the west, Guwahati, Assam’s largest city, features silk bazaars and the hilltop Kamakhya Temple. Umananda Temple sits on Peacock Island in the Brahmaputra river.</p>
    
        </div>
      </div>

      <div className="card" >
        <img className="card-img-top" src="./assets/varanasi.jpeg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Trip to Varanasi</h5>
          <p className="card-text">Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites.Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva.</p>
        </div>
      </div>

      <div className="card" >
        <img src="./assets/srinagar.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Trip to Srinagar</h5>
          <p className="card-text">Srinagar is called the city of lakes and the Venice of the East, fascinating tourists from centuries with its beautiful picturesque Himalayan backdrop, glittering lakes that are surrounded by houseboats and Shikaras and the majesty of Mughal architecture.</p>
        </div>
      </div>
      </div>
        
      
    </div>
  );
}

export default Card;