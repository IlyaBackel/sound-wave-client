const Track = ({title, artist, duration, picture}) => {
  return (
    <div className="flex flex-row gap-5 items-center justify-center h-full w-full border-2 border-black">
      <img src={picture} alt={title} className="rounded-3xl h-30" />
      <div className="flex flex-col gap-2">
        <h1 className="w-70 items-start">{title}</h1>
        <p>{artist}</p>
      </div>
      <p>{duration}</p>
    </div>
  );
};

export default Track;