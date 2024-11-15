import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const heartIcon = '/icons/heart.svg';
const heartFillIcon = '/icons/heart-fill.svg';

interface CardProps {
  status: string;
  scale: string;
  apartmentName: string;
  address: string;
}

const Card: React.FC<CardProps> = ({
  status,
  scale,
  apartmentName,
  address,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <CardContainer>
      <TagContainer>
        <StatusTag status={status}>{status}</StatusTag>
        <ScaleTag>{scale}</ScaleTag>
        <HeartIcon
          src={isLiked ? heartFillIcon : heartIcon}
          alt="하트"
          onClick={handleHeartClick}
        />
      </TagContainer>
      <Title>{apartmentName}</Title>
      <Address>{address}</Address>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 18px 20px;
  background-color: var(--g60);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const ScaleTag = styled.span`
  color: var(--n10);
  font-size: 12px;
  font-weight: 500;
  line-height: 100%;
`;

const StatusTag = styled.span<{ status: string }>`
  font-size: 11px;
  font-weight: 600;
  line-height: 100%;
  padding: 5px 6px;
  border-radius: 4px;
  ${({ status }) =>
    status === '접수 종료' &&
    css`
      background-color: var(--n30);
      color: var(--n10);
    `}

  ${({ status }) =>
    (status === '접수 예정' || status === '접수 시작') &&
    css`
      background-color: var(--p20);
      color: var(--p10);
    `}
`;

const Title = styled.h2`
  color: var(--g10);
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  margin-bottom: 10px;
  margin-left: 2px;
`;

const Address = styled.p`
  color: var(--g40);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  margin-left: 2px;
`;

const HeartIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: auto;
`;
