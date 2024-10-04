import React, { useState, useEffect } from 'react';
import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useBasicContext } from '../../../contexts/BasicContext';

const items = [
  {
    label: <p>Card Details</p>,
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: <p>Edit Card</p>,
    key: '1',
  },
];

// Define the DropdownButton component
const DropdownButton = () => {
  const { isEditing, setIsEditing } = useBasicContext();
  const [selectedValue, setSelectedValue] = useState(isEditing ? 'Edit Card' : 'Card Details');

  // Effect to update selectedValue based on isEditing
  useEffect(() => {
    setSelectedValue(isEditing ? 'Edit Card' : 'Card Details');
  }, [isEditing]);

  // Function to handle the menu item click
  const handleMenuClick = (key) => {
    const selectedItem = items.find(item => 
      item && 'key' in item && item.key === key && 'label' in item
    );

    if (selectedItem && 'label' in selectedItem) {
      const selectedLabel = selectedItem.label;

      // Check if selectedLabel is a React element and extract its text content
      const labelText = React.isValidElement(selectedLabel)
        ? selectedLabel.props.children
        : selectedLabel;

      if (typeof labelText === 'string') {
        // Determine action based on the selected item
        if (key === '0') {
          setIsEditing(false); // Clicked on "Card Details"
        } else if (key === '1') {
          setIsEditing(true); // Clicked on "Edit Card"
        }
      }
    }
  };

  return (
    <Dropdown
      className='border border-textPrimary py-1 px-3 rounded-md hover:bg-brandGray cursor-pointer hover:text-white transition-all ease-in-out duration-300'
      menu={{
        items: items.map(item => {
          // Ensure item has a label before adding onClick
          if (item && 'label' in item) {
            return {
              ...item,
              onClick: () => handleMenuClick(String(item.key)), // Attach the click handler
            };
          }
          return null; // Ignore items without a label
        }).filter(Boolean), // Remove any null values
      }}
      trigger={['click']}
    >
      <Space>
        {selectedValue} {/* Display the selected value */}
        <CaretDownOutlined />
      </Space>
    </Dropdown>
  );
}

export default DropdownButton;
