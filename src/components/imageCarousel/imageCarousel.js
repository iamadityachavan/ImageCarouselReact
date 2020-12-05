import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';


class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...props.myProps };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.myProps.showCarousel = false;
        this.setState({ showCarousel: false });
    }

    hideModel(e) {
        if (e.currentTarget.className.indexOf("modal-dialog") >= 0) {
            this.setState({ showCarousel: true });
        }
    }

    handleShow() {
        this.setState({ showCarousel: true });
    }
    handleSelect(selectedIndex, e) {
        this.props.myProps.activeCarouselIndex = selectedIndex;
        this.setState({ activeCarouselIndex: selectedIndex });
    }
    render() {
        if (!this.state.showCarousel) {
            this.state = { ...this.props.myProps };
        }
        return (
            <Modal
                dialogClassName="modal-90w"
                show={this.state.showCarousel} onHide={this.handleClose}
                size="lg"
                backdrop={true}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Carousel activeIndex={this.state.activeCarouselIndex} onSelect={this.handleSelect}>
                    {this.state.images.map((val, k) => {
                        return (
                            <Carousel.Item key={k}>
                                <div className="text-center">
                                    <img className="img-fluid" src={val.src} alt={val.name} />
                                </div>
                            </Carousel.Item>)
                    })
                    }
                </Carousel>
            </Modal>
        )
    }
}

export default ImageCarousel;