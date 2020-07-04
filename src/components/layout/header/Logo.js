import classNames from "classnames";
import React from "react";
import { Link } from "gatsby";

const Logo = () => (
  <Link
    to="/"
    className={classNames(
      "text-primary-900 focusable inline-block p-2 font-serif text-xl xl:text-2xl"
    )}
    aria-label="Home"
  >
    <div className="flex items-center h-8 space-x-2">
      <img
        className={classNames("w-8 h-8 border-2 border-current rounded-full")}
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGJ-pyDnGfUiA/profile-displayphoto-shrink_400_400/0?e=1599091200&v=beta&t=RrHVkQIXD1kOg1Vsz6fQTDWZUf86Kop86JryDtT_P2c"
        alt="An image of me, Brian Lee!"
      />
      <span>Brian Lee</span>
    </div>
  </Link>
);

export default Logo;
