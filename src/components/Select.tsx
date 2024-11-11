import React, { useState } from 'react';
import styled from 'styled-components';

const Select = ({ label = '선택해주세요', options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <SelectContainer onClick={toggleDropdown}>
      <Label>{selectedOption}</Label>
      <Icon src="/icons/down.svg" alt="Dropdown icon" />
      {isOpen && (
        <Dropdown>
          {options.map((option, index) => (
            <Option key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </Dropdown>
      )}
    </SelectContainer>
  );
};

export default Select;

const SelectContainer = styled.div`
  width: 339px;
  height: 56px;
  background-color: var(--g60);
  border: 1px solid var(--g50);
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;
  color: var(--g20);
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--g60);
  border: 1px solid var(--g50);
  border-radius: 8px;
  margin-top: 8px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
`;

const Option = styled.div`
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 400;
  color: var(--g20);
  cursor: pointer;
  &:hover {
    background-color: var(--n30);
  }
`;