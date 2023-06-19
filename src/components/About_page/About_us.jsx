import React from 'react';

const AboutUs = () => {
  const data = [
    {
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna et lorem convallis aliquet. Ut ut sapien non magna ullamcorper pretium.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Card 2',
      description: 'Aliquam erat volutpat. Nulla vel bibendum nisi. Nullam id semper velit. Suspendisse potenti. Nullam euismod dui vel elit porttitor laoreet.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Card 3',
      description: 'Sed molestie tortor sit amet enim aliquet, quis dictum sapien finibus. Sed interdum dolor eget sapien eleifend, non laoreet neque hendrerit.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Card 4',
      description: 'Donec euismod nibh eu semper bibendum. Sed sit amet enim euismod, rutrum dolor et, lacinia elit. Etiam nec tellus quam.',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  return (
    <div className="container">
      <h2 className="text-center my-4">About Us</h2>
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className={`col-lg-6 mb-4 w-100 ${index % 1 === 0 ? 'order-lg-last' : ''}`}>
            <div className="card h-100">
              <div className="card-body d-flex">
                <img src={item.image} className={`card-img-${index % 2 === 0 ? 'end order-lg-last' : 'start'}`} alt="" />
                <div className="flex-grow-1">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;