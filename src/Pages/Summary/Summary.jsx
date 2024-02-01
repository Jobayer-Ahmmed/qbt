import { useLocation, useNavigate } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { summary } = location.state || {};

  const updateSummary = summary.replace(/<\/?(p|b)>/g, '');

  return (
    <div>
      <div>{updateSummary}</div>
      <button onClick={()=>navigate("/ticket")}  className="mt-5 btn btn-secondary">Book Ticket</button><br />
      <button onClick={()=>navigate("/")} className="btn btn-ghost mt-10">Go Home</button>
    </div>
  );
};

export default Summary;
