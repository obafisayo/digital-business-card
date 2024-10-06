import React, { useState } from 'react';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button, Input } from 'antd';
import { GrDrag } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaTrash } from "react-icons/fa6"; // Import Trash Icon
import Search from 'antd/es/input/Search';

const DraggableFieldItem = ({ field, onRemove, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: field.id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: isDragging ? 'grab' : 'default',
    padding: '28px',
    border: '1px solid #ccc',
    margin: '4px',
    borderRadius: "4px",
    backgroundColor: isDragging ? '#f0f0f0' : '#fff',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <GrDrag 
          {...listeners}
          style={{ cursor: 'grab', marginRight: '8px' }} 
        />
        <span className="flex items-center gap-2">{field.icon}{field.name}</span>
        <FaTrash 
          style={{ marginLeft: 'auto', cursor: 'pointer' }} 
          onClick={() => onRemove(field.id)} 
        />
      </div>
      {children}
    </div>
  );
};

const Fields = () => {
  const [fields, setFields] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const AllFields = [
    {
      name: "Most Popular",
      fieldarr: [
        { id: '1', name: 'Facebook', editable: false, des: "Add link to your facebook account",
          link: "https://www.facebook.com/", icon: <FaFacebookF />
        },
        { id: '2', name: 'WhatsApp', editable: false, des: "Add link to your whatsapp account",
          link: "https://web.whatsapp.com/", icon: <FaWhatsapp />
        },
        { id: '3', name: 'Website', editable: false, des: "Add link to your Linkedin account",
          link: "https://www.linkedin.com/feed/", icon: <FaLinkedinIn />
        },
        { id: '4', name: 'Instagram', editable: false, des: "Add link to your Instagram account",
          link: "https://www.instagram.com/", icon: <FaLinkedinIn />
        },
        { id: '5', name: 'Email', editable: false, des: "Add link to your email account",
          link: "mailto:example@example.com", icon: <FaLinkedinIn />
        },
        { id: '6', name: 'Link', editable: false, des: "Add a generic link",
          link: "https://www.example.com/", icon: <FaLinkedinIn />
        },
      ]
    },
    {
      name: "Social",
      fieldarr: [
        { id: '7', name: 'Facebook', editable: false, des: "Add link to your facebook account",
          link: "https://www.facebook.com/", icon: <FaFacebookF />
        },
        { id: '8', name: 'WhatsApp', editable: false, des: "Add link to your whatsapp account",
          link: "https://web.whatsapp.com/", icon: <FaWhatsapp />
        },
        { id: '9', name: 'LinkedIn', editable: false, des: "Add link to your Linkedin account",
          link: "https://www.linkedin.com/feed/", icon: <FaLinkedinIn />
        },
      ]
    },
  ];

  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setFields((prev) => {
        const activeIndex = prev.findIndex((i) => i.id === active.id);
        const overIndex = prev.findIndex((i) => i.id === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  const toggleEdit = (id) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, editable: !field.editable } : field
      )
    );
  };

  const handleChange = (id, value) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, name: value } : field
      )
    );
  };

  const handleRemove = (id) => {
    setFields((prev) => prev.filter(field => field.id !== id));
  };

  const handleAdd = (item) => {
    if (!fields.some(field => field.id === item.id)) {
      setFields(prev => [...prev, item]);
    }
  };

  const onSearch = (value) => {
    setSearchTerm(value.toLowerCase());
  };

  // Get unique field options that match the search term
  const filteredFieldOptions = Array.from(new Set(
    AllFields.flatMap(fieldGroup => 
      fieldGroup.fieldarr.filter(item => item.name.toLowerCase().includes(searchTerm))
    )
  )).map(item => item); // Convert Set back to array

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
          <SortableContext items={fields.map((field) => field.id)} strategy={verticalListSortingStrategy}>
            {fields.map((field) => (
              <div className="border-dashed border-2 border-textPrimary rounded-lg" key={field.id}>
                <DraggableFieldItem field={field} onRemove={handleRemove}>
                  {field.editable && <Input
                    value={field.link}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    onBlur={() => toggleEdit(field.id)}
                    autoFocus={field.editable}
                  />}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                    <p>{field.des}</p>
                    <Button onClick={() => toggleEdit(field.id)}>Edit</Button>
                  </div>
                </DraggableFieldItem>
              </div>
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <div className="border border-textPrimary p-6 px-8 flex flex-col justify-center gap-4 rounded-lg">
        <h1 className="text-xl font-semibold mb-2">Fields</h1>
        <Search placeholder="Search..." onSearch={onSearch} enterButton onChange={(e) => onSearch(e.target.value)} />
        {searchTerm ? (
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="text-sm text-textPrimary">Suggestions:</h2>
            {filteredFieldOptions.map(item => (
              <div 
                key={item.id} 
                className="border w-fit border-textPrimary text-textPrimary hover:border-black hover:text-black transition-all duration-200 ease-in-out cursor-pointer rounded-lg p-2 flex items-center gap-2 justify-center"
                onClick={() => handleAdd(item)}
              >
                {item.icon}
                <h1>{item.name}</h1>
              </div>
            ))}
          </div>
        ) : (
          AllFields.map((field, index) => (
            <div key={index} className="flex flex-col gap-2">
              <p className="text-sm text-textPrimary">{field.name}</p>
              <div className="flex gap-2 flex-wrap">
                {field.fieldarr.map((item) => (
                  <div 
                    key={item.id}
                    className="border border-textPrimary text-textPrimary hover:border-black hover:text-black transition-all duration-200 ease-in-out cursor-pointer rounded-lg p-2 flex items-center gap-2 justify-center"
                    onClick={() => handleAdd(item)}
                  >
                    {item.icon}
                    <h1>{item.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Fields;
