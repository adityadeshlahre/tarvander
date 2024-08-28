export default function Footer() {
  return (
    <>
      <div className="bg-cyan-700">
        <div className="flex flex-row">
          <div className="basis-1/2 text-4xl text-slate-300 m-6 font-serif">
            travander
          </div>
          <div className="flex flex-row basis-1/2 gap-20 space-x-12 p-4">
            <div>
              <div className="text-2xl text-slate-300">Comapny</div>
              <ul>
                <li>Home</li>
                <li>Community</li>
                <li>About Us</li>
                <li>Login</li>
              </ul>
            </div>
            <div>
              <div className="text-2xl text-slate-300">Support</div>
              <ul>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cancellation Policy</li>
              </ul>
            </div>
            <div>
              <div className="text-2xl text-slate-300">Contact</div>
              <ul>
                <li>+91 9834xxxxxx</li>
                <li>hellp@travander.com</li>
                <li>Fb In X YT</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-white mt-2 mb-2" />
        <div className="flex justify-center items-center">
          2021 (c) — Mochilero Travel Ventures Pvt. Ltd. All Rights Reserved
        </div>
      </div>
    </>
  );
}
