import { React } from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from "react-icons/fa";
export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li>
          <span>
            <FaInbox></FaInbox>
          </span>
          Inbox
        </li>
        <li>
          <span>
            <FaRegCalendar></FaRegCalendar>
          </span>
          Today
        </li>
        <li>
          <span>
            <FaRegCalendarAlt></FaRegCalendarAlt>
          </span>
          Next 7 days
        </li>
      </ul>
      <div className="sidebar__middle">
        <span>
          <FaChevronDown></FaChevronDown>
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects"> Projects will be here</ul>
      {/* Add project component here */}
    </div>
  );
};
