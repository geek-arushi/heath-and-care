import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmergencyService.css';
import { emergencyService } from '../../api/apiService';

const EmergencyService = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    requestType: 'Doctor',
    patient: {
      name: '',
      contactNumber: '',
      location: '',
      age: '',
      gender: 'Male'
    },
    description: '',
    priority: 'Medium',
    bloodRequest: {
      bloodType: 'A+',
      quantity: 1
    },
    equipmentRequest: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await emergencyService.createEmergencyRequest(formData);
      setSuccess(true);
      setLoading(false);
      
      // Redirect to emergency status page
      setTimeout(() => {
        navigate(`/emergency-status/${response.data._id}`);
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit emergency request');
      setLoading(false);
    }
  };

  return (
    <section className="emergency-service-section section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title">
              <span>Emergency Services</span>
              <h2>Request Emergency Assistance</h2>
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {success ? (
              <div className="alert alert-success">
                Emergency request submitted successfully! Redirecting to status page...
              </div>
            ) : (
              <div className="emergency-form">
                {error && <div className="alert alert-danger">{error}</div>}
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Emergency Type</label>
                    <select 
                      name="requestType" 
                      value={formData.requestType} 
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="Doctor">Doctor Assistance</option>
                      <option value="Blood">Blood Request</option>
                      <option value="Equipment">Medical Equipment</option>
                      <option value="Multiple">Multiple Services</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Patient Name</label>
                    <input 
                      type="text" 
                      name="patient.name" 
                      value={formData.patient.name} 
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input 
                      type="text" 
                      name="patient.contactNumber" 
                      value={formData.patient.contactNumber} 
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Location</label>
                    <input 
                      type="text" 
                      name="patient.location" 
                      value={formData.patient.location} 
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  
                  {formData.requestType === 'Blood' && (
                    <div className="blood-request-section">
                      <div className="form-group">
                        <label>Blood Type</label>
                        <select 
                          name="bloodRequest.bloodType" 
                          value={formData.bloodRequest.bloodType} 
                          onChange={handleChange}
                          className="form-control"
                        >
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label>Quantity (Units)</label>
                        <input 
                          type="number" 
                          name="bloodRequest.quantity" 
                          value={formData.bloodRequest.quantity} 
                          onChange={handleChange}
                          className="form-control"
                          min="1"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="form-group">
                    <label>Emergency Description</label>
                    <textarea 
                      name="description" 
                      value={formData.description} 
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-group">
                    <label>Priority</label>
                    <select 
                      name="priority" 
                      value={formData.priority} 
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>
                  
                  <div className="form-group text-center">
                    <button 
                      type="submit" 
                      className="theme-btn" 
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Request Emergency Assistance'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyService;