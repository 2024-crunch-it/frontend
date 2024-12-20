import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderSubProps {
  title: string;
}

const HeaderSub = ({ title }: HeaderSubProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (
      location.pathname === '/notification' ||
      location.pathname === '/information' ||
      location.pathname === '/score'
    ) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <HeaderContainer>
      <BackIcon src="/icons/back.svg" alt="Back" onClick={handleBackClick} />
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default HeaderSub;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: var(--g60);
  position: relative;
  box-sizing: border-box;
  display: flex;
`;

const BackIcon = styled.img`
  position: absolute;
  left: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  font-weight: 500;
  color: var(--g10);
  line-height: 100%;
  margin: 0;
`;
