import AvatarImg from "../assets/default-user.jpg";

const Avatar = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={AvatarImg} alt="Avatar" className="h-8" />
      <span>Mobin</span>
    </div>
  );
};

export default Avatar;
