import React, { useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

interface StarRateProps {
  onRateChange: (rating: number) => void;
}

const StarRate: React.FC<StarRateProps> = ({ onRateChange }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [rateColor, setRateColor] = useState<number | null>(null);

  const handleRatingClick = async (currentRate: number) => {
    try {
      // Kirim nilai rating ke server
      await axios.post('/api/rating', { rating: currentRate });

      // Set rating pada state lokal
      setRating(currentRate);
      setRateColor(null);

      // Panggil fungsi callback untuk memberitahu komponen induk
      onRateChange(currentRate);
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  return (
    <>
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label key={currentRate}>
            <input
              type="radio"
              name="rate"
              value={currentRate}
              onClick={() => handleRatingClick(currentRate)}
            />

            <FaStar
              size={30}
              color={
                currentRate <= (rateColor !== null ? rateColor : rating!)
                  ? 'gold'
                  : 'grey'
              }
              onMouseEnter={() => setRateColor(currentRate)}
              onMouseLeave={() => setRateColor(null)}
            />
          </label>
        );
      })}
    </>
  );
};

export default StarRate;
