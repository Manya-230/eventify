import React from 'react';
import { Modal } from './Modal';
import { CITIES } from '../../data/mockCategories';
import { MapPin, Check } from 'lucide-react';
import { useEvents } from '../../context/EventContext';

export function LocationModal({ isOpen, onClose }) {
  const { selectedCity, setSelectedCity } = useEvents();

  const handleSelect = (city) => {
    setSelectedCity(city);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Select Your Location">
      <div className="space-y-4">
        <p className="text-gray-400 text-sm">
          Select a city to discover local concerts, festivals, and underground experiences near you.
        </p>

        <div className="grid grid-cols-2 gap-2.5 pt-2">
          {CITIES.map((city) => {
            const isSelected = selectedCity === city;
            return (
              <button
                key={city}
                onClick={() => handleSelect(city)}
                className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-purple-950/60 border-purple-500 text-white shadow-lg shadow-purple-950/40'
                    : 'bg-gray-900/60 border-gray-800 text-gray-300 hover:border-gray-700 hover:bg-gray-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className={`w-4 h-4 ${isSelected ? 'text-purple-400' : 'text-gray-500'}`} />
                  <span>{city}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-purple-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
