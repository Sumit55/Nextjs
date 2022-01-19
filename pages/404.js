import { useEffect } from "react";
import { useRouter } from "next/router";

const pageNotFound = () => {
  const router = useRouter();

  // Redirect page not found page to home page.
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
   
  });
  return (
  <>
    <h1> Sorry! Page Not Found</h1>
  </>
  );
};

export default pageNotFound;