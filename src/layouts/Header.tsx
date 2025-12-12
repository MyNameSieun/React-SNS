// src/layouts/Header.tsx
import { Link } from "react-router";
import { SunIcon } from "lucide-react";

import logo from "../assets/logo.png";
import defaultAvatar from "../assets/default-avatar.jpg";

const Header = () => {
  return (
    <header className="h-15 border-b">
      <section className="m-auto flex w-full max-w-[700px] items-center justify-between px-4 py-2">
        <article>
          <Link to="/" className="flex items-center gap-2">
            <figure className="h-8 w-8">
              <img
                src={logo}
                alt="InterQ logo"
                className="h-full w-full object-cover"
              />
            </figure>
            <span className="text-lg font-bold">SNS</span>
          </Link>
        </article>

        <article className="flex gap-2">
          <div className="flex items-center">
            <button className="hover:bg-muted cursor-pointer rounded-full p-2">
              <SunIcon />
            </button>
          </div>
          <figure className="h-8 w-8 overflow-hidden rounded-full">
            <img
              src={defaultAvatar}
              alt="profile avatar"
              className="h-full w-full object-cover"
            />
          </figure>
        </article>
      </section>
    </header>
  );
};

export default Header;
