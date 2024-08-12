import React from 'react'
import Card from './Card'

export const Home = () => {
    return (
        <div>
            <div>
                <img className="img" src="./assets/img2.jpg" alt="img"></img>

                <h1 className="text" >New Journey, New Story</h1>
                <h2 className="text1"> Choose your favorite destination</h2>

                <button className="btnexp" >Explore</button>


            </div>

            <div className="div">
                <h1 className="pop">Popular Destinations</h1>
                <h5 className="h5">Tours give you the opportunity to see a lot, within a time frame

                </h5>
            </div>

            {/* text */}
            <div className="travel">
                <h1 className="h1">Shree Somnath Jyotirling Temple</h1>
                <h3 className="class">The Somnath temple, also called Somanātha temple or Deo Patan, is a Hindu temple located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites for Hindus and is believed to be first among the twelve jyotirlinga shrines of Shiva. It is unclear when the first version of the Somnath temple was built with estimates varying between the early centuries of the 1st-millennium to about the 9th-century CE.</h3>
                {/* img */}
                <div className="t-img">
                    <img className="img-side" src="./assets/img-t.png" alt="img"></img>
                </div>
            </div>

            <div className="travel1">
                <h1 className="h2">Taj Mahal</h1>
                <h3 className="class1">The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year, while giving birth to their 14th child, Gauhara Begum. Construction started in 1632,and the mausoleum was completed in 1648, while the surrounding buildings and garden were finished five years later. The imperial court documenting Shah Jahan's grief after the death of Mumtaz Mahal illustrates the love story held as the inspiration for the Taj Mahal.

                </h3>
                {/* img */}
                <div className="t-img1">
                    <img className="img-side1" src="./assets/img-ttt.png" alt="img"></img>
                </div>
            </div>


        











        <Card/>
       
       
        </div>

    )
}
export default Home
