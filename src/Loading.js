import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <Oval
      height={80}
      width={80}
      color="#a5b9c0"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#a5b9c0"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}

export default Loading;
