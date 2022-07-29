export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold capsize  md:leading-none mb-12 text-left">
      {children}
    </h1>
  );
}
