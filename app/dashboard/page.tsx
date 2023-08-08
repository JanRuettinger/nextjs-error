import { redirect } from "next/navigation";

// import { authOptions } from "@/lib/auth";
// import { db } from "@/lib/db";
// import { getCurrentUser } from "@/lib/supabase-browser";
import { DashboardHeader } from "@/components/header";
// import { PostCreateButton } from "@/components/post-create-button";
// import { PostItem } from "@/components/post-item";
import { DashboardShell } from "@/components/shell";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const metadata = {
  title: "Dashboard",
};

async function getData(token: string) {
  const res = await fetch("http://localhost:4000/test", {
    headers: { Authorization: `Bearer ${token}` },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
}

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  //   await getData(session.access_token);

  //   const posts = await db.post.findMany({
  //     where: {
  //       authorId: user.id,
  //     },
  //     select: {
  //       id: true,
  //       title: true,
  //       published: true,
  //       createdAt: true,
  //     },
  //     orderBy: {
  //       updatedAt: "desc",
  //     },
  //   });

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        {/* <PostCreateButton /> */}
      </DashboardHeader>
      <div>Hello World</div>
    </DashboardShell>
  );
}
