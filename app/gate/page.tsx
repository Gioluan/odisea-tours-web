import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SITE_PASSWORD = process.env.SITE_PASSWORD || "AITOR";

async function checkPassword(formData: FormData) {
  "use server";
  const password = formData.get("password") as string;
  if (password === SITE_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("site-auth", SITE_PASSWORD, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
    const next = (formData.get("next") as string) || "/";
    redirect(next);
  }
  redirect("/gate?error=1");
}

export default async function GatePage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const params = await searchParams;
  const next = params.next || "/";
  const error = params.error === "1";

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center px-6">
      <div className="max-w-sm w-full text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/svg/black.svg"
          alt="Odisea Tours"
          className="h-12 mx-auto mb-12"
        />
        <p className="font-mono-editorial text-[0.6rem] tracking-[0.28em] uppercase text-ink-muted mb-8">
          Preview access required
        </p>
        <form action={checkPassword}>
          <input type="hidden" name="next" value={next} />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            autoFocus
            className="w-full bg-transparent border-b border-ink/25 py-3 text-lg text-ink text-center focus:border-ink focus:outline-none placeholder:text-ink-muted/50 font-mono-editorial tracking-widest"
          />
          {error && (
            <p className="text-red-600 text-sm mt-3 font-mono-editorial">
              Incorrect password
            </p>
          )}
          <button
            type="submit"
            className="btn-editorial mt-8 w-full justify-center"
          >
            Enter
          </button>
        </form>
        <p className="mt-10 font-mono-editorial text-[0.55rem] tracking-[0.22em] uppercase text-ink-muted/40">
          Odisea Tours, Est. 2005
        </p>
      </div>
    </div>
  );
}
