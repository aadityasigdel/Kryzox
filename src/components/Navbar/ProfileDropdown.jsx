import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/shadcn-ui/navigation-menu";
import LogoutBtn from "./ui/LogoutBtn";
import { useDispatch } from "react-redux";
import {logout} from "../../store/slices/auth.slice";
export default function ProfileDropdown({ userData }) {
  const dispatch=useDispatch();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* Plain text trigger */}
          <NavigationMenuTrigger
            className="bg-transparent hover:bg-transparent active:bg-transparent 
                       p-0 h-auto font-semibold text-purple-300 shadow-none outline-none"
          >
            {userData?.name || "Ram"}
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-[#241B3A] border border-purple-500/20 rounded-2xl shadow-lg p-4 w-[220px]">
            <ul className="flex flex-col gap-3">
              <li>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="/admin"
                    className="block px-3 py-2 rounded-lg text-purple-200 
                               hover:text-white hover:bg-[#1B1230] 
                               transition-all"
                  >
                    admin
                  </NavLink>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <NavLink
                    to="/profile/edit"
                    className="block px-3 py-2 rounded-lg text-purple-200 
               hover:text-purple-200 hover:bg-[#1B1230] transition-all"
                  >
                    edit profile
                  </NavLink>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <LogoutBtn func={()=>dispatch(logout())}>Logout</LogoutBtn>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
