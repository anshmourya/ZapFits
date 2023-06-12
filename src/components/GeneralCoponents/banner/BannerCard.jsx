const BannerCard = ({ list }) => {
  return (
    <>
      <img
        src={list.src}
        alt={list.name}
        className="max-w-[260px] max-h-[260] bg-center aspect-square rounded-lg"
      />
    </>
  );
};

export default BannerCard;
