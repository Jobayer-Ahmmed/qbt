import { getLocalstorageData } from "../../localstorage/localstorage";

const MyTickets = () => {
  const getTicket = getLocalstorageData();
  console.log(getTicket);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold underline">MyTickets</h1>
      {getTicket?.length ? (
        <>
          <h3 className="text-center text-xl font-bold my-10">You have buyed {getTicket.length} tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {getTicket?.map((ticket, id) => (
            <div key={id} className=" rounded-lg shadow-2xl p-5">
              <p>Ticket no: {id + 1}</p>
              <p>Ticket owner: {ticket.name}</p>
              <p>Ticket owner&apos;s email: {ticket.email}</p>
              <p>Time to open theater: {ticket.time}</p>
            </div>
          ))}
            </div>
        </>
      ) : (
        <div>
          <h3>You don&apos;t buy any ticket yet</h3>
        </div>
      )}
    </div>
  );
};

export default MyTickets;
