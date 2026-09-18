import React from 'react';
import { Modal } from '../common/Modal';
import { FilterSidebar } from './FilterSidebar';
import { Button } from '../common/Button';

export function FilterDrawer({ isOpen, onClose, ...filterProps }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Filter Events" maxWidth="max-w-md">
      <div className="space-y-6">
        <FilterSidebar {...filterProps} />
        <Button variant="primary" fullWidth size="lg" onClick={onClose}>
          Apply Filters
        </Button>
      </div>
    </Modal>
  );
}
