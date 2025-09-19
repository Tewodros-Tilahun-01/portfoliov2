interface ProfileCardProps {
  name: string;
  title: string;
  avatarUrl?: string;
}

function ProfileCard({ name, title, avatarUrl }: ProfileCardProps) {
  return (
    <div className=" lg:sticky lg:top-12 max-h-min">
      <div className="rounded-3xl rounded-tr-none bg-neutral-900 ring-1 ring-neutral-800/80  w-full overflow-hidden  max-h-min">
        <div className="p-7">
          <div className="rounded-2xl overflow-hidden bg-neutral-800 h-72 grid place-items-center">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-neutral-500">Avatar</div>
            )}
          </div>

          <div className="mt-8 text-center">
            <div className="text-xs tracking-[0.2em] text-neutral-400">
              DATA ARCHITECT
            </div>
            <h3 className="mt-3 text-2xl font-semibold">{name}</h3>

            <div className="mt-5 flex justify-center gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <button
                  key={i}
                  className="size-10 grid place-items-center rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700"
                >
                  <span className="text-lg">in</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-neutral-800">
          <a
            className="p-5 text-center hover:bg-neutral-800/60 transition-colors"
            href="#"
          >
            Download CV
          </a>
          <a
            className="p-5 text-center hover:bg-neutral-800/60 transition-colors"
            href="#"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
