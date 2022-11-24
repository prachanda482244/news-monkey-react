import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);

        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `NewsMonkey - ${capitalizeFirstLetter(props.category)}`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    // const handlePrevClick = async () => {
    // setPage(page-1)
    //     updateNews();
    // }

    // const handleNextClick = async () => {
    // setPage(page + 1);
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    let { color } = props;
    return (
        <>
            <h2 className=" text-center" style={{ marginTop: '70px' }}>NewsMonkey - Top  {props.category} headlines</h2>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            > <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ''} description={element.description ? element.description : ''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} color={color} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* Buttons */}
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} className='btn btn-dark'>&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} onClick={this.handleNextClick} className='btn btn-dark'>Next &rarr;</button>
                </div> */}

        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general',
    color: 'primary'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    color: PropTypes.string
}

export default News