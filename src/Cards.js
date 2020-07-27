import React from 'react';
import Loader from 'react-loader-spinner'
import './Cards.css'

function Cards(props) {
        const observer = new MutationObserver(props.onKeywordChange)
        const keyword = document.getElementsByClassName(' _6YOLH _1JtW7 _2VF_A _2OMMP')[0]
        observer.observe(keyword, {
            childList: true
        })

        const items = props.filteredSize
        const isLoaded = props.loaded

        function color(cos){
            if(cos < 0.3){
                return " red"
            }
            if (cos < .6){
                return " yellow"
            }
            else {
                return ""
            }
        }

        function titleLeng (title) {
            if (title.length > 23){
                return title.substring(0, 20) + "..."
            }
            return title
        }

        if (!isLoaded)
        return(
            <div className="loaderContainer">
            <Loader type="ThreeDots" color="#021135" height={50} width={50}/>
            </div>
        );
      
        return (
            <div className="card-container">
            <div>Results for: {props.search}</div>
            {items.map(item => (
                <div className="card">
                <div className={"color" + color(item.cosine_val)}></div>
                <img className="prod_image" alt="Nothing found :(" src={item.image}></img>
                <div className="prod_info">
                    <div className="row"><h1 id="title">{titleLeng(item.title)}</h1></div>
                    <div className="row"><p>{item.category}</p></div>
                    <div className="row"><p>Size: {" " + item.size}</p></div>
                    <div className="row">
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn"><p id="white">Buy ${item.price}0</p></a>
                        <div className="seller-container">
                            <p id="seller">Poshmark</p>
                        </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        
        );

}


export default Cards;