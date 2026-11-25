import { ContentTabs } from "../../../features";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center h-full w-full px-10 py-2 bg-primary-bg overflow-hidden">
      <ContentTabs />
      <h1 className="text-2xl font-bold">Home</h1>
    </div>
  );
};

export default HomePage;