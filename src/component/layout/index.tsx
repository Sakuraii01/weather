export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="p-4 max-w-4xl mx-auto">{children}</div>
    </div>
  );
};
