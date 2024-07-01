// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Posts",
		path: "/Posts/Post",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "All Posys",
				path: "/Posts/Post",
				icon: <IoIcons.IoIosPaper />,
			},
		],
	},
	{
		title: "Services",
		path: "/Weathers/Weather",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Current Weather",
				path: "/Weathers/Weather",
				icon: <IoIcons.IoIosPaper />,
			},
			{
				title: "Current Location",
				path: "/Locations/Location",
				icon: <IoIcons.IoIosPaper />,
			}
		],
	},
];
