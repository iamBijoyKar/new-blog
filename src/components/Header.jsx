import React, { useState } from "react";

import {
  Typography,
  Collapse,
  Button,
  IconButton,
  Card,
  CardBody,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { BsMenuButtonWideFill } from "react-icons/bs";

export default function Header() {
  const [open, setOpen] = useState(false);
  console.log("open", open);
  return (
    <header className="flex justify-between items-center py-2 relative">
      <a href="/">
        <Typography variant="h3" className="text-white">
          BIJOY KAR{" "}
        </Typography>
      </a>
      <nav className="hidden md:block">
        <ul className="flex items-center">
          <li className="mx-2">
            <a href="/">
              <Typography variant="h6" className="text-white">
                Home
              </Typography>
            </a>
          </li>
          <li className="mx-2">
            <a href="/blogs">
              <Typography variant="h6" className="text-white">
                Blogs
              </Typography>
            </a>
          </li>
          <li className="mx-2">
            <a href="/authors">
              <Typography variant="h6" className="text-white">
                Authors
              </Typography>
            </a>
          </li>
          <li className="mx-2">
            <a href="/contact">
              <Typography variant="h6" className="text-white">
                Contact
              </Typography>
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:hidden w-fit ">
        <Menu>
          <MenuHandler>
            <IconButton variant="text">
              <BsMenuButtonWideFill
                className="text-white text-3xl"
                onClick={() => setOpen(!open)}
              />
            </IconButton>
          </MenuHandler>
          <MenuList className="bg-[#504099]">
            <MenuItem className="">
              <a href="/">
                <Typography variant="h6" className="text-white">
                  Home
                </Typography>
              </a>
            </MenuItem>
            <MenuItem className="">
              <a href="/blogs">
                <Typography variant="h6" className="text-white">
                  Blogs
                </Typography>
              </a>
            </MenuItem>
            <MenuItem className="">
              <a href="/authors">
                <Typography variant="h6" className="text-white">
                  Authors
                </Typography>
              </a>
            </MenuItem>
            <MenuItem className="">
              <a href="/contact">
                <Typography variant="h6" className="text-white">
                  Contact
                </Typography>
              </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
}
