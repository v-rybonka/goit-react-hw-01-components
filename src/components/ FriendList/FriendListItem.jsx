import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendImg,
  FriendStatus,
  FriendName,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatus status={isOnline}></FriendStatus>
      <FriendImg src={avatar} alt={name} width="50" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
