import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://didactic-zebra-5rj9qj5vpwr24j75-8000.app.github.dev/api/leaderboard')
      .then(res => res.json())
      .then(data => setLeaderboard(data.results || []));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-success">Leaderboard</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User</th>
                  <th scope="col">Score</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, idx) => (
                  <tr key={entry.id}>
                    <th scope="row">{idx + 1}</th>
                    <td>{entry.user}</td>
                    <td>{entry.score}</td>
                    <td>
                      <button className="btn btn-outline-success btn-sm" type="button">
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

export default Leaderboard;
