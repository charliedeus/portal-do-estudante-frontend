import React from 'react';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';
import { MdNotifications } from 'react-icons/md';

export default function Notifications() {
  return (
    <>
      <Container>
        <Badge hasUnread>
          <MdNotifications color="rgba(228, 241, 254, 1)" size={20} />
        </Badge>

        <NotificationList>
          <Scroll>
            <Notification unread>
              <p>Você possui um novo agendamento...</p>
              <time>há 08 dias</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui um novo agendamento...</p>
              <time>há 08 dias</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui um novo agendamento...</p>
              <time>há 08 dias</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui um novo agendamento...</p>
              <time>há 08 dias</time>
              <button type="button">Marcar como lida</button>
            </Notification>
            <Notification>
              <p>Você possui um novo agendamento...</p>
              <time>há 08 dias</time>
              <button type="button">Marcar como lida</button>
            </Notification>
          </Scroll>
        </NotificationList>
      </Container>
    </>
  );
}
