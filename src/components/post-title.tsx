export default function PostTitle({ children }) {
  return (
    <h1 className="text-4xl md:text-6xl font-semibold capsize  md:leading-none mb-6 text-left">
      {children}
    </h1>
  );
}
