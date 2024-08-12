import React from "react";

function User({ user }) {
  const {
    avatar_url,
    following,
    followers,
    name,
    login,
    public_repos,
    created_at,
  } = user;

  const createddate = new Date(created_at);
  return (
    <>
      <div className="bg-zinc-200 w-1/2 h-full mx-auto mt-10 rounded-xl border shadow-lg shadow-slate-500">
        <div className="w-40 h-full mx-auto mt-10 pt-6 mb-1">
          <img
            src={avatar_url}
            alt="avatar"
            className="w-32 h-32 mx-auto rounded-full"
          />
        </div>
        <div className="font-blod text-3xl text-center">
          <a href={`https://github.com/${login}`}>{name || login}</a>
        </div>
        <div className="mt-2">
          <p>
            User joined on{" "}
            {`${createddate.getDate()} ${createddate.toLocaleString("en-us", {
              month: "short",
            })} ${createddate.getFullYear()}`}
          </p>
        </div>

        <div className="flex justify-evenly my-8 pb-5">
          <div>
            <p className="font-bold p-2">Public Repos</p>
            <p>{public_repos}</p>
          </div>

          <div>
            <p className="font-bold p-2">Following</p>
            <p>{following}</p>
          </div>

          <div>
            <p className="font-bold p-2">Followers</p>
            <p>{followers}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
