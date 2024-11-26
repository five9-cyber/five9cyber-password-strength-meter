import { PasswordMeter } from "./components/PasswordMeter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow items-center justify-center w-4/5 sm:w-1/2 m-auto">
        <div className="text-white">
          <PasswordMeter />
          <div className="mt-10 w-4/5">
            <p>
              This password strength meter is designed to provide a visual
              representation of password strength to help users understand the
              difference between weak and strong passwords and passphrases. It
              is not intended for every day use. Keep in mind that no password
              is truly safe and all passwords can eventually be cracked. Strong
              password hygiene is a matter of making that exercise as difficult
              as possible for attackers.
            </p>
            <br />
            <p>
              This tool runs locally in your browser. No password data is
              transmitted.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
