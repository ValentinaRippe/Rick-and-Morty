import { useEffect, useState } from "react";
import { Character } from "./Character";
import { Pagination } from "./Pagination";
export function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await res.json();
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container p-3">
        <Pagination page={page} setPage={setPage}/>
      {loading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}
      <Pagination page={page} setPage={setPage}/>
    </div>
  );
}
