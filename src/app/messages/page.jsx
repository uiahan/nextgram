import Chat from "@/component/Chat";

const Messages = () => {
  return (
    <div className="px-6 xl:pt-10 pt-6">
      <div className="xl:flex xl:space-x-5">
        <div className="xl:w-96 flex xl:pr-4 xl:border-r border-gray-300 flex-col h-[85vh]">
          <div>
            <h3 className="text-lg font-semibold">Messages</h3>
          </div>
          <div>
            <label className="input mt-2 w-full">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
          <div className="overflow-y-auto mt-4">
            <Chat />
          </div>
        </div>

        <div className="w-full hidden xl:flex xl:flex-col">
          <div className="flex space-x-3 border-b pb-5 border-gray-300">
            <img src="/profile.png" alt="" className="rounded-full w-14" />
            <div className="flex flex-col justify-center">
              <h1>Name</h1>
              <small className="text-gray-600">Username</small>
            </div>
          </div>
          <div className="mt-5 overflow-y-auto h-[75vh]">
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>

            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
