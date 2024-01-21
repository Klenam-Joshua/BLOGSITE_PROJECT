import { RWebShare } from "react-web-share";
import { IoShareSocialOutline } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
export default function WebShare({ postTitle, postUrl }) {
  console.log(postTitle, postUrl);
  return (
    <div>
      <RWebShare
        data={{
          text: postTitle,
          url: postUrl,
          title: "Flamingos",
        }}
      >
        <IoShareSocialOutline />
      </RWebShare>
    </div>
  );
}
