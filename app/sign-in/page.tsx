import { SignIn } from "@stackframe/stack";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <SignIn
          fullPage
          automaticRedirect={true}
          extraInfo={
            <div className="mt-2">
              <Link className="border-b-2 border-b-gray-300" href="/">
                Back to home
              </Link>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default SignInPage;
