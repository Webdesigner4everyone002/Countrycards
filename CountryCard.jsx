// src/components/CountryCard.jsx
import React from 'react';
import './CountryCard.css'; // Optional: For custom styling

const CountryCard = ({ name, academicReputation, costOfEducation, livingExpenses }) => {
  return (
    <div className="country-card">
      <h2 className="country-name">{name}</h2>
      <div className="info-section">
        <h3>Academic Reputation</h3>
        <p><strong>QS World Ranking:</strong> {academicReputation.university_rankings.QS_World_Ranking}</p>
        <p><strong>Times Higher Education:</strong> {academicReputation.university_rankings.Times_Higher_Education}</p>
        <p><strong>Accreditation:</strong> {academicReputation.accreditation}</p>
      </div>
      <div className="info-section">
        <h3>Cost of Education</h3>
        <p><strong>Tuition Fees:</strong> {costOfEducation.tuition_fees}</p>
      </div>
      <div className="info-section">
        <h3>Living Expenses</h3>
        <p><strong>Cost of Living:</strong> {livingExpenses.cost_of_living}</p>
      </div>
    </div>
  );
};

export default CountryCard;
