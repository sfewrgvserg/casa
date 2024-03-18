export default function Banner({ hashtag, title, img }) {
  return (
    <>
      <div
        className={`text-white bg-center bg-cover bg-no-repeat min-h-[300px]`}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex flex-col justify-center items-center min-h-[300px]">
          <p className="text-3xl font-semibold">#{hashtag}</p>
          <p className="text-sm">{title}</p>
        </div>
      </div>
    </>
  );
}
