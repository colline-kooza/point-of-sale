
import { getProfileByUserId } from "@/actions/profile";
import { ProfileForm } from "@/components/Profile";
import { Separator } from "@/components/ui/separator"
import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
interface User {
    id?: string;
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  }
  
  interface Session {
    user?: User;
  }
  
  export default async function SettingsProfilePage() {
    const session: Session | null = await getServerSession(authOptions);
    // console.log(session);
    let singleProfile;

    const id = session?.user?.id;
    if (id) { 
        singleProfile = await getProfileByUserId(id);
        console.log(singleProfile);
      }
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is your profile settings.
        </p>
      </div>
      <Separator />
      {id && <ProfileForm id={id} singleProfile={singleProfile} />}
    </div>
  )
}
