import styles from "./Profile.module.css";

function Profile() {
  const {
    profile,
    flex_1,
    profile__image,
    profile__body,
    profile__fullname,
    profile__username,
    profile__tagline,
    profile__current_org,
    profile__current_location,
    profile__names,
    py_3,
    mb_3,
    profile__resume
  } = styles;

  return (
    <div className={profile + " " + flex_1}>
      <div className={profile__image}>
        <img
          src="https://avatars.githubusercontent.com/u/42310526?v=4"
          alt=""
        />
      </div>
      <div className={profile__body}>
        <div className={profile__names + " " + py_3}>
          <div className={profile__fullname}>
            <span>Prakhar Mehta</span>
          </div>
          <div className={profile__username}>
            <span>prakharmehta</span>
          </div>
        </div>
        <div className={profile__tagline + " " + mb_3}>
          <span>
            SE @ExxonMobil | Frontend Enthusiast | Developer | Dreamer |
            Innovator | Problem Solver | Gamer | Friend
          </span>
        </div>
        <div className={profile__resume + " " + mb_3}>
          <button>
            Download Resume
          </button>
        </div>
        <div className={profile__current_org}>
          <span className="material-symbols-outlined">business</span>
          <span>ExxonMobil</span>
        </div>
        <div className={profile__current_location}>
          <span className="material-symbols-outlined">location_on</span>
          <span>Bangalore</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
