import { ContentTabs } from "../../../features";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center w-full px-10 mb-24 py-2">
      <ContentTabs />
      <h1 className="text-2xl font-bold">Home</h1>
    </div>
  );
};

export default HomePage;