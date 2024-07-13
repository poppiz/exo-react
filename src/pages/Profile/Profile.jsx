import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUser(json);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="text-center">
      <h2 className="my-4 git-title">Github user</h2>
      <h3 className="git-title2">John Doe</h3>

      <div>
        <img src={user.avatar_url} alt={user.login} className="my-4" />
        <p>{user.bio}</p>
        <p>Abonnés : {user.followers}</p>
        <p>Abonnements : {user.following}</p>
        <p>Créer le : {user.created_at}</p>
        <p>Modifié le : {user.updated_at}</p>
        <p>
          URL repositories :{" "}
          <a
            href={user.repos_url}
            className="text-primary text-decoration-none"
          >
            {user.repos_url}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
