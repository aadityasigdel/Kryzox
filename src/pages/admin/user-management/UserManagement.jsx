import React from 'react'
import HeadingSection from '../ui/shared/HeadingSection';
const UserManagement = () => {
  return (
    <div  className="h-[1024] w-[1148px] bg-[#000] pt-[65px] px-[72px]">
      <HeadingSection heading={"User Management"} subheading={"Manage your gaming community members"} btn1Content={"Add New User"} component={"user-management"} />
    </div>
  )
}

export default UserManagement;
