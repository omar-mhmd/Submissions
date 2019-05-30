import React from "react";
import '../App.css'

class Side extends React.Component {

    constructor(props){
        super(props);


        this.state={
            word:''
        }
    }
    
    render() {
        console.log('side', this.props)
        return <div>
        

        <div className="Sidetext">
            <h6>Up Next</h6><hr className="Sideline"></hr>
        </div>
        
        <div className="Sidevid">
            <iframe width="310" height="215" src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <hr className="Sideline"></hr>
        </div>

        <div className="Lowervid">
 {
    this.props.videos.map(items => {

        return (
            <iframe width="310" height="210" src={`https://www.youtube.com/embed/${items.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        )
    })
}

        </div>

        </div>
    }

}


export default Side;