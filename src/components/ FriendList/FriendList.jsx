import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendList } from './FriendList.styled';

export const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </FriendList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.number.isRequired,
    })
  ),
};
