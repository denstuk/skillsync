import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="bg-sky-900 text-white px-6 py-4">
        <h1 className="text-2xl font-bold">SkillSync</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8">
        {children}
      </main>
    </>
  );
};

export default Layout;
