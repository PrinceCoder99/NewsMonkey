import React from 'react'
import noimg from './noimg.png'

const NewsItem = (props) => {
    let { title, description, imageUrl, url, author, date, source } = props;
    return (
      <div>
        <div className="card">
          <div style={{ right: '0', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span className="badge rounded-pill bg-danger" style={{ Index: '1', left: "90%" }}>
              {source}
            </span>
          </div>
          <img src={imageUrl ? imageUrl : noimg} className="card-img-top" alt="newsImage" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text" ><small className="text-body-secondary">By {author ? author : 'unknown'} at {new Date(date).toDateString()}</small></p>
            <a href={url} rel="noreferrer" target='_blank' className="link link-primary">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem