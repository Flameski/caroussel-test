import Caroussel from './Caroussel';

function App() {
  const imageUrls = [
    { id: 0, src: 'https://picsum.photos/id/1025/500/200.jpg', alt: 'Image 1' },
    { id: 1, src: 'https://picsum.photos/id/1078/500/200.jpg', alt: 'Image 2' },
    { id: 2, src: 'https://picsum.photos/id/834/500/200.jpg', alt: 'Image 3' },
    { id: 3, src: 'https://picsum.photos/id/474/200/300.jpg', alt: 'Image 4' },
    { id: 4, src: 'https://picsum.photos/id/321/500/200.jpg', alt: 'Image 5' },
    { id: 5, src: 'https://picsum.photos/id/186/500/200.jpg', alt: 'Image 6' },
    { id: 6, src: 'https://picsum.photos/id/177/200/300.jpg', alt: 'Image 7' },
    {
      id: 7,
      src: 'https://picsum.photos/id/1006/2000/1000.jpg',
      alt: 'Image 8',
    },
    { id: 8, src: 'https://picsum.photos/id/522/500/200.jpg', alt: 'Image 9' },
    { id: 9, src: 'https://picsum.photos/id/648/500/500.jpg', alt: 'Image 10' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Caroussel images={imageUrls} />
    </div>
  );
}

export default App;
