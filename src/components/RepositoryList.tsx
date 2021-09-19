import { useEffect, useState } from "react";
import '../styles/repositories.scss';
import { RepositoryItem } from "./RepositoryItem";

interface Repository {
  name: string;
  description: string;
  html_url: string;
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/jcruz375/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de reposritórios</h1>

      <ul>
        {repositories.map((repository, index) => {
          return <RepositoryItem key={index} repository={repository} />
        })}
      </ul>
    </section>
  )
}