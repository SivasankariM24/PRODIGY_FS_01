import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {
  const [profile, setProfile] = useState({ username: '', email: '', avatar: '', bio: '' });
  const [msg, setMsg] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile({
          username: res.data.username,
          email: res.data.email,
          avatar: res.data.avatar || '',
          bio: res.data.bio || ''
        });
      } catch (err) {
        setMsg('Failed to load profile');
      }
    };
    fetchProfile();
  }, []);

  const handleChange = e => setProfile({ ...profile, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put('http://localhost:5000/api/profile', profile, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProfile({
        username: res.data.username,
        email: res.data.email,
        avatar: res.data.avatar || '',
        bio: res.data.bio || ''
      });
      setMsg('Profile updated!');
      setEditing(false);
    } catch (err) {
      setMsg('Update failed');
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {msg && <div>{msg}</div>}
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            value={profile.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <input
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            name="avatar"
            value={profile.avatar}
            onChange={handleChange}
            placeholder="Avatar URL"
          />
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Short bio"
            maxLength={200}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          {profile.avatar && (
            <img src={profile.avatar} alt="avatar" style={{ width: 80, borderRadius: '50%' }} />
          )}
          <p><b>Username:</b> {profile.username}</p>
          <p><b>Email:</b> {profile.email}</p>
          <p><b>Bio:</b> {profile.bio}</p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}