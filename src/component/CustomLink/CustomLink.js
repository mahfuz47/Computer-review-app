import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css"

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="link">
      <Link
        style={{
          fontSize:"30px",
          color: match ? "Black" : "Gray",
          textDecoration: match ? "underline" : "underline",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLink;
