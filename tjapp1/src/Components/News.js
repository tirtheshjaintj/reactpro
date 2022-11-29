import React, { Component } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
    static defaultProps = {
    country:"in",
    total:8
  }
    constructor(props) {
        let articles=[];

        super(props);
        // console.log(articles.length); 
    this.state={articles:articles,loading:true,page:1,total:0};  
    }
  
   async componentDidMount(){
    
this.props.setProgress(10);
let url="https://newsapi.org/v2/top-headlines?country="+this.props.country+"&category="+this.props.category+"&apiKey=e07136dd4dac486390b93703cc195aad&pageSize="+this.props.total+"&page="+this.state.page;
let data =await fetch(url).then();
let parsedData= await data.json();
// let len= await parsedData.totalResults;
// console.log(parsedData);
// console.log(parsedData.articles);
// console.log(parsedData.totalResults);

this.setState({articles:parsedData.articles,loading:false,total:parsedData.totalResults});
// console.log(this.state.articles);
this.props.setProgress(100);

// setInterval(()=>{
//   if(this.state.loading){
//     document.querySelector("#spin").style.display="block";
//     }
//     else{
//     document.querySelector("#spin").style.display="none";
//     }
// },100);




        // let server =new XMLHttpRequest();
        // server.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //       return JSON.parse(this.responseText).articles;
        //     }
        //     // console.log(articles1);
        //   };
        // server.open("GET", "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e07136dd4dac486390b93703cc195aad")
        // server.send()
        // console.log(result);
// this.setState({articles:articles1});
        // console.log("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e07136dd4dac486390b93703cc195aad")
    //    async function fetch1(){
    //    await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e07136dd4dac486390b93703cc195aad").then(function(response){console.log(response.json());});
    //    }
    //    fetch1();
   
    }

  render() {
//    let  handleNext=async ()=>{
//     if(this.state.page+1>Math.floor(this.state.total/this.props.total)){
// // console.log(this.state.page+1>Math.floor(this.state.total/8));
//     }
//     else{
//  this.setState({page:this.state.page+1,loading:true});
//   let url="https://newsapi.org/v2/top-headlines?country="+this.props.country+"&category="+this.props.category+"&apiKey=e07136dd4dac486390b93703cc195aad&pageSize="+this.props.total+"&page="+(this.state.page+1);
// let data =await fetch(url).then();
// let parsedData= await data.json();
// console.log(this.state.total);
// this.setState({articles:parsedData.articles,loading:false});
//       console.log("Next");
//     }
//     }
//   let handlePrevious=async ()=>{
//     this.setState({page:this.state.page-1,loading:true});
//   let url="https://newsapi.org/v2/top-headlines?country="+this.props.country+"&category="+this.props.category+"&apiKey=e07136dd4dac486390b93703cc195aad&pageSize="+this.props.total+"&page="+(this.state.page-1);
// let data =await fetch(url).then();
// let parsedData= await data.json();
// console.log(this.state.total);
// this.setState({articles:parsedData.articles,loading:false});
//       console.log("Previous");
//     }
    return (
      <>
      {
    document.title=this.props.category.toUpperCase()+" TOP HEADLINES"
      }
         <div className="container my-3">
           <h2 className={"text-center text-"+this.props.mode1} style={{paddingTop:"50px",textTransform:"capitalize"}}>Top Headlines-{this.props.category}</h2>
<InfiniteScroll  style={{overflow:"hidden"}}
          dataLength={this.state.articles.length}
          next={async ()=>{
this.props.setProgress(10);
            this.setState({page:this.state.page+1});
              let url="https://newsapi.org/v2/top-headlines?country="+this.props.country+"&category="+this.props.category+"&apiKey=e07136dd4dac486390b93703cc195aad&pageSize="+this.props.total+"&page="+(this.state.page+1);
            let data =await fetch(url).then();
            let parsedData= await data.json();
            // console.log(this.state.total);
            this.setState({articles:this.state.articles.concat(parsedData.articles),loading:false});
                  // console.log("Next");
this.props.setProgress(100);

                }
                
              }
          hasMore={this.state.articles.length!=this.state.total}
          loader={
            <center>
            <div className="spinner-border text-center " id="spin" role="status">
           </div>
           </center>
           }
        >
          <div className="row">
        
     { this.state.articles.map((e)=>{
        return <div key={e.url}  className="col-md-3 my-3"> <NewsItem author={e.author?e.author:"Unknown"} time={e.publishedAt} mode={this.props.mode} mode1={this.props.mode1} title={e.title?e.title:" "} description={e.description?e.description:" "} img={e.urlToImage?e.urlToImage:"https://img.etimg.com/thumb/msid-95467567,width-1070,height-580,imgsize-75658,overlay-etmarkets/photo.jpg"} source={e.source.name} url={e.url}/>       
        </div>
     })}

 </div> 
</InfiniteScroll>
 </div> 

 {/* <div className="container my-3 d-flex justify-content-between">
  
 <button onClick={handlePrevious} disabled={this.state.page<=1} className={"btn-sm btn p-3 m-3 btn-"+this.props.mode1}>&larr;Previous</button>
 <button onClick={handleNext} disabled={this.state.page+1>Math.floor(this.state.total/this.props.total)} className={"btn-sm btn p-3 m-3 btn-"+this.props.mode1}>Next&rarr;</button>  

          </div> */}
        </>
    )
  }
}
