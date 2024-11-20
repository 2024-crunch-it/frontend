import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

interface NotificationCardProps {
  title: string;
  houseName: string;
  createdAt: string;
  isRead: boolean;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  houseName,
  createdAt,
  isRead,
}) => {
  return (
    <CardContainer isRead={isRead}>
      <CardTitle>{title}</CardTitle>
      <HouseName>{houseName}</HouseName>
      <CardTime>{dayjs(createdAt).format('YYYY. MM. DD')}</CardTime>
    </CardContainer>
  );
};

export default NotificationCard;

const CardContainer = styled.div<{ isRead: boolean }>`
  background-color: ${({ isRead }) => (isRead ? 'var(--g60)' : 'var(--n25)')};
  border-radius: 10px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const CardTitle = styled.h3`
  color: var(--n10);
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 8px;
`;

const HouseName = styled.p`
  color: var(--g10);
  font-size: 17px;
  font-weight: 500;
  line-height: 100%;
  margin-bottom: 12px;
`;

const CardTime = styled.span`
  color: var(--g40);
  font-size: 12px;
  font-weight: 400;
  line-height: 100%;
`;