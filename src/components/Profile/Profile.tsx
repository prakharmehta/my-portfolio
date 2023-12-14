import styles from './Profile.module.css'

function Profile() {
  return (
    <div className={"profile " + styles.flex_1}>
      <div className={styles.profile__image}>
        <img src="https://avatars.githubusercontent.com/u/42310526?v=4" alt="" />
      </div>
    </div>
  )
}

export default Profile