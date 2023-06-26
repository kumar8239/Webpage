import React,{useState}from 'react'

export default function CandidateSearch() {
    const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here and update the 'candidates' state
  };
  return (
    <div>
      <h2>Candidate Search</h2>
      <form onSubmit={handleSearch}>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
         <br/>
        <label>Job Role:</label>
        <input type="text" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
         <br/>
        <button type="submit">Search</button>
      </form>

      <div>
        {/* Render the fetched candidates here */}
        {candidates.map((candidate) => (
          <div key={candidate.id}>
            <img src={candidate.profilePicture} alt="Profile" />
            <h3>{candidate.name}</h3>
            <p>{candidate.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
