import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 p-4 lg:p-8 lg:pb-4 w-full border-t-[1px] border-t-[#dddddd] text-white">
      <div className="flex flex-col lg:flex-row items-center gap-5 justify-between w-full">
        <div className="flex flex-col justify-start w-full lg:w-fit ">
          <h1 className="text-2xl font-bold ">Bijoy Kar</h1>
          <div className="mt-2">
            <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
              Developer
            </span>{" "}
            | {` `}
            <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
              Student
            </span>{" "}
            | {` `}
            <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
              Leaner
            </span>{" "}
            | {` `}
            <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
              Tect Enthusiast
            </span>
          </div>
          <p className="">Bijoy Kar © Copyright 2023</p>
        </div>
        <div className="flex gap-4 lg:gap-6 font-semibold justify-between w-full lg:w-fit">
          <div className="flex flex-col gap-3">
            <a to="/about">About</a>
            <a to="/projects">Projects</a>
            <a to="/contact">Contact</a>
          </div>
          <div className="flex flex-col gap-3">
            <a to="/blog">Blog</a>
            <a to="/resume">Resume</a>
            <a to="/faq">FAQ</a>
          </div>
          <div className="flex flex-col gap-3">
            <a to="/resources">Resources</a>
            <a to="/github">GitHub</a>
            <a to="/copyright">Copyright</a>
          </div>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex gap-4 justify-center lg:justify-end w-full ">
        <a className=" " href="https://github.com/iamBijoyKar">
          <BsGithub className="text-2xl inline-block mr-2" />
          GitHub
        </a>
        <a href="https://www.linkaedin.com/in/iambijoykar/">
          <BsLinkedin className="text-2xl inline-block mr-2" />
          LinkaedIn
        </a>
        <a href="https://twitter.com/iamBijoyKar">
          <BsTwitter className="text-2xl inline-block  mr-2" />
          Twitter
        </a>
      </div>
    </footer>
  );
}
