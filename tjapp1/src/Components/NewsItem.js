import React, { Component } from 'react'

export default class NewsItem extends Component {
 
  render() {
    let {title,description,img  ,url,author,time,source}=this.props; 
    return (
<div className={"card bg-"+this.props.mode+" text-"+this.props.mode1} >

  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
  <span className="badge badge-danger text-light bg-danger">{source}</span>

    <p className="card-text">{description}</p>
    <p className="card-text">By {author} At {new Date(time).toGMTString().replace("GMT","")}</p>
    <a href={url} target="_blank" className={"btn btn btn-"+this.props.mode1}>Read More</a>
  </div>

</div>
    )
  }
}
