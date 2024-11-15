import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderMain = ({ backgroundColor = 'var(--g60)' }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <LeftSection>
        <BackIcon
          src="/icons/back-big.svg"
          alt="Back"
          onClick={() => navigate('/kb-starbanking')}
        />
        <Title>부동산</Title>
      </LeftSection>
      <IconGroup>
        <Icon
          src="/icons/bell.svg"
          alt="Notifications"
          onClick={() => navigate('/notification')}
        />
        <Icon
          src="/icons/box.svg"
          alt="Calendar"
          onClick={() => navigate('/information')}
        />
      </IconGroup>
    </HeaderContainer>
  );
};

export default HeaderMain;

const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 22px 0 20px;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Title = styled.h1`
  color: var(--g20);
  font-size: 18px;
  font-weight: 400;
  line-height: 100%;
  margin: 0;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
