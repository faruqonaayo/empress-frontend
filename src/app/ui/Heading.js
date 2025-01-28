import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

function Heading({ level, children, className }) {
  if (level === 1) {
    return (
      <h1
        className={` ${josefinSans.className} text-4xl font-bold text-black mb-6 ${className}`}
      >
        {children}
      </h1>
    );
  } else if (level === 2) {
    return (
      <h2
        className={` ${josefinSans.className} text-3xl font-bold text-black mb-6 ${className}`}
      >
        {children}
      </h2>
    );
  } else if (level === 3) {
    return (
      <h3
        className={` ${josefinSans.className} text-2xl font-bold text-black mb-6 ${className}`}
      >
        {children}
      </h3>
    );
  } else if (level === 4) {
    return (
      <h4
        className={` ${josefinSans.className} text-xl font-bold text-black mb-6 ${className}`}
      >
        {children}
      </h4>
    );
  } else if (level === 5) {
    return (
      <h5
        className={` ${josefinSans.className} text-lg font-bold text-black mb-6 ${className}`}
      >
        {children}
      </h5>
    );
  } else {
    return (
      <h6
        className={` ${josefinSans.className} text-base font-bold text-black mb-6 ${className}`}
      >
        {children}
      </h6>
    );
  }
}

export default Heading;
