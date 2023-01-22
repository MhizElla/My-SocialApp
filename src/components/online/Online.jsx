import "./online.css"


export default function Online({user}) {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={user.profilepicture} alt="" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
        </li>
    )
}