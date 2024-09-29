import InfoBlock from "./InfoBlock";
import TimeBlock from "./TimeBlock";

function UserInterface() {
  return (
    <div className="UserInterface">
      <TimeBlock />
      <InfoBlock />
    </div>
  );
}

export default UserInterface;