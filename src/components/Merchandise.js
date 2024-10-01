// src/Merchandise.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css_files/Merchandise.css'; // Import the CSS file
import Modal from './Modal'; // Import the Modal component

// Sample merchandise data with descriptions
const merchandiseData = [
  { 
    id: 1, 
    name: 'Coffee Mug', 
    price: 12.99, 
    category: 'Mugs', 
    imageUrl: 'https://cdn.gencraft.com/prod/user/572ba5f4-83b4-4375-b22e-ed4f0d37596a/6272405c-e82a-406c-87be-4422f9a3f0af/image/image0_0.jpg?Expires=1727841594&Signature=fRlDFTFmGExvlBXfgVFi8Dg-XJL6PR1rNym2qGzdRfRQZnJOnGzbQsK69fojwEVCIIlBNzeV6CQYAxuCM0F4Ay8OrF3pNScQxbWZlZAQZ7iddgvEnVQGCRgYUU-nCFggESoO9ypPCp6kZ4DuPnU7BdmOFgg2e6XEllNUdjvaFytNTFHWW2SqaofDuY04t7OGLrwImuJLbruY0lqs3-ZDLYSgFe9-mpwg5xonkV06vTxPDUMlJRhBOpJsOF2yP6HrOx-qJVSlHtqmWq-b4tbgjUCPgaHWzoZVGjBKiFnogu4IkIPldpN37WQQD-23SFYZLYun6fYzsLrrGiD2jZ-AIw__&Key-Pair-Id=K3RDDB1TZ8BHT8',
    description: 'A stylish coffee mug to enjoy your favorite brews.'
  },
  { 
    id: 2, 
    name: 'Starry Night Shirt', 
    price: 19.99, 
    category: 'Apparel', 
    imageUrl: 'https://images.bewakoof.com/t1080/women-s-black-starry-night-graphic-printed-oversized-plus-size-t-shirt-602843-1688982589-5.jpg',
    description: 'A comfortable t-shirt for coffee lovers.'
  },
  { 
    id: 3, 
    name: 'Kahwati Extra Hours Coffee Beans', 
    price: 15.99, 
    category: 'Food', 
    imageUrl: 'https://kahwati.co.uk/wp-content/uploads/2023/01/5-2.jpg',
    description: 'Freshly roasted coffee beans for the perfect cup.'
  },
  { 
    id: 4, 
    name: 'Travel Mug', 
    price: 16.99, 
    category: 'Mugs', 
    imageUrl: 'https://cdn.gencraft.com/prod/user/572ba5f4-83b4-4375-b22e-ed4f0d37596a/b5ed55b7-ea73-47b7-a975-af019bd2eb88/image/image1_0.jpg?Expires=1727841676&Signature=mkluIhbUxA5gWaese1iSSXczFHRiZfUggGnaVIxABpF7F7Of44xoj0YhXVkjYW-jjjrWVjRm7X6zfPPWGW0jN0ImqnHzwRpH-izB~YrX~~7z-oJ8V6zGdxXSay6eAvIViCLL9ZGHEq0KTb93dNj8INyDupKGHGCz0EdHq57aHKD565dbs-3dS8UX-O6kjOBAzEDRicxmZptGM6z4Th5xLeZ0hMy6AU93JOR9mEFd9w5iimhRC4h-BtVCitw9N-WnsHoeJjGLEgM5bH6cdEfBH76O644yKoK9fbKX3MD72N4hLoSMsOL~QKEPAy6~xXR73geG9X7jYNs6jzre0j-8Ng__&Key-Pair-Id=K3RDDB1TZ8BHT8',
    description: 'A travel mug to take your coffee on the go.'
  },
  { 
    id: 5, 
    name: 'Extra Hours Apron', 
    price: 24.99, 
    category: 'Apparel', 
    imageUrl: 'https://cdn.gencraft.com/prod/user/572ba5f4-83b4-4375-b22e-ed4f0d37596a/5b4696c3-e111-4b1b-b204-8416e1fc7ec7/image/image1_0.jpg?Expires=1727841988&Signature=YOLVZGHy0V9lzPoew0CFH8sUXUVfdZrSn3Cj3o0DqjiNhPlqC-9PbLEEycpyLQeqV3maW1NZxR7k8sgeYzAJvsOpGqRCO~21olF2InDrVlmWjgYaLodo2LqG-CY~V868RdBP9npi8LpEgEEPHNXmK-~jtPoyPEadPzBMSXFN0j8Au3YbHCMad7TGamQ7c5~74JVceXMpqAYDqgU~ySX1L55PXIdht0ydhMncFYHU9dD3jJ3hCIY-rWZrR2PYdKMVXeGclJrtSycffj3UXXUqtT47eZaNOq1TJhzp4xkDGQnIVenfHOjbVd-9A8DlqLGjuyCfCKgFAuvIJCTIVJyZPA__&Key-Pair-Id=K3RDDB1TZ8BHT8',
    description: 'A stylish apron for all your coffee brewing adventures.'
  },
  { 
    id: 6, 
    name: 'Kimu Manual Coffee Grinder', 
    price: 39.99, 
    category: 'Accessories', 
    imageUrl: 'https://cdn11.bigcommerce.com/s-6h7ychjk4/images/stencil/1920w/products/8837/91152/kinu-m47-simplicity-hand-grinder-front-wbg__53042.1602705228.jpg?c=1',
    description: 'Grind your coffee beans fresh for the best flavor.'
  },
  { 
    id: 7, 
    name: 'Extra Hours Coasters', 
    price: 10.99, 
    category: 'Accessories', 
    imageUrl: 'https://cdn.gencraft.com/prod/user/572ba5f4-83b4-4375-b22e-ed4f0d37596a/91b7fdcf-4162-4ebe-894c-40ad62fa22a3/image/image0_0.jpg?Expires=1727842026&Signature=E8aZ5wE6-69ifznq9ryS7rm2H3yof4kRAPcJPIrffWHd0ETIjHsB7A5FwLpmuugbfJZUH3l8uumGP2WzR~EdZjpiCUOjmKFSbzZj7y-jh16F12No5WXWXXiAawcNgOX64wkEVASwr6DSlq0K0Myt1XTBVnVDf0uHAmmA91809gqJJmo6KWGWpMdhPAYfQQk1ad1pO2eCkBqR0nftAGdf3dCQN1btA72ABCXgdWVuOKVQTcHOCbuOcoJOW97wpZH2k9BZ7B-ZsS4PRwM~uk8yE7Ya8NhKwsf5xThCEMajloMwXOdvdR~5k~0ibI2mt1-OmV9FI4BbP8ommWB-QIYY3A__&Key-Pair-Id=K3RDDB1TZ8BHT8',
    description: 'Protect your surfaces with these stylish coasters.'
  },
  { 
    id: 8, 
    name: 'Extra Hours Subscription', 
    price: 29.99, 
    category: 'Food', 
    imageUrl: 'https://cdn.gencraft.com/prod/user/572ba5f4-83b4-4375-b22e-ed4f0d37596a/806c32b7-3f4c-4098-a197-e2628cf31068/image/image1_0.jpg?Expires=1727842072&Signature=qWXrnmc-nSt6xwXlgesuAepdp2UT9ADwLl9PAyuLpdi-RAfUHVmV1vfxs1fFO9oD9KtjOXR0ll7bJaGOWn~tNjGe3tPaaiHiFNuBCKqzZogBPQNfuOAmrjDCEFYqTAYJ~N8~TIg1gNa3kWK68roODnOrAJ8vNzwKXshmqvRMWerfsIdHJNoDRIOm1r6KUNEt6YLMLrs7OMruoG~7xFKEAKM5BidW7Xx2NlkYYI9jR63Gn4jfgHmljhFmBw1vBT5RqhEfyeleiGbr41c8b77IfCRFjl8FxEpLLKK9928mjq0METaFDVtErGIgtwHmiv2vUo0QrX9tKOtvbdoFNGhmJg__&Key-Pair-Id=K3RDDB1TZ8BHT8',
    description: 'Get fresh coffee delivered to your door every month.'
  },
  { 
    id: 9, 
    name: 'Cold Brew Kit', 
    price: 34.99, 
    category: 'Accessories', 
    imageUrl: 'https://cdn.gencraft.com/prod/user/572ba5f4-83b4-4375-b22e-ed4f0d37596a/59e5d667-aa3f-4dce-9c14-1bac2d577201/image/image0_0.jpg?Expires=1727842121&Signature=Al~2d0CZCwD0dhGk3iGHdNMsB0imJessFDG9tajz1FiQhWLxtX2flRkRw3afnXj32jejSWgincK9HUsFHlN5-T2ABRJitmaj80eAf3qcBKzTWP-unzKvG6e9guEiQA7fJjj-IClD2OX067tNzXeI8ResNB7OYwDcKcrSWMN4VaXi8ICmfZaH7kvRvoRAEy951b9VSmwStz8OfS-83EuRugfczEdLxdyAnhUH6sac23Myf0Uh91qIe3ZQaOf2vJk01hjqceDKZvOfNUsrkF7Ce-gC8shBH39l~3pFuT3DWWMUJsISrPYwOCSSiy1MvgxkSx6yfKE5ZS0X~R6bA8jBdg__&Key-Pair-Id=K3RDDB1TZ8BHT8',
    description: 'Make delicious cold brew coffee at home.'
  },
  { 
    id: 10, 
    name: 'Sleepless Nights', 
    price: 15.99, 
    category: 'Art', 
    imageUrl: 'https://cdn.gencraft.com/prod/user/572ba5f4-83b4-4375-b22e-ed4f0d37596a/2c318816-2ab0-4b1f-b77b-4eb73c3cb40b/image/image0_0.jpg?Expires=1727842307&Signature=pAWpJ6caT65~NRZNzhleQEm3FPwM8b1jle0UyRnL68YiMX2HwgFZuJLkqMp3NWZUDUjRQHhy0p~dI9gnxRYNKdYs1-Zs3V8RZft46pkqSHcQBeApbxFth2sMH43p~RU91ki8B~YhWlLhaBwg-wGaBVzoC0HKSEywhWcUeLwkdsrCna0q40cFaKodnfA0yu-BYhLac42acWe44AtLyQgXlwNof5Gftve7PXLwrXSNBkzs8gGkMjy9s9cLMSnsmmaQHksVOM66BsbSjaD1qJaPx3SwZ9jkp3efbp1f2X8gG~ykYFGsLp1doi1WcOyrE7BrNoE~7z5DSZGkBrfK7EuZRw__&Key-Pair-Id=K3RDDB1TZ8BHT8',
    description: 'A beautiful print to adorn your coffee space.'
  },
];

const Merchandise = ({ addToCart }) => {
  const [filter, setFilter] = useState('All');
  const [modalItem, setModalItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState(''); // State to track selected size
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setModalItem(item);
    setSelectedSize(''); // Reset selected size when opening the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalItem(null);
    setSelectedSize(''); // Reset selected size when closing
  };

  const confirmAddToCart = () => {
    if (modalItem) {
      const itemWithSize = { ...modalItem, size: selectedSize }; // Include selected size in the item
      addToCart(itemWithSize);
      closeModal(); // Close the modal after confirming
    }
  };

  const filteredMerchandise = merchandiseData.filter((item) => 
    filter === 'All' || item.category === filter
  );

  return (
    <div className="merchandise-container">
      <h1>Merchandise</h1>
      <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Mugs')}>Mugs</button>
        <button onClick={() => setFilter('Apparel')}>Apparel</button>
        <button onClick={() => setFilter('Food')}>Food</button>
        <button onClick={() => setFilter('Accessories')}>Accessories</button>
        <button onClick={() => setFilter('Art')}>Art</button>
      </div>

      <div className="merchandise-list">
        {filteredMerchandise.map((item) => (
          <div key={item.id} className="merchandise-item" onClick={() => openModal(item)}>
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={(e) => {
              e.stopPropagation(); // Prevent opening modal when clicking the button
              openModal(item); // Open modal
            }}>Add to Cart</button>
          </div>
        ))}
      </div>

      <Link to="/cart">
        <button>View Cart</button>
      </Link>

      {/* Modal for item details and checkout confirmation */}
      <Modal 
        item={modalItem} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onConfirm={confirmAddToCart} 
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize} // Pass the size setter function
      />
    </div>
  );
};

export default Merchandise;