import TicketForm from "@/app/(components)/TicketForm";
const getTicketById = async (id) => {
  try {
    const res = await fetch(
      `https://jiramandi.netlify.app//api/Tickets/${id}`,
      {
        cache: "no-store",
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updateTicketData}></TicketForm>;
};

export default TicketPage;
