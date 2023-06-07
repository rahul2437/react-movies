"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

const Menu = () => {
  return (
    <Navbar fluid className="bg-slate-300 mb-4">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          React Movies
        </span>
      </Navbar.Brand>
      <div className="flex">
        {/* <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown> */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/genres">Genres</Navbar.Link>
        <Navbar.Link href="/movies/filter">Filter Movies</Navbar.Link>
        <Navbar.Link href="/actors">Actors</Navbar.Link>
        <Navbar.Link href="/movietheatres">Movie Theatre</Navbar.Link>
        <Navbar.Link href="/movies/create">Create Movie</Navbar.Link>
        {/* <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
