import styled from 'styled-components';
import HeaderMain from '@/components/HeaderMain';
import StatusInfo from '@/components/StatusInfo';
import ApplyScore from '@/components/ApplyScore';
import OfferBanner from '@/components/OfferBanner';
import Select from '@/components/Select';
import { useArea } from '@/context/AreaContext';
import GoalSelection from '@/components/GoalSelection';
import Message from '@/components/Message';

const Home = () => {
  const { selectedArea, depositAmount, setSelectedArea } = useArea();
  const badgeCount = 1;
  const subscriptionAmount = 150000;
  const message = '다음 건물까지 100,000원 예치';

  const areaOptions = [
    { label: '85㎡ 이하 (32평)', amount: '200-300만원 이상 예치' },
    { label: '102㎡ 이하 (39평)', amount: '300-600만원 이상 예치' },
    { label: '135㎡ 이하 (51평)', amount: '400-1000만원 이상 예치' },
    { label: '모든 면적', amount: '500-1500만원 이상 예치' },
  ];

  const handleSelectChange = (selectedLabel: string) => {
    const selectedOption = areaOptions.find(
      (option) => option.label === selectedLabel
    );
    if (selectedOption) {
      setSelectedArea(selectedLabel, selectedOption.amount);
    }
  };

  return (
    <Wrapper>
      <HeaderMain backgroundColor="#D0F0FE" />
      <BackgroundSection>
        <StatusInfo
          badgeCount={badgeCount}
          subscriptionAmount={subscriptionAmount}
        />
        <Message message={message} />
      </BackgroundSection>
      <ContentGroup>
        <BannerGroup>
          <OfferBanner />
        </BannerGroup>
        <MainContentGroup>
          <AlignCenter>
            <ApplyScore />
          </AlignCenter>
          <Group>
            <Section>
              <SectionTitle>청약 희망 면적</SectionTitle>
              <DepositInfo>{depositAmount}</DepositInfo>
            </Section>
            <Select
              label={selectedArea}
              options={areaOptions.map((option) => option.label)}
              onSelect={handleSelectChange}
            />
          </Group>
          <Group>
            <SectionTitle>청약 지역 달성율</SectionTitle>
            <GoalSelection />
          </Group>
        </MainContentGroup>
      </ContentGroup>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const BackgroundSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 300px;
  background: linear-gradient(180deg, #d0f0fe 4.68%, #e5f6fe 40.64%);
  position: relative;
  padding: 20px;
`;

const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BannerGroup = styled.div`
  width: 100%;
  max-width: 375px;
`;

const MainContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
  max-width: 375px;
  background-color: var(--g60);
`;

const AlignCenter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 10px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 18px;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 2px;
`;

const SectionTitle = styled.h2`
  color: var(--g20);
  font-size: 18px;
  font-weight: 600;
  line-height: 100%;
  flex: 1;
`;

const DepositInfo = styled.p`
  font-size: 14px;
  color: var(--p10);
  line-height: 100%;
  flex: 1;
  text-align: right;
`;
