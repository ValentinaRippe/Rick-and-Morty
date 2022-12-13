import React from "react";

export function Pagination({ page, setPage }) {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <button
        className="btn btn-primary"
        onClick={() => setPage(page === 1 ? page : page - 1)}
      >
        Page {page === 1 ? page : page - 1} 
      </button>
      <h3>Page {page}</h3>
      <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
        Page {page + 1}
      </button>
    </div>
  );
}
