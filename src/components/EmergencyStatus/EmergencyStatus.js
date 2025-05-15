import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { emergencyService } from '../../api/apiService';
import './EmergencyStatus.css';

const EmergencyStatus = () => {
  const { id } = useParams();
  const [emergency, setEmergency] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmergencyStatus = async () => {
      try {
        const response = await emergencyService.getEmergencyRequestById(id);
        setEmergency(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load emergency status');
        setLoading(false);
      }
    };

    fetchEmergencyStatus();
    
    // Poll for updates every 30 seconds
    const interval = setInterval(fetchEmergencyStatus, 30000);
    return () => clearInterval(interval);
  }, [id]);

  if (loading) return <div className="loading">Loading emergency status...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!emergency) return <div className="not-found">Emergency request not found</div>;

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'Assigned': return 'status-assigned';
      case 'In Progress': return 'status-progress';
      case 'Completed': return 'status-completed';
      case 'Cancelled': return 'status-cancelled';
      default: return '';
    }
  };

  return (
    <section className="emergency-status-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title">
              <span>Emergency Status</span>
              <h2>Track Your Emergency Request</h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="emergency-status-card">
              <div className="status-header">
                <h3>Emergency ID: {emergency._id}</h3>
                <div className={`status-badge ${getStatusClass(emergency.status)}`}>
                  {emergency.status}
                </div>
              </div>
              
              <div className="status-details">
                <div className="detail-item">
                  <span className="label">Request Type:</span>
                  <span className="value">{emergency.requestType}</span>
                </div>
                
                <div className="detail-item">
                  <span className="label">Patient:</span>
                  <span className="value">{emergency.patient.name}</span>
                </div>
                
                <div className="detail-item">
                  <span className="label">Contact:</span>
                  <span className="value">{emergency.patient.contactNumber}</span>
                </div>
                
                <div className="detail-item">
                  <span className="label">Location:</span>
                  <span className="value">{emergency.patient.location}</span>
                </div>
                
                <div className="detail-item">
                  <span className="label">Description:</span>
                  <span className="value">{emergency.description}</span>
                </div>
                
                <div className="detail-item">
                  <span className="label">Priority:</span>
                  <span className="value">{emergency.priority}</span>
                </div>
                
                {emergency.assignedDoctor && (
                  <div className="detail-item">
                    <span className="label">Assigned Doctor:</span>
                    <span className="value">{emergency.assignedDoctor.name}</span>
                  </div>
                )}
                
                {emergency.requestType === 'Blood' && emergency.bloodRequest && (
                  <div className="blood-request-details">
                    <h4>Blood Request Details</h4>
                    <div className="detail-item">
                      <span className="label">Blood Type:</span>
                      <span className="value">{emergency.bloodRequest.bloodType}</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Quantity:</span>
                      <span className="value">{emergency.bloodRequest.quantity} units</span>
                    </div>
                  </div>
                )}
                
                {emergency.requestType === 'Equipment' && emergency.equipmentRequest && (
                  <div className="equipment-request-details">
                    <h4>Equipment Request Details</h4>
                    <ul>
                      {emergency.equipmentRequest.map((item, index) => (
                        <li key={index}>{item.name} - {item.quantity} units</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="status-timeline">
                <h4>Status Timeline</h4>
                <ul className="timeline">
                  <li className="active">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h5>Request Received</h5>
                      <p>{new Date(emergency.createdAt).toLocaleString()}</p>
                    </div>
                  </li>
                  
                  {emergency.status !== 'Pending' && (
                    <li className="active">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h5>Request Processed</h5>
                        <p>{new Date(emergency.updatedAt).toLocaleString()}</p>
                      </div>
                    </li>
                  )}
                  
                  {emergency.status === 'Assigned' && (
                    <li className="active">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h5>Doctor Assigned</h5>
                        <p>{new Date(emergency.updatedAt).toLocaleString()}</p>
                      </div>
                    </li>
                  )}
                  
                  {emergency.status === 'In Progress' && (
                    <li className="active">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h5>Help On The Way</h5>
                        <p>{new Date(emergency.updatedAt).toLocaleString()}</p>
                      </div>
                    </li>
                  )}
                  
                  {emergency.status === 'Completed' && (
                    <li className="active">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h5>Emergency Resolved</h5>
                        <p>{new Date(emergency.updatedAt).toLocaleString()}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="emergency-contact">
                <h4>24/7 Emergency Hotline</h4>
                <p className="hotline">+1-800-EMERGENCY</p>
                <p>For immediate assistance, please call our emergency hotline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyStatus;