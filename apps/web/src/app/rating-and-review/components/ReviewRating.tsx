import React, { useState } from 'react';
import axios from 'axios';
import StarRate from './StarRate';

interface IReview {
  id: number;
  rating: number;
  review: string;
  eventId: number;
  userId: number;
  createAt: Date;
  updateAt: Date;
}

const ReviewRating: React.FC = () => {
  const baseUrl = 'http://localhost:8000/api';

  // State for the rating and review text
  const [rating, setRating] = useState<number | null>(null);
  const [reviewText, setReviewText] = useState<string>('');

  // Function to handle the submission of the review
  const handleSubmitReview = async () => {
    try {
      // Make a POST request to submit the review
      const response = await axios.post<IReview>(
        `${baseUrl}/reviews/rating-and-review/`,
        {
          rating, // Handle null rating
          review: reviewText,
          // eventId: Id, // Replace with the actual event ID
          // userId: user.id    // Replace with the actual user ID
        },
      );

      console.log('Review submitted successfully:', response.data);
      // Reset the form after successful submission
      setRating(null);
      setReviewText('');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div id="app" className="container mx-auto max-w-4xl p-4 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">
          Event Name: Your Event Name
        </h1>
        <div className="mb-4">
          <p className="text-lg font-semibold">Attendee: Erni</p>
        </div>
        <div className="mb-2 flex items-center gap-5">
          <label htmlFor="rating" className="text-lg font-semibold">
            Rating:
          </label>
          {/* <StarRate setRating={(value: number) => setRating(value)} /> */}
        </div>
        <div className="mb-4">
          <textarea
            id="review"
            placeholder="Write Your Review"
            className="p-2 border w-full rounded"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button
          id="submitReview"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSubmitReview}
        >
          Submit Review
        </button>
        <div id="reviews" className="mt-4"></div>
      </div>
    </div>
  );
};

export default ReviewRating;
