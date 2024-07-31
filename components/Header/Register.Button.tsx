import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface RouterProp {
  router: AppRouterInstance
}

export default function RegisterButton({router}: RouterProp) {
  return <button className="intense-button" onClick={() => router.push("/register")}>Sign up</button>;
}
