import useOnline from "./utils/useOnline";
 
const App = () => {
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1> 🔴 Offline, Please check your Internet connection!</h1>;
  }

  return (
    <div>
      <h2>use Online Checker</h2>

      <h3>Your are Online now ✅</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
        necessitatibus inventore, facilis magnam corrupti molestiae officiis
        tempore numquam minima adipisci voluptatibus, porro tempora veritatis,
        accusamus ipsam quo ducimus cum saepe.
      </p>
    </div>
  );
};

export default App;
