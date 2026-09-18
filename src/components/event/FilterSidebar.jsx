import React from 'react';
import { Filter, RotateCcw, Calendar, Tag, MapPin, IndianRupee } from 'lucide-react';
import { CITIES, mockCategories } from '../../data/mockCategories';
import { Button } from '../common/Button';

export function FilterSidebar({
  selectedCity,
  onCityChange,
  selectedCategories,
  onCategoryToggle,
  selectedDate,
  onDateChange,
  maxPrice,
  onPriceChange,
  onResetFilters
}) {
  const dateOptions = [
    { label: 'All Dates', value: 'all' },
    { label: 'Today', value: 'today' },
    { label: 'This Weekend', value: 'weekend' },
    { label: 'Next 30 Days', value: 'month' }
  ];

  return (
    <aside className="w-full space-y-6 bg-[#12151E] border border-gray-800 rounded-2xl p-5 shadow-xl">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-purple-400" />
          <h3 className="text-base font-bold text-white font-heading">Filters</h3>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs font-semibold text-gray-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {/* Filter 1: City Location */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-purple-400" />
          City Location
        </label>
        <select
          value={selectedCity}
          onChange={(e) => onCityChange(e.target.value)}
          className="w-full bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
        >
          {CITIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Filter 2: Categories */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-purple-400" />
          Categories
        </label>
        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
          {mockCategories.map((cat) => {
            const isChecked = selectedCategories.includes(cat.name);
            return (
              <label
                key={cat.id}
                className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-white cursor-pointer select-none group"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onCategoryToggle(cat.name)}
                  className="w-4 h-4 rounded border-gray-800 text-purple-600 focus:ring-purple-500/50 bg-gray-900"
                />
                <span className={isChecked ? "font-bold text-purple-300" : ""}>
                  {cat.name}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Filter 3: Date Range */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-purple-400" />
          Date Frame
        </label>
        <div className="grid grid-cols-2 gap-2">
          {dateOptions.map((opt) => {
            const isSelected = selectedDate === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onDateChange(opt.value)}
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-all text-center ${
                  isSelected
                    ? 'bg-purple-950 border border-purple-500 text-purple-200 font-bold'
                    : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter 4: Max Price Slider */}
      <div className="space-y-2.5 pt-2 border-t border-gray-800">
        <div className="flex items-center justify-between text-xs">
          <label className="font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-purple-400" />
            Max Price
          </label>
          <span className="font-mono text-purple-300 font-bold">
            {maxPrice >= 5000 ? '₹5,000+' : `₹${maxPrice}`}
          </span>
        </div>
        <input
          type="range"
          min="300"
          max="5000"
          step="200"
          value={maxPrice}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full accent-purple-500 cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-gray-500 font-mono">
          <span>₹300</span>
          <span>₹5,000+</span>
        </div>
      </div>
    </aside>
  );
}
