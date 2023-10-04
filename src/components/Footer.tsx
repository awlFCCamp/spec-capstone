import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-slate-900 bg-lime-600 flex items-center justify-between">
      <Link className="font-bold text-xl" href="/">
        Coffee and Pastries
      </Link>
      <p></p>
      <p>ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
