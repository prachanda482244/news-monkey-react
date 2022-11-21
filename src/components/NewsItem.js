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
                        <div className='d-flex  justify-content-end position-absolute end-0'>

                            <span className={` badge rounded-pill bg-${color}`}>
                                {source}
                            </span>
                        </div>
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
