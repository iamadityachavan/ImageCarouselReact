import React, { Component } from 'react';
import ImageGrid from './components/imageGrid/imageGrid';
import ImageCarousel from './components/imageCarousel/imageCarousel';

const images = {
  images: [
    { name: 'Image 1', src: 'https://source.unsplash.com/iPum7Ket2jo/800x600', desc: 'This describes this image..' },
    { name: 'Image 2', src: 'https://source.unsplash.com/F5Dxy9i8bxc/800x600', desc: 'This describes this image 2..' },
    { name: 'Image 3', src: 'https://source.unsplash.com/E4944K_4SvI/800x600', desc: 'This describes this image..' },
    { name: 'Image 4', src: 'https://source.unsplash.com/s48nn4NtlZ4/800x600', desc: 'This describes this image..' },
    { name: 'Image 5', src: 'https://source.unsplash.com/M0WbGFRTXqU/800x600', desc: 'This describes this image 5..' },
    { name: 'Image 6', src: 'https://source.unsplash.com/MoI_cHNcSK8/800x600', desc: 'This describes this image 6..' },
    { name: 'Image 7', src: 'https://source.unsplash.com/M01DfkOqz7I/800x600', desc: 'This describes this image 6..' },
    { name: 'Image 8', src: 'https://source.unsplash.com/Igct8iZucFI/800x600', desc: 'This describes this image 6..' },
    { name: 'Image 9', src: 'https://source.unsplash.com/GtYFwFrFbMA/800x600', desc: 'This describes this image 6..' },
    { name: 'Image 10', src: 'https://source.unsplash.com/5KvPQc1Uklk/800x600', desc: 'This describes this image 6..' },
    { name: 'Image 11', src: 'https://source.unsplash.com/lVmR1YaBGG4/800x600', desc: 'This describes this image 6..' },
    { name: 'Image 12', src: 'https://source.unsplash.com/PC_lbSSxCZE/800x600', desc: 'This describes this image 6..' },
  ],
  currentSelection: {},
  showCarousel: false,
  activeCarouselIndex: 0
};

class App extends Component {
  constructor() {
    super()
    this.state = images;
  }

  handleCallback = (activeIndex) => {
    this.setState({
      activeCarouselIndex: activeIndex,
      showCarousel: true
    });
  }

  render() {
    return (
      <div className="bg-info">
        <h1 className="text-center pt-2">Image Gallary</h1>
        <ImageGrid myProps={this.state} activeCarouselIndex={this.handleCallback} />
        <ImageCarousel myProps={this.state} onRef={ref => (this.child = ref)} />
      </div>
    );
  }
}

export default App;
