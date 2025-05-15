import React from 'react';
import DashboardCard from '../components/DashboardCard';
import ActivityChart from '../components/ActivityChart';
import { Users, MessageSquare, Briefcase, BarChart, TrendingUp, PieChart } from 'lucide-react';

const Analytics = () => {
  const stats = [
    { 
      title: 'Total Users', 
      value: '8', 
      icon: <Users size={20} />,
      change: { value: '12%', positive: true } 
    },
    { 
      title: 'New Posts', 
      value: '5', 
      icon: <MessageSquare size={20} />,
      change: { value: '5%', positive: true } 
    },
    { 
      title: 'Job Applications', 
      value: '6', 
      icon: <Briefcase size={20} />,
      change: { value: '3%', positive: false } 
    },
    { 
      title: 'Engagement Rate', 
      value: '10%', 
      icon: <BarChart size={20} />,
      change: { value: '2%', positive: true } 
    },
    {
      title: 'Active Sessions',
      value: '2',
      icon: <TrendingUp size={20} />,
      change: { value: '8%', positive: true }
    },
    {
      title: 'Conversion Rate',
      value: '2.5%',
      icon: <PieChart size={20} />,
      change: { value: '1.2%', positive: false }
    }
  ];

  return (
    <div>
      <h2 className="fw-bold mb-4">Analytics</h2>
      <div className="row g-4 mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <DashboardCard
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              change={stat.change}
            />
          </div>
        ))}
      </div>

      <ActivityChart />

      {/* Ek olarak başka grafikler veya özetler buraya eklenebilir */}
      <div className="row g-4 mt-4">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">User Growth</h5>
            </div>
            <div className="card-body">
              <p className="mb-0">User growth chart or summary can be placed here.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Top Performing Posts</h5>
            </div>
            <div className="card-body">
              <p className="mb-0">A summary or chart for top posts can be placed here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 