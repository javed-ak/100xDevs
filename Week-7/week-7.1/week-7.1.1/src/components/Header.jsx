import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate()
    return <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", border:"1px solid grey", padding:"5px"}}>
      <div style={{cursor:"pointer"}} onClick={() => navigate("/")}>Home</div>
      <div style={{cursor:"pointer"}} onClick={() => navigate("/mynetwork")}>My Network</div>
      <div style={{cursor:"pointer"}} onClick={() => navigate("/jobs")} >Jobs</div>
      <div style={{cursor:"pointer"}} onClick={() => navigate("/messaging")} >Messaging</div>
      <div style={{cursor:"pointer"}} onClick={() => navigate("/notification")}>Notification</div>
      <div style={{cursor:"pointer"}} onClick={() => navigate("/myAccount")}>Me</div>
    </div>
  }