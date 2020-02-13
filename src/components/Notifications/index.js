import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
// import { parseISO, formatDistance } from 'date-fns';
// import pt from 'date-fns/locale/pt';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

import api from '~/services/api';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnred = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      // const data = response.data.map(notification => ({
      //   ...notification,
      //   timeDistance: formatDistance(
      //     parseISO(notification.created_at),
      //     new Date(),
      //     { addSuffix: true, locale: pt }
      //   ),
      // }));

      setNotifications(response.data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <>
      <Container>
        <Badge onClick={handleToggleVisible} hasUnread={hasUnred}>
          <MdNotifications color="rgba(228, 241, 254, 1)" size={20} />
        </Badge>

        <NotificationList visible={visible}>
          <Scroll>
            {notifications.map(notification => (
              <Notification key={notification.id} unread={!notification.read}>
                <p>{notification.name}</p>
                <time>há 08 dias</time>
                <time>{notification.timeDistance}</time>
                {!notification.read && (
                  <button
                    type="button"
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    Marcar como lida
                  </button>
                )}
              </Notification>
            ))}
          </Scroll>
        </NotificationList>
      </Container>
    </>
  );
}
