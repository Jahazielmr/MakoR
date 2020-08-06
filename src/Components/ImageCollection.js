import React, { Component } from 'react';
import Image from './Image';
import Pagination from './Pagination';


class ImageCollection extends Component {

    imageRender = () => {

        const images = this.props.images;

        console.log("imagesLength" + images.length);

        const input = this.props.input;

        if (input.length === 0 && images.length === 0) return null;

        if (input.length > 0 && images.length == 0) {
            return (
                <div className="lead text-center">
                    <p1 class="text-center font-weight-bold mt-10" >Nothing was found for {input}</p1>
                </div>
            );
        }

        return (

            <React.Fragment>
                <div className="container">
                    <div className="row p-5">
                        {images.map(imagep => (
                            <Image
                                key={imagep.id}
                                image={imagep}
                            />
                        ))}
                    </div>

                    <Pagination

                        nextPage={this.props.nextPage}
                        previousPage={this.props.previousPage}
                        pageNumber = {this.props.pageNumber}
                    />

                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.imageRender()}
            </React.Fragment>
        )
    }
}

export default ImageCollection;