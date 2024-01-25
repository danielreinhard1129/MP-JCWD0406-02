import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardEvent } from '@/app/home/components/CardEvent';
import { Button, Kbd } from 'flowbite-react';

export interface IEvent {
  id: number;
  title: string;
  description: string;
  locationId: number;
  startDate: Date;
  endDate: Date;
  price: number;
  limit: number;
  booked: number;
  thumbnail: string;
  userId: number;
  createdAt: Date;
  updateAt: Date;
}

const PaginationFix: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [totalPages, setTotalPages] = useState(0);
  const baseUrl = 'http://localhost:8000/api';

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePreviousClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{
          data: IEvent[];
          totalPages: number;
        }>(`${baseUrl}/events/all-events`);
        setEvents(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page, pageSize]);

  return (
    <div className="">
      <div className="container flex flex-wrap gap-6">
        {events.map((event) => (
          <CardEvent key={event.id} data={event} />
        ))}
      </div>
      <div>
        {/* yang button ini ganti aja */}
        <div className="pagination-controls flex gap-6  mt-10">
          <Button onClick={handlePreviousClick} disabled={page === 1}>
            Previous
          </Button>
          <Kbd className="current-page text-lg w-auto items-center">{page}</Kbd>
          <Button onClick={handleNextClick} disabled={page === totalPages}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaginationFix;
