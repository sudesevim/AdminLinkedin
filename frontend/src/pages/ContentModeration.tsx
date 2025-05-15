import React from 'react';
import { Check, Trash, EyeOff } from 'lucide-react';

const mockReports = [
  {
    id: '1',
    user: 'Sude Sevim',
    content: 'This is a spam post!',
    reason: 'Spam',
    reportedAt: '2025-05-13 10:23',
  },
  {
    id: '2',
    user: 'Gözde Yıldız',
    content: 'Inappropriate language in this comment.',
    reason: 'Inappropriate Language',
    reportedAt: '2025-05-13 14:12',
  },
  {
    id: '3',
    user: 'Begüm Mina Bestelci',
    content: 'Offensive content here.',
    reason: 'Offensive Content',
    reportedAt: '2025-05-13 09:45',
  },
];

const ContentModeration = () => {
  return (
    <div>
      <h2 className="fw-bold mb-4">Content Moderation</h2>
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>User</th>
                <th>Content</th>
                <th>Reason</th>
                <th>Reported At</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockReports.map((report) => (
                <tr key={report.id}>
                  <td>{report.user}</td>
                  <td>{report.content}</td>
                  <td>{report.reason}</td>
                  <td>{report.reportedAt}</td>
                  <td>
                    <div className="d-flex justify-content-end gap-2">
                      <button className="btn btn-sm btn-outline-success" title="Approve">
                        <Check size={16} />
                      </button>
                      <button className="btn btn-sm btn-outline-danger" title="Delete">
                        <Trash size={16} />
                      </button>
                      <button className="btn btn-sm btn-outline-secondary" title="Ignore">
                        <EyeOff size={16} />
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

export default ContentModeration; 