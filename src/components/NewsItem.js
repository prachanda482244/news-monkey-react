import React, { Component } from 'react'
// import Spinner from './Spinner';
export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source, color } = this.props;
        return (

            <>
                {/*{this.state.loading && <Spinner />}{!this.state.loading} */}
                <div className='my-2' >
                    <div className="card" >
                        <span className={`position-absolute top-0  translate-middle badge rounded-pill bg-${color}`} style={{ left: '90%', zIndex: 1 }}>
                            {source}
                        </span>
                        <img src={!imageUrl ? 'https://images.indianexpress.com/2022/11/Kabul-trade-via-Dubai.jpg' : imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description} </p>
                            <p className="card-text"><small className={`text-${color}`}>By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
