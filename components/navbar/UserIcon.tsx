import { currentUser } from "@clerk/nextjs/server"
import Image from "next/image"
import { LuUser } from "react-icons/lu"

async function UserIcon() {
  const user = await currentUser()

  const profileImage = user?.imageUrl

  if (profileImage) {
    return (
      <Image
        width={24}
        height={24}
        src={profileImage}
        alt={user.firstName || "logged in user"}
        className="w-6 h-6 rounded-full object-cover"
      />
    )
  }

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />
}

export default UserIcon
