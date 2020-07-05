import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";


class CampsiteInfo extends Component {
 

  renderCampsite(campsite) {
    if (campsite) {   //we don't need this but i
      return (
        <div className="col-md-5 m-1">
          <Card>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardBody>
              <CardTitle>{campsite.name}</CardTitle>
              <CardText>{campsite.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    }
    return <div></div>;
  }
  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1  ">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <div>{comment.text}</div>
                <div>
                 -- {comment.author},
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </div>
                <br/>
              </div>
            );
          })}
        </div>
      );
    }
    return <div />;

  }
  render() {
    if (this.props.campsite) {
      const campsite = this.props.campsite;
      const comments = campsite.comments;

      return (
        <div className="row">
          {this.renderCampsite(campsite)}

          {this.renderComments(comments)}
        </div>
      );
   }
 return <div/>;

  }
}

export default CampsiteInfo;
