import React, { useState } from 'react';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
  });
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <h2 className="fw-bold mb-4">Settings</h2>
      <div className="row g-4">
        {/* Profil Bilgileri */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Profile Information</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })} />
                </div>
                <button type="button" className="btn btn-primary">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
        {/* Şifre Değiştir */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Change Password</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Current Password</label>
                  <input type="password" className="form-control" value={password.current} onChange={e => setPassword({ ...password, current: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input type="password" className="form-control" value={password.new} onChange={e => setPassword({ ...password, new: e.target.value })} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm New Password</label>
                  <input type="password" className="form-control" value={password.confirm} onChange={e => setPassword({ ...password, confirm: e.target.value })} />
                </div>
                <button type="button" className="btn btn-primary">Change Password</button>
              </form>
            </div>
          </div>
        </div>
        {/* Tema Seçimi */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-header bg-white">
              <h5 className="card-title mb-0">Theme</h5>
            </div>
            <div className="card-body">
              <select className="form-select" value={theme} onChange={e => setTheme(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 