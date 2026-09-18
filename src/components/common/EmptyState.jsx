import React from 'react';
import { CalendarX, Heart, Ticket, Search, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

const iconMap = {
  events: CalendarX,
  wishlist: Heart,
  tickets: Ticket,
  search: Search,
  default: AlertCircle
};

export function EmptyState({
  type = 'default',
  title = 'No items found',
  description = 'Try adjusting your filters or search terms to find what you are looking for.',
  actionText,
  onAction,
  actionLink
}) {
  const navigate = useNavigate();
  const IconComponent = iconMap[type] || iconMap.default;

  const handleAction = () => {
    if (onAction) {
      onAction();
    } else if (actionLink) {
      navigate(actionLink);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center border border-dashed border-gray-800/80 rounded-2xl bg-gray-950/30">
      <div className="w-16 h-16 rounded-2xl bg-purple-950/40 border border-purple-800/30 flex items-center justify-center text-purple-400 mb-4 shadow-lg shadow-purple-950/30">
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 font-heading">{title}</h3>
      <p className="text-gray-400 text-sm max-w-md mb-6 leading-relaxed">{description}</p>
      {(actionText && (onAction || actionLink)) && (
        <Button variant="primary" onClick={handleAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
}
