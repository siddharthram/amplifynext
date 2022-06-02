import "../configureAmplify";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="p-6 border-b border-gray-300">
        <Link href="/">
          <span className="mr-6">Home</span>
        </Link>
        <Link href="/create-post">
          <span className="mr-6">Create Post</span>
        </Link>
        <Link href="/profile">
          <span className="mr-6">Profile</span>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
