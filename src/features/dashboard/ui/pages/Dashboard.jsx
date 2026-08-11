import React, { useEffect, useState } from 'react';
import { getSeries } from '../../state/homeAction';
import SeriesCard from '@/components/SeriesCard';

const Dashboard = () => {
  const [series, setSeries] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      const data = await getSeries();
      setSeries(data);
    };
    fetchSeries();
  }, []);
  return (
    <div className="p-10">
      {series && series.data && series.data.map((item) => (
        <SeriesCard key={item._id} series={item} />
      ))}
    </div>
  );
};

export default Dashboard;