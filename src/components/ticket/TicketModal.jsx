import React from 'react';
import { Modal } from '../common/Modal';
import { DigitalTicket } from './DigitalTicket';

export function TicketModal({ isOpen, onClose, booking, event }) {
  if (!booking || !event) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
      <DigitalTicket booking={booking} event={event} />
    </Modal>
  );
}
