const initialState = {
  posts: [
    {
      id: '1',
      title: 'Advert 1',
      content: 'Main content of the article',
      publishedDate: new Date('01-02-2021'),
      image: 'https://images.pexels.com/photos/208560/pexels-photo-208560.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 10,
      location: 'Location 1',
      author: 'John Doe',
    },
    {
      id: '2',
      title: 'Advert 2',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2020'),
      image: 'https://images.pexels.com/photos/462205/pexels-photo-462205.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 20,
      location: 'Location 2',
      author: 'John Doe',
    },
    {
      id: '3',
      title: 'Advert 3',
      content: 'Main content of the article',
      publishedDate: new Date('01-01-2021'),
      image: 'https://images.pexels.com/photos/1580173/pexels-photo-1580173.jpeg?auto=compress&cs=tinysrgb&w=1600',
      price: 20,
      location: 'Location 3',
      author: 'John Doe',
    }
  ],
  searchString: 'i',
};

export default initialState;
