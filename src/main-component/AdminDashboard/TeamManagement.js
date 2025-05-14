import React, { useState, useEffect } from 'react';
import { teamService } from '../../api/apiService';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await teamService.getAllTeamMembers();
        setTeamMembers(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load team members');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="admin-management-container">
      <h1>Team Management</h1>
      <div className="management-content">
        <p>This is a placeholder for the team management interface.</p>
        <p>Total Team Members: {teamMembers.length}</p>
        {/* Add your team management UI here */}
      </div>
    </div>
  );
};

export default TeamManagement;