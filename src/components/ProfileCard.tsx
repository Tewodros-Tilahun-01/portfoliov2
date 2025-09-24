import { FaGithub, FaLinkedin, FaTelegram, FaCode } from "react-icons/fa";

interface ProfileCardProps {
  name: string;
  title: string;
  avatarUrl?: string;
}

function ProfileCard({ name, title, avatarUrl }: ProfileCardProps) {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/tewodros-tilahun-01",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/tewodros--tilahun/",
    },
    {
      name: "Telegram",
      icon: <FaTelegram />,
      url: "https://t.me/teraa3",
    },
    {
      name: "LeetCode",
      icon: <FaCode />,
      url: "https://leetcode.com/u/teddylet/",
    },
  ];

  return (
    <div className="lg:sticky lg:top-12 max-h-min">
      <div className="sm:rounded-3xl rounded-none bg-secondary ring-1 ring-primary w-full overflow-hidden max-h-min">
        <div className="p-7">
          <div className="sm:rounded-2xl overflow-hidden bg-tertiary h-72 grid place-items-center">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-tertiary">Avatar</div>
            )}
          </div>

          <div className="mt-8 text-center">
            <div className="text-xs tracking-[0.2em] text-tertiary">
              {title}
            </div>
            <h3 className="mt-3 text-2xl font-semibold">{name}</h3>

            <div className="mt-5 flex justify-center gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-10 grid place-items-center rounded-full bg-tertiary text-secondary hover:text-primary hover-bg"
                  title={link.name}
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-primary">
          <a
            className="p-5 text-center hover-bg transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1xSeDYIhc_8G59-gOrb_DsHl5zxDJf8HL/view?usp=sharing"
          >
            Download CV
          </a>
          <a
            className="p-5 text-center hover-bg transition-colors"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
