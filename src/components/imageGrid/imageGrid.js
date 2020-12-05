import React from 'react';
class ImageGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { ...props.myProps }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleMouseEnter(val) {
        this.setState({ currentSelection: val });
    }
    handleClick(val) {
        this.setState({ activeCarouselIndex: val, currentSelection: val });
        this.props.activeCarouselIndex(val);
    }
    render() {
        var { images, currentSelection } = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <div className="row no-gutters">
                            {images.map((val, k) => {
                                return (
                                    <div className="col-sm-4" key={k}>
                                        <img src={val.src} alt={val.name} className={'img-fluid p-3' + (val.src === currentSelection.src ? 'p-0' : '')} onMouseEnter={() => this.handleMouseEnter(val)} onClick={() => this.handleClick(k)} />
                                    </div>)
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ImageGrid;