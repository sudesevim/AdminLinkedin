import React from 'react';
import { Edit, Trash } from 'lucide-react';

const mockJobs = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'Google',
    location: 'San Francisco',
    applications: 245,
    postedAt: '2024-06-01',
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Microsoft',
    location: 'Seattle',
    applications: 180,
    postedAt: '2024-06-02',
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    company: 'Apple',
    location: 'Cupertino',
    applications: 132,
    postedAt: '2024-06-03',
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'Amazon',
    location: 'New York',
    applications: 98,
    postedAt: '2024-06-04',
  },
];

const JobListings = () => {
  return (
    <div>
      <h2 className="fw-bold mb-4">Job Listings</h2>
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Applications</th>
                <th>Posted At</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockJobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.company}</td>
                  <td>{job.location}</td>
                  <td>{job.applications}</td>
                  <td>{job.postedAt}</td>
                  <td>
                    <div className="d-flex justify-content-end gap-2">
                      <button className="btn btn-sm btn-outline-secondary" title="Edit">
                        <Edit size={16} />
                      </button>
                      <button className="btn btn-sm btn-outline-danger" title="Delete">
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobListings; 