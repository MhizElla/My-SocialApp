import "./closefriend.css"

export default function Closefriend({user}) {
    return (
        <li className="sidebarFriend">
            <img src={user.profilepicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li> 
    )
}