import React, { useEffect, useState } from 'react';


function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://didactic-zebra-5rj9qj5vpwr24j75-8000.app.github.dev/api/activities/')
      .then(res => {
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        return res.json();
      })
      .then(data => setActivities(data.results || data || []))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-primary">Activities</h2>
          {error && (
            <div className="alert alert-danger">Error: {error}</div>
          )}
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, idx) => (
                  <tr key={activity.id || activity._id || idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{activity.name || activity.activity_type}</td>
                    <td>
                      <button className="btn btn-outline-primary btn-sm" type="button">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;
